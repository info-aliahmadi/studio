
"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
// import Image from "next/image"; // Image component removed
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function HeroSection() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section id="hero" className="relative py-20 md:py-32 min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-20"> {/* Changed z-index to ensure video is behind gradient */}
        <video
          autoPlay
          loop
          muted
          playsInline // Important for iOS autoplay
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/70 to-background -z-10"></div> {/* Adjusted gradient opacity for better video visibility */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <h1
          className={cn(
            "text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 text-foreground", // Ensure text color contrasts with video
            "transform transition-all ease-in-out duration-700 delay-200",
            isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          )}
        >
          <span className="block">Modernize Your Checkout with</span>
          <span className="block text-primary hover:opacity-90 transition-opacity duration-300">SwiftScan POS</span>
        </h1>
        <p
          className={cn(
            "max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground mb-10", // Ensure text color contrasts
            "transform transition-all ease-in-out duration-700 delay-400",
            isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          )}
        >
          Experience lightning-fast transactions, insightful reporting, and seamless offline functionality. SwiftScan is the all-in-one cashier system designed for efficiency and growth.
        </p>
        <div
          className={cn(
            "flex flex-col sm:flex-row justify-center gap-4",
            "transform transition-all ease-in-out duration-700 delay-600",
            isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          )}
        >
          <Button asChild size="lg" className="shadow-lg hover:shadow-primary/50 hover:brightness-110">
            <Link href="#contact">Get Started Today</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="shadow-lg hover:shadow-accent/50 hover:brightness-110">
            <Link href="#features">Learn More</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
