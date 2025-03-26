import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertNewsletterSchema } from "@shared/schema";
import { ZodError } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      // Validate the request body
      const contactData = insertContactSchema.parse(req.body);
      
      // Store the contact submission
      const submission = await storage.createContactSubmission(contactData);
      
      // Return success response
      return res.status(201).json({
        message: "Contact form submitted successfully",
        submission: {
          id: submission.id,
          name: submission.name,
          createdAt: submission.createdAt
        }
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          message: "Validation error", 
          errors: validationError.message 
        });
      }
      
      console.error("Contact form submission error:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });
  
  app.post("/api/newsletter", async (req: Request, res: Response) => {
    try {
      // Validate the request body
      const newsletterData = insertNewsletterSchema.parse(req.body);
      
      // Check if email is already subscribed
      const isSubscribed = await storage.isEmailSubscribed(newsletterData.email);
      
      if (isSubscribed) {
        return res.status(200).json({ 
          message: "Email is already subscribed to the newsletter"
        });
      }
      
      // Subscribe to newsletter
      const subscriber = await storage.subscribeToNewsletter(newsletterData);
      
      // Return success response
      return res.status(201).json({
        message: "Subscribed to newsletter successfully",
        subscriber: {
          id: subscriber.id,
          email: subscriber.email,
          createdAt: subscriber.createdAt
        }
      });
    } catch (error) {
      if (error instanceof ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          message: "Validation error", 
          errors: validationError.message 
        });
      }
      
      console.error("Newsletter subscription error:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });
  
  // Get all contact submissions (usually protected by auth)
  app.get("/api/contact", async (req: Request, res: Response) => {
    try {
      const submissions = await storage.getContactSubmissions();
      return res.status(200).json(submissions);
    } catch (error) {
      console.error("Error fetching contact submissions:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });
  
  // Get all newsletter subscribers (usually protected by auth)
  app.get("/api/newsletter", async (req: Request, res: Response) => {
    try {
      const subscribers = await storage.getNewsletterSubscribers();
      return res.status(200).json(subscribers);
    } catch (error) {
      console.error("Error fetching newsletter subscribers:", error);
      return res.status(500).json({ message: "Internal server error" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
