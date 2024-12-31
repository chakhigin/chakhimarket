import BannerSlider from "@/app/components/bannerSlider";
import SliderItem from "@/app/components/ui/slider";
import { prisma } from "@/app/lib/db";
import Image from "next/image";
import Link from "next/link";

async function IntroSlider() {

    const slides = await prisma.slider.findMany();

    return (
        <div className="w-full rounded-md">
            <BannerSlider banners={slides}/>
        </div>
    )
}

export default IntroSlider;