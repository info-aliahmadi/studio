
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { WifiOff, CloudLightning, DatabaseBackup } from "lucide-react";
import Wave from "react-wavify";

const pulsingAnimation = `
@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.4;
  }
}

.animate-pulse-icon {
  animation: pulse 2s ease-in-out infinite;
}
`;

// Inject the animation keyframes into the document head
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.innerHTML = pulsingAnimation;
  document.head.appendChild(style);
}
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
    <>
      <section id="offline"  style={{ marginTop: '-6px',paddingBottom : '0' }} className="py-16 sm:py-24 bg-background">
        <div style={{ marginBottom : '70px' }} className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              style={{
                backgroundImage: "linear-gradient(to right, hsla(197, 93%, 29%, 1), hsla(167, 98%, 39%, 1))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }} className="text-7xl sm:text-6xl p-4 font-bold tracking-tight text-primary hover:text-primary/90 transition-colors duration-300">
              Work Seamlessly, Online or Offline
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              SwiftScan's PWA capabilities ensure your business keeps running, no matter your internet status.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offlineFeatures.map((feature, index) => (
              <Card key={index} className="text-center shadow-lg hover:shadow-primary/20 hover:-translate-y-1 transform transition-all duration-300 ease-in-out">
                <CardHeader>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4 animate-pulse-icon">
                    <feature.icon className="h-8 w-8 text-primary transition-transform duration-300 group-hover:scale-110" />
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
        <Wave
        paused={false}
        fill="#26d9d933"
        options={{
          height: 20,
          amplitude: 90,
          speed: 0.1,
          points: 3
        }}
      />
      </section>
    
    </>
  );
}
