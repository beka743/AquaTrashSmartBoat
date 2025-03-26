import { Link } from "wouter";
import { Twitter, Linkedin, Instagram, ArrowRight, Droplet } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";

export function Footer() {
  const [footerEmail, setFooterEmail] = useState("");
  const { toast } = useToast();
  
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };
  
  const newsletterMutation = useMutation({
    mutationFn: (email: string) => {
      return apiRequest("POST", "/api/newsletter", { email });
    },
    onSuccess: () => {
      toast({
        title: "Subscribed!",
        description: "You've been subscribed to our newsletter.",
      });
      setFooterEmail("");
    },
    onError: (error) => {
      toast({
        title: "An error occurred",
        description: error.message || "Could not subscribe. Please try again later.",
        variant: "destructive",
      });
    },
  });
  
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (footerEmail) {
      newsletterMutation.mutate(footerEmail);
    }
  };

  return (
    <footer className="bg-[#0B2E4D] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
            <div className="flex items-center mb-4">
              <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center mr-2">
                <Droplet className="h-5 w-5 text-primary" />
              </div>
              <span className="font-heading font-semibold text-xl">AquaTrash SmartBoat</span>
            </div>
            <p className="mb-4">
              Developing autonomous solutions for cleaner waterways and healthier ecosystems.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="text-white hover:text-[#38E54D] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-white hover:text-[#38E54D] transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
             
            </div>
          </div>
          
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8">
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection("home")}
                  className="hover:text-[#38E54D] transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("technology")}
                  className="hover:text-[#38E54D] transition-colors"
                >
                  Technology
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("impact")}
                  className="hover:text-[#38E54D] transition-colors"
                >
                  Environmental Impact
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("gallery")}
                  className="hover:text-[#38E54D] transition-colors"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("team")}
                  className="hover:text-[#38E54D] transition-colors"
                >
                  Team
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection("contact")}
                  className="hover:text-[#38E54D] transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} AquaTrash SmartBoat Project. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
