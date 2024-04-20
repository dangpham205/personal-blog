import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";

// default SEO settings for each page
export const metadata: Metadata = {
    title: "About me",
    description: "Information about me"
}

export default async function AboutPage() {
    return <div className="container max-w-6xl py-6 lg:py-10">
        <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
            <div className="flex-1 space-x-4">
                <h1 className="inline-block font-black text-4xl lg:text-5xl">
                    About me
                </h1>

            </div>
        </div>
        <hr className="my-8"/>
        <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div className="min-w-48 max-w-48 flex flex-col gap-2">
                <Avatar className="h-48 w-48">
                    <AvatarImage src="/avatar.png" alt={siteConfig.author}/>
                    <AvatarFallback>D</AvatarFallback>
                </Avatar>
                <h2 className="text-2xl font-bold text-center break-words">{siteConfig.author}</h2>
                <p className="text-muted-foreground text-center break-words">Developer</p>
            </div>
            <div className="text-start">
                <p className="text-muted-foreground text-lg py-4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci esse, maiores facere voluptas excepturi maxime! Dolor velit quaerat exercitationem libero et excepturi minus cupiditate commodi. Sint, tempore, odit doloribus accusamus impedit ab nulla nam dicta ipsum, repellat aliquam temporibus ut numquam eaque similique! Doloribus voluptatem quo vel reprehenderit odit commodi numquam porro libero maxime quibusdam aperiam molestias sit consequatur, id iusto et placeat, dolorem quidem sed soluta laborum. Pariatur iure repudiandae natus reprehenderit sed quos perspiciatis possimus maxime deserunt laborum, dolorum modi, repellat qui illum veniam. Quo, incidunt! Eligendi, voluptas at ut aut, perferendis voluptate qui magnam praesentium atque doloribus laborum ab enim! Dignissimos eum aspernatur, pariatur magni corporis eos corrupti quasi a. Consequatur illum, aliquam a eveniet sapiente odio temporibus corrupti consectetur maxime rem, tenetur ducimus nulla quisquam accusantium numquam. Odit nam voluptates illo id eaque doloribus iure minus exercitationem eos esse!
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod corrupti sunt dolor tempora tempore? Veritatis et optio ipsam eum tempora modi velit hic ipsa assumenda temporibus iure necessitatibus eaque dolore odio, vel mollitia dolor officia obcaecati blanditiis voluptatibus voluptatum nobis molestiae quae. At minima aut, illo, deleniti accusantium corporis ipsa inventore ad voluptate consectetur eum laudantium facere nesciunt corrupti obcaecati maiores unde cupiditate nemo ut magni fuga dolores provident asperiores? Sapiente, expedita accusamus officia eaque ipsam maxime voluptatum molestias, eos voluptas totam reiciendis corrupti, aspernatur consequatur eligendi excepturi dicta minus cumque inventore! Laudantium ratione nulla hic accusantium architecto facilis nesciunt optio molestias at magnam! Veniam, quia reiciendis autem aliquid animi nemo tempora provident enim obcaecati dolor repudiandae commodi ducimus ut, doloribus aut quae praesentium in magnam labore. Minima, nisi qui.
                </p>

            </div>
        </div>
    </div>
}
