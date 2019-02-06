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
   * Renders JSX component.
   *
   * @returns
   * @memberof CardHome
   */
  render() {
    const data = this.props.data;

    return (
      <ImageBackground source={data.img} style={styles.card}>
        <TouchableOpacity
          style={styles.fav}
        >
          <Image
            resizeMode='cover'
            style={styles.fav}
            source={require('../assets/img/icons/fav.png')}
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
    backgroundColor: '#552A1A',
    opacity: 0.6,
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
