import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { SUCCESS_STORIES_IMAGES, getImageUrl } from '../config/images';
import { useMedia } from '../contexts/MediaContext';

export function Success() {
  const { setShowForm } = useMedia();

  return (
    <div id="success-stories" className="relative py-32 bg-dark-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Success
            <span className="bg-gradient-to-r from-primary to-yellow-500 text-transparent bg-clip-text"> Stories</span>
          </h2>
          <p className="text-xl text-gray-400">
            See how our training has transformed businesses worldwide
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              company: 'CrepChiefNotify',
              stat: '42M',
              metric: 'Views This Year',
              quote: 'Implementing these strategies transformed our business operations and significantly boosted our bottom line.',
              image: SUCCESS_STORIES_IMAGES.crepChiefNotify
            },
            {
              company: 'SellerCircle',
              stat: '26M',
              metric: 'Views This Year',
              quote: 'The methodologies helped us scale while maintaining quality and client satisfaction.',
              image: SUCCESS_STORIES_IMAGES.sellerCircle
            }
          ].map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative rounded-2xl overflow-hidden"
            >
              <div className="absolute inset-0">
                <img
                  src={getImageUrl(story.image)}
                  alt={story.company}
                  className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-200 to-transparent"></div>
              </div>
              
              <div className="relative p-8">
                <Quote className="w-10 h-10 text-primary/50 mb-6" />
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl font-bold bg-gradient-to-r from-primary to-yellow-500 text-transparent bg-clip-text">
                    {story.stat}
                  </span>
                  <span className="text-gray-300">{story.metric}</span>
                </div>
                <p className="text-gray-300 text-lg mb-4">"{story.quote}"</p>
                <p className="text-primary font-medium">{story.company}</p>
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
            Join Free Training Now
          </button>
        </motion.div>
      </div>
    </div>
  );
}