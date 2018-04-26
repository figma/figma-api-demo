import React, { PureComponent } from 'react';
import { CClock } from './components/CClock';

export class MasterClock extends PureComponent {
  render() {
    return <div className="master" style={{backgroundColor: "rgba(255, 255, 255, 1)"}}>
      <CClock nodeId="1:2" />
    </div>
  }
}

export function getComponentFromId(id) {
  if (id === "1:2") return CClock1D2;
  return null;
}

class CClock1D2 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{"justifyContent":"center","alignItems":"center"}} className="outerDiv centerer">
          <div
            id="1:4"
            style={{"width":770,"marginLeft":26.99999237060547,"height":22.5,"marginTop":-323.4999999999998}}
            className="innerDiv"
          >
            <img alt="Fade" className="vector" src="https://s3-us-west-2.amazonaws.com/figma-alpha/img/af89/eea7/c1a95edb1ca58c33522d9859410af26b" />
          </div>
        </div>
        <div style={{"zIndex":1,"justifyContent":"center","alignItems":"center"}} className="outerDiv centerer">
          <div
            id="1:5"
            style={{"width":808,"marginLeft":25.00000000000003,"height":324.3865051269531,"marginTop":23.61347198486328,"backgroundColor":"rgba(145, 215, 237, 1)","borderRadius":"20px 20px 20px 20px"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":2,"justifyContent":"center","alignItems":"center"}} className="outerDiv centerer">
          <div
            id="1:6"
            style={{"width":762.7644653320312,"marginLeft":26.559833526611328,"height":279.1595458984375,"marginTop":18.934829711914062,"backgroundColor":"rgba(111, 207, 151, 1)","boxShadow":"inset 0px 4px 4px rgba(0, 0, 0, 0.25098039215686274)","borderRadius":"10px 10px 10px 10px"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":3,"justifyContent":"center","alignItems":"center"}} className="outerDiv centerer">
          <div
            id="1:8"
            style={{"width":444,"marginLeft":-61,"height":166,"marginTop":24,"color":"rgba(255, 255, 255, 1)","fontSize":144,"fontWeight":500,"fontFamily":"Roboto","textAlign":"CENTER","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              {this.props.time && this.props.time.split("\n").map((line, idx) => <div key={idx}>{line}</div>)}
              {!this.props.time && (<div>
                <span style={{}} key="end">10:10</span>
              </div>)}
            </div>
          </div>
        </div>
        <div style={{"zIndex":4,"justifyContent":"center","alignItems":"center"}} className="outerDiv centerer">
          <div
            id="1:9"
            style={{"width":118.79518127441406,"marginLeft":427.79518127441406,"height":99.50847625732422,"marginTop":-0.49152374267578125,"color":"rgba(255, 255, 255, 1)","fontSize":48,"fontWeight":500,"fontFamily":"Roboto","textAlign":"CENTER","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              {this.props.seconds && this.props.seconds.split("\n").map((line, idx) => <div key={idx}>{line}</div>)}
              {!this.props.seconds && (<div>
                <span style={{}} key="end">:10</span>
              </div>)}
            </div>
          </div>
        </div>
        <div style={{"zIndex":5,"justifyContent":"center","alignItems":"center"}} className="outerDiv centerer">
          <div
            id="1:10"
            style={{"width":96.08433532714844,"marginLeft":437.08433532714844,"height":75.06779479980469,"marginTop":119.06779479980469,"color":"rgba(255, 255, 255, 1)","fontSize":36,"fontWeight":500,"fontFamily":"Roboto","textAlign":"CENTER","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              {this.props.ampm && this.props.ampm.split("\n").map((line, idx) => <div key={idx}>{line}</div>)}
              {!this.props.ampm && (<div>
                <span style={{}} key="end">PM</span>
              </div>)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

