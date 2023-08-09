import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({

    container: {
        backgroundColor: 'white',
        flex: 1,  
        gap: 8,
        alignItems: 'center',
        paddingHorizontal: 10
    },
    containerSkills: {
        width: '100%',
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'white'
    },

    descricao:{
        textAlign: 'center',
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold'
    },

    nome:{
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 25,
        color: 'black'
    },

    imagem:{
        alignItems: 'center',
        marginVertical: 10,
    },

    titulo: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#333',
        backgroundColor : 'white'
    },

    levelSkill:{
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        fontSize: 20,
        
    },
    modal:{
        flex: 1
    },
    modalskill : {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    botao : {
        width: 300,
        height: 50,
        backgroundColor: '#3b8ea5', // Adicione uma cor de fundo para o botão
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    botaotext: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    titulomodal : {
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: '5%',
        color: '#3b8ea5',
        fontSize: 25,
    },
    inputlevel : {
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
    perguntamodal : {
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 15,
        color: '#3b8ea5',
        fontSize: 20
    },
    containerlixeira : {
        flexDirection: 'row',
        justifyContent: 'space-between'
    }



});