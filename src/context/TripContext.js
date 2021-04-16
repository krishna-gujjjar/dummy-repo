import React, {useContext, useEffect, useState} from 'react';
import {AppKey} from '../config/Constants';
import {useStorage} from '../hooks';

const TripContext = React.createContext();

export const TripProvider = ({children}) => {
    const {updateStorageItem, storageItem} = useStorage(AppKey.trip);
    const [trip, setTrip] = useState(undefined);

    useEffect(() => {
        if (storageItem !== undefined) setTrip(storageItem);
    }, [storageItem]);

    const updateTrip = trip => {
        updateStorageItem(trip);
        setTrip(trip);
    };

    return <TripContext.Provider value={{trip, updateTrip}}>{children}</TripContext.Provider>;
};

export const useTrip = () => useContext(TripContext);

export default TripContext;
