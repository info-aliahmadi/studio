
import Header from "@/components/landing/header";
import Footer from "@/components/landing/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';

type Props = {
  params: {locale: string};
};

export default async function PrivacyPolicyPage(props: Props) { // Changed to accept full props
  const locale = props.params.locale; // Access locale from props.params
  unstable_setRequestLocale(locale);
  const t = await getTranslations("PrivacyPolicyPage");
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
            
            <h2 className="text-xl font-semibold text-foreground pt-4">{t("introductionTitle")}</h2>
            <p>{t("introductionContent")}</p>

            <h2 className="text-xl font-semibold text-foreground pt-4">{t("informationWeCollectTitle")}</h2>
            <p>{t("informationWeCollectContent1")}</p>
            <p>{t("informationWeCollectContent2")}</p>
            
            <h2 className="text-xl font-semibold text-foreground pt-4">{t("howWeUseYourInformationTitle")}</h2>
            <p>{t("howWeUseYourInformationContent")}</p>

            <h2 className="text-xl font-semibold text-foreground pt-4">{t("willYourInformationBeSharedTitle")}</h2>
            <p>{t("willYourInformationBeSharedContent")}</p>
            
            <h2 className="text-xl font-semibold text-foreground pt-4">{t("howLongDoWeKeepYourInformationTitle")}</h2>
            <p>{t("howLongDoWeKeepYourInformationContent")}</p>

            <h2 className="text-xl font-semibold text-foreground pt-4">{t("howDoWeKeepYourInformationSafeTitle")}</h2>
            <p>{t("howDoWeKeepYourInformationSafeContent")}</p>

            <h2 className="text-xl font-semibold text-foreground pt-4">{t("whatAreYourPrivacyRightsTitle")}</h2>
            <p>{t("whatAreYourPrivacyRightsContent")}</p>
            
            <h2 className="text-xl font-semibold text-foreground pt-4">{t("updatesToThisNoticeTitle")}</h2>
            <p>{t("updatesToThisNoticeContent")}</p>
            
            <h2 className="text-xl font-semibold text-foreground pt-4">{t("howCanYouContactUsTitle")}</h2>
            <p>{t("howCanYouContactUsContent1")}</p>
            <p className="whitespace-pre-line">{t("howCanYouContactUsContent2")}</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
