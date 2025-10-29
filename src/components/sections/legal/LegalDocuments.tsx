"use client";

import { useRouter } from "next/navigation";

interface Props {
  params: any;
}

const termsOfUse = {
  content: `
    <p><strong>Effective Date:</strong> October 21, 2025</p>
    
    <h3>1. Introduction</h3>
    <p>Welcome to Stephania Support Services. These Terms and Conditions ("Terms") govern your access to and use of our website, products, and services. By using our website, you agree to comply with and be bound by these Terms.</p>
    <p>If you do not agree with these Terms, please discontinue use of our website and services.</p>
    
    <h3>2. Company Overview</h3>
    <p>Stephania Support Services is an engineering, construction, and procurement company offering a range of industrial and infrastructural solutions, including vessel management, midstream operations, and onshore/offshore services.</p>
    
    <h3>3. Use of Our Website</h3>
    <p>You agree to use our website only for lawful purposes. You must not:</p>
    <ul>
      <li>Violate any applicable laws or regulations.</li>
      <li>Engage in unauthorized access, hacking, or tampering with our systems.</li>
      <li>Use the website to transmit harmful, illegal, or defamatory content.</li>
      <li>Impersonate another person or misrepresent your affiliation with any entity.</li>
    </ul>
    <p>We reserve the right to restrict or terminate access for any user who violates these Terms.</p>
    
    <h3>4. Services and Availability</h3>
    <p>We strive to provide accurate information and consistent access to our services. However, we do not guarantee that our website or services will be uninterrupted, error-free, or always available.</p>
    <p>Stephania Support Services reserves the right to modify, suspend, or discontinue any portion of the website or services without prior notice.</p>
    
    <h3>5. Third-Party Links</h3>
    <p>Our website may contain links to external sites not operated by Stephania Support Services. We are not responsible for their content, policies, or practices. Accessing third-party websites is at your own risk.</p>
    
    <h3>6. Limitation of Liability</h3>
    <p>To the fullest extent permitted by law:</p>
    <ul>
      <li>Stephania Support Services shall not be liable for any indirect, incidental, consequential, or punitive damages resulting from your use of our website or services.</li>
      <li>We make no warranties regarding the accuracy, reliability, or completeness of website content.</li>
      <li>Your exclusive remedy for dissatisfaction with our website is to stop using it.</li>
    </ul>
    
    <h3>7. Indemnification</h3>
    <p>You agree to defend, indemnify, and hold harmless Stephania Support Services, its directors, employees, and affiliates from any claims, damages, or liabilities arising from your use of our website, violation of these Terms, or infringement of any rights.</p>
    
    <h3>8. Governing Law</h3>
    <p>These Terms shall be governed by and interpreted in accordance with the laws of the Federal Republic of Nigeria. Any disputes shall be subject to the exclusive jurisdiction of Nigerian courts.</p>
    
    <h3>9. Termination</h3>
    <p>Stephania Support Services may terminate or suspend access to the website at its discretion, without notice, for conduct that violates these Terms or is harmful to other users or the company.</p>
    
    <h3>10. Disclaimer</h3>
    <p>All materials on this website are provided for informational purposes only. Stephania Support Services does not warrant or guarantee that the information is accurate, complete, or up to date.</p>
    
    <h3>11. Changes to These Terms</h3>
    <p>We may update these Terms at any time. Continued use of our website following updates constitutes acceptance of the revised Terms.</p>
    
    <h3>12. Contact Information</h3>
    <p>For inquiries or assistance regarding these Terms, please contact:</p>
    <p><strong>Stephania Support Services</strong><br>
    Email: <a href="mailto:info@stephanialtd.com">info@stephanialtd.com</a><br>
    Address: 5900 Balcones Drive, STE 100 Austin, Texas 78731. USA</p>
  `,
};

const privacyPolicy = {
  content: `
    <p><strong>Effective Date:</strong> October 21, 2025<br>
    <strong>Last Updated:</strong> October 21, 2025</p>
    
    <h3>1. Introduction</h3>
    <p>Stephania Support Services ("we", "our", or "us") values your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard information that identifies or can be used to identify you ("Personal Data") when you visit our website, engage our services, or interact with us.</p>
    <p>By accessing or using our website, products, or services, you agree to this Privacy Policy.</p>
    
    <h3>2. Information We Collect</h3>
    <p>We may collect the following types of information:</p>
    
    <h6>a. Personal Information:</h6>
    <ul>
      <li>Name, company name, email address, and phone number.</li>
      <li>Professional or business information related to our services.</li>
    </ul>
    
    <h6>b. Technical Information:</h6>
    <ul>
      <li>IP address, browser type, device information, and operating system.</li>
      <li>Usage data such as pages visited and time spent on our website.</li>
    </ul>
    
    <h3>3. How We Use Your Information</h3>
    <p>Your information helps us:</p>
    <ul>
      <li>Provide, manage, and improve our services.</li>
      <li>Respond to inquiries, quotes, or service requests.</li>
      <li>Process transactions and manage business relationships.</li>
      <li>Comply with legal and regulatory obligations.</li>
    </ul>
    
    <h3>4. Legal Basis for Processing</h3>
    <p>Depending on your location, we may process your information based on:</p>
    <ul>
      <li>Your consent;</li>
      <li>Our contractual obligations to you;</li>
      <li>Compliance with legal requirements; or</li>
      <li>Our legitimate business interests.</li>
    </ul>
    
    <h3>5. Sharing and Disclosure</h3>
    <p>We do not sell or rent personal data. However, we may share your information with:</p>
    <ul>
      <li>Trusted service providers assisting in business operations.</li>
      <li>Legal or regulatory authorities when required by law.</li>
      <li>Business partners involved in legitimate collaborations.</li>
      <li>Successors in the event of a merger, acquisition, or restructuring.</li>
    </ul>
    
    <h3>6. Data Retention</h3>
    <p>We retain data for as long as necessary to provide our services, comply with legal obligations, and resolve disputes. When no longer needed, data is securely deleted or anonymized.</p>
    
    <h3>7. Data Security</h3>
    <p>We use reasonable administrative, technical, and physical safeguards to protect your information against unauthorized access, loss, or misuse. However, no online transmission or storage is completely secure.</p>
    
    <h3>8. Your Rights</h3>
    <p>Depending on applicable laws, you may have the right to:</p>
    <ul>
      <li>Access or correct your data;</li>
      <li>Request deletion of your data;</li>
      <li>Withdraw consent for certain uses;</li>
      <li>Object to processing; or</li>
      <li>File a complaint with a data protection authority.</li>
    </ul>
    <p>To exercise any rights or submit an inquiry, please contact us at <a href="mailto:info@stephanialtd.com">info@stephanialtd.com</a>.</p>
    
    <h3>9. International Data Transfers</h3>
    <p>Your data may be transferred and processed outside your home country. We ensure such transfers comply with applicable data protection standards.</p>
    
    <h3>10. Updates to This Policy</h3>
    <p>We may revise this Privacy Policy periodically. Updates will be reflected by the "Last Updated" date above.</p>
    
    <h3>11. Contact Us</h3>
    <p>For questions or concerns about this Privacy Policy, please contact:</p>
    <p><strong>Stephania Support Services</strong><br>
    Email: <a href="mailto:info@stephanialtd.com">info@stephanialtd.com</a><br>
    Address: 5900 Balcones Drive, STE 100 Austin, Texas 78731. USA</p>
  `,
};

export const LegalDocuments = ({ params }: Props) => {
  return (
    <section id={"privacy_policy"} className={""}>
      {params?.id === "terms-of-use" ? (
        <div className="">
          <div className="bg-black/20 backdrop-blur-sm border-b border-b-neutral-500/2 py-10 640:py-14 mb-16">
            <h5
              className={
                "text-[48px] text-gradient 768:text-[70px] text-center py-3"
              }
            >
              Terms and Conditions
            </h5>
          </div>

          <div className="app-container mx-auto px-4 768:px-8 mb-20 max-w-4xl">
            {termsOfUse?.content && (
              <div className="legal-content prose prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: termsOfUse.content }} />
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="">
          <div className="bg-black/20 backdrop-blur-sm border-b border-b-neutral-500/2 py-10 640:py-14  mb-16">
            <h5
              className={
                "text-[48px] text-gradient 768:text-[70px] text-center py-3 leading-[75px]"
              }
            >
              Privacy Policy
            </h5>
          </div>

          <div className="app-container mx-auto px-4 768:px-8 mb-20 max-w-4xl">
            {privacyPolicy?.content && (
              <div className="legal-content prose prose-lg max-w-none">
                <div
                  dangerouslySetInnerHTML={{ __html: privacyPolicy.content }}
                />
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
