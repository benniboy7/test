import * as React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row } from 'react-styled-flexboxgrid';

import {
  Container,
  Heading,
  ServiceTitle,
  ColStyled,
  ServiceDescription,
  AirplaneIconStyled,
  AirshipIconStyled,
  BalloonIconStyled,
} from './styled';

const SERVICES = [
  {
    id: 1,
    description: 'Our all-encompassing liability coverage for airport operations.',
    title: 'Airport General Liability',
    icon: <AirplaneIconStyled />,
  },
  {
    id: 2,
    description: 'We offer comprehensive coverage for all activities within the main cabin.',
    title: 'Aircraft Hull & Liability',
    icon: <AirshipIconStyled />,
  },
  {
    id: 3,
    description:
      'Our coverage for product damage and third parties injured is designed to suit the needs of any client.',
    title: 'Product & Complete Operations',
    icon: <BalloonIconStyled />,
  },
  {
    id: 4,
    description:
      'Our FBO coverage is designed to work for the various needs of our operators first.',
    title: 'Fixed Base Operate',
    icon: <AirplaneIconStyled />,
  },
  {
    id: 5,
    description:
      'We provide quality wage replacement and medical benefits to employees injured during the course of work.',
    title: 'Workers Compensation',
    icon: <AirshipIconStyled />,
  },
  {
    id: 6,
    description:
      'Our Commercial Auto & Equipment coverage provides quality coverage for all damages not covered by personal policy.',
    title: 'Commercial Auto & Equipment',
    icon: <BalloonIconStyled />,
  },
  {
    id: 7,
    description:
      'Our hangarskeepers liability coverage protects aircraft hangars, and other structures.',
    title: 'Hangarkeepers Liability',
    icon: <AirplaneIconStyled />,
  },
  {
    id: 8,
    description: 'We offer a wide array of coverage for managers, directors, and executives.',
    title: 'Management Liability',
    icon: <AirshipIconStyled />,
  },
  {
    id: 9,
    description:
      'We provide a number of additional insurance limits via our excess liability coverage.',
    title: 'Excess Liability',
    icon: <BalloonIconStyled />,
  },
];

function Services({ innerRef = () => {} }) {
  const renderedServices = SERVICES.map(service => (
    <ColStyled key={service.id} xs={12} sm={6} md={4}>
      {service.icon}
      <ServiceTitle>{service.title}</ServiceTitle>
      <ServiceDescription>{service.description}</ServiceDescription>
    </ColStyled>
  ));

  return (
    <Container innerRef={innerRef}>
      <Grid>
        <Heading>Services</Heading>
        <Row>{renderedServices}</Row>
      </Grid>
    </Container>
  );
}
Services.propTypes = {
  innerRef: PropTypes.func,
};

export default Services;
