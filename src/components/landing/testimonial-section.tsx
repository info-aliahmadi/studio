
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "SwiftScan revolutionized our checkout process! It's fast, reliable, and the reports are incredibly insightful.",
    name: "Sarah L.",
    title: "Owner, The Cozy Corner Cafe",
    avatarSrc: "https://placehold.co/100x100.png",
    avatarFallback: "SL",
    rating: 5,
  },
  {
    quote: "The offline feature is a lifesaver. We never miss a sale, even during peak hours with spotty internet.",
    name: "John B.",
    title: "Manager, Tech Gadget Store",
    avatarSrc: "https://placehold.co/100x100.png",
    avatarFallback: "JB",
    rating: 5,
  },
  {
    quote: "Switching to SwiftScan was the best decision for our business. The support team is also fantastic!",
    name: "Maria G.",
    title: "Founder, Blossom Boutique",
    avatarSrc: "https://placehold.co/100x100.png",
    avatarFallback: "MG",
    rating: 4,
  },
];

export default function TestimonialSection() {
  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-primary hover:text-primary/90 transition-colors duration-300">
            Trusted by Businesses Like Yours
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Hear what our satisfied customers have to say about SwiftScan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col justify-between p-6 shadow-lg hover:shadow-accent/30 hover:-translate-y-1 transform transition-all duration-300 ease-in-out">
              <div>
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <CardContent className="p-0 mb-4">
                  <p className="text-foreground italic">&ldquo;{testimonial.quote}&rdquo;</p>
                </CardContent>
              </div>
              <div className="flex items-center mt-auto">
                <Avatar className="h-12 w-12 mr-4">
                  <AvatarImage src={testimonial.avatarSrc} alt={testimonial.name} data-ai-hint="person portrait" />
                  <AvatarFallback>{testimonial.avatarFallback}</AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-primary">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
