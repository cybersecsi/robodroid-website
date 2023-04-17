import { FaGithub, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='robodroid-footer'>
      <div className='container flex mx-auto justify-between'>
        {/* Left links */}
        <div className='flex'>
          <a
            className='ml-3 text-gray-500 hover:text-white'
            href='https://github.com/cybersecsi/robodroid'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithub size={24} />
          </a>
          <a
            className='ml-3 text-gray-500 hover:text-white '
            href='https://twitter.com/cybersecsi'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaTwitter size={24} />
          </a>
        </div>
        {/* SecSI credits */}
        <div>
          A{' '}
          <a
            className='text-sky-500 hover:text-sky-400'
            href='https://secsi.io'
            target='_blank'
            rel='noreferrer'
          >
            SecSI
          </a>{' '}
          project
        </div>
        {/* Copyright */}
        <span>Copyright &copy; {new Date().getFullYear()} All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
