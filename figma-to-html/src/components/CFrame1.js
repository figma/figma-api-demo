import React, { PureComponent } from 'react';
import { getComponentFromId } from '../figmaComponents';

export class CFrame1 extends PureComponent {
  state = {};

  render() {
    const Component = getComponentFromId(this.props.nodeId);
    return <Component {...this.props} {...this.state} />;
  }
}
