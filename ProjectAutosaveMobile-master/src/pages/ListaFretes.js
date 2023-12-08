import React from 'react';
import { View, Text, StatusBar, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

export function ListaFretes() {
    return (
        <View>
            <View style={styles.container}>
                <StatusBar style="auto" />
                <View style={styles.header}>
                    <Text style={styles.mobyheader}>Mooby Fretes</Text>
                    <View style={styles.perfil}>
                        <Image
                            source={require('../assets/imagens/perfil.png')}
                            style={styles.imagemPerfil}
                        />
                        <Text style={styles.perfiltexto}>Perfil</Text>
                    </View>
                </View>
                <View style={styles.conteudo}>
                    <Text style={styles.tituloconteudo}><Text style={{ color: '#FF7A00' }}>Fretes</Text> Disponíveis</Text>
                    <TextInput selectionColor={'#FF7A00'} style={styles.input} placeholder='Pesquise aqui'></TextInput>
                    <View style={styles.containerfiltro}>
                        <TouchableOpacity style={styles.botaofiltro}><Text>Filtros <Image source={require('../assets/imagens/filtro.png')} style={styles.imagemfiltro} /></Text></TouchableOpacity>
                    </View>
                    <Text>Foram encontrados 3 fretes.</Text>

                    <View style={styles.cardfrete}>
                        <View>
                            <Image source={require('../assets/imagens/cardimg1.png')} style={styles.imgcard} />
                            <Text style={{fontSize: 11, textAlign:'center', marginTop: 5}}>Lançado a 2 horas.</Text>
                        </View>
                        <View>
                            <Text style={{paddingBottom: 23}}>De: Campinas - SP</Text>
                            <Text style>Para: Niterói - RJ</Text>
                        </View>
                        <View style={{justifyContent:'space-between'}}>
                            <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 20}}>R$ 4.500</Text>
                            <TouchableOpacity style={styles.cardbotao}><Text style={styles.cardbottext}>VISUALIZAR</Text></TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.cardfrete}>
                        <View>
                            <Image source={require('../assets/imagens/cardimg2.png')} style={styles.imgcard} />
                            <Text style={{fontSize: 11, textAlign:'center', marginTop: 5}}>Lançado a 30 min.</Text>
                        </View>
                        <View>
                            <Text style={{paddingBottom: 23}}>De: Três Barras - SC</Text>
                            <Text>Para: Porto Feliz - SP</Text>
                        </View>
                        <View style={{justifyContent:'space-between'}}>
                            <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 20}}>R$ 13.700</Text>
                            <TouchableOpacity style={styles.cardbotao}><Text style={styles.cardbottext}>VISUALIZAR</Text></TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles.cardfrete}>
                        <View>
                            <Image source={require('../assets/imagens/cardimg3.png')} style={styles.imgcard} />
                            <Text style={{fontSize: 11, textAlign:'center', marginTop: 5}}>Lançado a 2 horas.</Text>
                        </View>
                        <View>
                            <Text style={{paddingBottom: 23}}>De: Viana - ES</Text>
                            <Text>Para: Matão - SP</Text>
                        </View>
                        <View style={{justifyContent:'space-between'}}>
                            <Text style={{textAlign: 'center', fontWeight: 'bold', fontSize: 20}}>R$ 22.220</Text>
                            <TouchableOpacity style={styles.cardbotao}><Text style={styles.cardbottext}>VISUALIZAR</Text></TouchableOpacity>
                        </View>
                    </View>



                </View>
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
    header: {
        paddingHorizontal: 15,
        height: 100,
        width: '100%',
        backgroundColor: '#2D3F57',
        borderBottomWidth: 10,
        borderColor: '#FF7A00',
        flexDirection: 'row',
        justifyContent: 'space-between',

    },
    mobyheader: {
        height: '100%',
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        textAlignVertical: 'center',
    },
    imagemPerfil: {
        width: 60,
        height: 60,
        borderRadius: 15,
    },
    perfiltexto: {
        color: 'white',
        fontSize: 20,
        fontWeight: '100',
    },
    perfil: {
        alignItems: 'center',
    },
    conteudo: {
        height: 900,
        width: '100%',
        alignItems: 'center',
    },
    tituloconteudo: {
        fontSize: 40,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 25,
    },
    input: {
        textAlign: 'center',
        height: 40,
        width: '90%',
        borderRadius: 10,
        marginBottom: 15,
        backgroundColor: '#D9D9D9',
    },
    containerfiltro: {
        width: '90%',
        alignItems: 'flex-end',
    },
    botaofiltro: {
        backgroundColor: '#D9D9D9',
        width: 90,
        height: 30,
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 30,
    },
    imagemfiltro: {
        width: 20,
        height: 20,
    },
    cardfrete:{
        display: 'flex',
        flexDirection: 'row',
        width: '90%',
        height: 115,
        backgroundColor: '#E1E1F7',
        padding: 10,
        borderRadius: 10,
        justifyContent: 'space-around',
        marginTop: 15,
    },
    imgcard: {
        width: 100,
        height: 60,
        borderRadius: 5,
    },
    cardbotao: {
        backgroundColor:'#FF7A00', 
        width: 90,
        height: 23,
        borderRadius: 5,
    },
    cardbottext: {
        color: 'white',
        textAlign: 'center',
        textAlignVertical: 'center',
    }
})