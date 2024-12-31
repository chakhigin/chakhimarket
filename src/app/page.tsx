import BottomHeader from "./components/bottomHeader";
import Header from "./components/header";
import CategorySlider from "./home/_conponents/category-slider";
import IntroSlider from "./home/_conponents/intro-slider";
import ProductSlider from "./home/_conponents/product-slider";


export default function Home() {
  return (
    <div className="max-w-xl m-auto bg-[var(--background-color)]">
        <Header />
        <div className="pt-8 pb-24">
          <CategorySlider />
          <IntroSlider />
          <ProductSlider />
        </div>
        <BottomHeader />
    </div>
  );
}
