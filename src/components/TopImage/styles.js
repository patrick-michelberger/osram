import {
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 3,
        backgroundColor: 'transparent',
        alignItems: 'center',
        justifyContent: 'center'
    },
    circularWrapper: {
        width: 100,
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        borderColor: 'white',
        borderStyle: 'solid',
        borderWidth: 1,
        borderRightWidth: 0,
        transform: [{
            rotate: '140deg'
        }]
    },
    image: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
        transform: [{
            rotate: '-140deg'
        }]
    }
});

export default styles;
