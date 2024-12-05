import { motion } from 'framer-motion';
import { BarChart3, Flame, Target, Search } from 'lucide-react';
import { useMedia } from '../contexts/MediaContext';

const features = [
  {
    icon: BarChart3,
    title: 'Key Statistics',
    description: 'Learn the proven metrics you need to follow',
  },
  {
    icon: Flame,
    title: 'Crafting A Hook',
    description: 'How to craft a hook which will entice your viewer',
  },
  {
    icon: Target,
    title: 'Delivering A Payoff',
    description: 'Giving the user a payoff with an effective cta',
  },
  {
    icon: Search,
    title: 'Content Analysis',
    description: 'Understanding why your video didn\'t go viral',
  },
];

export function Features() {
  const { setShowForm } = useMedia();

  return (
    <div id="features" className="relative py-32 bg-dark-100">
      <div className="absolute inset-0 bg-gradient-dots opacity-5" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            What You'll
            <span className="bg-gradient-to-r from-primary to-yellow-500 text-transparent bg-clip-text"> Learn</span>
          </h2>
          <p className="text-xl text-gray-400">
            Comprehensive training designed for immediate implementation and results
          </p>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative bg-dark-200 p-8 rounded-2xl border border-dark-300/50 hover:border-primary/50 transition-colors"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-yellow-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <button
            onClick={() => setShowForm(true)}
            className="px-8 py-4 bg-gradient-to-r from-primary to-yellow-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Start Free Training
          </button>
        </motion.div>
      </div>
    </div>
  );
}