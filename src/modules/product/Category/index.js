import React from 'react';
import Header from '../../../components/Header';
import {
  FlatList,
  View,
  Image,
  Text,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import {SVG} from '../../../../assets';
import {ORANGE} from '../../../styles/colors';
import {styles as style} from './styles';
import {useCategory} from './hooks/useCategory';

const Categories = () => {
  const {categories, onCategoryPress} = useCategory();
  const styles = style();
  const RenderContent = ({item}) => {
    return (
      <TouchableOpacity
        onPress={() => onCategoryPress(item)}
        style={styles.itemContainer}>
        <Image source={{uri: item?.imageFilepath}} style={styles.imageStyle} />
        <View style={styles.rowContainer}>
          <Text style={styles.categoryName}>{item.name}</Text>
          <SVG.ArrowRight color={ORANGE} />
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <>
      <Header
        initial={null}
        showSearch={false}
        showLocation={false}
        homeSearch={true}
        title="Categories"
      />
      {categories.loading && (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size={'large'} />
        </View>
      )}
      {categories.error && (
        <View style={styles.loaderContainer}>
          <Text style={styles.errorText}>Error Fetching Categories</Text>
        </View>
      )}
      {!categories.loading && categories?.data?.length === 0 && (
        <View style={styles.loaderContainer}>
          <Text style={styles.errorText}>No Categories</Text>
        </View>
      )}
      {!categories.loading && categories?.data?.length > 0 && (
        <FlatList
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          style={styles.listStyle}
          data={categories.data}
          keyExtractor={(_, index) => `category${index}`}
          renderItem={({item}) => <RenderContent item={item} />}
        />
      )}
    </>
  );
};

export default Categories;
