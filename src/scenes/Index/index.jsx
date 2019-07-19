import * as React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import scrollToComponent from 'react-scroll-to-component';

import Cover from './Cover';
import Founder from './Founder';
import Partners from './Partners';
import Services from './Services';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Video from './Video';
import VideoModal from './VideoModal';

import LearnMore from 'src/components/LearnMore';
import Types from 'src/components/Types';

export default class Index extends React.Component {
  static propTypes = {
    location: PropTypes.object,
  };

  componentRefs = {};

  componentDidMount() {
    this.scrollToComponent(this.props.location.pathname.substr(1));
  }

  shouldComponentUpdate(nextProps) {
    const { location: { pathname: newPath } } = nextProps;
    const { location: { pathname: oldPath } } = this.props;

    if (oldPath.includes('video') && !newPath.includes('video')) return true;
    if (!oldPath.includes('video') && newPath.includes('video')) return true;

    this.scrollToComponent(newPath.substr(1));
    return false;
  }

  scrollToComponent(component) {
    if (component === '') component = 'cover';
    if (component in this.componentRefs) {
      scrollToComponent(this.componentRefs[component]);
    }
  }

  render() {
    return (
      <section>
        <Cover innerRef={c => (this.componentRefs.cover = c)} />
        <Testimonials innerRef={c => (this.componentRefs.testimonials = c)} />
        <Founder innerRef={c => (this.componentRefs.about = c)} />
        <Partners />
        <Services innerRef={c => (this.componentRefs.services = c)} />
        <LearnMore first="rightTop" second="leftBottom" />
        <Types />
        <Video />
        <Contact innerRef={c => (this.componentRefs.contactus = c)} />
        <LearnMore first="leftTop" second="none" />
        <Route path="/video" component={VideoModal} />
      </section>
    );
  }
}
