import { Text, StyleSheet } from "react-native";

function Titile({children}) {
    return <Text style={styles.title}>{children}</Text>;
}

export default Titile;

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        marginTop: 20,
        fontSize: 24,
        // fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'white',
        padding: 24,

    }
});