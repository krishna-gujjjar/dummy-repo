import React from 'react';
import {View, Text} from 'react-native';
import {BottomViewContainer, ButtonOnline, ButtonText, ContainerMiddle} from './Style';

export default ({onClick}) => {
    return (
        <BottomViewContainer>
            <ContainerMiddle>
                <ButtonOnline onPress={onClick}>
                    <ButtonText>Complete Ride</ButtonText>
                </ButtonOnline>
            </ContainerMiddle>
        </BottomViewContainer>
    );
};
