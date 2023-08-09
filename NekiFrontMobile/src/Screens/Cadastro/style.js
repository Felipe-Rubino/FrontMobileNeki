import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({

    div: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',

        
    },

    text:{
        fontSize: 28,
        fontWeight: '500',
        color: '#333',
        marginBottom: 30,
        fontFamily:'Roboto'
    },

    logo:{
        width: 300,
        height: 300

    },

    divsecundaria:{
        alignItems: 'center'
    },

    container:{
        paddingHorizontal: 25
    },

    input: {
        flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: 25
    },
    placeholder: {
        flex: 1,
        paddingVertical: 0
    },
    entrar : {
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 16,
        color: '#000'
    },
    botaoentrar : {
        backgroundColor: '#3b8ea5',
        padding: 20,
        borderRadius: 10,
        marginBottom: 30
    },
    cadastre : {
        color: '#3b8ea5',
        fontWeight: '700',
        marginLeft: 5
    },
    conta: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 30,
    },
    textconta: {
        fontWeight: '700'
    },
    erromensagem: {
        color: 'rgb(231, 64, 64)',
        margin: 0,
        textAlign: 'center',
        fontSize: 22,
        fontFamily:'Roboto'
    }

});