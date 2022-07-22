import { StyleSheet } from "react-native";


export const global = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#090909',
    },
    header: {
        padding: 10,
        height: 200,
        flexDirection: "row",
        paddingTop: 60,
        paddingLeft: 20,
    },
    txtheader: {
        color: '#FFFFFF',
        fontSize: 50,
        padding: 20,
    },
    userimg: {
        width: 50,
        height: 50,
        borderRadius: 100,
    },
    pesquisarimg: {
        width: 50,
        height: 50,
        position: 'absolute',
        marginTop: 50,
        right: 10,
    },
    nomeheader: {
        fontSize: 14,
        color: '#FFFFFF',
        fontWeight: 'bold',
        paddingTop: 10,
        paddingLeft: 10,
    },
    contaheader: {
        fontSize: 12,
        color: '#dddddd',
        paddingLeft: 10,
    },
    titulostories: {
        color: '#FFFFFF',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 20,
    },
    imgstories: {
        width: 300,
        height: 350,
        resizeMode: 'cover',
        margin: 10,
        borderRadius: 20,
    },
    tag: {
        padding : 10,
        borderWidth: 1,
        color: 'white',
        borderRadius: 15,
        textAlign: 'center',
        backgroundColor: '#090909',
    },
    like: {
        color: 'black',
        textAlign: 'center',
        padding: 10,
    },
    atividades: {
        flexDirection: 'row',
        position: 'absolute',
        zIndex: 1000,
        top: 20,
        left: 20,
    },
    username: {
        color: 'white',
        padding: 10,
    },
    imgcheck: {
        width: 20,
        height: 20,
        resizeMode: 'cover',
        position: 'absolute',
        marginLeft: 50,
        zIndex: 1000,
    },
    trendingarea: {
        backgroundColor: '#999',
    },
    imgesporte: {
        backgroundColor: '#dddddd',
        padding: 10,
    },
    imgtrending: {
        width: 500,
        height: 350,
        resizeMode: 'cover',
    },
    titulotrending: {
        
    }
})


