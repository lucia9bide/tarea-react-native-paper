import { StyleSheet, Text, View } from "react-native";

const Profile = () => {
    return (
        <View style={styles.container} >
            <Text style={styles.text}>Profile</Text>
        </View>
    )
}

export default Profile

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