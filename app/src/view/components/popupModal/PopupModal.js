import React from 'react';
import {View, StyleSheet, TouchableOpacity, BackHandler} from 'react-native';
import {COLORS} from '../../../conts';
import store from '../../../redux/store';
import {updatePopupModal} from '../../../redux/slices';
import {useDispatch, useSelector} from 'react-redux';
import {s} from 'react-native-size-matters';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import {useLayouts} from '../../../hooks';
import {Icons} from '../general';

let backHandler;

const show = ({component, height = 350}) => {
  store.dispatch(
    updatePopupModal({visible: true, hideModal: false, component, height}),
  );
};

const hide = (visible = false) => {
  store.dispatch(updatePopupModal({hideModal: true, visible: visible}));
};

const Modal = () => {
  const {
    visible,
    hideModal,
    component = null,
    height,
  } = useSelector(state => state.popupModal);

  const dispatch = useDispatch();
  const [showModal, setShowModal] = React.useState(false);

  const aniValue = useSharedValue(0);
  React.useEffect(() => {
    if (showModal) {
      openModal();
    }
  }, [showModal]);

  React.useEffect(() => {
    if (visible == true) {
      setShowModal(true);
    }

    if (visible) {
      backHandler = BackHandler.addEventListener('hardwareBackPress', close);
    } else {
      backHandler?.remove?.();
    }
    return () => {
      // backHandler.remove();
    };
  }, [visible]);

  React.useEffect(() => {
    if (hideModal) {
      close();
    }
  }, [hideModal]);

  const animatedStyle = useAnimatedStyle(() => {
    return {transform: [{scale: aniValue?.value}]};
  });
  const close = () => {
    aniValue.value = withTiming(0, {
      duration: 200,
    });

    setTimeout(() => {
      dispatch(updatePopupModal({visible: false, hideModal: true}));
      setShowModal(false);
    }, 300);
  };

  const openModal = () => {
    if (showModal) {
      aniValue.value = withTiming(1, {
        duration: 200,
      });
    }
  };

  return (
    showModal && (
      <View style={{...styles.container}}>
        <Animated.View style={[{...styles.modal, height}, animatedStyle]}>
          <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
            <TouchableOpacity
              onPress={() => hide()}
              style={{
                height: s(30),
                width: s(30),
                backgroundColor: COLORS.secondary,
                borderRadius: 300,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icons.Cancel size={15} />
            </TouchableOpacity>
          </View>
          <View style={{flex: 1}}>{component}</View>
        </Animated.View>
      </View>
    )
  );
};

export const PopupModal = {
  Modal,
  show,
  hide,
};

const styles = StyleSheet.create({
  modal: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: COLORS.white,
    paddingBottom: 50,
    minHeight: 200,
    borderRadius: 30,
    width: '100%',
  },
  container: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    justifyContent: 'flex-end',
    position: 'absolute',
    zIndex: 1,
    width: '100%',
    height: '100%',
    paddingHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
