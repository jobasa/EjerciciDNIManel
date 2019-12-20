/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TextInput,
    Button,
    Alert,
} from 'react-native';

import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import calcularLletraNif from '../MyDni';


export default class Formulario extends Component {
    constructor(props) {
        super(props);
        this.state = {
            elDNIintroduit: undefined,
            lletraDNI: undefined,
            nombre: undefined,
            apellidos: undefined,
            direccion: undefined,
            telefono: undefined,
            email: undefined,
        }
    }
    guardarDNI = (dni) => {
        if (dni.length === 8) {
            this.setState({ elDNIintroduit: dni })
            let laLletra = calcularLletraNif(dni);
            this.setState({ lletraDNI: laLletra })
        }
    }


    guardarNom = (unNom) => { this.setState({ nombre: unNom }) }
    guardarApellido = (unApellido) => { this.setState({ apellidos: unApellido }) }
    guardarDireccion = (unaDireccion) => { this.setState({ direccion: unaDireccion }) }
    guardarTelefono = (unTelefono) => { this.setState({ telefono: unTelefono }) }
    guardarEmail = (unEmail) => { this.setState({ email: unEmail }) }


    dadesCorrectes = () => {
        if (this.state.elDNIintroduit === undefined) {
            Alert.alert('El campo DNI esta vacio');
            return false;
        } else if (this.state.nombre === undefined) {
            Alert.alert('El campo NOMBRE esta vacio');
            return false;
        } else if (this.state.apellidos === undefined) {
            Alert.alert('El campo APELLIDOS esta vacio');
            return false;
        } else if (this.state.direccion === undefined) {
            Alert.alert('El campo DIRECCIÓN esta vacio');
            return false;
        } else if (this.state.telefono === undefined) {
            Alert.alert('El campo TELEFON esta vacio');
            return false;
        } else if (this.state.email === undefined) {
            Alert.alert('El campo EMAIL esta vacio');
            return false;
        } else {
            //No hi ha cap error
            return true;

        }

    }
    gestionaDades = () => {
        if (this.dadesCorrectes() == true) {
            //fer un fetch
        }
    }
    render() {
        return (
            <View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 0.7 }}>
                        <TextInput style={{ underlineColorAndroid: 'blue', borderWidth: 2 }}
                            keyboardType='numeric'
                            placeholder='DNI'
                            placeholderTextColor='red'
                            maxLength={8}
                            onChangeText={this.guardarDNI}
                        />
                    </View>

                    <View style={{ flex: 0.3 }}>
                        <TextInput style={{ underlineColorAndroid: 'blue', borderWidth: 2, color: 'black' }}
                            editable={false}
                            placeholder='Lletra'
                            placeholderTextColor='red'
                            value={this.state.lletraDNI}
                        />
                    </View>
                </View>


                <View>
                    <TextInput style={{ underlineColorAndroid: 'blue', borderWidth: 2 }}
                        placeholder='Nombre'
                        placeholderTextColor='red'
                        onChangeText={this.guardarNom}
                    />
                </View>

                <View>
                    <TextInput style={{ underlineColorAndroid: 'blue', borderWidth: 2 }}
                        placeholder='Apellidos'
                        placeholderTextColor='red'
                        onChangeText={this.guardarApellido}
                    />
                </View>

                <View>
                    <TextInput style={{ underlineColorAndroid: 'blue', borderWidth: 2 }}
                        placeholder='Direccion'
                        placeholderTextColor='red'
                        onChangeText={this.guardarDireccion}
                    />
                </View>

                <TextInput style={{ underlineColorAndroid: 'blue', borderWidth: 2 }}
                    keyboardType='numeric'
                    placeholder='Telefono'
                    placeholderTextColor='red'
                    maxLength={9}
                    onChangeText={this.guardarTelefono}
                />

                <TextInput style={{ underlineColorAndroid: 'blue', borderWidth: 2 }}
                    placeholder='Email'
                    placeholderTextColor='red'
                    keyboardType='email-address'
                    onChangeText={this.guardarEmail}
                />
                <Button
                    title="Comprobar"
                    onPress={this.gestionaDades}
                />
            </View>



        )



    }

}



const styles = StyleSheet.create({
    scrollView: {
        backgroundColor: Colors.lighter,
    },
    engine: {
        position: 'absolute',
        right: 0,
    },
    body: {
        backgroundColor: Colors.white,
    },
    sectionContainer: {
        marginTop: 32,
        paddingHorizontal: 24,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: '600',
        color: Colors.black,
    },
    sectionDescription: {
        marginTop: 8,
        fontSize: 18,
        fontWeight: '400',
        color: Colors.dark,
    },
    highlight: {
        fontWeight: '700',
    },
    footer: {
        color: Colors.dark,
        fontSize: 12,
        fontWeight: '600',
        padding: 4,
        paddingRight: 12,
        textAlign: 'right',
    },
});