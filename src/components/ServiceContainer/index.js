import React from 'react';
import { View, FlatList } from 'react-native';
import ServiceCard from '../ServiceCard';
import LifeStyleCard from '../LifeStyleCard';
import { useServiceContainer } from './hooks/useServiceContainer';
import { styles } from './styles';

const ServiceContainer = (props) => {
  const { services, lifeStyle } = useServiceContainer(props);

  return (
    <View style={styles.mainContainerStyle}>
      <View style={styles.subContainerStyle2}>
        <FlatList
          data={props.serviceCard ? services : lifeStyle}
          numColumns={3}
          renderItem={({ item, index }) => (
            <View key={index} style={styles.serviceCardContainerStyle}>
              {props.serviceCard ? (
                <ServiceCard
                  key={item.name}
                  name={item.name}
                  screenName={item.screenName}
                  image={item.image}
                  type={item?.type ?? null}
                  icon={item?.icon ?? null}
                />
              ) : (
                <LifeStyleCard
                  key={item.name}
                  name={item.name}
                  // screenName={item.screenName}
                  image={item.image}
                  enumName={item.enumName}
                  onPackagePress={(enumName,name) => props?.onPackagePress(enumName,name)}
                />
              )}
            </View>
          )}
          keyExtractor={(item, index) => `${index}`}
          nestedScrollEnabled={true}
        />
      </View>
    </View>
  );
};

export default ServiceContainer;