import { Mail } from "lucide-react";

export function SiteFooter() {
    return <footer>
        <hr/>
        <div className="mb-6 mt-14 flex flex-col items-center">
            <div className="mb-3 flex space-x-4">
                <a target="_blank" rel="noreferrer" href="mailto:working.haidang@gmail.com">
                    <span className="sr-only">Mail</span>
                    <Mail className="h-6 w-6"/>
                </a>
            </div>
        </div>
    </footer>
}
