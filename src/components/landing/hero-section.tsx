
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="hero" className="relative py-20 md:py-32 min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-10 -z-10">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Abstract background"
          layout="fill"
          objectFit="cover"
          data-ai-hint="abstract technology"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background to-background -z-10"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
          <span className="block">Modernize Your Checkout with</span>
          <span className="block text-primary">SwiftScan POS</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground mb-10">
          Experience lightning-fast transactions, insightful reporting, and seamless offline functionality. SwiftScan is the all-in-one cashier system designed for efficiency and growth.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" className="shadow-lg hover:shadow-primary/50 transition-shadow">
            <Link href="#contact">Get Started Today</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="shadow-lg hover:shadow-accent/50 transition-shadow">
            <Link href="#features">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
