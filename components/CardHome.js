import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';

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
      isFav: false,
    };
  }

  /**
   * Handles press on favourite icon to change its active state.
   *
   * @memberof CardHome
   */
  onPressHandleFav = () => {
    this.setState({
      isFav: !this.state.isFav,
    })
  }

  /**
   * Renders JSX component.
   *
   * @returns
   * @memberof CardHome
   */
  render() {
    const data = this.props.data;
    const { isFav } = this.state;

    return (
      <ImageBackground source={data.img} style={styles.card}>
        <TouchableOpacity
          style={styles.fav}
          onPress={this.onPressHandleFav}
        >
          <Image
            resizeMode='cover'
            style={styles.fav}
            source={isFav ? require('../assets/img/icons/fav-active.png') : require('../assets/img/icons/fav.png')}
          />
        </TouchableOpacity>
        <View style={styles.txt}>
          <Text style={styles.num}>{data.numToDo}</Text>
          <View>
            <Text style={styles.staticText}>Things to do in</Text>
            <Text style={styles.title}>{data.title}</Text>
          </View>

        </View>
      </ImageBackground>
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
  fav: {
    height: 25,
    width: 25,
    position: 'absolute',
    right: 5,
    top: 5,
  },
  txt: {
    paddingLeft: 10,
    color: '#FFFF',
    backgroundColor: 'rgba(85,42,26,0.4)',
    flexDirection: 'row',
  },
  num: {
    fontSize: 32,
    color: '#FFFF',
    paddingRight: 10
  },
  staticText: {
    color: '#FFFF',
  },
  title: {
    color: '#FFFF',
    fontSize: 20,
  }
});

export default CardHome;
