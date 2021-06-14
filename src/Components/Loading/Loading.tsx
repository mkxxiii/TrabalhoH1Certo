import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

export default function Loading() {
    return (
        <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="red" />
        </View>
    );
}

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center"
    }
});

