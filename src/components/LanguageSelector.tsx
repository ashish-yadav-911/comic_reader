
import { Button } from '@/components/ui/button';

interface LanguageSelectorProps {
  currentLanguage: 'en' | 'ar';
  onLanguageChange: (language: 'en' | 'ar') => void;
}

const LanguageSelector = ({ currentLanguage, onLanguageChange }: LanguageSelectorProps) => {
  return (
    <div className="flex items-center gap-2">
      <span className="text-gray-600 mr-2">Select Language:</span>
      <Button
        variant={currentLanguage === 'en' ? 'default' : 'outline'}
        onClick={() => onLanguageChange('en')}
        className="min-w-20"
      >
        English
      </Button>
      <Button
        variant={currentLanguage === 'ar' ? 'default' : 'outline'}
        onClick={() => onLanguageChange('ar')}
        className="min-w-20"
      >
        العربية
      </Button>
    </div>
  );
};

export default LanguageSelector;
