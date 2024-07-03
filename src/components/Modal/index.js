import React from 'react';
import {Modal as RNModal, View} from 'react-native';
import {styles} from './style';

const Modal = props => {
  const {
    transparent,
    visible,
    children,
    borderTopRadius,
    innerContainerStyles,
  } = props;
  const {container, innerContainer} = styles({
    modalTopRadius: borderTopRadius ?? null,
  });
  return (
    <RNModal transparent={transparent} visible={visible}>
      <View style={container}>
        <View style={[innerContainer, innerContainerStyles]}>{children}</View>
      </View>
    </RNModal>
  );
};

export default Modal;
