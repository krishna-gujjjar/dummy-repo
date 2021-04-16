import React from 'react';
import {BackIcon} from '../../utils/Svg';

import {
    Button,
    ButtonContainer,
    CardContainer,
    ChildrenContainer,
    Container,
} from './Style';

const CancelButton = ({onPress}) => (
    <ButtonContainer>
        <Button onPress={onPress}>
            <BackIcon />
        </Button>
    </ButtonContainer>
);

export default ({children, style, rounded, center, bottom, onCancel}) => {
    let roundedBorder = 30,
        centerStyle = {},
        bottomStyle = {};
    if (rounded === 'sm') roundedBorder = 18;
    if (rounded === 'lg') roundedBorder = 60;

    if (center) centerStyle = {alignItems: 'center', justifyContent: 'center'};
    if (bottom)
        bottomStyle = {
            marginBottom: '10%',
            alignItems: 'center',
            justifyContent: 'flex-end',
        };

    return (
        <Container style={[centerStyle, bottomStyle]}>
            {onCancel && <CancelButton onPress={onCancel} />}
            <CardContainer style={[{...style}, {borderRadius: roundedBorder}]}>
                <ChildrenContainer>{children}</ChildrenContainer>
            </CardContainer>
        </Container>
    );
};
