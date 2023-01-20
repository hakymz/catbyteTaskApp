import React from 'react';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
export const KeyboardAvoidingViewWrapper = React.forwardRef(
  (
    {style, contentContainerStyle, children, innerRef = () => {}, ...props},
    ref,
  ) => {
    return (
      <KeyboardAwareScrollView
        innerRef={ref => innerRef(ref)}
        style={{...style}}
        // bounces={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{...contentContainerStyle}}
        {...props}>
        {children}
      </KeyboardAwareScrollView>
    );
  },
);
