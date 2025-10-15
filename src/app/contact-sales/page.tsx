import { CallToAction } from "@/components/core/Footer/CallToAction";
import { GetInTouch } from "@/components/sections/contact-sales/GetInTouch";
import { GoogleMap } from "@/components/sections/contact-sales/GoogleMap";
// import { DownloadPrompt } from "@/components/sections/home/DownloadPrompt";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
};

export default function ContactUs() {
  return (
    <main>
      <GetInTouch isSales />
      {/* <DownloadPrompt /> */}
      <GoogleMap />
      <CallToAction />
    </main>
  );
}
