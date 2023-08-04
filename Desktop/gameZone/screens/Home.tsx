import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/globalStyles';
const Home = () => {
	return (
		<View style={globalStyles.container}>
			<Text style={globalStyles.titleText}>This is the home screen</Text>
		</View>
	);
};

export default Home;
