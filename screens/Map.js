import { StyleSheet, Platform } from 'react-native'
import React from 'react'
import MapView from 'react-native-maps'
import Constants from 'expo-constants'

export default function Map(props) {

    return (
        <MapView
            style={styles.map}
            region={props.location}

        />
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
