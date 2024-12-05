import { createContext, useContext, useState, ReactNode } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
}

interface MediaContextType {
  isFormCompleted: boolean;
  showForm: boolean;
  setShowForm: (show: boolean) => void;
  handleFormSubmit: (data: FormData) => void;
}

const MediaContext = createContext<MediaContextType | undefined>(undefined);

export function MediaProvider({ children }: { children: ReactNode }) {
  const [isFormCompleted, setIsFormCompleted] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleFormSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
    setIsFormCompleted(true);
    setShowForm(false);
  };

  return (
    <MediaContext.Provider
      value={{
        isFormCompleted,
        showForm,
        setShowForm,
        handleFormSubmit,
      }}
    >
      {children}
    </MediaContext.Provider>
  );
}

export function useMedia() {
  const context = useContext(MediaContext);
  if (!context) {
    throw new Error('useMedia must be used within a MediaProvider');
  }
  return context;
}