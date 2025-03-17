import { useState, useEffect } from 'react';

import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient'

import { useFonts } from 'expo-font';

// AppLoading is earlier used and is now depricated and replaced by SplashScreen
// import AppLoading from 'expo-app-loading';

import * as SplashScreen from 'expo-splash-screen';

import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

import Colors from './constants/colors';

export default function App() {

  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessRounds] = useState(0);

  const [fontsloaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  
  // Use SplashScreen.preventAutoHideAsync to prevent the splash screen from hiding automatically
  useEffect(() => {
    const prepare = async () => {
      await SplashScreen.preventAutoHideAsync(); // Prevent splash screen from hiding automatically
    };
    prepare();
  }, []);
  
  
  
  // Once fonts are loaded, hide the splash screen manually
  // useEffect(() => {
  //   const hideSplashScreen = async () =>{
  //     await SplashScreen.hideAsync(); // Hide the splash screen once the fonts are loaded
  //   };
  //   hideSplashScreen();
  // }, []);

  useEffect(() => {
    if(fontsloaded){
      SplashScreen.hideAsync();
    }
  }, [fontsloaded]);
  
  // App Loading is Depriciated and Splash Screen is used in place of that 
  // if(!fontsloaded) {
  //   return <AppLoading />
  // }
  if(!fontsloaded) {
    return null;
  }

  function pickedNumberHandler(pickedNumber) {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }
  function gameOverHandler(numberOfRounds) {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  };

  function startNewGameHandler() {
    setUserNumber(null);
    setGuessRounds(0);
  }

  let screen = <StartGameScreen onPickedNumber={pickedNumberHandler}/>

  if(userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler}/>
  }

  if(gameIsOver && userNumber) {
    screen = <GameOverScreen roundsNumber={guessRounds} userNumber={userNumber} onStartNewGame={startNewGameHandler}/>
  }


  return (
    <LinearGradient colors={[Colors.primary700, Colors.accent500]} style={styles.rootContainer}>
      <ImageBackground source={require('./assets/images/riho-kroll-m4sGYaHYN5o-unsplash.jpg')} 
      resizeMode='cover' style={styles.rootContainer} imageStyle={styles.backgroundImage}>
        <SafeAreaView style={styles.rootContainer}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1
  },
  backgroundImage: {
    opacity: 0.15
  }
});
