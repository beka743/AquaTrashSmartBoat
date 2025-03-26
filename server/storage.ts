import { 
  users, 
  contactSubmissions, 
  newsletterSubscribers, 
  type User, 
  type InsertUser,
  type ContactSubmission,
  type InsertContact,
  type NewsletterSubscriber,
  type InsertNewsletter
} from "@shared/schema";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contact methods
  createContactSubmission(contact: InsertContact): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
  
  // Newsletter methods
  subscribeToNewsletter(newsletter: InsertNewsletter): Promise<NewsletterSubscriber>;
  getNewsletterSubscribers(): Promise<NewsletterSubscriber[]>;
  isEmailSubscribed(email: string): Promise<boolean>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contacts: Map<number, ContactSubmission>;
  private newsletters: Map<number, NewsletterSubscriber>;
  private userIdCounter: number;
  private contactIdCounter: number;
  private newsletterIdCounter: number;

  constructor() {
    this.users = new Map();
    this.contacts = new Map();
    this.newsletters = new Map();
    this.userIdCounter = 1;
    this.contactIdCounter = 1;
    this.newsletterIdCounter = 1;
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userIdCounter++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Contact methods
  async createContactSubmission(contact: InsertContact): Promise<ContactSubmission> {
    const id = this.contactIdCounter++;
    const now = new Date();
    const submission: ContactSubmission = { 
      ...contact, 
      id, 
      createdAt: now
    };
    this.contacts.set(id, submission);
    return submission;
  }
  
  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contacts.values());
  }
  
  // Newsletter methods
  async subscribeToNewsletter(newsletter: InsertNewsletter): Promise<NewsletterSubscriber> {
    // Check if email already exists
    const exists = await this.isEmailSubscribed(newsletter.email);
    if (exists) {
      // Find and return the existing subscriber
      const existingSubscriber = Array.from(this.newsletters.values()).find(
        (sub) => sub.email === newsletter.email
      );
      
      if (existingSubscriber) {
        return existingSubscriber;
      }
    }
    
    // If not exists or couldn't find existing, create new
    const id = this.newsletterIdCounter++;
    const now = new Date();
    const subscriber: NewsletterSubscriber = {
      ...newsletter,
      id,
      createdAt: now
    };
    this.newsletters.set(id, subscriber);
    return subscriber;
  }
  
  async getNewsletterSubscribers(): Promise<NewsletterSubscriber[]> {
    return Array.from(this.newsletters.values());
  }
  
  async isEmailSubscribed(email: string): Promise<boolean> {
    return Array.from(this.newsletters.values()).some(
      (subscriber) => subscriber.email === email
    );
  }
}

export const storage = new MemStorage();
