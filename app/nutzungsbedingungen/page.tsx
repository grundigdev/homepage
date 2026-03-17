import Breadcrumb from "@/components/Common/Breadcrumb";
import Nutzungsbedingungen from "@/components/Nutzungsbedingungen";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "grundigDev - Nutzungsbedingungen",
  description: "Nutzungsbedingungen",
};

const NutzungsbedingungenPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Nutzungsbedingungen"
        description="Nutzungsbedingungen"
      />

      <Nutzungsbedingungen />
    </>
  );
};

export default NutzungsbedingungenPage;
