import Spinner from '@robodroid/components/Spinner';

interface ILoadingProps {
  blur?: boolean;
}

const Loading = (props: ILoadingProps) => {
  return (
    <div
      className={`w-full h-full flex justify-start items-center absolute bottom-0 left-0 z-[999] ${
        props.blur ? 'blur-bg' : 'bg-slate-900'
      }`}
    >
      <div className='bg-white dark:bg-gray-800 m-auto rounded-md overflow-hidden p-6 shadow-lg'>
        <Spinner size='60' color='rgb(225 29 72)' />
      </div>
    </div>
  );
};

export default Loading;
