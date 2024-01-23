import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {styles as style} from './style';

const ProductDescription = ({onHeadingPress}) => {
  const styles = style();
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
    </View>
  );
};

export default ProductDescription;
