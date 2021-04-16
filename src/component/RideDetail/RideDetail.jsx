import React from 'react';
import {View, Text} from 'react-native';

import {Colors, Typography} from '../../styles';
import TextTicker from 'react-native-text-ticker';
import {Button} from '..';

export default ({time, pickup, drop, price}) => {
    return (
        <Button
            style={{
                marginHorizontal: 20,
                paddingHorizontal: 20,
                paddingVertical: 30,
            }}>
            <View
                style={{
                    width: '60%',
                }}>
                <TextTicker
                    duration={10000}
                    loop
                    bounce
                    repeatSpacer={50}
                    marqueeDelay={1000}
                    style={{
                        fontFamily: Typography.FONT_FAMILY_PARA_BOLD,
                        color: Colors.default.dark,
                        fontSize: Typography.FONT_SIZE_20,
                    }}>
                    {time}
                </TextTicker>
            </View>
            <View
                style={{
                    flexDirection: 'row',
                }}>
                <View
                    style={{
                        width: '30%',
                    }}>
                    <TextTicker
                        duration={11000}
                        loop
                        bounce
                        repeatSpacer={50}
                        marqueeDelay={1000}
                        style={{
                            fontFamily: Typography.FONT_FAMILY_PARA_BOLD,
                        }}>
                        {pickup}
                    </TextTicker>
                </View>
                <Text
                    style={{
                        fontFamily: Typography.FONT_FAMILY_PARA_MEDIUM,
                        color: Colors.default.gray.dark,
                    }}>
                    {' '}
                    to{' '}
                </Text>
                <View
                    style={{
                        width: '30%',
                    }}>
                    <TextTicker
                        duration={15000}
                        loop
                        bounce
                        repeatSpacer={50}
                        marqueeDelay={1000}
                        style={{
                            fontFamily: Typography.FONT_FAMILY_PARA_BOLD,
                        }}>
                        {drop}
                    </TextTicker>
                </View>
            </View>

            <View
                style={{
                    flexDirection: 'row',
                    position: 'absolute',
                    right: 20,
                    top: '50%',
                    width: '25%',
                    height: '100%',
                    alignItems: 'center',
                }}>
                <Text
                    style={{
                        fontFamily: Typography.FONT_FAMILY_PARA_MEDIUM,
                        fontSize: Typography.FONT_SIZE_24,
                        marginRight: 5,
                        color: Colors.default.gray.regular,
                    }}>
                    {'\u20B9'}
                </Text>

                <TextTicker
                    duration={15000}
                    loop
                    bounce
                    repeatSpacer={50}
                    marqueeDelay={2000}
                    style={{
                        fontFamily: Typography.FONT_FAMILY_PARA_BOLD,
                        fontSize: Typography.FONT_SIZE_28,
                        color: Colors.default.dark,
                    }}>
                    {price}
                </TextTicker>
            </View>
        </Button>
    );
};
