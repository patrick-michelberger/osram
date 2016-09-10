import {
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    wrapper: {
        borderRadius: 30,
        width: 60,
        height: 60
    },
    innerWrapper: {
        backgroundColor: 'transparent',
        borderRadius: 30,
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        width: 40,
        height: 40,
        resizeMode: 'contain'
    },
    bottomView: {
      flex: 1,
      backgroundColor: 'transparent',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginLeft:50,
      marginRight:50,
      marginBottom:30
    }
});

export default styles;
