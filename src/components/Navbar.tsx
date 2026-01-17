import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import icon from "../assets/icon.png";

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === "/";

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glass-nav h-16" : "bg-transparent h-24"
                    }`}
            >
                <div className="container h-full flex items-center justify-between">
                    <Link to="/" className="text-2xl font-bold tracking-tighter flex items-center gap-2">
                        <img src={icon} alt="elio" className="w-8 h-8" />
                        elio
                    </Link>

                    <div className="hidden md:flex items-center gap-8">
                        {isHome ? (
                            <NavLinks />
                        ) : (
                            <Link to="/" className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
                                Back to Home
                            </Link>
                        )}
                        <button className="btn btn-primary px-6 py-2 text-sm !rounded-lg">
                            Get Early Access
                        </button>
                    </div>

                    <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </nav>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        className="fixed inset-0 z-40 bg-[#09090B] flex flex-col items-center justify-center space-y-8 md:hidden"
                    >
                        <NavLinks mobile onClick={() => setMobileMenuOpen(false)} />
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

const NavLinks = ({ mobile, onClick }: { mobile?: boolean, onClick?: () => void }) => {
    const links = [
        { name: "Features", href: "/#features" },
        { name: "Security", href: "/#security" },
        { name: "Roadmap", href: "/#roadmap" },
    ];

    return (
        <>
            {links.map((link) => (
                <a
                    key={link.name}
                    href={link.href}
                    onClick={onClick}
                    className={`${mobile ? "text-2xl font-bold" : "text-sm font-medium text-gray-400 hover:text-white"
                        } transition-colors relative group`}
                >
                    {link.name}
                    {!mobile && <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#D6F248] transition-all group-hover:w-full" />}
                </a>
            ))}
        </>
    );
};
