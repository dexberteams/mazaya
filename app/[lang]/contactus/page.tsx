import ContactUsClient from "./ContactUsClient";
import { getDictionary } from "../dictionaries";

export const metadata = {
  title: "Contact Us | Mazaya Masanda Logistics",
  description:
    "Get in touch with Mazaya Masanda Logistics. Reach our team for transportation, warehousing, and supply chain solutions.",
};

export default async function ContactUsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return <ContactUsClient t={dict.contactus} lang={lang} />;
}
