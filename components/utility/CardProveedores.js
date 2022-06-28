import { StyleSheet, Text, View,Button } from "react-native";



const CardProveedores = (props) => {
	return (
		<View style={styles.CardStyle}>
			<Text style={styles.Title}>PROVEEDORES</Text>
			<Text style={styles.Atribute}>Nombre: {props.data.nombreproveedor} </Text>
			<Text style={styles.Atribute}>Telefono: {props.data.telefonoproveedor} </Text>
			<Text style={styles.Atribute}>Direccion: {props.data.direccionproveedor} </Text>
			
			<Button 
				title="Ver Detalle"
				color="#168aad"

			></Button>
		</View>
	);
};

export {CardProveedores };

const styles = StyleSheet.create({
	CardStyle: {
		flex: 4,
		backgroundColor: "#212529",
		// height: "20%",
		padding: 20,
		margin: 15,
		borderRadius: 10,
	},
	Title: {
		color: "#f8f9fa",
		fontSize: 32,
	},
	Atribute: {
		color: "#e9ecef",
		fontSize: 20,
	},
});