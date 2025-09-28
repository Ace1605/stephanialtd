import { CallToAction } from "@/components/core/Footer/CallToAction";
import { FaqsAsFooter } from "@/components/modules/faqs/FaqsAsFooter";
import { GetInTouch } from "@/components/sections/contact-sales/GetInTouch";
// import { DownloadPrompt } from "@/components/sections/home/DownloadPrompt";
import { createClient } from "@/prismicio";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
};

export default async function ContactUs() {
  const client = createClient();
  const faqs = await client.getAllByType("faq");

  return (
    <main>
      <GetInTouch isSales />
      {/* <FaqsAsFooter faqs={faqs} /> */}
      {/* <DownloadPrompt /> */}
      <CallToAction />
    </main>
  );
}
