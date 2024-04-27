import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";
import dynamic from "next/dynamic";

// default SEO settings for each page
export const metadata: Metadata = {
    title: "About me",
    description: "Information about me"
}

const Scene = dynamic(() => import('@/components/scenes/scene'), {
    loading: () => <div className="flex flex-col text-center h-1/2 items-center justify-center">
        <span>holdup</span>
    </div>,
    ssr: false
})

export default async function AboutPage() {
    return <div>
        <div className="container max-w-6xl py-6 lg:py-10 ">
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
                        <a href="/map-1">play some music</a>
                    </p>
                    <p className="text-muted-foreground text-lg py-4">
                        <a href="/map-2">play some game</a>
                    </p>
                </div>
            </div>
        </div>
        <div className="h-screen px-0 lg:px-48 md:px-0 sm:px-0">
            <Scene/>
        </div>
    </div>
}
