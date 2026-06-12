import { View, Text, StyleSheet } from "react-native";

const MyBooks = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>libros</Text>
        </View>
    )
}

export default MyBooks

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#82adff",
        borderWidth: 1,
        
    },
    text: {
        fontSize: 20,
        color: "#003aa5"
    }
})