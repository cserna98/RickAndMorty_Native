import React from 'react';
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";
import CharactersNavigation from './CharacterNavigation'
import Account from '../screen/Account'
import Favorite from '../screen/Favorite';

const Tab = createBottomTabNavigator();

function NavigationTab() {
    return (   
        <Tab.Navigator>
            <Tab.Screen 
            name="Favorite"
            component={Favorite}
            options= {{
                tabBarIcon : ({color, size}) =>(<Icon name="heart" color={color} size={size}/>)
            }}
            />

            <Tab.Screen 
            name="CharactersNavigate"
            component={CharactersNavigation}
            options={{
                title: "",
                headerTransparent: true,
                tabBarLabel: "",
                tabBarIcon: () => renderRickMorty(),
              }}
            />

            <Tab.Screen 
            name="Account" 
            component={Account}
            options= {{
                tabBarIcon : ({color, size}) =>(<Icon name="user" color={color} size={size}/>)
            }}
            />
        </Tab.Navigator>
     );
}

const renderRickMorty = ()=>{
    return (
        <Image
        source={require("../assest/pngwing.com.png")}
        style={{ width: 75, height: 75, top: -15 }}
        />
    )
}

export default NavigationTab;