import { useState } from 'react';
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import { useScroll } from '@robodroid/utils/hooks';
import appLogo from '@robodroid/assets/logo.png';

const Header = () => {
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
        <div className='flex gap-4'>
          <a href='https://github.com/cybersecsi/robodroid'>
            <button className='button-gray'>Try it</button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
