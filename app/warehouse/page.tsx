import Capabilities from "./Capabilities";
import Quote from "./Quote";
import WarehouseServices from "./WarehouseServices";
import WarehouseTop from "./WarehouseTop";
import WareHouseTypes from "./WareHouseTypes";
import WhyChooseUs from "./WhyChooseUs";

const Warehouse = () => {
  return (
    <div className="bg-[#0A0700] font-manrope">
      <WarehouseTop></WarehouseTop>
      <WarehouseServices></WarehouseServices>
      <WhyChooseUs></WhyChooseUs>
      <Capabilities></Capabilities>
      <WareHouseTypes></WareHouseTypes>
      <Quote></Quote>
    </div>
  );
};

export default Warehouse;
