import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { clearLikedJobs } from '../actions';

class SettingsScreen extends Component {
  render() {
    return (
      <View>
        <Button
          title="Clear Liked Jobs"
          large
          icon={{ name: 'delete-forever' }}
          buttonStyle={{ backgroundColor: '#F44336' }}
          onPress={() => this.props.clearLikedJobs()}
        />
      </View>
    );
  }
}

export default connect(
  null,
  { clearLikedJobs }
)(SettingsScreen);
