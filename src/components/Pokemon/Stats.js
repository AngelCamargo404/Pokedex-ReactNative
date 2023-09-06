import { StyleSheet, View, Text } from 'react-native';
import { map, capitalize } from 'lodash';
import React from 'react';

export default function Stats({stats}) {

    const barStyles = (num) => {
        const color = num >= 50  ? "#00AC17" : "#FF3E3E"
        return {
            backgroundColor: color,
            width: `${num}%`
        }
    }

  return (
    <View style={styles.content}>
      <Text style={styles.title}>Base Stats</Text>
      {map(stats, (item, index) => (
        <View key={index} style={styles.block}>
            <View style={styles.blockTitle}>
                <Text style={styles.statName}>{capitalize(item.stat.name)}</Text>
            </View>
            <View style={styles.blockInfo}>
                <Text style={styles.number}>{item.base_stat}</Text>
                <View style={styles.bgBar}>
                    <View style={[styles.progressBar, barStyles(item.base_stat) ]} />
                </View>
            </View>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
    content: {
        paddingHorizontal: 20,
        marginTop: 40,
        marginBottom: 80
    },
    title: {
        fontWeight: "bold",
        fontSize: 20,
        paddingBottom: 5,
    },
    block: {
        flexDirection: "row",
        paddingVertical: 5
    },
    blockTitle: {
        width: "40%"
    },
    statName: {
        fontSize: 12,
        color: "#3b3b3b"
    },
    blockInfo: {
        width: "60%",
        flexDirection: "row",
        alignItems: "center"
    },
    number: {
        width: "12%",
        fontSize: 12
    },
    bgBar: {
        backgroundColor: "#DEDEDE",
        width: "88%",
        height: 5,
        borderRadius: 20,
        overflow: "hidden"
    },
    progressBar: {
        height: 5,
        borderRadius: 20
    }
});