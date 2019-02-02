import React, { Component, StyleSheet } from 'react';
import {ScrollView} from 'react-native';
import { RkCard, RkTheme, RkText, RkButton } from 'react-native-ui-kitten';
import {
    Text,
    View,
    Image,
  } from 'react-native';
import ListingModel from '../model/ListingModel';

export default class ListingScreen extends Component {
    static navigationOptions = {
        title: 'wow'
      };
    
    constructor(props) {
        super(props);
        this.state = {
            listings: [
                
            ]
        };
    }

    onChange(event){
        var newArray = this.state.arr.slice();    
        newArray.push(event);   
        this.setState({listings:newListings})
    }


    static navigationOptions = {
        title: 'Listings',
      };

    render() {
    return (
        
        <View>
        <ScrollView>
            <React.Fragment>
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
            </React.Fragment>
            <React.Fragment>
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
                </React.Fragment>

            <React.Fragment>
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
                </React.Fragment>
            </ScrollView>
            </View>
    );
    }

 
}

RkTheme.setType('RkCard', 'story', {
    img: {
        height: 150,
        opacity: 0.85,
        marginVertical: 10,
        marginHorizontal: 20
    },
    header: {
      alignSelf: 'center'
    },
    content:{
      alignSelf:'center'
    }
  });

