import { useEffect, useRef } from 'react';
import { AiFillCloseCircle } from 'react-icons/ai';
import { useOnClickOutside } from '@robodroid/utils/hooks';

interface IModalProps {
  title: string;
  children: any;
  size?: 'normal' | 'small';
  onClose: () => void;
}

const modalClassesMapping: { [properties: string]: string } = {
  normal: 'w-2/6',
  small: 'w-1/6',
};

const Modal = (props: IModalProps) => {
  const ref = useRef<any>();
  useOnClickOutside(ref, props.onClose);

  const allowOverflow = () => {
    document.body.style.overflowY = 'scroll';
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflowY = 'hidden';
    return allowOverflow;
  }, []);

  const modalClasses = props.size ? modalClassesMapping[props.size] : modalClassesMapping['normal'];

  return (
    <>
      <div className='w-full h-full backdrop-blur-sm flex justify-start absolute bottom-0 left-0 blur-bg z-50'>
        <div
          ref={ref}
          className={`${modalClasses} p-10 bg-white m-auto top-2 rounded-md max-h-screen overflow-y-scroll`}
        >
          <div className='flex justify-between relative align-center'>
            <h3 className='flex-1 text-center text-4xl font-bold py-2'>{props.title}</h3>
            <AiFillCloseCircle
              className='absolute right-0 cursor-pointer transition-colors duration-300 text-red-500 hover:text-red-700'
              size={38}
              onClick={props.onClose}
            />
          </div>

          {props.children}
        </div>
      </div>
    </>
  );
};

export default Modal;
