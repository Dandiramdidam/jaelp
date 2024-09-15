const MainWindow = ({ setCurrentWindow }) => {

    return (
      <div className='whole'>
        <div className='headline'>
          <div>witam</div>
        </div>
        <div className='mainopts'>
          <div className='mainopt'>
            <button className='mainbtn' onClick={() => setCurrentWindow('zadanie')}>
                <div>zadanie</div>
            </button>
          </div>
          {/* <div className='mainopt'>
            <button className='mainbtn' onClick={() => setCurrentWindow('mCalculator')}>
              {language === 'pl' ? 'Kalkulator parametrów' : 'Machining calculator'}
            </button>
          </div>
          <div className='mainopt'>
            <button className='mainbtn' onClick={() => setCurrentWindow('cncCommands')}>
              {language === 'pl' ? 'Polecenia dla urządzeń CNC' : 'Code for CNC machines'}
            </button>
          </div>
          <div className='mainopt'>
            <button className='mainbtn' onClick={() => setCurrentWindow('tCalculator')}>
              {language === 'pl' ? 'Kalkulator tolerancji' : 'Tolerance calculator'}
            </button>
          </div>
          <div className='mainopt'>
            <button className='mainbtn' onClick={() => setCurrentWindow('hThreads')}>
              {language === 'pl' ? 'Rozmiar otworu pod gwint' : 'Hole sizes for threads'}
            </button> */}
          {/* </div> */}
        </div>
      </div>
    );
  };
  
  export default MainWindow;