import React from 'react';
import {View} from 'react-native';
import {Header} from '../../component';
import {useTheme} from '../../context';
import {
    BottomViewContainer,
    ButtonContainer,
    ButtonText,
    Container,
    ContainerBottom,
    KmContainer,
    NumberText,
    SubContainer,
    SubContainerLeft,
    SubContainerRight,
    TextLight,
    TextPlace,
} from './Style';

export default () => {
    const {colors} = useTheme();
    // const [location, setLocation] = useState({
    //     latitude: 25.179652,
    //     longitude: 75.8785162,
    // });

    return (
        <View
            style={{
                flex: 1,
            }}>
            <Header showProfile />

            <BottomViewContainer>
                <SubContainer
                    style={{
                        marginBottom: '12%',
                    }}>
                    <Container>
                        <SubContainerLeft>
                            <TextLight>Distance</TextLight>
                            <KmContainer>
                                <NumberText>20</NumberText>
                                <TextLight>km</TextLight>
                            </KmContainer>
                        </SubContainerLeft>
                        <SubContainerRight>
                            <TextLight>Pickup Destination</TextLight>
                            <TextPlace>Borkheda, Kota</TextPlace>
                        </SubContainerRight>
                    </Container>
                </SubContainer>

                <SubContainer
                    style={{
                        height: 80,
                    }}>
                    <Container>
                        <SubContainerLeft>
                            <TextPlace>Borkhera, Kota</TextPlace>
                            <TextPlace>Dadabari, Kota</TextPlace>
                        </SubContainerLeft>
                        <SubContainerRight>
                            <TextLight>Pickup Distance</TextLight>
                            <KmContainer>
                                <NumberText>1.2</NumberText>
                                <TextLight>km</TextLight>
                            </KmContainer>
                        </SubContainerRight>
                    </Container>
                </SubContainer>
                <ContainerBottom>
                    <ButtonContainer>
                        <ButtonText>Accept</ButtonText>
                    </ButtonContainer>

                    <ButtonContainer
                        style={{
                            backgroundColor: colors.danger.regular,
                        }}>
                        <ButtonText>Decline</ButtonText>
                    </ButtonContainer>
                </ContainerBottom>
            </BottomViewContainer>
        </View>
    );
};
