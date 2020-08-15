import React, { useState, useEffect } from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RectButton } from 'react-native-gesture-handler';

import styles from './styles';
import landingImg from '../../assets/images/landing.png';
import studyIcon from '../../assets/images/icons/study.png';
import givenClassesIcon from '../../assets/images/icons/give-classes.png';
import heartIcon from '../../assets/images/icons/heart.png';
import { forModalPresentationIOS } from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/CardStyleInterpolators';
import api from '../../services/api';
// import { Container } from './styles';

function Landing (){
const {navigate} = useNavigation();

const [totalConnections, setTotalConnections]= useState(0);

useEffect(()=> {
  api.get('connections').then(response => {
  const  { total } = response.data;  
  
  setTotalConnections(total);
})
}, []);



function handleNavigateToGiveClassesPage(){ //permite navegação até a página GiveClasses
  navigate('GiveClasses');
}

function handleNavigateToStudyPages(){ //permite navegação até a página Study
  navigate('Study');
}

  return ( 
  <View style={styles.container}> 
    <Image source={landingImg} style={styles.banner}/>

    <Text style={styles.title} >
    Seja Bem Vindo, { '\n' }

    <Text style={styles.titleBold}> O que deseja fazer? </Text>
    </Text>

    <View style={styles.buttonsContainer}>
    
    <RectButton 
    onPress= {handleNavigateToStudyPages}
    style={[styles.button, styles.buttonPrimary]}>
      <Image source={studyIcon}/>
    <Text style={styles.buttonText}>Contratar</Text>  
    </RectButton>

    <RectButton 
    onPress= {handleNavigateToGiveClassesPage} 
    style={[styles.button, styles.buttonSecondary]}>
      <Image source={givenClassesIcon}/>
    <Text style={styles.buttonText}>Prestar Serviços</Text>      
    </RectButton>

    </View>

    <Text style={styles.totalConnections}>
      Total de {totalConnections} serviços já contratados {' '}
      <Image source={heartIcon}/> 
    </Text>

  </View>
);
}

export default Landing;