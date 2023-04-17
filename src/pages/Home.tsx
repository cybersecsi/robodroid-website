import { loadFull } from 'tsparticles';
import Particles from 'react-tsparticles';
// RoboDroid specific
import appLogo from '@robodroid/assets/logo.png';
import { options } from '@robodroid/utils/particles';
import { useCallback } from 'react';
import { Engine } from 'tsparticles-engine';

const Home = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  return (
    <>
      <div className='hero'>
        <Particles className='particles' options={options} init={particlesInit} />
        <div className='relative flex flex-col gap-8 items-center justify-center h-full'>
          <img src={appLogo} className='h-60' alt='RoboDroid Logo' />
          <h1 className='text-slate-100'>RoboDroid</h1>
          <a href='https://secsi.io' target='_blank' rel='noreferrer'>
            <button className='button-common'>Learn More</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
