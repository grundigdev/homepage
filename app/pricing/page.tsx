import Breadcrumb from "@/components/Common/Breadcrumb";
import Pricing from "@/components/Pricing";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "grundigDev - Preise",
  description: "Finden Sie das passende Angebot für Ihr Unternehmen.",
};

const PricingPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Preise"
        description="Finden Sie das passende Angebot für Ihr Unternehmen."
      />

      <Pricing />
    </>
  );
};

export default PricingPage;
