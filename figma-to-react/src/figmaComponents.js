import React, { PureComponent } from 'react';
import { CClock } from './components/CClock';
import { CFClock } from './components/CFClock';

export class MasterFClock extends PureComponent {
  render() {
    return <div className="master" style={{backgroundColor: "rgba(255, 255, 255, 1)"}}>
      <CFClock {...this.props} nodeId="10:11" />
    </div>
  }
}

export function getComponentFromId(id) {
  if (id === "13:13") return CClock13D13;
  if (id === "10:11") return CFClock10D11;
  return null;
}

class CClock13D13 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{"justifyContent":"center"}} className="outerDiv">
          <div
            id="I13:13;12:55"
            style={{"width":628.5506591796875,"marginLeft":-5.366455078125,"height":null,"marginTop":38.907073974609375,"marginBottom":36.8946533203125,"minHeight":213.31814575195312,"backgroundColor":"rgba(0, 0, 0, 1)","borderRadius":"26.832469940185547px 26.832469940185547px 26.832469940185547px 26.832469940185547px"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":1,"justifyContent":"center"}} className="outerDiv">
          <div
            id="I13:13;12:57"
            style={{"width":297.8404235839844,"marginLeft":-59.702178955078125,"height":null,"marginTop":-199.90191650390625,"marginBottom":88.54716491699219,"minHeight":111.35475158691406,"color":"rgba(255, 255, 255, 1)","fontSize":96.59689331054688,"fontWeight":700,"fontFamily":"Roboto","textAlign":"CENTER","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
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
        <div style={{"zIndex":2,"justifyContent":"center"}} className="outerDiv">
          <div
            id="I13:13;12:58"
            style={{"width":79.689208984375,"marginLeft":268.1873779296875,"height":null,"marginTop":-185.81484985351562,"marginBottom":119.06339263916016,"minHeight":66.75145721435547,"color":"rgba(255, 255, 255, 1)","fontSize":32.19896697998047,"fontWeight":700,"fontFamily":"Roboto","textAlign":"CENTER","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
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
        <div style={{"zIndex":3,"justifyContent":"center"}} className="outerDiv">
          <div
            id="I13:13;12:59"
            style={{"width":64.45450592041016,"marginLeft":274.41849517822266,"height":null,"marginTop":-137.51641845703125,"marginBottom":87.1600570678711,"minHeight":50.356361389160156,"color":"rgba(255, 255, 255, 1)","fontSize":24.14922332763672,"fontWeight":700,"fontFamily":"Roboto","textAlign":"CENTER","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
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
        <div style={{"zIndex":6}} className="outerDiv centerer">
          <div
            id="I13:13;12:60"
            style={{"marginLeft":61.0438232421875,"marginRight":631.0103235244751,"flexGrow":1,"marginTop":61.04388427734375,"marginBottom":204.59757614135742}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="16" height="24" viewBox="0 0 16 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.00002 12C8.00002 9.79087 9.79088 7.99999 12 7.99999C14.2091 7.99999 16 9.79084 16 12C16 14.2091 14.2091 16 12 16C9.79088 16 8.00002 14.2091 8.00002 12Z" fill="#1ABCFE"/>
<path d="M0 20C0 17.7909 1.79086 16 3.99999 16H7.99998V20C7.99998 22.2091 6.20913 24 3.99999 24C1.79086 24 0 22.2091 0 20Z" fill="#0ACF83"/>
<path d="M8.00002 3.11955e-05V8.00001H12C14.2091 8.00001 16 6.20916 16 4.00002C16 1.79089 14.2091 3.11955e-05 12 3.11955e-05L8.00002 3.11955e-05Z" fill="#FF7262"/>
<path d="M0 4C0 6.20913 1.79086 7.99999 3.99999 7.99999L7.99998 7.99999L7.99998 3.89943e-06L3.99999 3.89943e-06C1.79086 3.89943e-06 0 1.79086 0 4Z" fill="#F24E1E"/>
<path d="M0 12C0 14.2091 1.79086 16 3.99999 16H7.99998L7.99998 8.00002H3.99999C1.79086 8.00002 0 9.79088 0 12Z" fill="#A259FF"/>
</svg>
`}} />
          </div>
        </div>
      </div>
    );
  }
}

class CFClock10D11 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{"justifyContent":"center"}} className="outerDiv">
          <div
            id="13:13"
            style={{"width":707.7064208984375,"marginLeft":-0.2935791015625,"height":null,"marginTop":109,"marginBottom":244.880126953125,"minHeight":289.119873046875,"backgroundColor":"rgba(255, 255, 255, 1)","overflow":"hidden"}}
            className="innerDiv"
          >
            <CClock {...this.props} nodeId="13:13" />
          </div>
        </div>
      </div>
    );
  }
}

