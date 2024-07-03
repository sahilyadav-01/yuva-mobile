import React from 'react';
import { Text, View } from 'react-native';
import ServiceCard from '../../components/ServiceCard';
import { styles as style } from './style';
import Header from '../../components/Header';

const styles = style();

function Services({services}) {
    return (
        <View style={{flex:1,backgroundColor:'white'}}>
            <Header title={'Services'} showBackButton={true} hideMenu={true} hideTitle={false}/>
            <View style={{flex:1,backgroundColor:'white',paddingHorizontal:20,paddingVertical:24}}>
            {services.map(item => (
            <View style={styles.servicesSubContainer}>
                {item.map((i) => {
                    return (
                        <View style={{marginBottom:16}}>
                        <ServiceCard
                            key={i.name}
                            name={i.name}
                            screenName={i.screenName}
                            icon={i?.icon ?? null}
                        />
                        </View>
                    )
                })}
            </View>))}
            </View>
        </View>
    );
}

export default Services;