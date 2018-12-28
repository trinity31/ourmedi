import React from 'react';
import { View } from 'react-native';

const LandingButtonGroup = (props) => 
        <View style={[styles.containerStyle, props.style]}>
            {props.children}
        </View>
    ;


const styles = {
    containerStyle: {
        width: '100%',
        alignItems: 'center',
        flexDirection: 'column',
    }
};

// export default CardSection;
export { LandingButtonGroup };
