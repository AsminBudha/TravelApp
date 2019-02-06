import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { white } from 'ansi-colors';

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
      <View style={styles.card}>
        <Image
          source={data.img}
          style={styles.img}
          resizeMode='cover'
        />
        <View style={styles.txt}>
          <Text style={styles.num}>{data.numToDo}</Text>
          <Text style={styles.title}>Things to do in{'\n'} {data.title}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    paddingBottom: 5,
    height: 200,
    flex: 1,
    alignItems: 'flex-start',
    position: 'relative',
  },
  img: {
    flex: 1
  },
  txt: {
    position: 'absolute',
    bottom: 10,
    paddingLeft: 10,
    color: '#FFFF',
    flexDirection: 'row',
    backgroundColor: '#552A1A',
    alignSelf: 'stretch',
  },
  num: {
    fontSize: 32,
    color: '#FFFF',
    paddingRight: 10
  },
  title: {
    color: '#FFFF',
  }
});

export default CardHome;
