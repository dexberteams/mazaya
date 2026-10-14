import Capabilities from "./Capabilities";
import Quote from "./Quote";
import WarehouseServices from "./WarehouseServices";
import WarehouseTop from "./WarehouseTop";
import WareHouseTypes from "./WareHouseTypes";
import WhyChooseUs from "./WhyChooseUs";
import { getDictionary } from "../dictionaries";

export const metadata = {
  title: "Warehouse | Mazaya Fast Logistics",
  description:
    "Secure, modern and technology-driven warehousing solutions designed to protect and manage your inventory with maximum efficiency.",
};

const Warehouse = async ({
  params,
}: {
  params: Promise<{ lang: string }>;
}) => {
  const { lang } = await params;
  const dict = await getDictionary(lang);

  return (
    <div className="bg-[#0A0700] font-manrope">
      <WarehouseTop heroT={dict.warehouse?.hero} />
      <WarehouseServices />
      <WhyChooseUs />
      <Capabilities />
      <WareHouseTypes />
      <Quote t={dict.warehouse?.cta} lang={lang} />
    </div>
  );
};

export default Warehouse;
