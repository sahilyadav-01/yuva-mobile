import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { PNG } from "../../../../../assets";
import CarouselContainer from "../../../../components/CarouselContainer";
import CarouselItem2 from "../../../../components/CarouselItem2";
import { LANDING_PAGE_TEXT1, LANDING_PAGE_TEXT2 } from "./constant";
import { styles } from './styles';
import ProductCarouselItem from "../../../../components/ProductCarouselItem";

const ProductHub = ({ popularPackageName, onCategoryViewAllPress }) => {
    return (
        <>
            <View style={styles.PopularHealthCheckups}>
                <Text style={styles.LandingPageText1}>{LANDING_PAGE_TEXT1} </Text>
                <View style={styles.textContainer}>
                    <TouchableOpacity onPress={() => onCategoryViewAllPress()}>
                        <Text style={styles.LandingPageText2}>{LANDING_PAGE_TEXT2}</Text>
                    </TouchableOpacity>
                    <View style={styles.line} />
                </View>
            </View>
            {popularPackageName && <View style={styles.CarouselContainerStyle}>
                <View style={styles.categoryNameContainer}><Text style={styles.categoryNameStyle}>{'Diabetic Mart'} </Text></View>
                <View style={styles.subCategoryNameContainer}>
                    <View style={styles.subLine} />
                    <Text style={styles.subCategoryNameStyle}>{'Food'} </Text>
                    <View style={styles.subLine} />
                </View>

                <CarouselContainer
                    data={popularPackageName.popularPackageResponseDtoList}
                    isIndexed={false}>
                    <ProductCarouselItem
                        imgPath={PNG.product_image}
                    />
                </CarouselContainer>
                <View style={styles.categoryNameContainer}><Text style={styles.categoryNameStyle}>{'Diabetic Mart'} </Text></View>
                <View style={styles.subCategoryNameContainer}>
                    <View style={styles.subLine} />
                    <Text style={styles.subCategoryNameStyle}>{'Food'} </Text>
                    <View style={styles.subLine} />
                </View>
                <CarouselContainer
                    data={popularPackageName.popularPackageResponseDtoList}
                    isIndexed={false}>
                    <CarouselItem2
                        imgPath={PNG.product_image}
                    />
                </CarouselContainer>
                <View style={styles.categoryNameContainer}><Text style={styles.categoryNameStyle}>{'Diabetic Mart'} </Text></View>
                <View style={styles.subCategoryNameContainer}>
                    <View style={styles.subLine} />
                    <Text style={styles.subCategoryNameStyle}>{'Food'} </Text>
                    <View style={styles.subLine} />
                </View>
                <CarouselContainer
                    data={popularPackageName.popularPackageResponseDtoList}
                    isIndexed={false}>
                    <CarouselItem2
                        imgPath={PNG.product_image}
                    />
                </CarouselContainer>
            </View>}


        </>
    )
}
export default ProductHub;