import { View, Text } from 'react-native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';

import DestinationsScreen from './DestinationsScreen';
import DetailsScreen from './DetailsScreen';

export default function HomeStack() {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator 
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="DestinationsScreen" component={DestinationsScreen} />
            <Stack.Screen name="DetailsScreen" component={DetailsScreen}
                options={{
                    ...TransitionPresets.ModalPresentationIOS,
                  }}    
            />
        </Stack.Navigator>
    );
}