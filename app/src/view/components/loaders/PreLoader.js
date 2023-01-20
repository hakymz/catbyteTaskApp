import React from 'react';
import {ActivityIndicator, Image, View} from 'react-native';
import {COLORS} from '../../../conts';
import {useSelector} from 'react-redux';
import {updatePreloader} from '../../../redux/slices/modals/loaderSlice';
import store from '../../../redux/store';

import {s} from 'react-native-size-matters';
import {Button, Text} from '../general';

const Loader = () => {
  const {
    visible,
    type = null,
    title = '',
    message = '',
    proceedMethod = null,
    btnTitle = 'Okay',
    backgroundColor,
    loaderSize,
  } = useSelector(state => state.loader) || {};

  return (
    visible && (
      <View
        style={{
          height: '100%',
          backgroundColor: backgroundColor,
          width: '100%',
          justifyContent: 'center',
          paddingHorizontal: 30,
        }}>
        {!type ? (
          <View
            style={{
              height: 100,
              backgroundColor: COLORS.white,
              justifyContent: 'center',
              borderRadius: 7,
            }}>
            <ActivityIndicator size={loaderSize} color={COLORS.primary} />
            <Text
              textAlign="center"
              semiBold
              size={16}
              style={{marginTop: 10}}
              color={COLORS.lightBlack}>
              Loading...
            </Text>
          </View>
        ) : (
          <View style={{flex: 1, paddingHorizontal: 20}}>
            <View
              style={{
                marginTop: 50,
                flex: 1,
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}>
              {type == 'error' ? (
                <Image
                  style={{height: s(80), width: s(80)}}
                  source={require('../../../assets/images/error.png')}
                />
              ) : (
                <Image
                  style={{height: s(80), width: s(80)}}
                  source={require('../../../assets/images/success.png')}
                />
              )}

              <Text style={{marginTop: 20}} size={18} semiBold>
                {title}
              </Text>
              <Text style={{marginTop: 10}} textAlign="center">
                {message}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                justifyContent: 'flex-end',
                marginBottom: 60,
              }}>
              <Button
                title={btnTitle}
                onPress={
                  typeof proceedMethod == 'function'
                    ? () => {
                        hide?.();
                        proceedMethod?.();
                      }
                    : hide?.()
                }
              />
            </View>
          </View>
        )}
      </View>
    )
  );
};

const show = options => {
  const {
    message,
    type,
    button,
    backgroundColor = COLORS.white,
    loaderSize = 'large',
  } = options || {};
  store.dispatch(
    updatePreloader({
      visible: true,
      message: message ?? 'Loading...',
      button,
      backgroundColor,
      loaderSize,
    }),
  );
};

const hide = () => {
  store.dispatch(
    updatePreloader({
      visible: false,
      message: '',
      type: '',
      title: '',
      message: '',
      btnTitle: '',
    }),
  );
};
const update = options => {
  const {
    type = null,
    button,
    title,
    message,
    btnTitle,
    proceedMethod = null,
  } = options || {};
  store.dispatch(
    updatePreloader({
      visible: true,
      type,
      button,
      title,
      message,
      btnTitle,
      proceedMethod,
    }),
  );
};

export const Preloader = {
  Loader,
  show,
  hide,
  update,
};
