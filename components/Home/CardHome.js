import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';

import * as appConstants from '../../constants/common';

/**
 * Display card item in home.
 *
 * @class CardHome
 * @extends {React.Component}
 */
class CardHome extends React.Component {

  /**
   * Creates an instance of CardHome.
   * @param {*} props
   * @memberof CardHome
   */
  constructor(props) {
    super(props);

    this.state = {
      isFavourite: false,
    };
  }

  /**
   * Handles press on favourite icon to change its active state.
   *
   * @memberof CardHome
   */
  handleOnPressFav = () => {
    this.setState({
      isFavourite: !this.state.isFavourite,
    })
  }

  /**
   * Handle press on current component view.
   * Opens profile of this item when press.
   *
   * @memberof CardHome
   */
  handleOnPressView = () => {
    this.props.navigation.navigate(appConstants.ROUTE_HOME_STACK_FOR_SINGLE_LOCATION)
  }

  /**
   * Renders JSX component.
   *
   * @returns
   * @memberof CardHome
   */
  render() {
    const { data: {
      img, numberOfThingsToDo, title
    } } = this.props;
    const { isFavourite } = this.state;
    const favouriteIcon = isFavourite ? 'heart' : 'heart-o';
    const favouriteIconColor = isFavourite ? 'red' : 'white';

    return (
      <TouchableOpacity
        onPress={this.handleOnPressView}
      >
        <ImageBackground
          source={img}
          style={styles.card}
        >
          <TouchableOpacity
            style={styles.favourite}
            onPress={this.handleOnPressFav}
            hitSlop={{ top: 20, bottom: 20, left: 50, right: 50 }}
          >
            <Icon
              name={favouriteIcon}
              color={favouriteIconColor}
              size={24}
            />
          </TouchableOpacity>

          <View style={styles.textView}>
            <Text style={styles.numberOfThingsToDo}>{numberOfThingsToDo}</Text>
            <View style={styles.textThingsToDo}>
              <Text style={styles.staticTextThingsToDo}>Things to do in</Text>
              <Text style={styles.title}>{title}</Text>
            </View>
          </View>
        </ImageBackground>
      </TouchableOpacity >
    );
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 200,
    marginBottom: 2,
    position: 'relative',
    justifyContent: 'flex-end',
  },
  favourite: {
    height: 25,
    width: 25,
    position: 'absolute',
    right: 5,
    top: 5,
  },
  textView: {
    paddingLeft: 10,
    color: '#FFFF',
    backgroundColor: 'rgba(85,42,26,0.4)',
    flexDirection: 'row',
  },
  numberOfThingsToDo: {
    fontSize: 42,
    color: '#FFFF',
    paddingRight: 10
  },
  textThingsToDo: {

  },
  staticTextThingsToDo: {
    color: '#FFFF',
  },
  title: {
    color: '#FFFF',
    fontSize: 20,
  }
});

export default CardHome;
