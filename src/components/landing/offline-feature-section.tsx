
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { WifiOff, CloudLightning, DatabaseBackup } from "lucide-react";

const offlineFeatures = [
  {
    title: "Uninterrupted Sales",
    description: "Continue processing sales even when your internet connection drops. No more lost revenue due to outages.",
    icon: WifiOff,
  },
  {
    title: "Automatic Sync",
    description: "Once your connection is restored, all offline transactions are automatically synced to the cloud.",
    icon: CloudLightning,
  },
  {
    title: "Local Data Storage",
    description: "Your essential data is securely stored locally, ensuring access and operation anytime, anywhere.",
    icon: DatabaseBackup,
  },
];

export default function OfflineFeatureSection() {
  return (
    <section id="offline" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Work Seamlessly, Online or Offline
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            SwiftScan's PWA capabilities ensure your business keeps running, no matter your internet status.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offlineFeatures.map((feature, index) => (
            <Card key={index} className="text-center shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
