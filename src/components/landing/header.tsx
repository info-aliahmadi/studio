
"use client";

import Link from "next/link";
import { ScanLine, Menu, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation"; // Use next/navigation for App Router
import { locales } from "@/i18n";


export default function Header() {
  const t = useTranslations("Header");
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    { label: t("features"), href: "#features" },
    { label: t("reports"), href: "#reports" },
    { label: t("offline"), href: "#offline" },
    { label: t("customerAccounts"), href: "#customer-accounts" },
    { label: t("testimonials"), href: "#testimonials" },
    { label: t("contact"), href: "#contact" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLocaleChange = (newLocale: string) => {
    // Replace the locale part of the pathname
    const newPathname = pathname.replace(/^\/[a-z]{2}(\/|$)/, `/${newLocale}$1`);
    router.push(newPathname);
  };
  
  // Extract current locale from pathname or default
  const currentLocale = locales.find(loc => pathname.startsWith(`/${loc}`)) || locales[0];


  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/30 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2 text-2xl font-bold text-primary">
            <ScanLine className="h-8 w-8" />
            <span>{t("appName")}</span>
          </Link>

          <nav className="hidden md:flex space-x-4 items-center">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-1">
                  <Globe className="h-4 w-4" />
                  {currentLocale.toUpperCase()}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {locales.map((locale) => (
                  <DropdownMenuItem key={locale} onClick={() => handleLocaleChange(locale)}>
                    {locale.toUpperCase()}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          <div className="md:hidden flex items-center gap-2">
             <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Globe className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                {locales.map((locale) => (
                  <DropdownMenuItem key={locale} onClick={() => handleLocaleChange(locale)}>
                    {locale.toUpperCase()}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[250px] bg-background">
                <div className="flex flex-col space-y-6 p-6">
                  <Link href="/" className="flex items-center space-x-2 text-2xl font-bold text-primary mb-4">
                     <ScanLine className="h-8 w-8" />
                    <span>{t("appName")}</span>
                  </Link>
                  {navItems.map((item) => (
                     <SheetClose asChild key={item.label}>
                        <Link
                        href={item.href}
                        className="text-lg text-foreground hover:text-primary transition-colors duration-200"
                        >
                        {item.label}
                        </Link>
                    </SheetClose>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
