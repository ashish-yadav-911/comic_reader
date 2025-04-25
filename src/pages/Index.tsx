import { useState } from "react";
import ComicViewer from "@/components/ComicViewer";
import LanguageSelector from "@/components/LanguageSelector";
import { SpeechControls } from "@/components/SpeechControls";

const Index = () => {
  const [currentLanguage, setCurrentLanguage] = useState<"en" | "ar">("en");
  const [progress, setProgress] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 4;

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : 1));
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div className="min-h-screen bg-white p-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">Comic Reader</h1>
        <div className="flex justify-center mb-6">
          <LanguageSelector
            currentLanguage={currentLanguage}
            onLanguageChange={setCurrentLanguage}
          />
        </div>
        <ComicViewer
          currentLanguage={currentLanguage}
          // currentPage={currentPage}
          onNextPage={handleNextPage}
          onPrevPage={handlePrevPage}
        />
        <div className="flex justify-center mt-6">
          <SpeechControls progress={progress} />
        </div>
        <p className="text-center mt-4 text-gray-600">
          Page {currentPage} of {totalPages}
        </p>
        <p className="text-center mt-2 text-sm text-gray-500">
          Press Space to Play/Pause, Arrow Keys to Navigate
        </p>
      </div>
    </div>
  );
};

export default Index;
