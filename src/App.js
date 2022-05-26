import React from 'react';
import {View, Image, StyleSheet, SafeAreaView, StatusBar, Text, Pressable, Linking} from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorFontDarkGithub = '#4F565E';
const imageProfileGithub = 'https://avatars.githubusercontent.com/u/104372195?s=400&u=eb5b76cab88099c1e0aca9b7c24891b03249716c&v=4'
const urlToMyGithub = 'https://github.com/patriciacss';

const App = () => {

    const handlePressGoToGithub = async () => {
        console.log('Verificando Link');
      const res = await  Linking.canOpenURL(urlToMyGithub);
      if(res){
        console.log('Link Aprovado');
        console.log('Abrindo Link...');
         await Linking.openURL(urlToMyGithub);
      }
    }
    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colorGithub} barStyle="light-content" />
            <View style={style.content}> 
                <Image 
                accessibilityLabel='Imagem perfil Patricia' 
                style={style.avatar} 
                source={{uri: imageProfileGithub}}/>
            <Text 
            accessibilityLabel='Nome: Patricia Serrano'
            style={[style.defaultText, style.name]}>Patricia Serrano</Text>
            <Text 
            accessibilityLabel='Nickname: patriciacss'
            style={[style.defaultText, style.nickname]}>patriciacss</Text>
            <Text 
            accessibilityLabel='Descrição: Estudante de Análise e Desenvolvimento de Sistemas'
            style={[style.defaultText, style.description]}>Estudante de Análise e Desenvolvimento de Sistemas</Text>
            <Pressable onPress={handlePressGoToGithub}>
            <View style={style.button}>
                <Text style={[style.defaultText, style.textButton]}>
                    Open in GitHub
                </Text>
            </View>
            </Pressable>
            </View>

        </SafeAreaView>
    );
};

export default App;

const style = StyleSheet.create({
    container: {
        backgroundColor: colorGithub,
        flex: 1, //Expandir cor para tela inteira 
        justifyContent: 'center',
    },
    content: {
        alignItems: 'center',
        padding: 20, 
    },

    avatar: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
    },

    defaultText: {
        color: colorFontGithub,
    },

    name: {
        fontSize: 24, 
        fontWeight: 'bold',
    },

    nickname: {
        fontSize: 18,
        color: colorFontDarkGithub,
    },

    description: {
        fontSize: 14,
        fontWeight: 'bold',
    },

    button: {
        backgroundColor: colorFontDarkGithub,
        borderRadius: 10,
        padding: 20,
        marginTop: 20,
    },

    textButton: {
        fontSize: 16,
        fontWeight: 'bold',
    },

});