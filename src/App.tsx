import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Globe, Shield, Zap } from "lucide-react";

const App = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Gradients */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.div
          style={{ y: y1, background: "rgba(214, 242, 72, 0.15)" }}
          className="blur-blob w-[800px] h-[800px] bg-[#D6F248] opacity-10 top-[-20%] right-[-10%]"
        />
        <motion.div
          style={{ y: y2, background: "rgba(214, 242, 72, 0.05)" }}
          className="blur-blob w-[600px] h-[600px] bg-[#D6F248] opacity-5 bottom-[-10%] left-[-20%]"
        />
      </div>

      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-white/5 bg-[#09090B]/80">
        <div className="container h-20 flex items-center justify-between">
          <div className="text-2xl font-bold tracking-tighter">elio</div>
          <div className="hidden md:flex items-center gap-8">
            <a
              href="#features"
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
              Features
            </a>
            <a
              href="#security"
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
              Security
            </a>
            <a
              href="#roadmap"
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors">
              Roadmap
            </a>
            <button className="btn-primary px-6 py-2 text-sm">
              Get Early Access
            </button>
          </div>
        </div>
      </nav>

      <main className="relative z-10 pt-32 pb-20">
        {/* Hero Section */}
        <section className="container min-h-[80vh] flex flex-col justify-center items-start relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#D6F248]/10 border border-[#D6F248]/20 mb-8">
            <span className="w-2 h-2 rounded-full bg-[#D6F248] animate-pulse"></span>
            <span className="text-[#D6F248] text-xs font-bold tracking-widest uppercase">
              Stablecoins Reimagined
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] mb-6">
            elio
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-3xl text-[#A1A1AA] max-w-2xl font-medium leading-relaxed mb-10">
            Your gateway to{" "}
            <span className="text-white">Solana stablecoins</span> and DeFi.
            Confirm transactions in milliseconds.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="btn btn-primary group">
              Create New Wallet
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="btn btn-secondary">
              Import Existing Wallet
            </button>
          </motion.div>

          {/* Abstract visuals could go here */}
        </section>

        {/* Features Grid */}
        <section id="features" className="container py-32">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Zap className="text-[#D6F248]" size={32} />}
              title="Lightning Fast"
              description="Built on Solana for sub-second transaction finality."
              delay={0.2}
            />
            <FeatureCard
              icon={<Shield className="text-[#D6F248]" size={32} />}
              title="Non-Custodial"
              description="You own your keys. You own your crypto. Complete sovereignty."
              delay={0.4}
            />
            <FeatureCard
              icon={<Globe className="text-[#D6F248]" size={32} />}
              title="DeFi Ready"
              description="Seamless integrations with top Solana protocols."
              delay={0.6}
            />
          </div>
        </section>

        {/* Call to Action */}
        <section className="container py-20">
          <div className="rounded-3xl bg-gradient-to-br from-[#18191E] to-[#0F1115] border border-white/5 p-12 md:p-24 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#D6F248]/10 blur-[80px] rounded-full"></div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Ready to start?
            </h2>
            <p className="text-[#A1A1AA] text-lg mb-8 max-w-lg mx-auto">
              Join thousands of users experiencing the future of finance today.
            </p>
            <button className="btn btn-primary px-12">Download Now</button>
          </div>
        </section>

        <footer className="container py-12 border-t border-white/5 text-center text-[#52525B] text-sm">
          <p>© 2024 Elio Wallet. All rights reserved.</p>
        </footer>
      </main>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const FeatureCard = ({ icon, title, description, delay }: FeatureCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay, duration: 0.5 }}
    className="p-8 rounded-2xl bg-[#18191E]/50 border border-white/5 hover:border-[#D6F248]/30 transition-colors backdrop-blur-sm">
    <div className="mb-6 p-4 rounded-full bg-[#D6F248]/5 w-fit border border-[#D6F248]/10">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-[#A1A1AA] leading-relaxed">{description}</p>
  </motion.div>
);

export default App;
