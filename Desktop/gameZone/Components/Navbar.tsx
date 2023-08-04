import React from 'react';
import { Pressable, Text, View } from 'react-native';
import { navStyles } from '../styles/globalStyles';
import { Link } from '@react-navigation/native';
const Navbar = ({ navigation }: any) => {
	const links = [
		{ id: 1, name: 'Home', path: '/Home' },
		{ id: 2, name: 'About', path: '/About' },
		{ id: 3, name: 'ReviewDetails', path: '/ReviewDetails' },
	];
	return (
		<View style={navStyles.navContainer}>
			{links.map((link) => (
				<Link to={link.path} key={link.id}>
					<Text style={navStyles.navText}>{link.name}</Text>
				</Link>
			))}
		</View>
	);
};

export default Navbar;
