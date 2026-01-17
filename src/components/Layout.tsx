import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export const Layout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="relative min-h-screen bg-[#09090B] text-white selection:bg-[#D6F248]/30 selection:text-[#D6F248]">
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute inset-0 bg-grid opacity-20" />
            </div>
            <Navbar />
            <main className="relative z-10 pt-24 min-h-[80vh]">
                {children}
            </main>
            <Footer />
        </div>
    );
};
