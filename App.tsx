
import React, { useState, useCallback } from 'react';
import { Screen } from './types';
import Home from './screens/Home';
import Tutorial from './screens/Tutorial';
import Studio from './screens/Studio';
import Loading from './screens/Loading';
import Result from './screens/Result';
import Gallery from './screens/Gallery';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.Home);
  const [resultImage, setResultImage] = useState<string | null>(null);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [selectedTheme, setSelectedTheme] = useState<string>('守护成长');

  const navigateTo = useCallback((screen: Screen) => {
    setCurrentScreen(screen);
  }, []);

  const handleGenerationStart = useCallback((image: string, theme: string) => {
    setUploadedImage(image);
    setSelectedTheme(theme);
    setCurrentScreen(Screen.Loading);
  }, []);

  const handleGenerationComplete = useCallback((image: string) => {
    setResultImage(image);
    setCurrentScreen(Screen.Result);
  }, []);

  const renderScreen = () => {
    switch (currentScreen) {
      case Screen.Home:
        return (
          <Home 
            onStart={() => navigateTo(Screen.Tutorial)} 
            onGallery={() => navigateTo(Screen.Gallery)} 
          />
        );
      case Screen.Tutorial:
        return <Tutorial onBack={() => navigateTo(Screen.Home)} onNext={() => navigateTo(Screen.Studio)} />;
      case Screen.Studio:
        return <Studio onBack={() => navigateTo(Screen.Tutorial)} onGenerate={handleGenerationStart} />;
      case Screen.Loading:
        return <Loading uploadedImage={uploadedImage!} theme={selectedTheme} onComplete={handleGenerationComplete} onCancel={() => navigateTo(Screen.Studio)} />;
      case Screen.Result:
        return <Result image={resultImage!} onRegenerate={() => navigateTo(Screen.Studio)} onBack={() => navigateTo(Screen.Home)} />;
      case Screen.Gallery:
        return <Gallery onBack={() => navigateTo(Screen.Home)} onAdd={() => navigateTo(Screen.Studio)} />;
      default:
        return <Home onStart={() => navigateTo(Screen.Tutorial)} onGallery={() => navigateTo(Screen.Gallery)} />;
    }
  };

  return (
    <div className="min-h-screen bg-background-dark text-white selection:bg-primary/30">
      {renderScreen()}
      {/* 移除底部通用导航栏，符合小程序设计风格 */}
    </div>
  );
};

export default App;
