import Breadcrumb from "@/components/Common/Breadcrumb";
import Impressum from "@/components/Impressum";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "grundigDev - Impressum",
  description: "Impressum",
};

const ImpressumPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Impressum"
        description="Impressum"
      />

      <Impressum />
    </>
  );
};

export default ImpressumPage;
