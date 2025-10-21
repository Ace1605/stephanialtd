import { CallToAction } from "@/components/core/Footer/CallToAction";
import { LegalDocuments } from "@/components/sections/legal/LegalDocuments";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Legal",
};

export default function Legal(props: any) {
  return (
    <main>
      <div>
        <div>
          <LegalDocuments params={props.params} />
        </div>
      </div>

      <CallToAction />
    </main>
  );
}
