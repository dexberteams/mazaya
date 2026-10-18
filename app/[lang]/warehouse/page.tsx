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

const Warehouse = async ({ params }: { params: Promise<{ lang: string }> }) => {
  const { lang } = await params;
  const dict = await getDictionary(lang);
  const currentLang = lang.toLowerCase().split("-")[0];

  return (
    <div className="bg-[#0A0700] font-manrope">
      <WarehouseTop
        heroT={dict.warehouse?.hero}
        modernSupplyChainsT={dict.warehouse?.modernSupplyChains}
      />

      <WarehouseServices t={dict.warehouse?.services} lang={currentLang} />
      <WhyChooseUs t={dict.warehouse?.whyChoose} lang={currentLang} />
      <Capabilities t={dict.warehouse?.capabilities} lang={currentLang} />
      <WareHouseTypes t={dict.warehouse?.types} lang={currentLang} />
      <Quote t={dict.warehouse?.cta} lang={lang} />
    </div>
  );
};

export default Warehouse;
