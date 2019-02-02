import React, { Component } from 'react';
import { RkCard, RkTheme, RkText, RkButton } from 'react-native-ui-kitten';
import {
    Text,
    View,
    Image,
  } from 'react-native';

export default class ListingScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: false,
        };
    }

    render() {
    return (
        <RkCard rkType='story'>
            <Image rkCardImg source={require('../assets/storageImages/storage2.jpg')}/>
            <View rkCardHeader>
            <RkText rkType='header'>Once upon a time</RkText>
            </View>
            <View rkCardContent>
            <RkText style={{textAlign:'center'}}>
                One morning, when Gregor Samsa woke from happy dreams,
                he found himself transformed in ...
            </RkText>
            </View>
            <View rkCardFooter>
            <RkButton rkType='small outline'>Learn More</RkButton>
            <RkButton rkType='small'>Read later</RkButton>
            </View>
        </RkCard>
    );
    }

 
}

RkTheme.setType('RkCard', 'story', {
    img: {
      height: 100,
      opacity: 0.7
    },
    header: {
      alignSelf: 'center'
    },
    content:{
      alignSelf:'center'
    }
  });
  