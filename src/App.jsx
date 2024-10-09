import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './games/Game';
import MainWindow from './MainWindow';

function App() {

  const [currentWindow, setCurrentWindow] = useState('main');

  const renderWindow = () => {
    switch(currentWindow) {
      case 'main':
        return <MainWindow setCurrentWindow={setCurrentWindow} />;
      // case 'main':
      //   return <MainWindow setCurrentWindow={setCurrentWindow} language={language} />;
      case 'zadanie':
        return <Game />;
      // case 'nCalculator':
      //   return <Calculator language={language} />;
      // case 'mCalculator':
      //   return <MachiningCalculator language={language} />;
      // case 'cncCommands':
      //   return <CodeBase language={language} />;
      // case 'tCalculator':
      //   return <ToleranceCalculator language={language} />;
      // case 'hThreads':
      //   return <Threads language={language} />;
      default:
        return <MainWindow setCurrentWindow={setCurrentWindow} />;
      // default:
      //   return <MainWindow setCurrentWindow={setCurrentWindow} language={language} />;
    }
  };

  return (
    <div className="App">
      <div className='container'>
        {/* <NavBar
          changeLanguage={handleChangeLanguage}
          setCurrentWindow={setCurrentWindow}
          language={language}
          currentWindow={currentWindow}
          openHelpModal={openHelpModal}
        /> */}
        {/* <HelpModal 
          isVisible={isHelpModalVisible} 
          content={helpContent}
          onClose={closeHelpModal}
          language={language}
        /> */}
        {renderWindow()}
      </div>
    </div>
  );
}

export default App;

