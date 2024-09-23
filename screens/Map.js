import {View, Text, StyleSheet, SafeAreaView, Platform} from 'react-native'
import React from 'react'
import MapView from 'react-native-maps'
import Constants from 'expo-constants'


export default function Map() {
    return (
        <SafeAreaView style={styles.container}>
        <MapView 
            style={styles.map}
            zoomControlEnabled={true}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
    },
    map: {
     height: '100%',
        width: '100%',
    },
  });
  