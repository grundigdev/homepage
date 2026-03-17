import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "grundigDev - Kontakt",
  description: "Kontaktieren Sie uns",
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Kontakt"
        description="Kontaktieren Sie uns"
      />

      <Contact />
    </>
  );
};

export default ContactPage;
