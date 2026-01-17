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
            Powered by Solana
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
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="https://x.com/eliowallet"
            target="_blank"
            rel="noreferrer"
            className="bg-[#18181B] hover:bg-[#27272A] border border-white/10 text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 w-full sm:w-auto min-w-[160px] flex items-center justify-center gap-2 group"
          >
            Twitter <ArrowUpRight size={16} className="opacity-50 group-hover:opacity-100 transition-opacity" />
          </a>
          <a
            href="https://apps.apple.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#D6F248] hover:bg-[#bde32c] text-black px-8 py-4 rounded-xl font-bold transition-all duration-300 w-full sm:w-auto min-w-[160px] flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            Download on App Store
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
