import React from "react";
import { View, Text } from "react-native";
import LifeStyleCard from "../../../../components/LifeStyleCard";
import { PALE_PEACH, WHITE } from "../../../../styles/colors";
import { CHECK_TEXT, HEADING_TEXT } from "./constant";
import { styles } from './styles'
const LifeStyle = ({ renderLifeStyleItem, loggedIn, onPackagePress }) => {
    const style = styles();
    return (
        <View style={style.lifeStyPackagesMainContainer}>
            <Text style={style.lifeStyPackagesTextContainer}>{HEADING_TEXT}</Text>
            {renderLifeStyleItem.map(item => (
                <View style={{ backgroundColor: loggedIn=== CHECK_TEXT ? WHITE : PALE_PEACH , ...style.lifeStyPackagesSubContainer }}>
                    {item.map((i) => {
                        return (<LifeStyleCard
                            key={i.name}
                            name={i.name}
                            image={i.image}
                            enumName={i.enumName}
                            onPackagePress={(enumName, name) => onPackagePress(enumName, name)}
                        />)
                    })}
                </View>))}
        </View>
    );
}

export default LifeStyle;