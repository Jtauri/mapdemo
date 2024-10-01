
import { SafeAreaView } from 'react-native'
import Map from './screens/Map'
import MainAppBar from './components/MainAppBar'
import * as Location from 'expo-location'
import { PaperProvider } from 'react-native-paper'
import React, { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'

const settings = {
  backgroundColor: '#00a484',
}

const icons = {
  location_not_known: 'crosshairs',
  location_found: 'crosshairs-gps',
  location_searching: 'crosshairs-question'
}


export default function App() {
  const [icon, setIcon] = useState(icons.location_not_known)
  const [location, setLocation] = useState({
    /* Default location is University of Helsinki */
    latitude: 60.1695,
    longitude: 24.9354,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  })

  useEffect(() => {
    getUserPosition()
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
         <PaperProvider>
          <MainAppBar
              backgroundColor={settings.backgroundColor}
              title="Map"
              icon={icon}
              getUserPosition={getUserPosition}
          />
          <SafeAreaView style={styles.container}>
              <Map location={location} />
          </SafeAreaView>
         </PaperProvider>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

