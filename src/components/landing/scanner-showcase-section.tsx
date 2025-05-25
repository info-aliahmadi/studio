
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlayCircle } from "lucide-react";

export default function ScannerShowcaseSection() {
  return (
    <section id="features" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Seamless Scanning, Simplified
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Our state-of-the-art scanner integration makes checkouts faster and more accurate than ever before.
          </p>
        </div>

        <Card className="overflow-hidden shadow-xl hover:shadow-primary/30 transition-shadow duration-300">
          <CardHeader className="p-0">
            <div className="relative aspect-video w-full group">
              <Image
                src="https://placehold.co/1280x720.png"
                alt="Scanner system in action"
                layout="fill"
                objectFit="cover"
                data-ai-hint="scanner technology"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <PlayCircle className="h-20 w-20 text-white/80 hover:text-white group-hover:scale-110 transform transition-all duration-300 ease-in-out cursor-pointer" />
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-6">
            <CardTitle className="text-2xl mb-2">Experience the Speed</CardTitle>
            <p className="text-muted-foreground">
              Watch how SwiftScan effortlessly handles high-volume sales with its intuitive scanner feature. Reduce queues and improve customer satisfaction.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
