
import Header from "@/components/landing/header";
import Footer from "@/components/landing/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import {unstable_setRequestLocale} from 'next-intl/server';

type Props = {
  params: {locale: string};
};

export default function TermsOfServicePage({params: {locale}}: Props) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("TermsOfServicePage");
  const currentDate = new Date().toLocaleDateString(locale === 'fa' ? 'fa-IR' : locale, { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-32">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl">{t("title")}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>{t("lastUpdated", {date: currentDate})}</p>

            <h2 className="text-xl font-semibold text-foreground pt-4">{t("agreementToTermsTitle")}</h2>
            <p>{t("agreementToTermsContent")}</p>

            <h2 className="text-xl font-semibold text-foreground pt-4">{t("changesToTermsOrServicesTitle")}</h2>
            <p>{t("changesToTermsOrServicesContent")}</p>

            <h2 className="text-xl font-semibold text-foreground pt-4">{t("whoMayUseTheServicesTitle")}</h2>
            <p>{t("whoMayUseTheServicesContent")}</p>
            
            <h2 className="text-xl font-semibold text-foreground pt-4">{t("privacyPolicyTitle")}</h2>
            <p>{t("privacyPolicyContent")}</p>

            <h2 className="text-xl font-semibold text-foreground pt-4">{t("contentAndContentRightsTitle")}</h2>
            <p>{t("contentAndContentRightsContent")}</p>
            
            <h2 className="text-xl font-semibold text-foreground pt-4">{t("generalProhibitionsTitle")}</h2>
            <p>{t("generalProhibitionsContent")}</p>
            
            <h2 className="text-xl font-semibold text-foreground pt-4">{t("terminationTitle")}</h2>
            <p>{t("terminationContent")}</p>
            
            <h2 className="text-xl font-semibold text-foreground pt-4">{t("disclaimersTitle")}</h2>
            <p>{t("disclaimersContent")}</p>

            <h2 className="text-xl font-semibold text-foreground pt-4">{t("limitationOfLiabilityTitle")}</h2>
            <p>{t("limitationOfLiabilityContent")}</p>
            
            <h2 className="text-xl font-semibold text-foreground pt-4">{t("contactInformationTitle")}</h2>
            <p>{t("contactInformationContent")}</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
