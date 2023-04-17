import { useCallback, useState } from 'react';
import { loadFull } from 'tsparticles';
import Particles from 'react-tsparticles';
import { Engine } from 'tsparticles-engine';
import { ClipboardCode } from '@robodroid/components';
import { particlesOptions } from '@robodroid/utils/particles';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
// Assets
import appLogo from '@robodroid/assets/logo.png';
import exampleKillChain from '@robodroid/assets/kill-chain-example.png';
import howItWorks from '@robodroid/assets/how-it-works.png';

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
      'This behavior automatically performs the setup of an email account on the K9 Mail Android app. This feature is particularly useful in a cyber range environment, where users may need to quickly set up multiple email accounts in order to simulate different scenarios. By automating the email account setup process, users can save time and reduce the risk of errors that can occur when manually entering server settings. This allows users to focus on the tasks at hand, rather than getting bogged down in the setup process.',
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
      'This behavior automatically performs the download of a given resource based on an input URL using the Firefox Android app. This behavior enables the user to simulate a person that mistakenly clicks on a link, downloads and installs a malicious file. This feature is particularly useful in cyber range environment.',
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
        <Particles className='particles' options={particlesOptions} init={particlesInit} />
        <div className='relative flex flex-col gap-8 items-center justify-center h-full'>
          <img src={appLogo} className='h-60' alt='RoboDroid Logo' />
          <h1 className='text-slate-100'>RoboDroid</h1>
          <a href='https://secsi.io' target='_blank' rel='noreferrer'>
            <button className='button-common'>Learn More</button>
          </a>
        </div>
      </div>

      {/* Overview section */}
      <div className='bg-white p-8 flex flex-col gap-4 text-slate-800'>
        <h2 className='text-center'>Overview</h2>
        <div className='container card bg-slate-100 border-0 mx-auto gap-8 grid grid-cols-5 p-4'>
          <div className='flex flex-col gap-4 col-span-2'>
            <h3 className='text-center'>
              ⚡ Manage Android machines with pre-defined behaviors for Cyber Range environments.
            </h3>
            <p className='text-justify'>
              The goal of RoboDroid is to provide a simple way to introduce mobile components in
              Cyber Range environments. Its main objective is to provide users with an easy-to-use
              platform that allows them to simulate human-like behaviors and actions on mobile
              devices. RoboDroid leverages Frida technology to run behaviors that are specific to
              applications, while using ADB for all other operations. This powerful combination
              enables users to create workflows of preset behaviors that can simulate a mobile
              user&apos;s actions. One example of a workflow that can be used in a cyber range
              environment involves simulating a mobile user receiving a phishing email, clicking on
              the link contained in the email, and subsequently downloading a malware.
            </p>
          </div>
          <div className='col-span-3'>
            <img src={exampleKillChain} alt='Kill Chain Example' />
          </div>
        </div>
      </div>

      {/* Library section */}
      <div className='relative'>
        <div className='container flex flex-col mx-auto h-screen py-8 justify-between text-slate-800'>
          <h2 className='text-center'>RoboDroid Library</h2>
          <div className='grid grid-cols-2 items-center gap-8'>
            {robodroidLibrary.map((behavior: ILibraryInfo, index: number) => {
              return (
                <div className={currentCarouselItem === index ? 'contents' : 'hidden'} key={index}>
                  <div className='flex justify-end'>
                    <div className=' border-[12px] rounded-3xl border-slate-800 drop-shadow-2xl shadow-2xl'>
                      <img
                        src={behavior.screenshot}
                        alt={behavior.name}
                        className='animate__animated animate__fadeIn rounded-xl object-contain max-h-full h-[calc(100vh-200px)]'
                      />
                    </div>
                  </div>
                  <div className='animate__animated animate__slideInDown'>
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
          {/* Chevrons */}
          {currentCarouselItem > 0 && (
            <BsChevronLeft
              className='carousel-chevron left-8 animate__animated animate__fadeIn'
              size={36}
              onClick={() => setCurrentCarouselItem((old: number) => old - 1)}
            />
          )}
          {currentCarouselItem < robodroidLibrary.length - 1 && (
            <BsChevronRight
              className='carousel-chevron right-8 animate__animated animate__fadeIn'
              size={36}
              onClick={() => setCurrentCarouselItem((old: number) => old + 1)}
            />
          )}
        </div>
      </div>

      {/* Demo section */}
      <div className='bg-white p-8'>
        <div className='container flex mx-auto flex-col justify-center items-center gap-8 text-slate-800'>
          <h2 className='text-center'>Demo</h2>
          <iframe
            width='853'
            height='480'
            src={`https://www.youtube.com/embed/jn8OQZyNLD4`}
            allow='autoplay; picture-in-picture'
            allowFullScreen
            title='Embedded youtube'
          />
        </div>
      </div>

      {/* Quickstart section */}
      <div className='container flex mx-auto flex-col justify-center items-center gap-8 text-slate-800 p-8'>
        <h2 className='text-center'>Quickstart</h2>
        <div className='flex flex-col items-center gap-4 text-center'>
          <p>You can easily install it by running:</p>
          <div className='w-full'>
            <ClipboardCode fixedBtn={true}>pipx install robodroid</ClipboardCode>
          </div>
          <p>
            We suggest you to use <code>pipx</code> instead of <code>pip</code> because in future
            Python versions package installation with <code>pip</code> will be removed outside
            virtual environments.
          </p>
          <p>
            RoboDroid has built-in support for automatic behaviors download and update from the
            RoboDroid Library repository, so you don&apos;t need to install it.
          </p>
          <p>
            After installing RoboDroid you just need to create a config file for the workflow (list
            of behaviors) you want to run:
          </p>
          <img src={howItWorks} className='max-w-2xl' alt='How RoboDroid works' />
        </div>
      </div>
    </>
  );
};

export default Home;
