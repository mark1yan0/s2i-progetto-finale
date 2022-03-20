import React, { useState } from 'react';
import reactDom from 'react-dom';
import Button from './Button';

const Modal = ({ children, onClose, onSave }) => {
  const [checked, setChecked] = useState(false);

  function handleCheckbox(e) {
    setChecked(e.target.checked);
  }

  return reactDom.createPortal(
    <div
      className='w-11/12 md:w-3/4 h-auto fixed bg-gray-50 rounded p-2  md:p-6 shadow-md'
      style={{
        zIndex: 9000,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    >
      {children}
      <div className='pl-6 mt-6'>
        <input id='save-default' type='checkbox' onChange={handleCheckbox} />
        <label className='ml-2 cursor-pointer' htmlFor='save-default'>
          Salva come default
        </label>
      </div>
      <div className='w-full flex justify-end mt-4'>
        <Button secondary text='Chiudi' onEvent={onClose} />
        {checked && <Button primary text='Salva' onEvent={onSave} />}
      </div>
    </div>,
    document.getElementById('modal')
  );
};

export default Modal;
