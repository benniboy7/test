import * as React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

import { Embed, EmbedContainer } from './styled';

import ModalContainer from 'src/components/ModalContainer';

@withRouter
export default class VideoModal extends React.Component {
  static propTypes = {
    history: PropTypes.object,
  };

  handleClose = () => {
    this.props.history.goBack();
  };

  render() {
    return (
      <ModalContainer col={{ xs: 12, md: 10, mdOffset: 1 }} onClose={this.handleClose}>
        <EmbedContainer>
          <Embed src={process.env.VIDEO_EMBED_URL} allowFullScreen />
        </EmbedContainer>
      </ModalContainer>
    );
  }
}
