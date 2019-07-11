import * as React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'react-styled-flexboxgrid';

import {
  GridStyled,
  Heading,
  ItemContainer,
  Message,
  Picture,
  Name,
  Title,
  LeftIconStyled,
  NavButtonContainer,
  RightIconStyled,
  NavButton,
} from './styled';

import { toSrcSet } from 'src/services/helpers';

import AlanShapiroPicture1 from './images/AlanShapiro.jpg';
import AlanShapiroPicture2 from './images/AlanShapiro@2x.jpg';
import AlanShapiroPicture3 from './images/AlanShapiro@3x.jpg';

import AlexPalermoPicture1 from './images/AlexPalermo.jpg';
import AlexPalermoPicture2 from './images/AlexPalermo@2x.jpg';
import AlexPalermoPicture3 from './images/AlexPalermo@3x.jpg';

import DavidSteinhauserPicture1 from './images/DavidSteinhauser.jpg';
import DavidSteinhauserPicture2 from './images/DavidSteinhauser@2x.jpg';
import DavidSteinhauserPicture3 from './images/DavidSteinhauser@3x.jpg';

import HunterGaylorPicture1 from './images/HunterGaylor.jpg';
import HunterGaylorPicture2 from './images/HunterGaylor@2x.jpg';
import HunterGaylorPicture3 from './images/HunterGaylor@3x.jpg';

import JohnDerencePicture1 from './images/JohnDerence.jpg';
import JohnDerencePicture2 from './images/JohnDerence@2x.jpg';
import JohnDerencePicture3 from './images/JohnDerence@3x.jpg';

import LaceyEastonPicture1 from './images/LaceyEaston.jpg';
import LaceyEastonPicture2 from './images/LaceyEaston@2x.jpg';
import LaceyEastonPicture3 from './images/LaceyEaston@3x.jpg';

const TESTIMONIALS = [
  {
    id: 1,
    message:
      "I've been using Sunset Aviation for seven years, and I've had a wonderful relationship with Ben. He's taken care of every insurance issue I've had, and has been very attentive to all of my needs.",
    name: 'Alan Shapiro',
    pictures: [AlanShapiroPicture1, AlanShapiroPicture2, AlanShapiroPicture3],
    title: 'Owner',
  },
  {
    id: 2,
    message:
      "Every time I call Ben, he answers, and that's all I really need. When I would call my last insurance broker, it was always straight to voicemail, and that's not how Sunset does things.",
    name: 'John Derence',
    pictures: [JohnDerencePicture1, JohnDerencePicture2, JohnDerencePicture3],
    title: 'Owner Tech Flight Aviation',
  },
  {
    id: 3,
    message:
      'I find Ben to have the most enthusiasm and passion in building a successful and trustworthy aviation insurance brokerage',
    name: 'Hunter Gaylor',
    pictures: [HunterGaylorPicture1, HunterGaylorPicture2, HunterGaylorPicture3],
    title: 'Entrepreneur/Jet Sales - AvJet',
  },
  {
    id: 4,
    message:
      'Sunset Aviation or Ben has gotten us great deals and provides us with Lay-Up Credits, Good Experience Returns, and flexible Pilot Warranty that fits our needs',
    name: 'Alex Palermo',
    pictures: [AlexPalermoPicture1, AlexPalermoPicture2, AlexPalermoPicture3],
    title: 'Owner Legacy 650',
  },
  {
    id: 5,
    message:
      'Ben is dedicated and delivers on his commitments. He is a man of integrity that is always climbing to do better. He is a pleasure and I cannot think of anyone else who could do better.',
    name: 'Lacey Easton',
    pictures: [LaceyEastonPicture1, LaceyEastonPicture2, LaceyEastonPicture3],
    title: 'Delta Private Jets, Business Development',
  },
  {
    id: 6,
    message:
      'Sunset Aviation has provided our insurance coverage for 15 plus years. Ben provides us with great support and he is always ready to help no matter time of day or day of week. Ben delivers outstanding service and ongoing support to our Aviation Department.',
    name: 'David Steinhauser',
    pictures: [DavidSteinhauserPicture1, DavidSteinhauserPicture2, DavidSteinhauserPicture3],
    title: 'Chief Pilot & Aviation Department Manager - Challenger 605',
  },
];

export default class Testimonials extends React.Component {
  static propTypes = {
    innerRef: PropTypes.func,
  };

  static defaultProps = {
    innerRef: () => {},
  };

  state = {
    testimonials: [...TESTIMONIALS],
  };

  handlePrevButton = () => {
    const testimonials = [...this.state.testimonials];
    const lastItem = testimonials.pop();
    testimonials.splice(0, 0, lastItem);
    this.setState({ testimonials });
  };

  handleNextButton = () => {
    const testimonials = [...this.state.testimonials];
    const firstItem = testimonials.shift();
    testimonials.push(firstItem);
    this.setState({ testimonials });
  };

  render() {
    const renderedTestimonials = this.state.testimonials.slice(0, 3).map((item, index) => {
      const tmp = [...item.pictures];
      const picture = tmp.shift();

      return (
        <Col key={item.id} xs={12} sm={6} md={4}>
          <ItemContainer first={index === 0}>
            <Message>{item.message}</Message>
            <Picture src={picture} {...toSrcSet(tmp)} />
            <Name>{item.name}</Name>
            <Title>{item.title}</Title>
          </ItemContainer>
        </Col>
      );
    });

    return (
      <GridStyled innerRef={this.props.innerRef}>
        <Heading>Testimonials</Heading>
        <NavButtonContainer>
          <NavButton onClick={this.handlePrevButton}>
            <LeftIconStyled />
          </NavButton>
          <NavButton onClick={this.handleNextButton} withMargin>
            <RightIconStyled />
          </NavButton>
        </NavButtonContainer>
        <Row>{renderedTestimonials}</Row>
      </GridStyled>
    );
  }
}
