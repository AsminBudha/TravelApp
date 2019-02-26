import React from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';

import * as http from '../constants/http';
import TabLayout from '../components/TabLayout';
import * as actionTypes from '../redux/actionTypes';
import ThingsToDoItemInfo from '../components/ThingsToDoItemInfo';
import ThingsToDoItemReview from '../components/ThingsToDoItemReview';
import DynamicHeightGridView from '../components/DynamicHeightGridView';

/**
 * Screen for profile of things todo item.
 *
 * @class ThingsToDoItemProfile
 * @extends {React.Component}
 */
class ThingsToDoItemProfile extends React.Component {
  componentDidMount() {
    http.getAllPictures()
      .then(res => this.props.addAllPicture(res.data))
      .catch(err => console.warn(err));
  }
  /**
   * Renders JSX element.
   *
   * @returns
   * @memberof ThingsToDoItemProfile
   */
  render() {
    const { pictures } = this.props;
    console.warn(pictures);
    const tabs = [
      {
        title: 'Info',
        screen: <ThingsToDoItemInfo  {...this.props} />,
      },
      {
        title: 'Pictures',
        screen: <DynamicHeightGridView  {...this.props} data={pictures} />,
      }, {
        title: 'Reviews',
        screen: <ThingsToDoItemReview  {...this.props} />,
      }
    ];

    return (
      <View>
        <TabLayout tabs={tabs} />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  console.warn('hello', state);
  return state.pictureReducer;
}

const mapDispatchToProps = (dispatch) => ({
  addAllPicture: (pictures) => dispatch(addAllPicture(pictures)),
});

const addAllPicture = (pictures) => ({
  type: actionTypes.ADD_ALL_PICTURES,
  payload: pictures,
});

export default connect(mapStateToProps, mapDispatchToProps)(ThingsToDoItemProfile);
