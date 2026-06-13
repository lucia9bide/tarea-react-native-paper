import { useState } from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { Image } from "react-native";
import { Card, Text, TextInput, Button, Searchbar } from "react-native-paper";
import { books } from "../../data/Data";

const BookList = () => {
    const [search, setSearch] = useState("");
    const [expandedBook, setExpandedBook] = useState(null);
    //para expandir por id

    //filtrar sin hacer diferencia entre minusculas y mayusculas (toLowerCase())
    const filteredBooks = books.filter((book) =>
        book.title.toLowerCase().includes(search.toLowerCase())
    );

    /*El textInput sera nuestra barra buscador
    el value es para decirle al textinput que valor mostrar
    el onChangeText se ejecuta cada vez que el usuario esta escribiendo algo, el buscador muestre lo mismo en el momento*/
    return (
        <View style={styles.container}>
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
                    <Card style={styles.card}>
                        <Card.Cover source={{ uri: item.imageUrl }} />

                        <Card.Content>
                            <Text variant="titleLarge" style={styles.titleCard}>{item.title}</Text>
                            <Text variant="bodyMedium">{item.author}</Text>
                            <Text
                                variant="bodyMedium"
                                style={styles.summary}
                                numberOfLines={expandedBook === item.id ? undefined : 2}>
                                {item.summary}
                            </Text>
                        </Card.Content>

                        <Card.Actions>
                            <Button mode="contained">
                                {item.available ? "Disponible" : "No disponible"}
                            </Button>

                            <Button
                                mode="outlined"
                                onPress={() =>
                                    setExpandedBook(
                                        expandedBook === item.id ? null : item.id
                                    )
                                }
                            >
                                {expandedBook === item.id
                                    ? "Ocultar"
                                    : "Ver resumen"}
                            </Button>
                        </Card.Actions>
                    </Card>
                )}
            />
        </View>
    )
}

/*aca explico lo que esta dentro de card
    data={filteredBooks} -> muestra la lista de libros filtrados
    keyExtractor={(item) => item.id.toString()} -> para tener un identificador de cada elemento
    renderItem={({ item }) => esta funcion es apra definir como se veria cada libro (item aca)

    si el libro esta expandido
        (expandedBook === item.id)
        numberOfLines recibe undefined y muestra todo el resumen
    y sino el texto se contrae

    explicando los botones
    con un operador ternario se muestra si el libro esta disponible o no
    el onPress guarda null si ya esta desglosada la descripcion para cerrarla y el id lo guarda para abrirlo
*/

export default BookList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#82adff",
        borderWidth: 1,
        padding: 15,
        backgroundColor: "#f7f9fc",
    },
    search: {
        width: "95%",
        marginBottom: 15,
        borderRadius: 15,
        backgroundColor: "rgba(0, 58, 165, 0.48)",
    },
    card: {
        marginVertical: 12,
        borderRadius: 18,
        overflow: "hidden",
        elevation: 5,
        backgroundColor: "rgba(1, 20, 80, 0.76)"
    },
    titleCard:{
        fontSize: 20,
        marginTop: 10,
        color: "#f5f5f5"
    },
    summary: {
        marginTop: 10,
        color: "#c9c4de",
        lineHeight: 22,
    },
})