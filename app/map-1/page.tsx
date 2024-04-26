import { siteConfig } from "@/config/site";
import { Metadata } from "next";
import dynamic from "next/dynamic";

// default SEO settings for each page
export const metadata: Metadata = {
    title: "Map 1",
    description: "Information about me"
}

// const Scene = dynamic(() => import('@/components/scene'), {
//     loading: () => <div className="flex flex-col text-center h-1/2 items-center justify-center">
//         <span>holdup</span>
//     </div>,
//     ssr: false
// })

export default async function Map() {
    return <div className=" bg-amber-800 max-w-full flex flex-col py-6 lg:py-10 ">

    </div>
}
