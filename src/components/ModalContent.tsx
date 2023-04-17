interface IConfirmModalContentProps {
  onConfirm: () => void;
  onCancel: () => void;
}

export const ConfirmModalContent = ({ onConfirm, onCancel }: IConfirmModalContentProps) => {
  return (
    <div>
      <h2 className='font-bold text-xl text-center mt-2 mb-4'>Are you sure?</h2>
      <div className='flex justify-center mt-6 gap-4'>
        <button className='button-green' onClick={onConfirm}>
          Confirm
        </button>
        <button className='button-red' onClick={onCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
};
