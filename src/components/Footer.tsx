import { Link } from "react-router-dom";
import icon from "../assets/icon.png";

export const Footer = () => (
    <footer className="container py-12 border-t border-white/5 mt-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
                <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    <img src={icon} alt="elio" className="w-6 h-6" />
                    elio
                </h2>
                <p className="text-[#52525B] max-w-sm">
                    The next generation of Solana wallets. Simple, fast, and secure. Join the revolution today.
                </p>
            </div>
            <div>
                <h4 className="font-bold mb-4">Platform</h4>
                <ul className="space-y-2 text-[#A1A1AA] text-sm">
                    <li><a href="/#features" className="hover:text-[#D6F248] transition-colors">Features</a></li>
                    <li><a href="/#security" className="hover:text-[#D6F248] transition-colors">Security</a></li>
                    <li><a href="/#roadmap" className="hover:text-[#D6F248] transition-colors">Roadmap</a></li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold mb-4">Legal</h4>
                <ul className="space-y-2 text-[#A1A1AA] text-sm">
                    <li><Link to="/terms" className="hover:text-[#D6F248] transition-colors">Terms</Link></li>
                    <li><Link to="/privacy" className="hover:text-[#D6F248] transition-colors">Privacy</Link></li>
                    <li><a href="mailto:support.elio@atomicmail.io" className="hover:text-[#D6F248] transition-colors">Contact</a></li>
                </ul>
            </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-white/5">
            <p className="text-[#52525B] text-sm">© 2026, All rights reserved.</p>
            <div className="flex items-center gap-6">
                <a
                    href="https://x.com/eliowallet"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#52525B] hover:text-[#D6F248] transition-colors flex items-center gap-2 text-sm"
                >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                    Follow on X
                </a>
            </div>
        </div>
    </footer>
);
