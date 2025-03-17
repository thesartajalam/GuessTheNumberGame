import { View, Image, Text, StyleSheet } from "react-native";
import Titile from "../components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({roundsNumber, userNumber, onStartNewGame}) {
    return (
    <View style={styles.rootContainer}>
        <View>
        <Titile>Game Over!</Titile>
        <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../assets/images/success2.png')}/>
        </View>
        </View>
        <Text style={styles.summaryText}>
            Your Phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text>
        </Text>
        <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
    );
}

export default GameOverScreen;

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: "center",
        alignItems: "center",
    },
    imageContainer: {
        widht: 200,
        height: 200,
        borderRadius: 100,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: "hidden",
        margin: 36
    },
    image: {
        width: '100%',
        height: '100%'
    },
    summaryText: {
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: "center",
        marginBottom: 24
    },
    highlight: {
        fontFamily: 'open-sans-bold',
        color: Colors.primary500
    },
});