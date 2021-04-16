import React, {useRef} from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

import {GOOGLE_MAP_KEY} from '../../config/Constants';
import {CarTopView, LocationPinIcon} from '../../utils/Svg';

export default ({fromlatitude, fromlongitude, droplatitude, droplongitude, position, style}) => {
    const MapViewRef = useRef(MapView);
    const DropLocation = {latitude: Number(droplatitude), longitude: Number(droplongitude)};
    const PickUpLocation = {latitude: Number(fromlatitude), longitude: Number(fromlongitude)};

    return (
        <MapView
            ref={MapViewRef}
            userLocationPriority="high"
            style={[{width: '100%', height: '100%'}, style]}
            provider={PROVIDER_GOOGLE}
            initialRegion={{
                latitude: Number(fromlatitude),
                longitude: Number(fromlongitude),
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}>
            <MapView.Marker coordinate={PickUpLocation}>
                <CarTopView style={{transform: [{rotate: `${position?.heading}deg`}]}} />
            </MapView.Marker>
            <MapView.Marker coordinate={DropLocation}>
                <LocationPinIcon />
            </MapView.Marker>

            <MapViewDirections
                strokeWidth={4}
                strokeColor="#ff4646"
                origin={PickUpLocation}
                apikey={GOOGLE_MAP_KEY}
                destination={DropLocation}
                onReady={result => MapViewRef.current.fitToCoordinates(result.coordinates, {animated: true})}
            />
        </MapView>
    );
};
