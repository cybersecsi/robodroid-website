import appLogo from '@robodroid/assets/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className='mini-container flex mx-auto justify-between'>
        <Link to={'/'}>
          <img src={appLogo} className='w-12 h-12' />
        </Link>
        <div>
          <a href='https://github.com/cybersecsi/robodroid'>
            <button className='button-gray'>Try it</button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
