import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Success } from './components/Success';
import { Footer } from './components/Footer';
import { MediaProvider } from './contexts/MediaContext';

function App() {
  return (
    <MediaProvider>
      <div className="min-h-screen bg-dark-100 relative overflow-hidden">
        <div className="fixed inset-0 bg-grid-pattern bg-grid-sm opacity-5 pointer-events-none" />
        <Header />
        <main>
          <Hero />
          <Features />
          <Success />
          <Footer />
        </main>
      </div>
    </MediaProvider>
  );
}

export default App;