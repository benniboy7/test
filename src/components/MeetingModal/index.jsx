import * as React from 'react';
import { Redirect } from 'react-router-dom';

import { HubspotContainer, Hubspot } from './styled';

import ModalContainer from 'src/components/ModalContainer';

export default class MeetingModal extends React.Component {
  state = {
    closeInitiated: false,
  };

  handleClose = () => {
    this.setState({ closeInitiated: true });
  };

  render() {
    const { closeInitiated } = this.state;
    const { match: { params } } = this.props;

    if (closeInitiated) {
      return <Redirect to={`/${params.type || ''}`} push />;
    }

    return (
      <ModalContainer col={{ xs: 12, md: 6, mdOffset: 3 }} onClose={this.handleClose}>
        <HubspotContainer>
          <Hubspot src={process.env.HUBSPOT_URL} />
        </HubspotContainer>
      </ModalContainer>
    );
  }
}
