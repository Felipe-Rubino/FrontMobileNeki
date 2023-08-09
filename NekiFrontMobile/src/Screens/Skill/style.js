import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    
    containerprincipal : {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },

    containerskill : {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        
    },

    nomeSkill: {
        textAlign: 'center',
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'
    },

    tituloSkill:{
        textAlign: 'center',
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold',
        marginBottom: 20
    },

    modalskill :{
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    botao: {
        width: 300,
        height: 50,
        backgroundColor: '#3b8ea5',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },

    openmodal:{
        width: '100px'
    },

    inputlevel: {
        paddingVertical: 10, 
        fontSize: 20,
        backgroundColor: 'white', 
        paddingHorizontal: 15, 
        marginBottom: 20, 
        width: 300, 
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'black',
    },

    modal: {
        flex: 1
    },
    botaotext: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },

    perguntamodal: {
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 15,
        color: '#3b8ea5',
        fontSize: 22
    },

    titulomodal: {
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: '5%',
        color: '#3b8ea5',
        fontSize: 25,
        
    }
});
