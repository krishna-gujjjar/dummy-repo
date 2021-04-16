import React from 'react';

import {BottomViewContainer, ButtonOnline, ButtonText, ContainerMiddle, TextInputCode} from './Style';

export default ({customerCode, onClick}) => {
    return (
        <BottomViewContainer>
            <ContainerMiddle>
                <TextInputCode onTextChange={customerCode} placeholder="Customer's Code" />
                <ButtonOnline onPress={onClick}>
                    <ButtonText>Start Drive</ButtonText>
                </ButtonOnline>
            </ContainerMiddle>
        </BottomViewContainer>
    );
};
