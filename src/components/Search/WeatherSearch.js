import React from 'react';
import Modal from '../Modal';
import WeatherView from '../Weather/WeatherView';
import { BsSearch } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import Backdrop from '../SideNav/Backdrop';
import { weatherSelector } from '../../services/weatherSlice';

const WeatherSearch = ({
  updateSearch,
  handleSave,
  handleClose,
  openModal,
  setOpenModal,
}) => {
  const { weather, loading, hasErrors } = useSelector(weatherSelector);

  return (
    <form className='flex mt-2 sm:mt-0'>
      {!hasErrors && !loading && (
        <BsSearch
          className='text-text-light cursor-pointer'
          onClick={() => setOpenModal(true)}
        />
      )}

      {openModal && <Backdrop toggleBackdrop={setOpenModal} />}

      {openModal && (
        <Modal onClose={handleClose} onSave={handleSave}>
          <>
            <div className='relative my-6'>
              <BsSearch
                className='text-xl absolute left-2 text-primary-dark'
                style={{ bottom: 5 }}
              />
              <input
                className='rounded-full pl-8 pr-2 py-1 w-full focus:outline text-primary-dark focus:border-primary-dark'
                placeholder='Cerca Località (in inglese)'
                type='text'
                onChange={updateSearch}
              />
            </div>

            <WeatherView
              modal
              weather={weather}
              loading={loading}
              hasErrors={hasErrors}
            />
          </>
        </Modal>
      )}
    </form>
  );
};

export default WeatherSearch;
