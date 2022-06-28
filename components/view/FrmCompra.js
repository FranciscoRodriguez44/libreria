import React from 'react';

import { StyleSheet, Text, Button, View, ActivityIndicator, TextInput, ScrollView } from 'react-native';
import { CardMercancia } from '../utility/FrmMercancia';

import Flatbutton, { } from "../../button/button";

import Flatbutton2, { } from "../../button/button2";

import { TblCompra } from "../../Model/TblCompra";

class FrmCompra extends React.Component {
    constructor(props) {
        super()
            this.props=props;
            this.compra= new TblCompra();

            this.state ={

            }
            this.CargarCompra=this.props.route.params.CargarCompra;
        

    }
    GuardarCompra = async()=>{
        await this.compra.Save("idcompra");
        this.CargarCompra();
    }
    render() {
        return (<ScrollView style={styles.container}>
            <Text style={{ color: "white", alignSelf: "center", fontSize: 25 }}>REGISTRAR COMPRAS</Text>
            {/* <TextInput style={styles.InputStyle}
                placeholder="id Compra"
                onChangeText={} ></TextInput> */}
            <TextInput style={styles.InputStyle}
                placeholder="Fecha de Compra"
                multiline
                numberOfLines={1}
                onChangeText={val=> this.compra.fechacompra=val} ></TextInput>
            <TextInput style={styles.InputStyle}
                placeholder="IdUsuario"
                multiline
                numberOfLines={1}
                onChangeText={val=> this.compra.idusuario=val} ></TextInput>
            <TextInput style={styles.InputStyle}
                placeholder="Sub Total"
                multiline
                numberOfLines={1}
                onChangeText={val=> this.compra.subtotalcompra=val} ></TextInput>
            <TextInput style={styles.InputStyle}
                placeholder="Iva"
                multiline
                numberOfLines={1}
                onChangeText={val=> this.compra.iva=val} ></TextInput>
            <TextInput style={styles.InputStyle}
                placeholder="Descuento"
                multiline
                numberOfLines={1}
                onChangeText={val=> this.compra.descuentocompra=val} ></TextInput>
            <TextInput style={styles.InputStyle}
                placeholder="Total Compra"
                multiline
                numberOfLines={1}
                onChangeText={val=> this.compra.totalcompra=val} ></TextInput>
            <TextInput style={styles.InputStyle}
                placeholder="id Proveedor"
                multiline
                numberOfLines={1}
                onChangeText={val=> this.compra.idproveedor=val} ></TextInput>


            {/* Gjuardar y regresar*/}
            {/* <Button title='Guardar Compra' onPress={() => {
            }}></Button> */}


            <Flatbutton2 text='Guardar compra' onPress={async() => {
                await this.GuardarCompra(); 
                this.props.navigation.navigate("CompraView");
            }} ></Flatbutton2>

            <Flatbutton text='Add Articulos' onPress={() =>
                this.props.navigation.navigate("ArticulosView")} /> 
            <Flatbutton text='Cancelar y Regresar' onPress={() =>
                this.props.navigation.navigate("Home")} />

        </ScrollView>)
    }
}


export { FrmCompra }
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