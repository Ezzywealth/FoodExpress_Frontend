import React from 'react';
import { Text, View } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

const ReviewDetails = ({ navigation, route }: any) => {
	return (
		<View style={globalStyles.card}>
			<Text>{route.params.rating}</Text>
			<Text>{route.params.title}</Text>
			<Text>{route.params.body}</Text>
		</View>
	);
};

export default ReviewDetails;
