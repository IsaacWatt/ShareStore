import {Header} from 'react-native-elements';
import React from 'react';

export default class HeaderBar extends React.Component {
    render() {
        return (
            <Header
            leftComponent={{ icon: 'menu', color: '#fff' }}
            centerComponent={{ text: 'Share + Storage', style: { color: '#fff' } }}
            rightComponent={{ icon: 'home', color: '#fff' }}
          />
        );
      }
    
}