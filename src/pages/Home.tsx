import { loadFull } from 'tsparticles';
import Particles from 'react-tsparticles';
// RoboDroid specific
import appLogo from '@robodroid/assets/logo.png';
import { options } from '@robodroid/utils/particles';
import { useCallback, useState } from 'react';
import { Engine } from 'tsparticles-engine';

// Library screenshots
import k9MailSetup from '@robodroid/assets/k9-mail-setup.jpg';
import k9MailOpenEmail from '@robodroid/assets/k9-mail-open-email.jpg';
import firefoxAndroidDownload from '@robodroid/assets/firefox-android-download.jpg';

interface ILibraryInfo {
  name: string;
  screenshot: string;
  description: string;
}

const robodroidLibrary: ILibraryInfo[] = [
  {
    name: 'K9 Mail Account Setup',
    description:
      'This behavior automatically performs the setup of an email account on the K9 Mail Android app.',
    screenshot: k9MailSetup,
  },
  {
    name: 'K9 Mail Refresh and Open Email',
    description:
      'This behavior automatically waits for new emails in the K9 Mail app, opens the last one and returns the first link found in the email. This is a common attack vector, as cybercriminals often use phishing emails to trick users into clicking on malicious links.',
    screenshot: k9MailOpenEmail,
  },
  {
    name: 'Firefox Android Open Link and Download',
    description:
      'This behavior automatically performs the download of a given resource based on an input URL using the Firefox Android app',
    screenshot: firefoxAndroidDownload,
  },
];

const Home = () => {
  const [currentCarouselItem, setCurrentCarouselItem] = useState<number>(0);

  const particlesInit = useCallback(async (engine: Engine) => {
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  return (
    <>
      {/* Hero section */}
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

      {/* Library section */}
      <div className='container flex flex-col mx-auto h-screen py-8 justify-around text-slate-800'>
        <h2 className='text-center'>RoboDroid Library</h2>
        <div className='grid grid-cols-2 items-center gap-8'>
          {robodroidLibrary.map((behavior: ILibraryInfo, index: number) => {
            return (
              <div className={currentCarouselItem === index ? 'contents' : 'hidden'} key={index}>
                <div className='flex justify-end'>
                  <img
                    src={behavior.screenshot}
                    className='object-contain max-h-full border-[12px] rounded-lg border-slate-800 drop-shadow-2xl shadow-2xl h-[calc(100vh-200px)]'
                  />
                </div>
                <div>
                  <h3>{behavior.name}</h3>
                  <p>{behavior.description}</p>
                </div>
              </div>
            );
          })}
        </div>
        {/* Carousel dots */}
        <div className='flex gap-4 justify-center'>
          {robodroidLibrary.map((_v: ILibraryInfo, index: number) => {
            return (
              <button
                className={`w-2 h-2 rounded ${
                  currentCarouselItem === index ? 'bg-slate-400' : 'bg-slate-900'
                }`}
                onClick={() => setCurrentCarouselItem(index)}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
