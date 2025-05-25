
import {unstable_setRequestLocale} from 'next-intl/server';
import Header from "@/components/landing/header";
import HeroSection from "@/components/landing/hero-section";
import ScannerShowcaseSection from "@/components/landing/scanner-showcase-section";
import ReportGallerySection from "@/components/landing/report-gallery-section";
import OfflineFeatureSection from "@/components/landing/offline-feature-section";
import DebtCreditManagementSection from "@/components/landing/debt-credit-management-section";
import TestimonialSection from "@/components/landing/testimonial-section";
import ContactSection from "@/components/landing/contact-section";
import Footer from "@/components/landing/footer";

type Props = {
  params: {locale: string};
};

export default function HomePage(props: Props) { // Changed to accept full props
  const locale = props.params.locale; // Access locale from props.params
  unstable_setRequestLocale(locale);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <ScannerShowcaseSection />
        <ReportGallerySection />
        <OfflineFeatureSection />
        <DebtCreditManagementSection />
        <TestimonialSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
