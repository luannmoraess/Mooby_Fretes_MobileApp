import React from 'react';
import { View, StatusBar, TextInput, TouchableOpacity, Text, StyleSheet, KeyboardAvoidingView } from 'react-native';


export function Cadastro3({ navigation }) {

  return (
        <View>
                <View style={styles.container}>
      <StatusBar style="auto" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={[styles.containerform, {marginBottom: -40} ]}
      >
        <Text style={styles.nomeempresa}><Text style={{ color: '#FF7A00' }}>Mooby</Text> Fretes</Text>
        <Text style={styles.textDesc}>Cadastre-se para conseguir os melhores fretes para seu caminhão</Text>
        <Text style={styles.textlabel}>NÃO TEM ESPAÇO NA TELA</Text>
        <TextInput selectionColor={'#FF7A00'} style={styles.input}></TextInput>
        <Text style={styles.textlabel}>BiTrem</Text>
        <TextInput placeholder="Sim/Não" selectionColor={'#FF7A00'} style={styles.input}></TextInput>
        <Text style={styles.textlabel}>Carroceria</Text>
        <TextInput selectionColor={'#FF7A00'} style={styles.input}></TextInput>
        <Text style={styles.textlabel}>Veiculo</Text>
        <TextInput selectionColor={'#FF7A00'} style={styles.input}></TextInput>
        <Text style={styles.textlabel}>Tipo RNTRC</Text>
        <TextInput selectionColor={'#FF7A00'} style={styles.input}></TextInput>
        <Text style={styles.textlabel}>Num RNTRC</Text>
        <TextInput selectionColor={'#FF7A00'} style={styles.input}></TextInput>
        <Text  style={styles.textlabel}>Possui Rastreador</Text>
        <TextInput placeholder="Sim/Não" selectionColor={'#FF7A00'} style={styles.input}></TextInput>
        <TouchableOpacity onPress={() => navigation.navigate('ListaFretes')} style={styles.botaologin}><Text style={styles.textobotao}>PROXIMO</Text></TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
    },
    textDesc: {
      alignItems: 'center',
      paddingVertical: 18,
    },
    nomeempresa: {
      fontSize: 40,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    containerform: {
      width: '75%',
      justifyContent: 'center',
    },
    textlabel: {
      paddingBottom: 10,
      fontSize: 15,
    },
    input: {
      textAlign: 'center',
      height: 30,
      marginBottom: 30,
      backgroundColor: '#D9D9D9',
    },
    botaologin: {
      height: 40,
      width: 120,
      backgroundColor: '#FF7A00',
      borderRadius: 6,
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: '79%',
      transform: [{ translateX: -60}],
    },
    textobotao: {
      color: '#fff',
      fontSize: 20,
  
    },
  
  
  });
