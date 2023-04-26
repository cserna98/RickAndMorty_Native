import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import { capitalize } from "lodash";
import { useNavigation } from "@react-navigation/native";

export default function characterCard(props) {
    const {character} = props;
    const navigation = useNavigation();

    const goToCharacter=()=>{
        navigation.navigate("CharacterInfo",  { id: character.id } );
        };

    return ( 
        <TouchableWithoutFeedback  onPress={goToCharacter}>
            <View style={styles.card}>
                <View style={styles.spacing}>
                    <View style={styles.bgStyles}>
                        <Image style={styles.image} source={{uri : character.imagen}}/>
                        <Text style={styles.number}>#{character.id}</Text>
                        <Text style={styles.name}>{capitalize(character.name)}</Text>
                    </View>
                    
                </View>
                
            </View>
            
        </TouchableWithoutFeedback>
    );
}



const styles=StyleSheet.create({
    card:{
        flex:2,
        height:130,
    },
    spacing:{
        flex:1,
        padding:5,
    },
    bgStyles:{
        flex:1,
        borderRadius:10,
        padding:10,
        backgroundColor : "grey",
    },
    number:{
        position:"absolute",
        right:5,
        top:5,
        color:"#fff",
        fontSize:11,
    },
    name:{
        color:"#fff",
        fontWeight:"bold",
        fontSize:15,
        top: 0,
        left:5,
    },
    image:{
        position:"absolute",
        bottom:2,
        left:1,
        width:90,
        height:90,
    },
});