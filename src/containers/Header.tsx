import { useState } from 'react';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import { useScroll } from '@robodroid/utils/hooks';
import appLogo from '@robodroid/assets/logo.png';
import { useSections } from '@robodroid/context';
import { INavlink } from '@robodroid/types/context';

const Header = () => {
  const { sections, scrollToSection } = useSections();
  const [headerFixed, setHeaderFixed] = useState<boolean>(false);
  const handleScroll = () => {
    const scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollPosition > window.innerHeight) {
      setHeaderFixed(true);
    } else {
      setHeaderFixed(false);
    }
  };
  useScroll(handleScroll);

  return (
    <header className={headerFixed ? 'blur-bg-white' : ''}>
      <div className='mini-container flex mx-auto justify-between items-center'>
        <Tippy content='Homepage'>
          <Link to={'/'}>
            <img src={appLogo} className='w-12 h-12' />
          </Link>
        </Tippy>
        <div className='flex gap-8'>
          {sections.map((section: INavlink, key: number) => {
            return (
              <button
                className={`default-tr text-gray-400 hidden md:block  ${
                  headerFixed ? 'hover:text-slate-800' : 'hover:text-slate-100'
                }`}
                onClick={() => scrollToSection(section.ref)}
                key={key}
              >
                {section.name}
              </button>
            );
          })}
          <a href='https://github.com/cybersecsi/robodroid'>
            <button className='button-gray'>Try it</button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
