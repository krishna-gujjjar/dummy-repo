import React, {useState, useEffect} from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

import {LocationPinIcon} from '../../utils/Svg';

const InitRegion = {
    latitude: Number(25.1820193),
    longitude: Number(25.1820193),
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
};

export default ({latitude = 25.179652, longitude = 75.8785162, onUserPositionChange, style, showMarker = true}) => {
    const [region, setRegion] = useState({
        latitude: 25.179652,
        longitude: 75.8785162,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    });
    const [isMapLoaded, setIsMapLoaded] = useState(false);

    useEffect(() => {
        setRegion({
            ...region,
            latitude: Number(latitude),
            longitude: Number(longitude),
        });
    }, [longitude, latitude]);

    const _handleRegionChange = location => {
        if (onUserPositionChange) {
            setRegion(location);
            onUserPositionChange(location);
        }
    };

    return (
        <MapView
            region={region}
            initialRegion={InitRegion}
            provider={PROVIDER_GOOGLE}
            onMapReady={() => setIsMapLoaded(true)}
            style={[{width: '100%', height: '100%'}, style]}
            onRegionChangeComplete={_handleRegionChange}>
            {isMapLoaded && showMarker && (
                <Marker
                    coordinate={{
                        latitude: region?.latitude,
                        longitude: region?.longitude,
                    }}>
                    <LocationPinIcon />
                </Marker>
            )}
        </MapView>
    );
};
