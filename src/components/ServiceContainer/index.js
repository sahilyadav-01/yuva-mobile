import React from 'react';
import { View, FlatList } from 'react-native';
import ServiceCard from '../ServiceCard';
import { styles } from './styles';
import { useServiceContainer } from './hooks/useServiceContainer';
import LifeStyleCard from '../LifeStyleCard';

const ServiceContainer = (props) => {
  const { services } = useServiceContainer();
  return (
    <View style={styles.mainContainerStyle}>
      <View style={styles.subContainerStyle2}>
        <FlatList
          data={services}
          numColumns={3}
          renderItem={({ item, index }) => {
            if (props.serviceCard) {
              return (
                <View key={index} style={styles.serviceCardContainerStyle}>
                  <ServiceCard
                    key={item.name}
                    name={item.name}
                    screenName={item.screenName}
                    image={item.image}
                  />
                </View>
              );
            } else if (props.lifeStyleCard) {
              return (
                <View key={index} style={styles.serviceCardContainerStyle}>
                  <LifeStyleCard
                    key={item.name}
                    name={item.name}
                    screenName={item.screenName}
                    image={item.image}
                  />
                </View>
              );
            }
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </View>
  );
};

export default ServiceContainer;