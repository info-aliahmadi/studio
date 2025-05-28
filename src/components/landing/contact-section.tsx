
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
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
import { useFormState } from "react-dom";
import { submitContactForm, type ContactFormState } from "@/app/actions";
import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const initialState: ContactFormState = {
  message: "",
  success: false,
};

export default function ContactSection() {
  const [state, formAction] = useFormState(submitContactForm, initialState);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  useEffect(() => {
    if (state.message) {
      toast({
        title: state.success ? "Success!" : "Error",
        description: state.message,
        variant: state.success ? "default" : "destructive",
      });
      if (state.success) {
        form.reset();
      }
    }
  }, [state, toast, form]);

  return (
    <section style={{ marginTop: '-6px', paddingTop: '0' }} id="contact" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-7xl sm:text-6xl p-4 font-bold tracking-tight text-primary
           hover:text-primary/90 transition-colors duration-300 pink-header">
            Get in Touch
          </h2>
          <p className="mt-4 max-w-xl mx-auto text-lg text-muted-foreground">
            Have questions or ready to start? Reach out to our team.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <Card className="shadow-xl hover:shadow-primary/20 hover:-translate-y-1 transform transition-all duration-300 ease-in-out">
            <CardHeader>
              <CardTitle className="text-2xl">Send us a Message</CardTitle>
              <CardDescription>We typically respond within 24 hours.</CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...form}>
                <form action={formAction} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="John Doe" {...field} />
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
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input type="email" placeholder="you@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Your Message</FormLabel>
                        <FormControl>
                          <Textarea placeholder="How can we help you?" rows={5} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full" disabled={form.formState.isSubmitting || state.success}>
                    {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
          
          <div className="space-y-8">
            <Card className="shadow-lg hover:shadow-accent/20 hover:-translate-y-1 transform transition-all duration-300 ease-in-out">
              <CardHeader>
                <CardTitle className="text-xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-6 w-6 text-primary" />
                  <a href="mailto:support@swiftscan.com" className="text-muted-foreground hover:text-primary">support@swiftscan.com</a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-6 w-6 text-primary" />
                  <a href="tel:+1234567890" className="text-muted-foreground hover:text-primary">+1 (234) 567-890</a>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6 text-primary" />
                  <p className="text-muted-foreground">123 Scan Street, Tech City, TX 75001</p>
                </div>
              </CardContent>
            </Card>
             <Card className="shadow-lg hover:shadow-accent/20 hover:-translate-y-1 transform transition-all duration-300 ease-in-out">
              <CardHeader>
                <CardTitle className="text-xl">Business Hours</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-muted-foreground">Monday - Friday: 9:00 AM - 6:00 PM</p>
                <p className="text-muted-foreground">Saturday: 10:00 AM - 4:00 PM</p>
                <p className="text-muted-foreground">Sunday: Closed</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
