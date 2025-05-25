
import Link from "next/link";
import { ScanLine, Facebook, Twitter, Linkedin, ChevronRight } from "lucide-react";
import { getTranslations } from "next-intl/server"; // Changed from useTranslations

export default async function Footer() { // Made component async
  const t = await getTranslations("Footer"); // Changed to await getTranslations
  const tHeader = await getTranslations("Header"); // Changed to await getTranslations
  const currentYear = new Date().getFullYear();

  const navItems = [
    { label: tHeader("features"), href: "#features" },
    { label: tHeader("reports"), href: "#reports" },
    { label: tHeader("offline"), href: "#offline" },
    { label: tHeader("customerAccounts"), href: "#customer-accounts" },
    { label: tHeader("testimonials"), href: "#testimonials" },
    { label: tHeader("contact"), href: "#contact" },
  ];

  return (
    <footer className="bg-secondary/30 border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 text-xl font-bold text-primary mb-4">
              <ScanLine className="h-7 w-7" />
              <span>{tHeader("appName")}</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              {t("tagline")}
            </p>
          </div>
          <div>
            <h5 className="font-semibold text-foreground mb-3">{t("quickLinks")}</h5>
            <ul className="space-y-2">
              {navItems.map(item => (
                <li key={item.label}>
                  <Link href={item.href} className="text-sm text-muted-foreground hover:text-primary flex items-center group">
                    <ChevronRight className="h-4 w-4 me-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-foreground mb-3">{t("legal")}</h5>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary flex items-center group">
                  <ChevronRight className="h-4 w-4 me-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  {t("privacyPolicy")}
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-sm text-muted-foreground hover:text-primary flex items-center group">
                  <ChevronRight className="h-4 w-4 me-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  {t("termsOfService")}
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border/50 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            {t("copyright", {year: currentYear})}
          </p>
          <div className="flex space-x-4 mt-4 sm:mt-0">
            <Link href="#" className="text-muted-foreground hover:text-primary"><Facebook className="h-5 w-5" /></Link>
            <Link href="#" className="text-muted-foreground hover:text-primary"><Twitter className="h-5 w-5" /></Link>
            <Link href="#" className="text-muted-foreground hover:text-primary"><Linkedin className="h-5 w-5" /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
