import * as React from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';

import { Container, Title, Text, Anchor, LinkStyled, List, ListItem } from './styled';

import Documents from './Documents';

import { TYPES } from 'src/scenes/Type';

export default function Footer() {
  return (
    <Container>
      <Grid>
        <Row>
          <Col xs={12} sm={4}>
            <Title dot large>
              Sunset Aviation
            </Title>
            <Text>
              One of Southern California's preeminent insurance brokerages, Sunset Aviation provides
              accessible, trustworthy coverage to clients with a wide array of insurance needs
            </Text>
            <Text last>
              <Anchor href="mailto:team@sunsetais.com">team@sunsetais.com</Anchor>
              <br />
              <Anchor href="tel:+13104533355">(310) 453-3355</Anchor>
            </Text>
          </Col>
          <Col xs={12} sm={4} md={2} mdOffset={1}>
            <Title dot>Sunset Aviation</Title>
            <List>
              <ListItem>
                <LinkStyled to="/">Home</LinkStyled>
              </ListItem>
              {Object.values(TYPES).map(({ key, title }) => (
                <ListItem key={key}>
                  <LinkStyled to={`/${key}`}>{title}</LinkStyled>
                </ListItem>
              ))}
              <Documents />
            </List>
          </Col>
          <Col xs={12} sm={4} md={2} mdOffset={2}>
            <Title>Social</Title>
            <List>
              <ListItem>
                <Anchor href="https://www.instagram.com/ben.j.peterson/" target="_blank">
                  Instagram
                </Anchor>
              </ListItem>
              <ListItem>
                <Anchor href="https://www.linkedin.com/in/ben-peterson-64505720/" target="_blank">
                  LinkedIn
                </Anchor>
              </ListItem>
            </List>
          </Col>
        </Row>
      </Grid>
    </Container>
  );
}
