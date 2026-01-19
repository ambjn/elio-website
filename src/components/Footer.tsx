import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { URLS } from "../constants";

export const Footer = () => (
  <motion.footer
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1, delay: 0.8 }}
    className="absolute bottom-4 md:bottom-8 left-0 right-0 text-center space-y-1.5 px-4"
  >
    <nav className="flex items-center justify-center gap-3 md:gap-5 text-[#52525B] text-[10px] md:text-xs">
      <Link
        to="/terms"
        className="hover:text-[#D6F248] transition-colors duration-200"
      >
        Terms & Conditions
      </Link>
      <span className="text-[#3F3F46]" aria-hidden="true">·</span>
      <Link
        to="/privacy"
        className="hover:text-[#D6F248] transition-colors duration-200"
      >
        Privacy Policy
      </Link>
      <span className="text-[#3F3F46]" aria-hidden="true">·</span>
      <a
        href={URLS.support}
        className="hover:text-[#D6F248] transition-colors duration-200"
      >
        Contact
      </a>
    </nav>
    <p className="text-[#3F3F46] text-[10px] md:text-[11px]">
      © 2026, All rights reserved.
    </p>
  </motion.footer>
);
