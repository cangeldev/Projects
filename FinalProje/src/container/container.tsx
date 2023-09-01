import { View, BackHandler } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import colors from '../assets/colors/colors'
import { EventDetailScreen, HomeScreen } from '../screens'
import IconE from 'react-native-vector-icons/dist/Entypo'

export const Container = () => {

    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    options={{
                        headerTitleAlign: "center",
                        headerTitle: "Etkinlik",
                        statusBarColor: colors.white,
                        statusBarStyle: "dark",
                        headerRight: () =>
                            <IconE
                                name="log-out"
                                size={20}
                                color={colors.black}
                                onPress={() => BackHandler.exitApp()}

                            />,
                        headerTitleStyle: {
                            color: colors.black,
                            fontSize: 24,
                            fontWeight: "700"
                        }
                    }}
                    name='HomeScreen'
                    component={HomeScreen}
                />
                <Stack.Screen
                    options={{
                        statusBarTranslucent:true,
                         headerShown:false,
                        statusBarColor:"transparent",
                        statusBarStyle: "light",
                        headerTitleStyle: {
                            color: colors.black,
                            fontSize: 24,
                            fontWeight: "700"
                        }
                    }}
                    name='EventDetailScreen'
                    component={EventDetailScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
