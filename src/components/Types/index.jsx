import * as React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-styled-flexboxgrid';

import {
  Container,
  TypeContainer,
  Image,
  GridStyled,
  TextContainer,
  Title,
  Description,
  LinkContainer,
  MoreLink,
  TextInner,
} from './styled';

import { toSrcSet } from 'src/services/helpers';

import AirplanesImage1 from './images/Airplanes.jpg';
import AirplanesImage2 from './images/Airplanes@2x.jpg';

import DronesImage1 from './images/Drones.jpg';
import DronesImage2 from './images/Drones@2x.jpg';
import DronesImage3 from './images/Drones@3x.jpg';

import HelicoptersImage1 from './images/Helicopters.jpg';
import HelicoptersImage2 from './images/Helicopters@2x.jpg';
import HelicoptersImage3 from './images/Helicopters@3x.jpg';

import JetsImage1 from './images/Jets.jpg';
import JetsImage2 from './images/Jets@2x.jpg';
import JetsImage3 from './images/Jets@3x.jpg';

const TYPES = [
  {
    key: 'airplanes',
    description:
      'Having fostered relationships with the largest and most reputable carriers in aviation, we offer wide-ranging airplane insurance coverage.',
    images: [AirplanesImage1, AirplanesImage2],
    title: 'Airplanes',
  },
  {
    key: 'drones',
    description: 'We offer comprehensive coverage for drones and Unmanned Aircraft Systems (UAS).',
    images: [DronesImage1, DronesImage2, DronesImage3],
    title: 'Drones',
  },
  {
    key: 'helicopters',
    description:
      "We provide a wide array of helicopter insurance coverage, and always seek to provide care that is in tune with our customers' specific needs.",
    images: [HelicoptersImage1, HelicoptersImage2, HelicoptersImage3],
    title: 'Helicopters',
  },
  {
    key: 'jets',
    description:
      'No matter the scale, we are able to provide jet insurance coverage that is knowledgable and committed to our clients first.',
    images: [JetsImage1, JetsImage2, JetsImage3],
    title: 'Jets',
  },
];

function Types({ exclude = null }) {
  let index = 0;
  const renderedTypes = TYPES.map(type => {
    if (type.key === exclude) return null;

    const odd = !!(index++ % 2);
    const tmp = [...type.images];
    const image = tmp.shift();
    const imageAttrs = {
      src: image,
      ...toSrcSet(tmp),
      [odd ? 'left' : 'right']: true,
    };
    const colAttrs = { xs: 12, sm: 6, md: 5 };
    if (odd) {
      colAttrs.smOffset = 6;
      colAttrs.mdOffset = 7;
    }

    return (
      <TypeContainer key={type.key}>
        <Image {...imageAttrs} />
        <GridStyled>
          <Row>
            <Col {...colAttrs}>
              <TextContainer>
                <TextInner>
                  <Title>{type.title}</Title>
                  <Description>{type.description}</Description>
                  <LinkContainer>
                    <MoreLink to={`/${type.key}`}>Learn more</MoreLink>
                  </LinkContainer>
                </TextInner>
              </TextContainer>
            </Col>
          </Row>
        </GridStyled>
      </TypeContainer>
    );
  });

  return <Container>{renderedTypes}</Container>;
}
Types.propTypes = {
  exclude: PropTypes.oneOf(TYPES.map(type => type.key)),
};

export default Types;
