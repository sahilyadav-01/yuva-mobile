import React from 'react';
import {View, FlatList} from 'react-native';
import {styles} from './style';
import RenderPlans from '../Plans';

const DetailsView = props => {
  const {item, renderList} = props;
  const {listExpandContainer, itemSeparatorStyle} = styles();

  const renderPlans = ({item, index}) => {
    return <RenderPlans item={item} index={index} />;
  };

  return (
    <>
      {renderList && (
        <View style={listExpandContainer}>
          <FlatList
            data={item?.planServiceDtoList}
            keyExtractor={index => index}
            renderItem={renderPlans}
            ItemSeparatorComponent={() => <View style={itemSeparatorStyle} />}
          />
        </View>
      )}
    </>
  );
};

export default DetailsView;
