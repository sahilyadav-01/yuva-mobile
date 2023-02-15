import React from 'react'
import { View, Text, FlatList } from 'react-native'
import ServiceCard from '../ServiceCard'
import { styles } from './styles';
import { SERVICE_HEADING } from './constant';
import { useServiceContainer } from './hooks/useServiceContainer';

const ServiceContainer = () => {
    const { services} = useServiceContainer();
    return (
        <View style={styles.mainContainerStyle}>
            <View style={styles.subContainerStyle1}>
                <Text style={styles.serviceHeading}>{SERVICE_HEADING} </Text>
                <View style={styles.line} />
            </View>
            <View style={styles.subContainerStyle2}>
                <FlatList
                    data={services}
                    numColumns={3}
                    renderItem={({ item, index }) => (
                        <View key={index} style={styles.serviceCardContainerStyle}>
                            <ServiceCard
                                key={item.name}
                                name={item.name}
                                screenName={item.screenName}
                                image={item.image}
                            />
                        </View>
                    )}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </View>
    );
};

export default ServiceContainer;