import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useState } from 'react';
import { useMedia } from '../../contexts/MediaContext';

interface FormData {
  name: string;
  email: string;
  phone: string;
}

export function LeadForm() {
  const { handleFormSubmit, setShowForm } = useMedia();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleFormSubmit(formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4"
    >
      <div className="relative w-full max-w-md bg-dark-200 p-8 rounded-2xl border border-dark-300/50">
        <button
          onClick={() => setShowForm(false)}
          className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        <h3 className="text-2xl font-bold text-white mb-6 text-center">
          Get Access to
          <span className="bg-gradient-to-r from-primary to-yellow-500 text-transparent bg-clip-text"> Free Training</span>
        </h3>

        <form onSubmit={onSubmit} className="space-y-6">
          {[
            { id: 'name', label: 'Full Name', type: 'text' },
            { id: 'email', label: 'Email Address', type: 'email' },
            { id: 'phone', label: 'Phone Number', type: 'tel' }
          ].map((field) => (
            <div key={field.id}>
              <label
                htmlFor={field.id}
                className="block text-sm font-medium text-gray-300 mb-2"
              >
                {field.label}
              </label>
              <input
                type={field.type}
                id={field.id}
                required
                className="w-full px-4 py-3 bg-dark-300 border border-dark-400 rounded-lg text-white placeholder-gray-500 focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                value={formData[field.id as keyof FormData]}
                onChange={(e) =>
                  setFormData({ ...formData, [field.id]: e.target.value })
                }
              />
            </div>
          ))}

          <button
            type="submit"
            className="w-full py-4 bg-gradient-to-r from-primary to-yellow-500 text-white rounded-lg font-medium hover:opacity-90 transition-opacity"
          >
            Watch Free Training
          </button>
        </form>
      </div>
    </motion.div>
  );
}