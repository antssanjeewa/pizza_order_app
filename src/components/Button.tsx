import { StyleSheet, Text, TouchableOpacity } from "react-native";

function Button({ name, action }: any) {
    return <TouchableOpacity style={styles.btnContainer} onPress={action}>
        <Text style={styles.btnText}>{name}</Text>
    </TouchableOpacity>;
}

export default Button;

const styles = StyleSheet.create({
    btnContainer: {
        width: "100%",
        marginTop: 20,
        backgroundColor: '#2f95dc',
        padding: 20,
        borderRadius: 25,
    },
    btnText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    }
})