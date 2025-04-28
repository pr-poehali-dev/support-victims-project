import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mic, MicOff, Volume2, VolumeX } from "lucide-react";

const VoiceAssistant: React.FC = () => {
  const [isVoiceActive, setIsVoiceActive] = useState(false);
  const [isSpeechActive, setIsSpeechActive] = useState(false);

  const toggleVoice = () => {
    setIsVoiceActive(prev => !prev);
    if (!isVoiceActive) {
      // Здесь будет имитация включения голосового помощника
      alert("Голосовое управление включено. Пожалуйста, говорите после сигнала.");
    }
  };

  const toggleSpeech = () => {
    setIsSpeechActive(prev => !prev);
    // Здесь будет имитация включения/выключения озвучивания
    alert(isSpeechActive 
      ? "Озвучивание текста выключено" 
      : "Озвучивание текста включено. Сайт будет читать вам информацию.");
  };

  return (
    <Card className="bg-sos-cream sos-shadow">
      <CardContent className="p-6">
        <div className="text-center mb-4">
          <h3 className="text-2xl font-bold text-sos-darkGray mb-2">Голосовой помощник</h3>
          <p className="text-sos-gray text-large">Используйте голос для управления или прослушивания информации</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Button
            onClick={toggleVoice}
            className={`p-6 h-auto flex flex-col items-center text-white text-large ${
              isVoiceActive 
                ? "bg-sos-green hover:bg-sos-darkGreen" 
                : "bg-sos-gray hover:bg-sos-darkGray"
            }`}
          >
            <div className="text-3xl mb-2">
              {isVoiceActive ? <Mic className="h-8 w-8" /> : <MicOff className="h-8 w-8" />}
            </div>
            <span className="font-medium">{isVoiceActive ? "Выключить микрофон" : "Включить микрофон"}</span>
            <span className="text-sm mt-1 opacity-80">
              {isVoiceActive ? "Я вас слушаю" : "Голосовое управление"}
            </span>
          </Button>
          
          <Button
            onClick={toggleSpeech}
            className={`p-6 h-auto flex flex-col items-center text-white text-large ${
              isSpeechActive 
                ? "bg-sos-green hover:bg-sos-darkGreen" 
                : "bg-sos-gray hover:bg-sos-darkGray"
            }`}
          >
            <div className="text-3xl mb-2">
              {isSpeechActive ? <Volume2 className="h-8 w-8" /> : <VolumeX className="h-8 w-8" />}
            </div>
            <span className="font-medium">{isSpeechActive ? "Выключить чтение" : "Включить чтение"}</span>
            <span className="text-sm mt-1 opacity-80">
              {isSpeechActive ? "Озвучивание активно" : "Озвучивание текста"}
            </span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default VoiceAssistant;
