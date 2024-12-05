import { motion } from 'framer-motion';
import { LeadForm } from './LeadForm';
import { MediaContent } from './MediaContent';
import { useMedia } from '../../contexts/MediaContext';

export function MediaSection() {
  const { showForm } = useMedia();

  return (
    <div className="container mx-auto px-4 pb-2">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <MediaContent />
      </motion.div>
      {showForm && <LeadForm />}
    </div>
  );
}