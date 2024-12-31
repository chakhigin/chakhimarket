import { prisma } from "@/app/lib/db";
import CreateSlider from "../components/create-slider";
import { Slider } from "@prisma/client";
import Card from "@/app/components/ui/card";
import Title from "@/app/components/ui/title";
import SliderList from "../components/slider-list";

async function page(){

    const slider : Slider[] = await prisma.slider.findMany(); 

    return(
        <div>
            <CreateSlider />
            <Card>
                <Title>لیست بنرها</Title>
                <SliderList sliders={slider}/>
            </Card>
        </div>
    )
}

export default page;