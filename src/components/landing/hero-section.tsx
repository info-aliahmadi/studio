
"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Wave from 'react-wavify'
import { useTranslations } from "next-intl";

export default function HeroSection() {
  const t = useTranslations("HeroSection");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <section id="hero" className="relative py-20 md:py-32 min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-20">
          <video
            autoPlay
            loop
            muted
            playsInline 
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/70 to-background -z-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h1
            className={cn(
              "text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6 text-foreground",
              "transform transition-all ease-in-out duration-700 delay-200",
              isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            )}
          >
            <span
              className="block"
            >{t("line1")}</span>
            <span
              style={{
                backgroundImage: "linear-gradient(to right, hsla(197, 93%, 29%, 1), hsla(167, 98%, 39%, 1))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
               className="block text-primary hover:opacity-90 transition-opacity duration-300">{t("line2")}</span>
          </h1>
          <p
            className={cn(
              "max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground mb-10",
              "transform transition-all ease-in-out duration-700 delay-400",
              isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            )}
          >
            {t("description")}
          </p>
          <div
            className={cn(
              "flex flex-col sm:flex-row justify-center gap-4",
              "transform transition-all ease-in-out duration-700 delay-600",
              isMounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
            )}
          >
            <Button asChild size="lg" className="shadow-lg hover:shadow-primary/50 hover:brightness-110">
              <Link href="#contact">{t("getStarted")}</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="shadow-lg hover:shadow-accent/50 hover:brightness-110">
              <Link href="#features">{t("learnMore")}</Link>
            </Button>
          </div>
        </div>
      </section>
     
    </>
  );
}
