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
this.state = { name: "", email: "", message: "" };
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

  handleSubmit = e => {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ "form-name": "contact", ...this.state })
        })
          .then(() => alert("Success!"))
          .catch(error => alert(error));

        e.preventDefault();
      };

      handleChange = e => this.setState({ [e.target.name]: e.target.value });
      
  render() {
    const { children, col, onClose } = this.props;
const { name, email, message } = this.state;
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
                    <form onSubmit={this.handleSubmit}>
                              <p>
                                <label>
                                  Your Name: <input type="text" name="name" value={name} onChange={this.handleChange} />
                                </label>
                              </p>
                              <p>
                                <label>
                                  Your Email: <input type="email" name="email" value={email} onChange={this.handleChange} />
                                </label>
                              </p>
                              <p>
                                <label>
                                  Message: <textarea name="message" value={message} onChange={this.handleChange} />
                                </label>
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
