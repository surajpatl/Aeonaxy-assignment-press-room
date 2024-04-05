import CompanyFooter from "./CompanyFooter";
import LearnFooter from "./LearnFooter";
import ProductFooter from "./ProductFooter";
import Solutions from "./Solutions";
import SupportFooter from "./SupportFooter";
import WixFooter from "./WixFooter";

export default function Footer() {
  return (
    <div className="border-t border-black mb-[200px]">
      <div className="flex flex-row mx-[10%] pt-[60px] justify-between opacity-75">
        <ProductFooter />
        <Solutions />
        <LearnFooter />
        <SupportFooter />
        <CompanyFooter />
        <WixFooter />
      </div>
    </div>
  );
}
