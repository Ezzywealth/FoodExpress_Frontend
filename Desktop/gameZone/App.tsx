import React, { useCallback, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import { globalStyles } from './styles/globalStyles';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ReviewDetails from './screens/ReviewDetails';
import About from './screens/About';
import Navbar from './Components/Navbar';

export default function App() {
	const [fontsLoading, setFontsLoading] = useState(true);

	const Stack = createNativeStackNavigator();

	const [fontsLoaded] = useFonts({
		'jost-regular': require('./assets/fonts/Jost-Regular.ttf'),
		'jost-bold': require('./assets/fonts/Jost-Bold.ttf'),
	});

	if (fontsLoading && !fontsLoaded) {
		return (
			<View style={globalStyles.container}>
				<Text>Loading...</Text>
			</View>
		);
	} else {
		return (
			<NavigationContainer>
				<Navbar />
				<Stack.Navigator>
					<Stack.Screen name='Home' component={Home} options={{ title: 'Home page' }} />
					<Stack.Screen name='About' component={About} options={{ title: 'About us' }} />
					<Stack.Screen name='ReviewDetails' component={ReviewDetails} options={{ title: 'review details' }} />
				</Stack.Navigator>
			</NavigationContainer>
		);
	}
}
