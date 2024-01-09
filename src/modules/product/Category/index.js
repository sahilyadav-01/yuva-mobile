import React from 'react';
import { FlatList } from 'react-native';
import Header from '../../../components/Header';
import {HEADER_TITLE } from './constants';
// import { styles } from './styles';
import {useDetialsScreen} from './hooks/useCategory'
import CategoryCard from '../../../components/CategoryCard';
const Category = () => {
const {data} = useDetialsScreen();
const renderItem = ({item,index}) => {
    return (
        <CategoryCard
        key={index}
        name={item}/>
    )

}
console.log('datatatata',data)
    return (
        <>
            <Header title={HEADER_TITLE} isScreen={true} hideMenu={false} showBackButton={true} />
            <FlatList
                        renderItem={renderItem}
                        data={data}
                        keyExtractor={(item, index) => `${index}`}
                        showsHorizontalScrollIndicator={false}
                        nestedScrollEnabled={true}
                        // onEndReached={onEndReached}
                        onEndReachedThreshold={0.1}
                    />
        </>
    );
};
export default Category;