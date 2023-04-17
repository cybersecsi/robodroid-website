import appLogo from '@robodroid/assets/logo.png';

const Home = () => {
  return (
    <>
      <div>
        <a href='https://secsi.io' target='_blank' rel='noreferrer'>
          <img src={appLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>RoboDroid</h1>
    </>
  );
};

export default Home;
