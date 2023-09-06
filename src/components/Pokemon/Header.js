import { StyleSheet, View, SafeAreaView, Text, Image } from 'react-native';
import { capitalize } from 'lodash';
import React from 'react';
import getColorByPokemonType from "../../utils/getColorByPokemonType";

export default function Header({name, order, image, type}) {
    
    const color = getColorByPokemonType(type);
    const bgStyles = { backgroundColor: color, ...styles.bg };

    return (
        <>
            <View style={bgStyles} />
            <SafeAreaView style={styles.content}>
            <View style={styles.header}>
                <Text style={styles.name}>{capitalize(name)}</Text>
                <Text style={styles.order}>#{`${order}`.padStart(3, 0)}</Text>
            </View>
                <View style={styles.contentImg}>
                    <Image source={{ uri: image }} style={styles.image} />
                </View>
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    bg: {
        width: "100%",
        height: 250,
        position: 'absolute',
        borderBottomEndRadius: 350,
        borderBottomLeftRadius:350,
        transform: [{ scale:2 }],
    },  
    content: {
        marginHorizontal: 20,
        marginTop: 30
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 40
    },
    name: {
        color: "#FFFFFF",
        fontWeight: "bold",
        fontSize: 27
    },  
    order: {
        color: "#FFFFFF",
        fontWeight: "bold"
    },
    contentImg: {
        justifyContent: "center",
        alignItemscenter: "center",
        flex: 1,
        zIndex: 999,
    },
    image: {
        width: 250,
        height: 300,
        resizeMode: "contain"
    }
});