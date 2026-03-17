import Breadcrumb from "@/components/Common/Breadcrumb";
import Datenschutz from "@/components/Datenschutz";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "grundigDev - Datenschutz",
  description: "Datenschutz",
};

const DatenschutzPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Datenschutzerklärung"
        description="Datenschutzerklärung"
      />

      <Datenschutz />
    </>
  );
};

export default DatenschutzPage;
