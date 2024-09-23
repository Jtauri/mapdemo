import { StyleSheet, SafeAreaView, Platform } from 'react-native'
import React, { useEffect } from 'react'
import MapView from 'react-native-maps'
import Constants from 'expo-constants'
import { useState } from 'react'
import * as Location from 'expo-location'



export default function Map() {
    const [location, setLocation] = useState({
        /* Default location is University of Helsinki */
        latitude: 60.1695,
        longitude: 24.9354,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    })

    useEffect(() => {
        (async () => {
            getUserPosition()
        }
        )()
    }, [])

    const getUserPosition = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync()

        try {
            if (status !== 'granted') {
                console.log('Permission to access location was denied')
                return
            }
            const position = await Location.getCurrentPositionAsync({ accuracy: Location.Accuracy.High })
            setLocation({ ...location, "latitude": position.coords.latitude, "longitude": position.coords.longitude })
        } catch (error) {
            console.log(error)
        }
    }



    return (
        <SafeAreaView style={styles.container}>
            <MapView
                style={styles.map}
                zoomControlEnabled={true}
                region={location}
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
