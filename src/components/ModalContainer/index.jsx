import * as React from 'react';
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';

import { Container, Center, Content, CloseButton, BodyStyled, CloseIconStyled } from './styled';

export default class ModalContainer extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    onClose: PropTypes.func.isRequired,
    col: PropTypes.object,
  };

  static defaultProps = {
    col: { xs: 12 },
  };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.keyCode === 27) {
      this.props.onClose();
    }
  };

  render() {
    const { children, col, onClose } = this.props;

    return (
      <Container>
        <BodyStyled />
        <Center>
          <Grid>
            <Row>
              <Col {...col}>
                <Content>
                  <CloseButton onClick={onClose}>
                    <CloseIconStyled />
                  </CloseButton>
                    <form name="contact" method="POST" netlify-honeypot="bot-field" data-netlify="true">
  <p class="hidden">
    <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
  </p>
  <p>
    <label>Email: <input type="text" name="email" /></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
                </Content>
              </Col>
            </Row>
          </Grid>
        </Center>
      </Container>
    );
  }
}
