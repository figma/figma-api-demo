import moment from 'moment';
import React, { PureComponent } from 'react';
import { getComponentFromId } from '../figmaComponents';

export class CClock extends PureComponent {
  state = this.getTime();

  ticker = null;

  getTime() {
    return {
      time: moment().format('hh:mm'),
      seconds: moment().format(':ss'),
      ampm: moment().format('A'),
    };
  }

  componentWillMount() {
    this.ticker = setInterval(() => {
      this.setState(this.getTime());
    }, 1000);
  }

  componentWillUnmount() {
    if (this.ticker) clearInterval(this.ticker);
  }

  render() {
    const Component = getComponentFromId(this.props.nodeId);
    return <Component {...this.props} {...this.state} />;
  }
}
