import BannerSlider from "@/app/components/bannerSlider";
import { prisma } from "@/app/lib/db";

async function IntroSlider() {

    const slides = await prisma.slider.findMany({
        orderBy:{
            createdAt:"desc"
        }
    });

    return (
        <div className="w-full rounded-md">
            <BannerSlider banners={slides}/>
        </div>
    )
}

export default IntroSlider;