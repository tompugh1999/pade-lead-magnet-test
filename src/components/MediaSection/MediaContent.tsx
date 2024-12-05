import { useEffect, useRef } from 'react';
import { Play } from 'lucide-react';
import { useMedia } from '../../contexts/MediaContext';

export function MediaContent() {
  const { isFormCompleted, setShowForm } = useMedia();
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isFormCompleted && videoRef.current) {
      const script1 = document.createElement('script');
      script1.src = 'https://fast.wistia.com/embed/medias/mrlvueuz9g.jsonp';
      script1.async = true;
      document.head.appendChild(script1);

      const script2 = document.createElement('script');
      script2.src = 'https://fast.wistia.com/assets/external/E-v1.js';
      script2.async = true;
      document.head.appendChild(script2);

      return () => {
        script1.remove();
        script2.remove();
      };
    }
  }, [isFormCompleted]);

  if (!isFormCompleted) {
    return (
      <div 
        className="relative w-full aspect-video rounded-2xl overflow-hidden group cursor-pointer"
        onClick={() => setShowForm(true)}
      >
        <img
          src="https://imagedelivery.net/ADlQbkY9PERiMvJxXuJSrQ/f1885953-b6b6-4cc1-c97f-10a445603000/public"
          alt="Training Preview"
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="bg-primary/90 p-4 rounded-full">
            <Play className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div ref={videoRef} className="w-full aspect-video rounded-2xl overflow-hidden">
      <div className="wistia_responsive_padding" style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
        <div className="wistia_responsive_wrapper" style={{ height: '100%', left: 0, position: 'absolute', top: 0, width: '100%' }}>
          <div className="wistia_embed wistia_async_mrlvueuz9g videoFoam=true" style={{ height: '100%', position: 'relative', width: '100%' }}>
            <div className="wistia_swatch" style={{ height: '100%', left: 0, opacity: 0, overflow: 'hidden', position: 'absolute', top: 0, transition: 'opacity 200ms', width: '100%' }}>
              <img
                src="https://fast.wistia.com/embed/medias/mrlvueuz9g/swatch"
                style={{ filter: 'blur(5px)', height: '100%', objectFit: 'contain', width: '100%' }}
                alt=""
                aria-hidden="true"
                onLoad={(e) => {
                  const parent = e.currentTarget.parentNode as HTMLElement;
                  if (parent) {
                    parent.style.opacity = '1';
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}