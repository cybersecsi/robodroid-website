import appLogo from '@robodroid/assets/logo.png';

function App() {
  return (
    <div className='App'>
      <div>
        <a href='https://secsi.io' target='_blank' rel='noreferrer'>
          <img src={appLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>RoboDroid</h1>
    </div>
  );
}

export default App;
