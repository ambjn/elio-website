import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="relative min-h-screen bg-[#09090B] overflow-hidden flex flex-col items-center justify-center selection:bg-[#D6F248] selection:text-black">

      {/* Background Effects */}
      <div className="absolute inset-0 z-0 spotlight-bg" />
      <div className="absolute inset-0 z-0 bg-grid-pattern opacity-20" />

      {/* Glow orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#D6F248]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 md:px-8 flex flex-col items-center text-center pb-32 md:pb-24">

        {/* Top Logo */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 md:mb-16"
        >
          <span className="text-white text-5xl md:text-7xl lg:text-[80px] font-bold tracking-tighter leading-[0.9]">
            elio
            <span className="font-normal text-[#D6F248]"> wallet</span>
            <span className="text-[#D6F248]">.</span>
          </span>
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mb-6 md:mb-10"
        >
          <span className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#D6F248] font-medium shadow-lg shadow-black/20">
            Powered by <img src="/solana_logo.svg" alt="Solana" className="h-3.5" />
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          <h1 className="font-medium tracking-tight leading-[1.05]">
            <span className="text-white/90 text-2xl md:text-5xl lg:text-6xl block mb-2 md:mb-3 font-normal">
              Your Solana Stablecoins Wallet
            </span>
            <span className="text-white text-4xl md:text-7xl lg:text-8xl block">
              The Future is <span className="text-serif-italic text-[#D6F248]">Instant</span>
            </span>
            <span className="text-[#71717A] text-xl md:text-4xl lg:text-5xl block mt-2 md:mt-4 font-normal">
              From Mobile to Onchain.
            </span>
          </h1>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-lg text-[#71717A] text-sm md:text-lg leading-relaxed mb-8 md:mb-14 font-light px-4 md:px-0"
        >
          send, save & spend <span className="text-white font-normal">stablecoins on Solana</span> — secure, instant, and built for everyone.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="https://x.com/eliowallet"
            target="_blank"
            rel="noreferrer"
            className="group relative bg-[#18181B] hover:bg-[#D6F248] border border-white/10 hover:border-[#D6F248] text-white hover:text-black h-12 md:h-14 px-5 md:px-7 rounded-2xl font-medium transition-all duration-300 flex items-center justify-center gap-2 md:gap-3 shadow-lg shadow-black/20 hover:shadow-[#D6F248]/20"
          >
            <span className="text-xs md:text-sm font-medium">Follow us on</span>
            <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            <ArrowUpRight size={14} className="opacity-50 group-hover:opacity-100 transition-opacity md:w-4 md:h-4" />
          </a>
          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="h-12 md:h-14 flex items-center justify-center transition-all duration-300 hover:scale-105 hover:brightness-110"
          >
            <img src="/appstore_logo.svg" alt="Download on the App Store" className="h-12 md:h-14" />
          </a>
        </motion.div>

      </div>

      {/* Floating Particles (Decorational) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#D6F248] rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -150],
              opacity: [0, 0.6, 0]
            }}
            transition={{
              duration: Math.random() * 8 + 12,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 8
            }}
          />
        ))}
      </div>

      {/* Footer minimal */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-4 md:bottom-8 left-0 right-0 text-center space-y-1.5 px-4"
      >
        <div className="flex items-center justify-center gap-3 md:gap-5 text-[#52525B] text-[10px] md:text-xs">
          <Link to="/terms" className="hover:text-[#D6F248] transition-colors duration-200">Terms & Conditions</Link>
          <span className="text-[#3F3F46]">·</span>
          <Link to="/privacy" className="hover:text-[#D6F248] transition-colors duration-200">Privacy Policy</Link>
          <span className="text-[#3F3F46]">·</span>
          <a href="mailto:support.elio@atomicmail.io" className="hover:text-[#D6F248] transition-colors duration-200">Contact</a>
        </div>
        <p className="text-[#3F3F46] text-[10px] md:text-[11px]">© 2026, All rights reserved.</p>
      </motion.div>
    </div>
  );
};

export default App;
