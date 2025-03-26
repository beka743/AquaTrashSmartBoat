import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, MapPin, Send, Twitter as TwitterIcon, Linkedin } from "lucide-react";
import { apiRequest } from "@/lib/queryClient";
import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  subject: z.string().min(1, { message: "Please select a subject." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export function Contact() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const { toast } = useToast();
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });
  
  const contactMutation = useMutation({
    mutationFn: (data: ContactFormValues) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message Sent!",
        description: "Thank you for your message. We'll get back to you soon.",
      });
      form.reset();
    },
    onError: (error) => {
      toast({
        title: "An error occurred",
        description: error.message || "Could not send your message. Please try again later.",
        variant: "destructive",
      });
    },
  });
  
  const newsletterMutation = useMutation({
    mutationFn: (email: string) => {
      return apiRequest("POST", "/api/newsletter", { email });
    },
    onSuccess: () => {
      toast({
        title: "Subscribed!",
        description: "You've been subscribed to our newsletter.",
      });
      setNewsletterEmail("");
    },
    onError: (error) => {
      toast({
        title: "An error occurred",
        description: error.message || "Could not subscribe. Please try again later.",
        variant: "destructive",
      });
    },
  });
  
  const onSubmit = (data: ContactFormValues) => {
    contactMutation.mutate(data);
  };
  
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      newsletterMutation.mutate(newsletterEmail);
    }
  };

  return (
    <section id="contact" className="py-16 bg-[#F5F9FA]">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-3xl mb-4">Contact Us</h2>
          <p className="max-w-3xl mx-auto text-lg">
            Have questions or interested in collaborating? Get in touch with our team.
          </p>
        </motion.div>
        
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-lg shadow-md h-full"
            >
              <h3 className="font-heading font-semibold text-2xl mb-6">Send a Message</h3>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your name" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Your email address" 
                            type="email" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Subject</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a subject" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="collaboration">Collaboration Opportunity</SelectItem>
                            <SelectItem value="question">Technical Question</SelectItem>
                            <SelectItem value="support">Support Request</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Your message" 
                            rows={5} 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary-light"
                    disabled={contactMutation.isPending}
                  >
                    {contactMutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </motion.div>
          </div>
          
          <div className="w-full lg:w-1/2 px-4">
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-lg shadow-md mb-8"
            >
              <h3 className="font-heading font-semibold text-2xl mb-6">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-heading font-medium">Email</h4>
                    <p><a href="mailto:info@aquatrashsmartboat.org" className="text-primary hover:underline">info@aquatrashsmartboat.org</a></p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-heading font-medium">Phone</h4>
                    <p><a href="tel:+1234567890" className="text-primary hover:underline">+1 (234) 567-890</a></p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-heading font-medium">Location</h4>
                    <p>Environmental Engineering Department<br />
                    University Research Center<br />
                    123 Innovation Drive<br />
                    Coastal City, CC 12345</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-md"
            >
              <h3 className="font-heading font-semibold text-2xl mb-6">Connect With Us</h3>
              
              <div className="flex space-x-4 mb-6">
                <a href="#" className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary-light transition-colors">
                  <TwitterIcon className="h-5 w-5" />
                </a>
                <a href="#" className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary-light transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary-light transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="#" className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary-light transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                  </svg>
                </a>
              </div>
              
              <div>
                <h4 className="font-heading font-medium mb-2">Subscribe to our newsletter</h4>
                <form onSubmit={handleNewsletterSubmit} className="flex">
                  <Input
                    type="email"
                    placeholder="Your email address"
                    className="rounded-r-none"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    required
                  />
                  <Button 
                    type="submit" 
                    className="rounded-l-none bg-primary hover:bg-primary-light"
                    disabled={newsletterMutation.isPending}
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
