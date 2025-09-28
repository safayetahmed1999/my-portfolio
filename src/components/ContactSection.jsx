import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from "emailjs-com";
import SocialMedia from "./SocialMedia";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Use EmailJS to send the form
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        setIsSubmitting(false);
        e.target.reset(); // Clear form inputs
      })
      .catch((error) => {
        console.error(error.text);
        toast({
          title: "Failed to send message",
          description: "Please try again later.",
          variant: "destructive",
        });
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-24 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info Centered Card */}
          <div className="p-8 rounded-lg w-full mx-auto text-center border border-muted">
            <h3 className="text-2xl font-bold  mb-6">Contact Information</h3>

            <div className="space-y-5">
              {/* Email */}
              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors">
                <div className="p-2 rounded-full bg-primary/10">
                  <Mail className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />
                </div>
                <a
                  href="mailto:shantossnic@gmail.com"
                  className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors truncate"
                >
                  shantossnic@gmail.com
                </a>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors">
                <div className="p-2 rounded-full bg-primary/10">
                  <Phone className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />
                </div>
                <a
                  href="tel:+8801774403474"
                  className="text-sm sm:text-base text-muted-foreground hover:text-primary transition-colors truncate"
                >
                  +880 1774-403474
                </a>
              </div>

              {/* Location */}
              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/20 hover:bg-muted/30 transition-colors">
                <div className="p-2 rounded-full bg-primary/10">
                  <MapPin className="h-4 w-4 sm:h-6 sm:w-6 text-primary" />
                </div>
                <p className="text-sm sm:text-base text-muted-foreground truncate">
                  Norunbazar, Dhaka
                </p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="pt-6 mt-4 border-t border-muted">
              <h4 className="font-semibold mb-3 text-muted-foreground">
                Connect With Me
              </h4>
              <div className="flex justify-center space-x-4">
                <SocialMedia />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-card p-8 rounded-lg shadow-md"
          >
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <div className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="from_name" // IMPORTANT: matches EmailJS template variable
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Md. Hasan..."
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="from_email" // IMPORTANT: matches EmailJS template variable
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="yours@gmail.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message" // IMPORTANT: matches EmailJS template variable
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
