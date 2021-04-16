import React, {useEffect, useState} from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

export default ({latitude, longitude, onUserPositionChange}) => {
	const [region, setRegion] = useState({
		latitude: Number(latitude),
		longitude: Number(longitude),
		latitudeDelta: 0.0922,
		longitudeDelta: 0.0421,
	});
	// const [mapReady, setMapReady] = useState(false);

	return (
		<MapView
			style={{flex: 1}}
			provider={PROVIDER_GOOGLE}
			initialRegion={{
				latitude: 37.78825,
				longitude: -122.4324,
				latitudeDelta: 0.0922,
				longitudeDelta: 0.0421,
			}}
			// onMapReady={() => setMapReady(true)}
			region={region}
			onMarkerDragEnd={(e) => onUserPositionChange(e.nativeEvent.coordinate)}>
			{/* {region.latitude.length > 0 && ( */}
			<MapView.Marker
				coordinate={{
					latitude: region.latitude,
					longitude: region.longitude,
				}}
				title={'Your Location'}
				draggable
			/>
			{/* )} */}
		</MapView>
	);
};
