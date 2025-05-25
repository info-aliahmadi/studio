
import Header from "@/components/landing/header";
import Footer from "@/components/landing/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function TermsOfServicePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-24 pt-32">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl">Terms of Service</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 text-muted-foreground">
            <p>Last updated: {new Date().toLocaleDateString()}</p>

            <h2 className="text-xl font-semibold text-foreground pt-4">1. Agreement to Terms</h2>
            <p>By using our Services, you agree to be bound by these Terms. If you do not agree to these Terms, do not use the Services.</p>

            <h2 className="text-xl font-semibold text-foreground pt-4">2. Changes to Terms or Services</h2>
            <p>We may modify the Terms at any time, in our sole discretion. If we do so, we’ll let you know either by posting the modified Terms on the Site or through other communications. It’s important that you review the Terms whenever we modify them because if you continue to use the Services after we have posted modified Terms on the Site, you are indicating to us that you agree to be bound by the modified Terms.</p>

            <h2 className="text-xl font-semibold text-foreground pt-4">3. Who May Use the Services</h2>
            <p>You may use the Services only if you are 18 years or older and are not barred from using the Services under applicable law.</p>
            
            <h2 className="text-xl font-semibold text-foreground pt-4">4. Privacy Policy</h2>
            <p>Please refer to our Privacy Policy for information on how we collect, use and disclose information from our users.</p>

            <h2 className="text-xl font-semibold text-foreground pt-4">5. Content and Content Rights</h2>
            <p>For purposes of these Terms: (i) “Content” means text, graphics, images, music, software, audio, video, works of authorship of any kind, and information or other materials that are posted, generated, provided or otherwise made available through the Services; and (ii) “User Content” means any Content that Account holders (including you) provide to be made available through the Services. Content includes without limitation User Content.</p>
            
            <h2 className="text-xl font-semibold text-foreground pt-4">6. General Prohibitions</h2>
            <p>You agree not to do any of the following: Post, upload, publish, submit or transmit any User Content that: (i) infringes, misappropriates or violates a third party’s patent, copyright, trademark, trade secret, moral rights or other intellectual property rights, or rights of publicity or privacy; (ii) violates, or encourages any conduct that would violate, any applicable law or regulation or would give rise to civil liability...</p>
            
            <h2 className="text-xl font-semibold text-foreground pt-4">7. Termination</h2>
            <p>We may terminate your access to and use of the Services, at our sole discretion, at any time and without notice to you.</p>
            
            <h2 className="text-xl font-semibold text-foreground pt-4">8. Disclaimers</h2>
            <p>The Services and Content are provided “AS IS,” without warranty of any kind. Without limiting the foregoing, we explicitly disclaim any warranties of merchantability, fitness for a particular purpose, quiet enjoyment or non-infringement, and any warranties arising out of course of dealing or usage of trade.</p>

            <h2 className="text-xl font-semibold text-foreground pt-4">9. Limitation of Liability</h2>
            <p>Neither SwiftScan nor any other party involved in creating, producing, or delivering the services or content will be liable for any incidental, special, exemplary or consequential damages, including lost profits, loss of data or goodwill, service interruption, computer damage or system failure or the cost of substitute services arising out of or in connection with these terms or from the use of or inability to use the services or content.</p>
            
            <h2 className="text-xl font-semibold text-foreground pt-4">10. Contact Information</h2>
            <p>If you have any questions about these Terms, please contact us at legal@swiftscan.com.</p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
