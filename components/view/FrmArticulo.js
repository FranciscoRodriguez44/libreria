import React from 'react';

import { StyleSheet, Text, Button, View, ActivityIndicator, TextInput, ScrollView } from 'react-native';
import { CardMercancia } from '../utility/FrmMercancia';

import Flatbutton, { } from "../../button/button";

import Flatbutton2, { } from "../../button/button2";

import { TblCompra } from "../../Model/TblCompra";
import{TblArticulos} from"../../Model/TblArticulos";

class FrmArticulo extends React.Component {
    constructor(props) {
        super()
            this.props=props;
            this.articulo= new TblArticulos();

            this.state ={

            }
            this.CargarArticulos=this.props.route.params.CargarArticulos;
        

    }
    GuardarArticulo = async()=>{
        await this.articulo.Save("idarticulo");
        this.CargarArticulos();
    }
    render() {
        return (<ScrollView style={styles.container}>
            <Text style={{ color: "white", alignSelf: "center", fontSize: 25 }}>REGISTRAR ARTICULO</Text>
            {/* <TextInput style={styles.InputStyle}
                placeholder="id Compra"
                onChangeText={} ></TextInput> */}
            <TextInput style={styles.InputStyle}
                placeholder="nombrearticulo"
                multiline
                numberOfLines={1}
                onChangeText={val=> this.articulo.nombrearticulo=val} ></TextInput>
            <TextInput style={styles.InputStyle}
                placeholder="descripcionarticulo"
                multiline
                numberOfLines={1}
                onChangeText={val=> this.articulo.descripcionarticulo=val} ></TextInput>
            <TextInput style={styles.InputStyle}
                placeholder="idcategoria"
                multiline
                numberOfLines={1}
                onChangeText={val=> this.articulo.idcategoria=val} ></TextInput>
            <TextInput style={styles.InputStyle}
                placeholder="idmarca"
                multiline
                numberOfLines={1}
                onChangeText={val=> this.articulo.idmarca=val} ></TextInput>
           

            {/* Gjuardar y regresar*/}
            {/* <Button title='Guardar Compra' onPress={() => {
            }}></Button> */}


            <Flatbutton2 text='Guardar Articulo' onPress={async() => {
                await this.GuardarArticulo(); 
                this.props.navigation.navigate("ArticulosView");
            }} ></Flatbutton2>


            <Flatbutton text='Cancelar y Regresar' onPress={() =>
                this.props.navigation.navigate("Home")} />

        </ScrollView>)
    }
}


export { FrmArticulo }
const styles = StyleSheet.create({
    InputStyle: {
        padding: 10,
        paddingLeft: 10,
        color: "orange",

        backgroundColor: "white",
        margin: 10,
        borderWidth: 2,
        borderRadius: 10,
        marginLeft: 30
    }, container: {
        backgroundColor: "#536878",
    },
});