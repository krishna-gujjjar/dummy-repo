import React from 'react';
import {View} from 'react-native';
import TextTicker from 'react-native-text-ticker';
import {Colors, Typography} from '../../styles';
import {
    BidButton,
    BidText,
    Container,
    ContainerLeft,
    ContainerRight,
    ContainerRow,
    DateText,
    KM,
    To,
} from './Style';

export default ({pickup, drop, date, km, onPress}) => {
    return (
        <Container>
            <ContainerRow>
                {/* Left side */}
                <ContainerLeft>
                    <ContainerRow>
                        <View
                            style={{
                                maxWidth: '42%',
                                minWidth: '35%',
                            }}>
                            <TextTicker
                                duration={15000}
                                loop
                                bounce
                                repeatSpacer={50}
                                marqueeDelay={1000}
                                style={{
                                    color: Colors.default.dark,
                                    fontFamily: Typography.FONT_FAMILY_PARA_BOLD,
                                    fontSize: Typography.FONT_SIZE_20,
                                }}>
                                {pickup}
                            </TextTicker>
                        </View>
                        <To> to </To>
                        <View
                            style={{
                                maxWidth: '42%',
                                minWidth: '40%',
                            }}>
                            <TextTicker
                                duration={15000}
                                loop
                                bounce
                                repeatSpacer={50}
                                marqueeDelay={1000}
                                style={{
                                    color: Colors.default.dark,
                                    fontFamily: Typography.FONT_FAMILY_PARA_BOLD,
                                    fontSize: Typography.FONT_SIZE_20,
                                }}>
                                {drop}
                            </TextTicker>
                        </View>
                    </ContainerRow>
                    <View>
                        <DateText>{date}</DateText>
                    </View>
                </ContainerLeft>

                {/* Right side */}
                <ContainerRight>
                    <KM>
                        <TextTicker
                            duration={11000}
                            loop
                            bounce
                            repeatSpacer={30}
                            marqueeDelay={500}
                            style={{
                                color: Colors.default.dark,
                                fontFamily: Typography.FONT_FAMILY_PARA_BOLD,
                                fontSize: Typography.FONT_SIZE_28,
                            }}>
                            {`${km} Kms`}
                        </TextTicker>
                    </KM>
                    <BidButton onPress={onPress}>
                        <BidText>Bid</BidText>
                    </BidButton>
                </ContainerRight>
            </ContainerRow>
        </Container>
    );
};
