import React from 'react';
import {Text, View} from 'react-native';
import {SVG} from '../../../assets';
import {styles} from './styles';

const Item = ({item: {heading, description, Icon}}) => {
  return (
    <View style={styles.itemContainer}>
      <View>
        <Text style={styles.itemHeading}>{heading}</Text>
        <Text style={styles.itemDescription}>{description}</Text>
      </View>
      <Icon />
    </View>
  );
};

function ItemContainer(props) {
  const arr = [
    {
      heading: '24x7 Ambulance Services',
      description: 'One touch access to medical emergency services',
      Icon: SVG.AmbulanceSupport,
    },
    {
      heading: 'Extension of Ambulance Network',
      description:
        'Book ambulances in advance for hassle-free hospital visits.',
      Icon: SVG.AmbulanceNetwork,
    },
    {
      heading: 'On Call Support',
      description: 'Seamless communication with ambulance drivers',
      Icon: SVG.CallSupport,
    },
  ];
  return arr.map(item => <Item item={item} />);
}

export default ItemContainer;
