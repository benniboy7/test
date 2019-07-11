import * as React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import Cover from './Cover';
import Description from './Description';

import LearnMore from 'src/components/LearnMore';
import Types from 'src/components/Types';

import { TypeContext } from 'src/services/contexts';

import AirplanesCoverImage1 from './images/AirplanesCover.jpg';
import AirplanesCoverImage2 from './images/AirplanesCover@2x.jpg';

import AirplanesFrontImage1 from './images/AirplanesFront.jpg';
import AirplanesFrontImage2 from './images/AirplanesFront@2x.jpg';

import DronesCoverImage1 from './images/DronesCover.jpg';
import DronesCoverImage2 from './images/DronesCover@2x.jpg';
import DronesCoverImage3 from './images/DronesCover@3x.jpg';

import DronesFrontImage1 from './images/DronesFront.jpg';
import DronesFrontImage2 from './images/DronesFront@2x.jpg';

import HelicoptersCoverImage1 from './images/HelicoptersCover.jpg';
import HelicoptersCoverImage2 from './images/HelicoptersCover@2x.jpg';
import HelicoptersCoverImage3 from './images/HelicoptersCover@3x.jpg';

import HelicoptersFrontImage1 from './images/HelicoptersFront.jpg';
import HelicoptersFrontImage2 from './images/HelicoptersFront@2x.jpg';

import HelicoptersBackImage1 from './images/HelicoptersBack.jpg';
import HelicoptersBackImage2 from './images/HelicoptersBack@2x.jpg';
import HelicoptersBackImage3 from './images/HelicoptersBack@3x.jpg';

import JetsCoverImage1 from './images/JetsCover.jpg';
import JetsCoverImage2 from './images/JetsCover@2x.jpg';
import JetsCoverImage3 from './images/JetsCover@3x.jpg';

import JetsFrontImage1 from './images/JetsFront.jpg';
import JetsFrontImage2 from './images/JetsFront@2x.jpg';

export const TYPES = {
  airplanes: {
    key: 'airplanes',
    cover: [AirplanesCoverImage1, AirplanesCoverImage2],
    description: [
      'Having fostered relationships with the largest and most reputable carriers in aviation, we offer wide-ranging airplane insurance coverage. Our commitment to our clients is paramount, and it is our mission to provide clients with the highest degree of care.',
    ],
    pictures: [
      [AirplanesFrontImage1, AirplanesFrontImage2],
      [HelicoptersBackImage1, HelicoptersBackImage2, HelicoptersBackImage3],
    ],
    title: 'Airplanes',
  },
  drones: {
    key: 'drones',
    cover: [DronesCoverImage1, DronesCoverImage2, DronesCoverImage3],
    description: [
      'We offer comprehensive coverage for drones and Unmanned Aircraft Systems (UAS). In a rapidly growing insurance and risk sector, we remain committed to providing customers with trustworthy, exceptional coverage.',
    ],
    pictures: [
      [DronesFrontImage1, DronesFrontImage2],
      [HelicoptersBackImage1, HelicoptersBackImage2, HelicoptersBackImage3],
    ],
    title: 'Drones',
  },
  helicopters: {
    key: 'helicopters',
    cover: [HelicoptersCoverImage1, HelicoptersCoverImage2, HelicoptersCoverImage3],
    description: [
      "We provide a wide array of helicopter insurance coverage, and always seek to provide care that is in tune with our customers' specific needs.",
    ],
    pictures: [
      [HelicoptersFrontImage1, HelicoptersFrontImage2],
      [HelicoptersBackImage1, HelicoptersBackImage2, HelicoptersBackImage3],
    ],
    title: 'Helicopters',
  },
  jets: {
    key: 'jets',
    cover: [JetsCoverImage1, JetsCoverImage2, JetsCoverImage3],
    description: [
      'No matter the scale, we are able to provide jet insurance coverage that is knowledgable and committed to our clients first.',
    ],
    pictures: [
      [JetsFrontImage1, JetsFrontImage2],
      [HelicoptersBackImage1, HelicoptersBackImage2, HelicoptersBackImage3],
    ],
    title: 'Jets',
  },
};

export default class Type extends React.Component {
  static propTypes = {
    match: PropTypes.object,
  };

  state = {
    type: null,
  };

  componentDidMount() {
    this.setType(this.props.match.params.type);
  }

  shouldComponentUpdate(nextProps) {
    const { type } = nextProps.match.params;
    if (this.props.match.params.type === type) return true;
    this.setType(type);
    return false;
  }

  setType(type) {
    window.scroll(0, 0);
    if (type in TYPES) {
      this.setState({
        type: TYPES[type],
      });
    }
  }

  render() {
    const { type } = this.state;

    if (type === null) return null;

    return (
      <TypeContext.Provider value={type}>
        <section>
          <Helmet>
            <title>
              {type.title} - {window.APP_TITLE}
            </title>
          </Helmet>
          <Cover background={type.cover} title={type.title} />
          <Description pictures={type.pictures} text={type.description} />
          <LearnMore first="leftTop" second="rightBottom" />
          <Types exclude={type.key} />
          <LearnMore first="leftBottom" second="none" />
        </section>
      </TypeContext.Provider>
    );
  }
}
