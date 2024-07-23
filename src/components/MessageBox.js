import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {Button, Paragraph, Dialog, Portal, Provider} from 'react-native-paper';

const MessageBox = ({head, showDialog, hideDialog, message}) => {
  return (
    <Portal>
      <Dialog visible={showDialog} onDismiss={hideDialog}>
        <Dialog.Title>{head}</Dialog.Title>
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

export default MessageBox;
