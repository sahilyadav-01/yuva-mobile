import React from 'react';
import {View, Image,ScrollView} from 'react-native';
import Header from '../../../components/Header';
import ProductHub from '../../../components/ProductHub';
import { getDimensions } from '../../../utils/utils';

const CategoryDetails = ({navigation, params}) => {
  const {width,height} = getDimensions();
  return (
    <View style={{flex:1}}>
      <Header
        initial={null}
        showSearch={false}
        showLocation={false}
        homeSearch={true}
        title={params?.item?.name}
      />
       <ScrollView style={{flex:1}}>
      <Image
        source={{uri: params?.item?.imageFilepath}}
        style={{width, height: height * 0.2}}
        resizeMethod="scale"
        resizeMode="stretch"
      />
      <ProductHub onCategoryViewAllPress={()=>{}} showHeading={false} />
      </ScrollView>
    </View>
  );
};

export default CategoryDetails;
