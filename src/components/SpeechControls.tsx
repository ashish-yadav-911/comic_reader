import { CirclePause, CirclePlay } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";

interface SpeechControlsProps {
  progress: number;
}

export const SpeechControls = ({ progress }: SpeechControlsProps) => {
  return (
    <div className="relative">
      {/* <Button
        variant="ghost"
        size="icon"
        onClick={onPlayPause}
        className="relative z-10 h-16 w-16 rounded-full bg-blue-500 hover:bg-blue-600 text-white"
      >
        {isSpeaking ? (
          <CirclePause className="h-8 w-8" />
        ) : (
          <CirclePlay className="h-8 w-8" />
        )}
      </Button> */}

      <div className="absolute top-0 left-0 w-full h-full -z-0">
        <Progress
          value={progress}
          className="absolute top-0 left-0 w-full h-full rounded-full [transform:rotate(-90deg)] bg-blue-200"
        />
      </div>
    </div>
  );
};
