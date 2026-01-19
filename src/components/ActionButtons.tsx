import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { URLS } from "../constants";

const XIcon = () => (
  <svg
    className="w-4 h-4 md:w-5 md:h-5"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export const ActionButtons = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
    className="flex flex-col sm:flex-row items-center gap-4"
  >
    <a
      href={URLS.twitter}
      target="_blank"
      rel="noreferrer"
      className="group relative bg-[#18181B] hover:bg-[#D6F248] border border-white/10 hover:border-[#D6F248] text-white hover:text-black h-12 md:h-14 px-5 md:px-7 rounded-2xl font-medium transition-all duration-300 flex items-center justify-center gap-2 md:gap-3 shadow-lg shadow-black/20 hover:shadow-[#D6F248]/20"
      aria-label="Follow us on X (Twitter)"
    >
      <span className="text-xs md:text-sm font-medium">Follow us on</span>
      <XIcon />
      <ArrowUpRight
        size={14}
        className="opacity-50 group-hover:opacity-100 transition-opacity md:w-4 md:h-4"
        aria-hidden="true"
      />
    </a>
    <a
      href={URLS.appStore}
      target="_blank"
      rel="noopener noreferrer"
      className="h-12 md:h-14 flex items-center justify-center transition-all duration-300 hover:scale-105 hover:brightness-110"
      aria-label="Download on the App Store"
    >
      <img
        src="/appstore_logo.svg"
        alt="Download on the App Store"
        className="h-12 md:h-14"
      />
    </a>
  </motion.div>
);
