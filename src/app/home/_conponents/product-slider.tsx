import ProductSlider from "@/app/components/productSlider";
import { prisma } from "@/app/lib/db";
import { Product } from "@prisma/client";

interface ProductItemsProps {
    products?: Product[]
}

async function ProductItems(props: ProductItemsProps) {

    const pasta = await prisma.product.findMany({
        where:{
            category:{
                name:"پاستا"
            }
        },
        include:{
            category:true,
            tag:true
        }
    })

    // const categoryItem2 = await prisma.product.findMany({
    //     where:{
    //         category:{
    //             name:"حبوبات"
    //         }
    //     },
    //     include:{
    //         category:true,
    //         tag:true
    //     }
    // })

    // const categoryItem3 = await prisma.product.findMany({
    //     where:{
    //         category:{
    //             name:"دستمال کاغذی"
    //         }
    //     },
    //     include:{
    //         category:true,
    //         tag:true
    //     }
    // })

    // const categoryItem4 = await prisma.product.findMany({
    //     where:{
    //         category:{
    //             name:"پودر ماشین"
    //         }
    //     },
    //     include:{
    //         category:true,
    //         tag:true
    //     }
    // })

    // const categoryItem5 = await prisma.product.findMany({
    //     where:{
    //         category:{
    //             name:"پنیر پیتزا"
    //         }
    //     },
    //     include:{
    //         category:true,
    //         tag:true
    //     }
    // })

    // const categoryItem6 = await prisma.product.findMany({
    //     where:{
    //         category:{
    //             name:"پنیر"
    //         }
    //     },
    //     include:{
    //         category:true,
    //         tag:true
    //     }
    // })

    // const categoryItem7 = await prisma.product.findMany({
    //     where:{
    //         category:{
    //             name:"چای"
    //         }
    //     },
    //     include:{
    //         category:true,
    //         tag:true
    //     }
    // })

    // const categoryItem8 = await prisma.product.findMany({
    //     where:{
    //         category:{
    //             name:"نوشابه بطری ای"
    //         }
    //     },
    //     include:{
    //         category:true,
    //         tag:true
    //     }
    // })

    // const dailyBuy = await prisma.product.findMany({
    //     where:{
    //         tag:{
    //             name:"روزمره"
    //         }
    //     },
    //     include:{
    //         category:true,
    //         tag:true
    //     }
    // })

    const dailyBuy = await prisma.product.findMany({
        where:{
            tag:{
                name:"پخت و پز"
            }
        },
        include:{
            category:true,
            tag:true
        }
    })

    const breakFast = await prisma.product.findMany({
        where:{
            tag:{
                name:"صبحانه"
            }
        },
        include:{
            category:true,
            tag:true
        }
    })

    return (
        <div>
            {/* <ProductSlider products={dailyBuy} categoryName="روزمره" tag={true} /> */}
            <ProductSlider products={dailyBuy} categoryName="پخت و پز" tag={true} />
            <ProductSlider products={breakFast} categoryName="صبحانه" tag={true} />
            <ProductSlider products={pasta} categoryName="پاستا"/>
            {/* <ProductSlider products={categoryItem2} categoryName="حبوبات"/>
            <ProductSlider products={categoryItem3} categoryName="دستمال کاغذی"/>
            <ProductSlider products={categoryItem4} categoryName="پودر ماشین"/>
            <ProductSlider products={categoryItem5} categoryName="پنیر پیتزا"/>
            <ProductSlider products={categoryItem6} categoryName="پنیر"/>
            <ProductSlider products={categoryItem7} categoryName="چای"/>
            <ProductSlider products={categoryItem8} categoryName="نوشابه بطری ای"/> */}
        </div>
    )
}

export default ProductItems;