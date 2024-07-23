import React from 'react';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import EmptyComponent from './EmptyComponent';
import ListItem from './ListItem';
import {styles} from './style';
import {MARINER} from '../../styles/colors';

const Packages = props => {
  const style = styles();
  const ItemSeparator = () => {
    return <View style={style.separatorStyle} />;
  };

  const RenderListFooter = () => {
    if (!props?.isMoreData) {
      return null;
    }
    return (
      <View style={{alignItems: 'center'}}>
        <ActivityIndicator size={'small'} color={MARINER} />
      </View>
    );
  };
  const RenderItem = ({item, index}) => {
    return (
      <>
        {index === 0 && props?.showHeading && (
          <View style={style.headerMargin} />
        )}
        <ListItem
          key={index}
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
        keyExtractor={(item, index) => `${index}`}
        renderItem={RenderItem}
        ItemSeparatorComponent={ItemSeparator}
        onEndReached={props?.onEndReached}
        ListFooterComponent={RenderListFooter}
        ListEmptyComponent={() => (
          <EmptyComponent emptyText={props?.emptyText} />
        )}
      />
    </View>
  );
};

export default Packages;
