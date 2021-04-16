import React from 'react';
import {useTheme} from '../../context';
import {BottomViewContainer, ButtonContainer, ContainerBottom, ButtonText, PickUpText, Location} from './Style';

export default ({pickupPress}) => {
    const {colors} = useTheme();

    return (
        <BottomViewContainer>
            <PickUpText>Pickup Location</PickUpText>
            <Location>Borkheda, Kota</Location>
            <ContainerBottom>
                <ButtonContainer onPress={pickupPress}>
                    <ButtonText>PickUp</ButtonText>
                </ButtonContainer>

                <ButtonContainer
                    style={{
                        backgroundColor: colors.dark,
                    }}>
                    <ButtonText>Call</ButtonText>
                </ButtonContainer>
            </ContainerBottom>
        </BottomViewContainer>
    );
};
