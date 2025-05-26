
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, PieChart, TrendingUp } from "lucide-react";
import Wave from "react-wavify";

const reports = [
  {
    title: "Sales Analytics",
    description: "Track your sales performance, identify trends, and make data-driven decisions.",
    icon: BarChart3,
    imageSrc: "https://placehold.co/600x400.png",
    aiHint: "sales chart",
  },
  {
    title: "Inventory Insights",
    description: "Optimize stock levels, reduce waste, and understand product movement.",
    icon: PieChart,
    imageSrc: "https://placehold.co/600x400.png",
    aiHint: "inventory report",
  },
  {
    title: "Customer Behavior",
    description: "Gain insights into customer preferences and purchasing patterns to tailor your offerings.",
    icon: TrendingUp,
    imageSrc: "https://placehold.co/600x400.png",
    aiHint: "customer data",
  },
];

export default function ReportGallerySection() {
  return (
    <>
      <section id="reports" style={{ marginTop: '-6px',paddingBottom : '0' }} className="py-16 sm:py-1 bg-secondary/20">
        <div style={{ marginBottom : '70px' }} className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1
              style={{
                backgroundImage: "linear-gradient(to right, hsla(197, 93%, 29%, 1), hsla(167, 98%, 39%, 1))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }} className="text-5xl sm:text-5xl p-4 font-bold tracking-tight text-primary hover:text-primary/90 transition-colors duration-300">
              Powerful Reports at Your Fingertips
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Unlock valuable insights with our comprehensive and easy-to-understand chart reports.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reports.map((report, index) => (
              <Card key={index} className="flex flex-col overflow-hidden shadow-lg hover:shadow-accent/30 hover:-translate-y-1 transform transition-all duration-300 ease-in-out">
                <CardHeader className="flex-row items-center gap-4 p-4">
                  <report.icon className="h-10 w-10 text-primary" />
                  <div>
                    <CardTitle className="text-xl">{report.title}</CardTitle>
                  </div>
                </CardHeader>
                <div className="relative aspect-video w-full">
                  <Image
                    src={report.imageSrc}
                    alt={report.title}
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint={report.aiHint}
                  />
                </div>
                <CardContent className="p-4 flex-grow">
                  <CardDescription>{report.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
        <Wave
        paused={false}
        fill="#e2f8ef"
        options={{
          height: 60,
          amplitude: 100,
          speed: 0.15,
          points: 2
        }}
      />
      </section>
   
      </>
  );
}
