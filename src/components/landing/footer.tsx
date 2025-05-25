
import Link from "next/link";
import { ScanLine, Facebook, Twitter, Linkedin, ChevronRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 text-xl font-bold text-primary mb-4">
              <ScanLine className="h-7 w-7" />
              <span>SwiftScan</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Revolutionizing point-of-sale with speed, efficiency, and powerful insights.
            </p>
          </div>
          <div>
            <h5 className="font-semibold text-foreground mb-3">Quick Links</h5>
            <ul className="space-y-2">
              <li>
                <Link href="#features" className="text-sm text-muted-foreground hover:text-primary flex items-center group">
                  <ChevronRight className="h-4 w-4 mr-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  Features
                </Link>
              </li>
              <li>
                <Link href="#reports" className="text-sm text-muted-foreground hover:text-primary flex items-center group">
                  <ChevronRight className="h-4 w-4 mr-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  Reports
                </Link>
              </li>
              <li>
                <Link href="#offline" className="text-sm text-muted-foreground hover:text-primary flex items-center group">
                  <ChevronRight className="h-4 w-4 mr-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  Offline Mode
                </Link>
              </li>
              <li>
                <Link href="#customer-accounts" className="text-sm text-muted-foreground hover:text-primary flex items-center group">
                  <ChevronRight className="h-4 w-4 mr-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  Customer Accounts
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-sm text-muted-foreground hover:text-primary flex items-center group">
                  <ChevronRight className="h-4 w-4 mr-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-foreground mb-3">Legal</h5>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary flex items-center group">
                  <ChevronRight className="h-4 w-4 mr-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms-of-service" className="text-sm text-muted-foreground hover:text-primary flex items-center group">
                  <ChevronRight className="h-4 w-4 mr-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-border/50 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} SwiftScan. All rights reserved.
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
