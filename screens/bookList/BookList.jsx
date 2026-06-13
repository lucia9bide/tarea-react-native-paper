import { useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { Image } from "react-native";
import { Card, Text, TextInput, Button, Searchbar } from "react-native-paper";
import { books } from "../../data/Data";

const BookList = () => {
    const [search, setSearch] = useState("");
    const [showSummary, setShowSummary] = useState(false);

    //filtrar sin hacer diferencia entre minusculas y mayusculas (toLowerCase())
    const filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(search.toLowerCase())
    );

    /*El textInput sera nuestra barra buscador
    el value es para decirle al textinput que valor mostrar
    el onChangeText es para cuando el usuario esta escribiendo, el buscador muestre lo mismo en el momento*/
    return (
        <View style={styles.container}>
            <Text style={styles.text}>LIBROS</Text>
            <View>
                <TextInput style={styles.search}
                    placeholder="Buscar libro"
                    value={search}
                    onChangeText={setSearch}
                />
            </View>
            <FlatList
                data={filteredBooks}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <Card style={{
                        marginVertical: 10,
                        borderRadius: 16
                    }}>
                        <Card.Cover source={{ uri: item.imageUrl }} />

                        <Card.Content>
                            <Text variant="titleLarge">{item.title}</Text>
                            <Text variant="bodyMedium">{item.author}</Text>
                            <Text numberOfLines={2}>{item.summary}</Text>
                        </Card.Content>

                        <Card.Actions>
                            <Button mode="contained">
                                {item.available ? "Disponible" : "No disponible"}
                            </Button>

                            <Button
                                mode="outlined"
                                onPress={() => setShowSummary(!showSummary)}
                            >
                                {showSummary ? "Ocultar" : "Ver resumen"}
                            </Button>
                        </Card.Actions>
                    </Card>
                )}
            />
        </View>
    )
}

export default BookList

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
        padding: 20,
        color: "#003aa5"
    },
    search: {

        borderRadius: 20,
        backgroundColor: "rgba(0, 58, 165, 0.48)",
    }
})