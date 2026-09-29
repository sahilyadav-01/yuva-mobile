import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {Button, Paragraph, Dialog, Portal, Provider} from 'react-native-paper';

const AlertBox = ({showDialog, hideDialog, message}) => {
  return (
    <Portal>
      <Dialog style={{}} visible={showDialog} onDismiss={hideDialog}>
        <Dialog.Title>Error</Dialog.Title>
        <Dialog.Content>
          <Paragraph>{message}</Paragraph>
        </Dialog.Content>
        <Dialog.Actions>
          <Button onPress={hideDialog}>Ok</Button>
        </Dialog.Actions>
      </Dialog>
    </Portal>
  );
};

export default AlertBox;
