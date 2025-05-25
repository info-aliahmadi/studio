
import Header from "@/components/landing/header";
import HeroSection from "@/components/landing/hero-section";
import ScannerShowcaseSection from "@/components/landing/scanner-showcase-section";
import ReportGallerySection from "@/components/landing/report-gallery-section";
import OfflineFeatureSection from "@/components/landing/offline-feature-section";
import TestimonialSection from "@/components/landing/testimonial-section";
import ContactSection from "@/components/landing/contact-section";
import Footer from "@/components/landing/footer";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ScannerShowcaseSection />
        <ReportGallerySection />
        <OfflineFeatureSection />
        <TestimonialSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
