import React from 'react';
import {Modal} from 'react-native';
import {useSelector} from 'react-redux';
import {BottomModal} from '../bottomModal';
import {Preloader} from '../loaders';

//Use to wrap all the modals to opening aviod errors in ios
const ModalContainer = () => {
  const loader = useSelector(state => state.loader);
  return (
    <Modal
      hardwareAccelerated={true}
      visible={loader?.visible}
      transparent={true}>
      {loader?.visible && <Preloader.Loader />}
    </Modal>
  );
};

export default ModalContainer;
