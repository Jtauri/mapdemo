import { StyleSheet, Platform } from 'react-native'
import React, { useState } from 'react'
import MapView, { Marker } from 'react-native-maps'

export default function Map(props) {

    const [markers, setMarker] = useState([])
    
    const showMArker = (e) => {
        const coords = e.nativeEvent.coordinate
        setMarker([...markers,coords]) /*spread operatorilla asetetaan aikaisemmat koordinaatit ja uusi koordinaatti taulukkoon*/
    }

    return (
        <MapView
            style={styles.map}
            region={props.location}
            mapType='satellite'
            onLongPress={showMArker}
        >
        {markers.map((marker, indeksi) => ( /*"marker" on tämänhetkinen koordinaatti ja "indeksi" on sen indeksinumero taulukossa*/
            <Marker
            key={indeksi}
            coordinate={{ latitude: marker.latitude, longitude: marker.longitude }}
            />
        ))
        }
        </MapView>
    )
}



const styles = StyleSheet.create({
    map: {
        height: '100%',
        width: '100%',
    },
})
