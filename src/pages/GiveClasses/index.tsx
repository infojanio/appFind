import React from 'react';
import { View, ImageBackground, Text } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

import giveClassesBgImage from '../../assets/images/give-classes-background.png';

function GiveClasses() {
    const { goBack } = useNavigation();

    function handleNavigateBack() { //retorna para a rota anterior
        goBack()
    }

    return(
        <View style={styles.container}>
            <ImageBackground resizeMode='contain' source={giveClassesBgImage} style={styles.content}>
                <Text style={styles.title}>Presta serviços?</Text>
                <Text style={styles.description}>
                    Faça seu cadastro, seja um prestador  de  serviços  em nossa plataforma web.
                </Text>
            </ImageBackground>

            <RectButton onPress={handleNavigateBack} style={styles.okButton}>
                <Text style={styles.okButtonText}>Vamos lá!</Text>
            </RectButton>
        </View>
    ); 
}

export default GiveClasses;