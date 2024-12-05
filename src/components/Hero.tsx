import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { MediaSection } from './MediaSection';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-24">
      <div className="absolute inset-0 bg-hero-pattern opacity-50" />
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 w-full"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-primary text-sm font-medium">Free Training</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Turn Your Views Into{' '}
              <span className="bg-gradient-to-r from-primary to-yellow-500 text-transparent bg-clip-text block mt-2">
                Converting Leads
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-12">
              How to keep your viewers retained and learn the viral video formula
            </p>

            <MediaSection />
          </motion.div>
        </div>
      </div>
    </section>
  );
}