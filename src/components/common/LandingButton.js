import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const LandingButton = ({ onPress, children, style }) => {
    const { textStyle, buttonStyle } = styles;

    return (
        <TouchableOpacity onPress={onPress} style={[buttonStyle, style]}>
            <Text style={textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#fff',
        fontSize: 15,
        fontWeight: '600',
        paddingTop: 12,
        paddingBottom: 12
    },
    buttonStyle: {
        width: '90%',
        backgroundColor: 'black',
        borderRadius: 10,
        marginBottom: 10
    }
};

// export default Button;
export { LandingButton };
