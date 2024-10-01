import { StyleSheet, Platform } from 'react-native'
import React, { useState } from 'react'
import MapView, { Marker } from 'react-native-maps'
import Constants from 'expo-constants'

export default function Map(props) {

    const [marker, setMarker] = useState(null)
    
    const showMArker = (e) => {
        const coords = e.nativeEvent.coordinate
        setMarker(coords)
    }

    return (
        <MapView
            style={styles.map}
            region={props.location}
            mapType='satellite'
            onLongPress={showMArker}
        >
        {marker &&
            <Marker
            title='My Marker'
            coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
            />
        }
        </MapView>
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
})
