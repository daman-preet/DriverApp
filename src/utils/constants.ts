import { Dimensions, PixelRatio } from 'react-native';

export const WINDOW_WIDTH = Dimensions.get('screen').width;
export const WINDOW_HEIGHT = Dimensions.get('screen').height;

const scale = WINDOW_WIDTH / 375;

export const getScaledSize = (size: number) => {
    let fontSize = size * scale;
    return Math.round(PixelRatio.roundToNearestPixel(fontSize));
}

export const commonColors = {
    white: '#FFFFFF',
    pink: '#FF228C',
    lightBlue: '#297FCA',
    green: '#12BF66',
    dark: '#333333',
    warning: '#F9CB42',
    inactive: '#DDDDDD',
    stone: '#6F7880',
    lightGrey: '#F6F6FB',
    greyStroke : '#C6CBD4',
    black : '#000000',
    neutral : '#F0FAF6',
    mediumGrey : '#B0B0B0'
};