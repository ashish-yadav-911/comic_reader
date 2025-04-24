
import { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ComicViewerProps {
  currentLanguage: 'en' | 'ar';
  currentPage: number;
  onNextPage: () => void;
  onPrevPage: () => void;
}

const ComicViewer = ({ currentLanguage, currentPage, onNextPage, onPrevPage }: ComicViewerProps) => {
  
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        onPrevPage();
      } else if (e.key === 'ArrowRight') {
        onNextPage();
      }
    };
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [onPrevPage, onNextPage]);

  return (
    <div className="relative rounded-2xl overflow-hidden bg-gray-100 shadow-lg">
      <div className="aspect-[4/3] bg-white relative">
        {/* <img 
          src="/lovable-uploads/e03f1dae-933e-48e4-825c-d091efe2c519.png" 
          alt="Comic panel"
          className="w-full h-full object-contain"
        /> */}
        
        <div className="absolute bottom-0 left-0 w-full p-6 pointer-events-none">
          <p 
            className="text-4xl font-bold text-white text-center leading-tight"
            style={{
              textShadow: `
                2px 2px 0 #000,
                -2px -2px 0 #000,
                2px -2px 0 #000,
                -2px 2px 0 #000,
                0 2px 0 #000,
                2px 0 0 #000,
                0 -2px 0 #000,
                -2px 0 0 #000
              `,
              WebkitTextStroke: '2px #000'
            }}
          >
          </p>
        </div>
      </div>
      
      {/* Navigation Controls */}
      <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between px-4">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={onPrevPage}
          className="bg-black/50 hover:bg-black/70 text-white"
          disabled={currentPage === 1}
        >
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={onNextPage}
          className="bg-black/50 hover:bg-black/70 text-white"
          disabled={currentPage === 4}
        >
          <ArrowRight className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};

export default ComicViewer;
