import React from 'react';
import { View, Platform } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import styles from '../styles/authStyles';


function MapViewContainer(props) {

    return(
        <View style={styles.mapContainer}>
            <MapView
            style={styles.map}
            provider='google'
            initialRegion={{
                latitude: props.location.latitude,
                longitude: props.location.longitude,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }}>
                {Platform.OS == "web" ?
                <MapView.Marker
                coordinate={{
                    latitude: props.location.latitude,
                    longitude: props.location.longitude
                }}
                draggable
                onDragEnd={(e) => {
                    props.lat(e.latLng.lat())
                    props.lng(e.latLng.lng())
                }} />
                :
                <Marker
                coordinate={{
                    latitude: props.location.latitude,
                    longitude: props.location.longitude
                }}
                draggable
                onDragEnd={(e) => {
                    props.lat(e.nativeEvent.coordinate.latitude);
                    props.lng(e.nativeEvent.coordinate.longitude)
                }} />
                }
            </MapView>
        </View>
    )
}

export default MapViewContainer;