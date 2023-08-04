import React, { useCallback, useEffect } from 'react';
import { Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import Home from './screens/Home';
import { globalStyles } from './styles/globalStyles';

export default function App() {
	const [fontsLoading, setFontsLoading] = React.useState(true);
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
		return <Home />;
	}
}
