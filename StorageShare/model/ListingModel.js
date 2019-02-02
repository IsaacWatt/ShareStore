import React, { Component, StyleSheet } from 'react';
import {ScrollView} from 'react-native';
import { RkCard, RkTheme, RkText, RkButton } from 'react-native-ui-kitten';
import {
    Text,
    View,
    Image,
  } from 'react-native';

export default class ListingModel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: null,
            height: null,
            width: null,
        };
    }
}
