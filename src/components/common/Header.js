
// Import a library to help create a component
import React from 'react';
import { Text, View } from 'react-native';

// Create a component
const Header = (props) => {
    const { viewStyle, textStyle } = styles;
    return (
            <View style={viewStyle}>
                <Text style={textStyle}>{props.headerText}</Text>
            </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative',
        borderTop: 'none'
    },
    textStyle: {
        fontSize: 20
    }
};

// Make a component available to other parts of the app
// export default Header;
export { Header };
