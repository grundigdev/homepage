import Breadcrumb from "@/components/Common/Breadcrumb";
import Widerrufsbelehrung from "@/components/Widerrufsbelehrung";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "grundigDev - Widerrufsbelehrung",
  description: "Widerrufsbelehrung",
};

const WiderrufsbelehrungPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Widerrufsbelehrung"
        description="Widerrufsbelehrung"
      />

      <Widerrufsbelehrung />
    </>
  );
};

export default WiderrufsbelehrungPage;
