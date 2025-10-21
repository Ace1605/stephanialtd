"use client";

import { useRouter } from "next/navigation";

interface Props {
  params: any;
}

const termsOfUse = {
  content: `
    <p><strong>Effective Date:</strong> October 21, 2025</p>
    
    <h3>1. Introduction</h3>
    <p>Welcome to Stephania Limited. These Terms and Conditions ("Terms") govern your access to and use of our website, products, and services. By using our website, you agree to comply with and be bound by these Terms.</p>
    <p>If you do not agree with these Terms, please discontinue use of our website and services.</p>
    
    <h3>2. Company Overview</h3>
    <p>Stephania Limited is an engineering, construction, and procurement company offering a range of industrial and infrastructural solutions, including vessel management, midstream operations, and onshore/offshore services.</p>
    
    <h3>3. Use of Our Website</h3>
    <p>You agree to use our website only for lawful purposes. You must not:</p>
    <ul>
      <li>Violate any applicable laws or regulations.</li>
      <li>Engage in unauthorized access, hacking, or tampering with our systems.</li>
      <li>Use the website to transmit harmful, illegal, or defamatory content.</li>
      <li>Impersonate another person or misrepresent your affiliation with any entity.</li>
    </ul>
    <p>We reserve the right to restrict or terminate access for any user who violates these Terms.</p>
    
    <h3>4. Intellectual Property</h3>
    <p>All content on this website—including text, graphics, logos, images, videos, icons, and software—is the property of Stephania Limited or its licensors.</p>
    <p>You may not reproduce, modify, distribute, or use our content without prior written permission.</p>
    
    <h3>5. Services and Availability</h3>
    <p>We aim to ensure the accuracy and availability of our services and information. However, we do not guarantee uninterrupted access or error-free operation of our website or any online platform associated with our services.</p>
    <p>Stephania Limited reserves the right to modify, suspend, or discontinue any part of the website or services at any time, without notice or liability.</p>
    
    <h3>6. Third-Party Links</h3>
    <p>Our website may contain links to third-party websites. We are not responsible for the content, accuracy, or practices of any linked sites. Accessing third-party sites is at your own risk.</p>
    
    <h3>7. Limitation of Liability</h3>
    <p>To the fullest extent permitted by law:</p>
    <ul>
      <li>Stephania Limited shall not be liable for any indirect, incidental, or consequential damages arising from the use or inability to use our website or services.</li>
      <li>We do not warrant that the website, content, or materials are error-free, accurate, or secure.</li>
      <li>Your sole remedy for dissatisfaction with the website is to discontinue its use.</li>
    </ul>
    
    <h3>8. Indemnification</h3>
    <p>You agree to indemnify, defend, and hold harmless Stephania Limited, its directors, employees, affiliates, and partners from any claims, liabilities, damages, or expenses arising from your use of our website, services, or breach of these Terms.</p>
    
    <h3>9. Governing Law</h3>
    <p>These Terms are governed by and construed in accordance with the laws of the Federal Republic of Nigeria, without regard to conflict of law principles. Any disputes shall be subject to the exclusive jurisdiction of the courts in Nigeria.</p>
    
    <h3>10. Termination</h3>
    <p>Stephania Limited may suspend or terminate your access to the website or any services without notice if you breach these Terms or engage in conduct deemed harmful to the company or its users.</p>
    
    <h3>11. Disclaimer</h3>
    <p>All information provided on this website is for general informational purposes only. While we strive for accuracy, Stephania Limited makes no representations or warranties, express or implied, regarding the completeness or reliability of any content.</p>
    
    <h3>12. Changes to Terms</h3>
    <p>We reserve the right to modify these Terms at any time. Updates will be posted on this page, and your continued use of the website constitutes acceptance of the updated Terms.</p>
    
    <h3>13. Contact Information</h3>
    <p>For inquiries about these Terms, please contact:</p>
    <p><strong>Stephania Limited</strong><br>
    Email: legal@stephanialtd.com</p>
  `,
};

const privacyPolicy = {
  content: `
    <p><strong>Effective Date:</strong> October 21, 2025<br>
    <strong>Last Updated:</strong> October 21, 2025</p>
    
    <h3>1. Introduction</h3>
    <p>Stephania Limited ("we", "our", or "us") values your privacy and is committed to protecting your personal information. This Privacy Policy describes how we collect, use, disclose, and protect information that identifies or can be used to identify you ("Personal Data") when you visit our website, engage our services, or interact with us in any capacity.</p>
    <p>By accessing or using our website, products, or services, you agree to this Privacy Policy.</p>
    
    <h3>2. Information We Collect</h3>
    <p>We may collect the following types of information:</p>
    
    <h6>a. Personal Information:</h6>
    <ul>
      <li>Full name, company name, email address, phone number, and contact details.</li>
      <li>Billing or payment details when applicable.</li>
      <li>Job title, professional background, or related business information.</li>
    </ul>
    
    <h6>b. Technical Information:</h6>
    <ul>
      <li>IP address, browser type, operating system, and device identifiers.</li>
      <li>Usage data such as pages visited, time spent on our site, and referring URLs.</li>
    </ul>
    
    <h6>c. Cookies and Tracking:</h6>
    <p>We use cookies and similar technologies to enhance user experience, improve website functionality, and analyze traffic patterns. You can manage cookie preferences through your browser settings.</p>
    
    <h3>3. How We Use Your Information</h3>
    <p>We use your data for the following purposes:</p>
    <ul>
      <li>To provide and manage our engineering, procurement, and construction services.</li>
      <li>To communicate with you about inquiries, projects, and support.</li>
      <li>To process payments and manage business relationships.</li>
      <li>To send newsletters, promotional materials, or updates (where consented).</li>
      <li>To improve our website, services, and user experience.</li>
      <li>To comply with legal obligations and resolve disputes.</li>
    </ul>
    
    <h3>4. Legal Basis for Processing</h3>
    <p>Depending on your jurisdiction, our processing of your data may rely on one or more of the following legal bases:</p>
    <ul>
      <li>Your consent;</li>
      <li>The necessity of fulfilling a contract with you;</li>
      <li>Compliance with legal obligations;</li>
      <li>Our legitimate interest in conducting and improving our business operations.</li>
    </ul>
    
    <h3>5. Sharing and Disclosure of Information</h3>
    <p>We do not sell or rent your personal data. However, we may share it with:</p>
    <ul>
      <li>Service providers and business partners assisting us in operations (e.g., hosting, analytics, logistics, or communications).</li>
      <li>Regulatory authorities or law enforcement when required by law.</li>
      <li>Third parties involved in a merger, acquisition, or restructuring, under confidentiality obligations.</li>
    </ul>
    
    <h3>6. Data Retention</h3>
    <p>We retain personal data only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, comply with legal obligations, and resolve disputes.</p>
    
    <h3>7. Data Security</h3>
    <p>We implement appropriate administrative, technical, and physical safeguards to protect your data from unauthorized access, alteration, or destruction. However, no electronic transmission or storage system is completely secure, and we cannot guarantee absolute security.</p>
    
    <h3>8. Your Rights</h3>
    <p>Depending on applicable data protection laws, you may have the right to:</p>
    <ul>
      <li>Access, correct, or delete your personal data.</li>
      <li>Withdraw consent at any time.</li>
      <li>Object to or restrict certain processing activities.</li>
      <li>Lodge a complaint with a relevant data protection authority.</li>
    </ul>
    <p>To exercise your rights, contact us at <a href="mailto:privacy@stephanialtd.com">privacy@stephanialtd.com</a>.</p>
    
    <h3>9. International Transfers</h3>
    <p>Your information may be transferred to and processed in countries outside your jurisdiction. We take necessary steps to ensure your data remains protected in accordance with this policy.</p>
    
    <h3>10. Updates to This Policy</h3>
    <p>We may update this Privacy Policy from time to time. Updates will be posted on this page with a revised "Last Updated" date.</p>
    
    <h3>11. Contact Us</h3>
    <p>If you have questions or concerns about this Privacy Policy, please contact:</p>
    <p><strong>Stephania Limited</strong><br>
    Email: <a href="mailto:privacy@stephanialtd.com">privacy@stephanialtd.com</a></p>
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
