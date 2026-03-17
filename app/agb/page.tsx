import Breadcrumb from "@/components/Common/Breadcrumb";
import AGB from "@/components/AGB";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "grundigDev - AGB",
  description: "AGB",
};

const AGBPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="AGB"
        description="AGB"
      />

      <AGB />
    </>
  );
};

export default AGBPage;
