import {useState} from 'react';

export const useProductDescription = () => {
  const [height, setHeight] = useState(0);
  const injectedScript = `setTimeout(function(){
        window.ReactNativeWebView.postMessage(document.body.offsetHeight);
      },500);
      true;
      `;
  const onMessage = message => setHeight(parseFloat(message.nativeEvent.data));
  return {injectedScript, height, onMessage};
};
