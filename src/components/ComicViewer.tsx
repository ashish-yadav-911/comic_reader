import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ComicViewerProps {
  currentLanguage: "en" | "ar";
  onNextPage?: (newPage: number) => void;
  onPrevPage?: (newPage: number) => void;
}

const TOTAL_VIDEOS = 4;

export default function ComicViewer({
  currentLanguage,
  onNextPage,
  onPrevPage,
}: ComicViewerProps) {
  const [page, setPage] = useState(1);

  // if parent ever wants to reset page from outside, you could watch a prop here
  // useEffect(() => {
  //   setPage(currentPageFromParent);
  // }, [currentPageFromParent]);

  const handleNext = () => {
    const next = page === TOTAL_VIDEOS ? 1 : page + 1;
    setPage(next);
    onNextPage?.(next);
  };

  const handlePrev = () => {
    const prev = page === 1 ? TOTAL_VIDEOS : page - 1;
    setPage(prev);
    onPrevPage?.(prev);
  };

  // build the file name dynamically
  const prefix = currentLanguage === "ar" ? "vidarab" : "videng";
  const src = `/comic-vedios/${prefix}${page}.mp4`;

  // arrow‐key nav
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [page]);

  return (
    <div className="relative rounded-2xl overflow-hidden bg-gray-100 shadow-lg">
      <div className="aspect-[4/3] bg-white relative">
        <video src={src} controls className="w-full h-full object-contain">
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Navigation Controls */}
      <div className="absolute top-1/2 transform -translate-y-1/2 w-full flex justify-between px-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={handlePrev}
          className="bg-black/50 hover:bg-black/70 text-white"
        >
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleNext}
          className="bg-black/50 hover:bg-black/70 text-white"
        >
          <ArrowRight className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
}
