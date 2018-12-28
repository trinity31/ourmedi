import React, { Component } from 'react';
import { View, Image, Text } from 'react-native';
import { LandingButton, LandingButtonGroup } from './common';
import { COLOR_FACEBOOK, COLOR_EMAIL, COLOR_EVERYMEDI, COLOR_GREY } from './colors';

class Landing extends Component {
    render() {
        return (
          <View>
            <View style={style.containerStyle}>
              <Image 
                  style={style.imgStyle}
                  source={ require('../media/img/logo_with_title.png') } 
              />
            </View>
            <View style={style.containerStyle}>
              <LandingButtonGroup>
                <LandingButton style={{backgroundColor:COLOR_FACEBOOK}}>
                  Facebook으로 로그인
                </LandingButton>
                <LandingButton style={{backgroundColor:COLOR_EMAIL}}>
                  Email로 로그인
                </LandingButton>
              </LandingButtonGroup>
              <Text style={style.footerStyle}>
                아직 회원이 아니신가요?      <Text style={style.registerText}>  가입하기</Text>
              </Text>
            </View>
          </View>
        )
    }
}

const style = {
  containerStyle: {
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imgStyle: {
    width: '100%',
    resizeMode: 'contain'
  },
  footerStyle: {
    position: 'absolute',
    bottom: 20,
    color: COLOR_GREY
  }, 
  registerText: {
    color: COLOR_EVERYMEDI
  }
}

export default Landing;