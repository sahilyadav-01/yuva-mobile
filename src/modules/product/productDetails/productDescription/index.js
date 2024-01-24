import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles as style} from './style';
import {WebView} from 'react-native-webview';
import {useProductDescription} from './hooks/useProductDescription';

const ProductDescription = ({onHeadingPress, productData, html}) => {
  const styles = style();
  const {injectedScript, height, onMessage} = useProductDescription();
  const HeaderContent = () => {
    return (
      <>
        <View style={styles.rowContainer}>
          <TouchableOpacity
            onPress={() => onHeadingPress(0)}
            style={styles.headingContainer}>
            <Text style={styles.headingText}>DESCRIPTION</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onHeadingPress(1)}
            style={styles.headingContainer}>
            <Text style={styles.headingText}>NUTRITIONAL VALUE</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.divider} />
      </>
    );
  };
  return (
    <View style={styles.container}>
      <HeaderContent />
      <Text style={styles.brandText}>{productData?.brandName}</Text>
      <WebView
        javaScriptEnabled={true}
        injectedJavaScript={injectedScript}
        onMessage={onMessage}
        style={[styles.webView, {height}]}
        source={{html}}
      />
    </View>
  );
};

export default ProductDescription;
