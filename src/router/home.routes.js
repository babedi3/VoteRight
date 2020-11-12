import HomeScreen from "../screens/HomeScreen";
import React from 'react';
/* import OfficialInfoCard from "../components/OfficialInfoCard";
 */
import OfficialInfoScreen from "../screens/OfficialInfoScreen";
import { createStackNavigator } from "@react-navigation/stack";


const HomeStack = createStackNavigator();

const HomeRoutes=()=> (
    <HomeStack.Navigator>
        <HomeStack.Screen
            name="State"
            component={HomeScreen}
            options={{
                title: 'Georgia',
                headerLeftContainerStyle: {
                    marginLeft: 15,
                },
            }}
        />
        <HomeStack.Screen
            name="OfficialInfoScreen"
            component={OfficialInfoScreen}
        />
    </HomeStack.Navigator>
)

export default HomeRoutes;