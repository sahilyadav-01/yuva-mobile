import React from 'react';
import {View} from 'react-native';
import {WebView} from 'react-native-webview';
import {styles as style} from './style';
import {useProductDescription} from './hooks/useProductDescription';

const ProductDescription = ({productDetails, nutritionalValue}) => {
  const styles = style();
  const {injectedScript, height, onMessage} = useProductDescription();
  return (
    <View style={styles.container}>
      {productDetails?.length > 0 && (
        <WebView
          androidLayerType="software"
          javaScriptEnabled={true}
          injectedJavaScript={injectedScript}
          onMessage={onMessage}
          style={[styles.webView, {height}]}
          source={{html: productDetails}}
        />
      )}
      <View style={{height: 8}} />
      {nutritionalValue?.length > 0 && (
        <WebView
          androidLayerType="software"
          javaScriptEnabled={true}
          injectedJavaScript={injectedScript}
          onMessage={onMessage}
          style={[styles.webView, {height}]}
          source={{html: nutritionalValue}}
        />
      )}
    </View>
  );
};

export default ProductDescription;
