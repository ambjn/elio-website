import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="relative min-h-screen bg-[#09090B] overflow-hidden flex flex-col items-center justify-center selection:bg-[#D6F248] selection:text-black">

      {/* Background Effects */}
      <div className="absolute inset-0 z-0 spotlight-bg" />
      <div className="absolute inset-0 z-0 bg-grid-pattern opacity-20" />

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 flex flex-col items-center text-center">

        {/* Top Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center">
            <span className="text-6xl text-white">elio wallet</span>
          </div>
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-[10px] md:text-xs uppercase tracking-[0.2em] text-[#D6F248] font-medium">
            Powered by <img src="/solana_logo.svg" alt="Solana" className="h-3" />
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.1] mb-6"
        >
          The Future is <span className="text-serif-italic">Instant</span>
          <br />
          <span className="text-[#A1A1AA] text-4xl md:text-6xl lg:text-7xl block mt-2">From Mobile to Onchain.</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-xl text-[#71717A] text-lg md:text-xl leading-relaxed mb-12 font-light"
        >
          Turn global markets into your playground from stablecoins to DeFi with the first <span className="text-white">generationless</span> wallet.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-stretch gap-4"
        >
          <a
            href="https://x.com/eliowallet"
            target="_blank"
            rel="noreferrer"
            className="bg-[#18181B] hover:bg-[#27272A] border border-white/10 text-white h-14 px-8 rounded-xl font-medium transition-all duration-300 flex items-center justify-center gap-2 group"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            <ArrowUpRight size={16} className="opacity-50 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="h-14 flex items-center justify-center transition-all duration-300 hover:opacity-80"
          >
            <img src="/appstore_logo.svg" alt="Download on the App Store" className="h-14" />
          </a>
        </motion.div>

      </div>

      {/* Floating Particles (Decorational) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#D6F248] rounded-full opacity-20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10
            }}
          />
        ))}
      </div>

      {/* Footer minimal */}
      <div className="absolute bottom-8 left-0 right-0 text-center space-y-2">
        <div className="flex items-center justify-center gap-4 text-[#52525B] text-xs">
          <Link to="/terms" className="hover:text-[#D6F248] transition-colors">Terms & Conditions</Link>
          <Link to="/privacy" className="hover:text-[#D6F248] transition-colors">Privacy Policy</Link>
          <a href="mailto:support.elio@atomicmail.io" className="hover:text-[#D6F248] transition-colors">Contact</a>
        </div>
        <p className="text-[#3F3F46] text-xs">© 2026, All rights reserved.</p>
      </div>
    </div>
  );
};

export default App;
