import Spotlight from "./spotlight.jsx";
import {footerNavLinks} from "../constants/index.js";

const Footer = () => (
    <div className="min-h-[50vh] overflow-hidden relative flex-center flex-col w-full py-4">
        <Spotlight size="500px" className="-right-3 -top-20 max-md:hidden" />
        <Spotlight size="500px" className="-left-3 max-md:-top-72 max-md:-left-44" />
        <div className="flex-center flex-col gap-3">
            <img src="/Logo.png" alt="footer-logo" />
            <p className="max-w-[300px] max-md:text-sm mt-3">Empower Your Crypto Project With The Support To Scale Faster</p>
        </div>
        <div className="mt-6 flex items-center text-neutral-400 gap-3 max-sm:gap-1">
            {
                footerNavLinks.map((link, index) => (
                    <>
                        <a href={link.href} className="max-md:text-sm max-sm:text-xs">{link.text}</a>
                        {index !== footerNavLinks.length -1 && <div className="h-1 w-1 rounded-full bg-neutral-300"></div>}
                    </>
                ))
            }
        </div>
        <div className="w-[85%] min-h-10 border-t border-neutral-400 mt-8 flex max-md:flex-col gap-6 items-center justify-between pt-6">
            <span className="text-xs max-md:text-sm max-sm:text-xs">© DefiFoundry 2025. All rights reserved</span>
            <div className="flex items-center gap-3">
                <a href="/"><img src="/icons/x-icon.png" alt="x-handle" /></a>
                <a href="/"><img src="/icons/telegram-icon.png" alt="telegram-handle" /></a>
            </div>
            <div className="flex items-center gap-6 text-xs">
                <span>
                    Terms of Service
                </span>
                <span>
                    Privacy & Policy
                </span>
            </div>
        </div>
    </div>
)

export default Footer