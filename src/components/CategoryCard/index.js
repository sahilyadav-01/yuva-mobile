import React from "react";
import { PNG } from "../../../assets";
import {View,Text} from 'react-native'
import {styles} from './styles'

const CategoryCard = ({name}) => {

    return (
        <View style={styles.CompleteView}>
        <View style={styles.Top}>
          <View style={styles.pngView}>
            <Image source={PNG.PHARMA_CARD_ICON} style={styles.Image} />
          </View>
          <View style={styles.Add}>
            <View style={styles.Cont}>
              <Text style={styles.NameStyle}>
                {name}
              </Text>
              {name && <View style={styles.subCont}>
                <Text style={styles.Year}>
                  {'TEXT1'}
                </Text>
                <Text style={styles.subText}>
                  {'TEXT2'}
                </Text>
              </View>}
            </View>
            <Text style={styles.ContentStyle}>{name}</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.Button} >
          <Text style={styles.ButtonText}>{'TEXT3'}</Text>
        </TouchableOpacity>
      </View>
    )
    
};

export default CategoryCard;