import React from 'react';
import {FlatList, Text, View} from 'react-native';
import ListItem from './ListItem';
import {styles} from './style';

const Packages = props => {
  const style = styles();
  const ItemSeparator = () => {
    return <View style={style.separatorStyle} />;
  };
  const RenderItem = ({item, index}) => {
    return (
      <>
        {index === 0 && props?.showHeading && (
          <View style={style.headerMargin} />
        )}
        <ListItem
          item={item}
          index={index}
          onPackageSelect={args => props?.onPackageSelect(args)}
          onPackagePress={props?.onPackagePress}
        />
      </>
    );
  };
  return (
    <View style={[style.container, props?.extraStyles]}>
      {props?.showHeading && (
        <View style={style.headingTextContainer}>
          <Text style={style.headingText}>{props?.heading}</Text>
        </View>
      )}
      <FlatList
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
        bounces={false}
        data={props?.data}
        keyExtractor={(item, index) => index}
        renderItem={RenderItem}
        ItemSeparatorComponent={ItemSeparator}
      />
    </View>
  );
};

export default Packages;
