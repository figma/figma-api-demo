import React, { PureComponent } from 'react';
import { CDiscover } from './components/CDiscover';
import { CLoggedout } from './components/CLoggedout';
import { CSearch } from './components/CSearch';
import { CProfile } from './components/CProfile';

export class MasterDiscover extends PureComponent {
  render() {
    return <div className="master" style={{backgroundColor: "rgba(255, 255, 255, 1)"}}>
      <CDiscover {...this.props} nodeId="0:1003" />
    </div>
  }
}

export class MasterLoggedout extends PureComponent {
  render() {
    return <div className="master" style={{backgroundColor: "rgba(255, 255, 255, 1)"}}>
      <CLoggedout {...this.props} nodeId="0:920" />
    </div>
  }
}

export class MasterSearch extends PureComponent {
  render() {
    return <div className="master" style={{backgroundColor: "rgba(255, 255, 255, 1)"}}>
      <CSearch {...this.props} nodeId="0:952" />
    </div>
  }
}

export class MasterProfile extends PureComponent {
  render() {
    return <div className="master" style={{backgroundColor: "rgba(255, 255, 255, 1)"}}>
      <CProfile {...this.props} nodeId="0:495" />
    </div>
  }
}

export function getComponentFromId(id) {
  if (id === "0:1003") return CDiscover0D1003;
  if (id === "0:920") return CLoggedout0D920;
  if (id === "0:952") return CSearch0D952;
  if (id === "0:495") return CProfile0D495;
  return null;
}

class CDiscover0D1003 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv">
          <div
            id="0:1004"
            style={{"marginLeft":0,"width":375,"minWidth":375,"height":null,"marginTop":0,"marginBottom":-1455,"minHeight":2267,"backgroundColor":"rgba(255, 255, 255, 1)"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":8}} className="outerDiv">
          <div
            id="0:1304"
            style={{"marginLeft":0,"width":375,"minWidth":375,"height":null,"marginTop":-812,"marginBottom":768,"minHeight":44,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{"zIndex":1}} className="outerDiv">
                <div
                  id="0:1321"
                  style={{"marginLeft":21,"width":56,"minWidth":56,"height":null,"marginTop":8,"marginBottom":13,"minHeight":23,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <div>
                    <div style={{"alignItems":"center"}} className="outerDiv centerer">
                      <div
                        id="0:1322"
                        style={{"marginLeft":0.333984375,"marginRight":1.666015625,"flexGrow":1,"height":18,"marginTop":7,"color":"rgba(0, 0, 0, 1)","fontSize":15,"fontWeight":600,"fontFamily":"SF Pro Text","textAlign":"CENTER","fontStyle":"normal","lineHeight":"125%","letterSpacing":"-0.3333333432674408px"}}
                        className="innerDiv"
                      >
                        <div>
                          <span style={{}} key="end">9:27</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{"justifyContent":"flex-end"}} className="outerDiv">
                <div
                  id="0:1305"
                  style={{"marginRight":14,"width":68,"minWidth":68,"height":null,"marginTop":-29,"marginBottom":13,"minHeight":16,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <div>
                    <div style={{"justifyContent":"flex-end"}} className="outerDiv">
                      <div
                        id="0:1306"
                        style={{"marginRight":0,"width":25,"minWidth":25,"height":null,"marginTop":2,"marginBottom":2,"minHeight":12,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                        className="innerDiv"
                      >
                        <div>
                          <div style={{}} className="outerDiv centerer">
                            <div
                              id="0:1307"
                              style={{"width":"88%","marginLeft":"0%","height":"94.44444179534912%","top":"2.777862548828125%","border":"1px solid rgba(0, 0, 0, 1)"}}
                              className="innerDiv"
                            >
                              <div>
                              </div>
                            </div>
                          </div>
                          <div style={{"zIndex":1}} className="outerDiv centerer">
                            <div
                              id="0:1308"
                              style={{"width":"5.333333492279053%","marginLeft":"92%","height":"33.333333333333336%","top":"33.333333333333336%"}}
                              className="innerDiv"
                            >
                              <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="2" height="4" viewBox="0 0 2 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M0 0V4C0.80794 3.66122 1.33333 2.87313 1.33333 2C1.33333 1.12687 0.80794 0.338777 0 0Z" fill="black"/>
</svg>
`}} />
                            </div>
                          </div>
                          <div style={{"zIndex":2}} className="outerDiv centerer">
                            <div
                              id="0:1309"
                              style={{"width":"72%","marginLeft":"8%","height":"61.111112435658775%","top":"19.444529215494793%","backgroundColor":"rgba(0, 0, 0, 1)"}}
                              className="innerDiv"
                            >
                              <div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div style={{"zIndex":2,"justifyContent":"flex-end"}} className="outerDiv">
                      <div
                        id="0:1315"
                        style={{"marginRight":50,"width":18,"minWidth":18,"height":null,"marginTop":-14,"marginBottom":2,"minHeight":12,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                        className="innerDiv"
                      >
                        <div>
                          <div style={{}} className="outerDiv centerer">
                            <div
                              id="0:1317"
                              style={{"width":"16.666666666666668%","marginLeft":"3.7000868055555554%","height":"33.333333333333336%","top":"61.110941569010414%"}}
                              className="innerDiv"
                            >
                              <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="3" height="4" viewBox="0 0 3 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 0C2.55228 0 3 0.447715 3 1V3C3 3.55228 2.55228 4 2 4H1C0.447715 4 0 3.55228 0 3V1C0 0.447715 0.447715 0 1 0H2Z" fill="#DADADA"/>
</svg>
`}} />
                            </div>
                          </div>
                          <div style={{"zIndex":1}} className="outerDiv centerer">
                            <div
                              id="0:1318"
                              style={{"width":"16.666666666666668%","marginLeft":"29.622395833333332%","height":"50%","top":"44.44427490234375%"}}
                              className="innerDiv"
                            >
                              <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="3" height="6" viewBox="0 0 3 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 0H2C2.55228 0 3 0.447715 3 1V5C3 5.55228 2.55228 6 2 6H1C0.447715 6 0 5.55228 0 5V1C0 0.447715 0.447715 0 1 0Z" fill="#DADADA"/>
</svg>
`}} />
                            </div>
                          </div>
                          <div style={{"zIndex":2}} className="outerDiv centerer">
                            <div
                              id="0:1319"
                              style={{"width":"16.666666666666668%","marginLeft":"55.55555555555556%","height":"69.44444179534912%","top":"25%"}}
                              className="innerDiv"
                            >
                              <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="3" height="9" viewBox="0 0 3 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 0H2C2.55228 0 3 0.447715 3 1V7.33333C3 7.88562 2.55228 8.33333 2 8.33333H1C0.447715 8.33333 0 7.88562 0 7.33333V1C0 0.447715 0.447715 0 1 0Z" fill="#DADADA"/>
</svg>
`}} />
                            </div>
                          </div>
                          <div style={{"zIndex":3}} className="outerDiv centerer">
                            <div
                              id="0:1320"
                              style={{"width":"16.666666666666668%","marginLeft":"81.47786458333333%","height":"88.88889153798421%","top":"5.555470784505208%"}}
                              className="innerDiv"
                            >
                              <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="3" height="11" viewBox="0 0 3 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 0C2.55228 0 3 0.447715 3 1V9.66667C3 10.219 2.55228 10.6667 2 10.6667H1C0.447715 10.6667 0 10.219 0 9.66667V1C0 0.447715 0.447715 0 1 0L2 0Z" fill="#DADADA"/>
</svg>
`}} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div style={{"zIndex":1}} className="outerDiv centerer">
                      <div
                        id="0:1310"
                        style={{"width":"30.88235294117647%","marginLeft":"29.41176470588235%","height":"93.75%","top":"6.25%","backgroundColor":"rgba(0, 0, 0, 0)"}}
                        className="innerDiv"
                      >
                        <div>
                          <div style={{}} className="outerDiv centerer">
                            <div
                              id="0:1312"
                              style={{"width":"73.01587150210426%","marginLeft":"12.6953125%","height":"31.11111005147298%","top":"8.888956705729166%"}}
                              className="innerDiv"
                            >
                              <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="16" height="5" viewBox="0 0 16 5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.00044 2.33798C10.3219 2.33808 12.5546 3.21219 14.2371 4.77966C14.3638 4.90067 14.5663 4.89914 14.691 4.77623L15.9021 3.57849C15.9653 3.51616 16.0005 3.43171 16 3.34385C15.9995 3.25599 15.9632 3.17196 15.8993 3.11035C11.4834 -1.03678 4.51678 -1.03678 0.100859 3.11035C0.0368916 3.17192 0.000597157 3.25592 7.30289e-06 3.34378C-0.000582551 3.43164 0.0345808 3.51611 0.0977163 3.57849L1.30914 4.77623C1.43384 4.89933 1.6365 4.90086 1.76312 4.77966C3.44579 3.21209 5.67874 2.33797 8.00044 2.33798Z" fill="#DADADA"/>
</svg>
`}} />
                            </div>
                          </div>
                          <div style={{"zIndex":1}} className="outerDiv centerer">
                            <div
                              id="0:1313"
                              style={{"width":"47.61904761904762%","marginLeft":"25.390625%","height":"24.444444974263508%","top":"33.333333333333336%"}}
                              className="innerDiv"
                            >
                              <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="10" height="4" viewBox="0 0 10 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.99881 2.29945C6.22254 2.29938 7.4026 2.75598 8.3097 3.58054C8.43238 3.69756 8.62565 3.69502 8.74525 3.57482L9.90583 2.39766C9.96695 2.33591 10.0009 2.25215 9.99998 2.16511C9.9991 2.07807 9.9635 1.99502 9.90114 1.93453C7.13886 -0.644844 2.86111 -0.644844 0.0988288 1.93453C0.0364329 1.99502 0.000833291 2.07811 1.44426e-05 2.16518C-0.000804405 2.25225 0.0332261 2.336 0.0944733 2.39766L1.25472 3.57482C1.37432 3.69502 1.56759 3.69756 1.69028 3.58054C2.59677 2.75652 3.77589 2.29996 4.99881 2.29945Z" fill="#DADADA"/>
</svg>
`}} />
                            </div>
                          </div>
                          <div style={{"zIndex":2}} className="outerDiv centerer">
                            <div
                              id="0:1314"
                              style={{"width":"22.222221465337846%","marginLeft":"38.095238095238095%","height":"22.222221692403156%","top":"60%"}}
                              className="innerDiv"
                            >
                              <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="5" height="4" viewBox="0 0 5 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.89834 1.34009C4.96508 1.27595 5.00184 1.18767 4.99993 1.09612C4.99802 1.00456 4.95761 0.91783 4.88825 0.856407C3.50964 -0.285469 1.49054 -0.285469 0.111933 0.856407C0.0425245 0.917781 0.00205366 1.00448 7.6004e-05 1.09604C-0.00190165 1.1876 0.0347892 1.2759 0.101485 1.34009L2.26052 3.47345C2.3238 3.53614 2.41007 3.57143 2.50009 3.57143C2.59011 3.57143 2.67639 3.53614 2.73967 3.47345L4.89834 1.34009Z" fill="#DADADA"/>
</svg>
`}} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":6}} className="outerDiv">
          <div
            id="0:1394"
            style={{"marginLeft":16,"width":148,"minWidth":148,"height":null,"marginTop":-736,"marginBottom":696,"minHeight":40,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="0:1395"
                  style={{"width":"106.08108108108108%","marginLeft":"0%","height":"100%","top":"0%","color":"rgba(0, 0, 0, 1)","fontSize":36,"fontWeight":400,"fontFamily":"Comfortaa","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"-0.54px"}}
                  className="innerDiv"
                >
                  <div>
                    <span style={{}} key="end">Discover</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":3}} className="outerDiv">
          <div
            id="0:1008"
            style={{"marginLeft":16,"width":132,"minWidth":132,"height":null,"marginTop":-664,"marginBottom":649,"minHeight":15,"color":"rgba(0, 0, 0, 1)","fontSize":13,"fontWeight":900,"fontFamily":"Roboto","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0.52px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">What’s new today</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":2}} className="outerDiv">
          <div
            id="0:1006"
            style={{"marginLeft":16,"width":343,"minWidth":343,"height":null,"marginTop":-625,"marginBottom":238,"minHeight":387,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv">
                <div
                  id="0:1007"
                  style={{"marginLeft":0,"width":343,"minWidth":343,"height":null,"marginTop":0,"marginBottom":44,"minHeight":343}}
                  className="innerDiv"
                >
                  <div className="vector" dangerouslySetInnerHTML={{__html: `<img src="https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ecad/70ff/f8f8edebf56c61b2628058be61342c39">`}} />
                </div>
              </div>
              <div style={{"zIndex":1}} className="outerDiv">
                <div
                  id="0:1356"
                  style={{"marginLeft":0,"width":139,"minWidth":139,"height":null,"marginTop":-28,"marginBottom":0,"minHeight":28,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <div>
                    <div style={{}} className="outerDiv centerer">
                      <div
                        id="0:1357"
                        style={{"width":"66.90647482014388%","marginLeft":"25.899280575539567%","height":"53.57142857142857%","top":"0%","color":"rgba(0, 0, 0, 1)","fontSize":13,"fontWeight":700,"fontFamily":"Roboto","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
                        className="innerDiv"
                      >
                        <div>
                          <span style={{}} key="end">Ridhwan Nordin</span>
                        </div>
                      </div>
                    </div>
                    <div style={{"zIndex":1}} className="outerDiv centerer">
                      <div
                        id="0:1358"
                        style={{"width":"35.25179856115108%","marginLeft":"25.899280575539567%","height":"46.42857142857143%","top":"53.57142857142857%","color":"rgba(0, 0, 0, 1)","fontSize":11,"fontWeight":400,"fontFamily":"Roboto","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
                        className="innerDiv"
                      >
                        <div>
                          <span style={{}} key="end">@ridzjcob</span>
                        </div>
                      </div>
                    </div>
                    <div style={{"zIndex":2}} className="outerDiv centerer">
                      <div
                        id="0:1359"
                        style={{"width":"20.14388489208633%","marginLeft":"0%","height":"100%","top":"0%"}}
                        className="innerDiv"
                      >
                        <div className="vector" dangerouslySetInnerHTML={{__html: `<img src="https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0064/1ffe/951b7ec060ae1dde9ca24edc161eefa7">`}} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":4}} className="outerDiv">
          <div
            id="0:1009"
            style={{"marginLeft":16,"width":84,"minWidth":84,"height":null,"marginTop":-190,"marginBottom":175,"minHeight":15,"color":"rgba(0, 0, 0, 1)","fontSize":13,"fontWeight":900,"fontFamily":"Roboto","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0.52px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Browse all</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv">
          <div
            id="0:1005"
            style={{"marginLeft":16,"width":167,"minWidth":167,"height":null,"marginTop":-151,"marginBottom":-69,"minHeight":220}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<img src="https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/69db/d055/273e7d268b2700ff4e4ec2acb04a6518">`}} />
          </div>
        </div>
        <div style={{"zIndex":5}} className="outerDiv">
          <div
            id="0:1010"
            style={{"marginLeft":192,"width":167,"minWidth":167,"height":null,"marginTop":-151,"marginBottom":-159,"minHeight":310}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<img src="https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5509/7082/55876ff2e4dcab4b60a66d54eaa5fdff">`}} />
          </div>
        </div>
        <div style={{}} className="outerDiv maxer">
          <div
            id="0:1003"
            style={{"backgroundColor":null,"overflow":"hidden","width":"100%","pointerEvents":"none"}}
            className="innerDiv"
          >
            <div style={{"zIndex":7}} className="outerDiv">
              <div
                id="0:1323"
                style={{"marginLeft":0,"width":375,"minWidth":375,"height":null,"marginTop":729,"marginBottom":0,"minHeight":83,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                className="innerDiv"
              >
                <div>
                  <div style={{}} className="outerDiv centerer">
                    <div
                      id="0:1324"
                      style={{"width":"100%","marginLeft":"0%","height":"100%","top":"0%","backgroundColor":"rgba(0, 0, 0, 0)"}}
                      className="innerDiv"
                    >
                      <div>
                        <div style={{}} className="outerDiv centerer">
                          <div
                            id="0:1325"
                            style={{"width":"100%","marginLeft":"0%","height":"100%","top":"0%","backgroundColor":"rgba(255, 255, 255, 1)","boxShadow":"0px -0.5px 0px rgba(0, 0, 0, 0.30000001192092896)"}}
                            className="innerDiv"
                          >
                            <div>
                            </div>
                          </div>
                        </div>
                        <div style={{"zIndex":1}} className="outerDiv centerer">
                          <div
                            id="0:1326"
                            style={{"width":"10.666666666666666%","marginLeft":"2.933333333333333%","height":"48.19277108433735%","top":"10.843373493975903%","backgroundColor":"rgba(0, 0, 0, 0)","overflow":"hidden"}}
                            className="innerDiv"
                          >
                            <div>
                              <div style={{"zIndex":4}} className="outerDiv">
                                <div
                                  id="0:1333"
                                  style={{"marginLeft":12,"width":8.485280990600586,"minWidth":8.485280990600586,"height":null,"marginTop":13,"marginBottom":18.514719009399414,"minHeight":8.485280990600586,"backgroundColor":"rgba(196, 196, 196, 1)"}}
                                  className="innerDiv"
                                >
                                  <div>
                                  </div>
                                </div>
                              </div>
                              <div style={{"zIndex":3}} className="outerDiv">
                                <div
                                  id="0:1332"
                                  style={{"marginLeft":19.0703125,"width":8.485280990600586,"minWidth":8.485280990600586,"height":null,"marginTop":-26.9998779296875,"marginBottom":18.514596939086914,"minHeight":8.485280990600586,"backgroundColor":"rgba(196, 196, 196, 1)"}}
                                  className="innerDiv"
                                >
                                  <div>
                                  </div>
                                </div>
                              </div>
                              <div style={{}} className="outerDiv">
                                <div
                                  id="0:1328"
                                  style={{"marginLeft":13.77734375,"width":1,"minWidth":1,"height":null,"marginTop":-20.943603515625,"marginBottom":13.943603515625,"minHeight":7,"backgroundColor":"rgba(0, 0, 0, 1)","opacity":0.800000011920929}}
                                  className="innerDiv"
                                >
                                  <div>
                                  </div>
                                </div>
                              </div>
                              <div style={{"zIndex":1}} className="outerDiv">
                                <div
                                  id="0:1329"
                                  style={{"marginLeft":24.77734375,"width":1,"minWidth":1,"height":null,"marginTop":-20.943603515625,"marginBottom":13.943603515625,"minHeight":7,"backgroundColor":"rgba(0, 0, 0, 1)","opacity":0.800000011920929}}
                                  className="innerDiv"
                                >
                                  <div>
                                  </div>
                                </div>
                              </div>
                              <div style={{"zIndex":8}} className="outerDiv">
                                <div
                                  id="0:1336"
                                  style={{"marginLeft":17.77734375,"width":4,"minWidth":4,"height":null,"marginTop":-18.943603515625,"marginBottom":17.943603515625,"minHeight":1,"backgroundColor":"rgba(0, 0, 0, 1)","opacity":0.800000011920929}}
                                  className="innerDiv"
                                >
                                  <div>
                                  </div>
                                </div>
                              </div>
                              <div style={{"zIndex":6}} className="outerDiv">
                                <div
                                  id="0:1334"
                                  style={{"marginLeft":17.77734375,"width":1,"minWidth":1,"height":null,"marginTop":-17.943603515625,"marginBottom":13.943603515625,"minHeight":4,"backgroundColor":"rgba(0, 0, 0, 1)","opacity":0.800000011920929}}
                                  className="innerDiv"
                                >
                                  <div>
                                  </div>
                                </div>
                              </div>
                              <div style={{"zIndex":7}} className="outerDiv">
                                <div
                                  id="0:1335"
                                  style={{"marginLeft":20.77734375,"width":1,"minWidth":1,"height":null,"marginTop":-17.943603515625,"marginBottom":13.943603515625,"minHeight":4,"backgroundColor":"rgba(0, 0, 0, 1)","opacity":0.800000011920929}}
                                  className="innerDiv"
                                >
                                  <div>
                                  </div>
                                </div>
                              </div>
                              <div style={{"zIndex":2}} className="outerDiv">
                                <div
                                  id="0:1330"
                                  style={{"marginLeft":13.77734375,"width":12,"minWidth":12,"height":null,"marginTop":-13.943603515625,"marginBottom":12.943603515625,"minHeight":1,"backgroundColor":"rgba(0, 0, 0, 1)","opacity":0.800000011920929}}
                                  className="innerDiv"
                                >
                                  <div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div style={{"zIndex":2}} className="outerDiv centerer">
                          <div
                            id="0:1337"
                            style={{"width":"10.666666666666666%","marginLeft":"21.866666666666667%","height":"48.19277108433735%","top":"10.843373493975903%","backgroundColor":"rgba(0, 0, 0, 0)","overflow":"hidden"}}
                            className="innerDiv"
                          >
                            <div>
                              <div style={{}} className="outerDiv">
                                <div
                                  id="0:1339"
                                  style={{"marginLeft":12,"width":13,"minWidth":13,"height":null,"marginTop":12,"marginBottom":15,"minHeight":13}}
                                  className="innerDiv"
                                >
                                  <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5 6.5C12.5 9.81371 9.81371 12.5 6.5 12.5C3.18629 12.5 0.5 9.81371 0.5 6.5C0.5 3.18629 3.18629 0.5 6.5 0.5C9.81371 0.5 12.5 3.18629 12.5 6.5Z" stroke="black" stroke-linecap="square"/>
</svg>
`}} />
                                </div>
                              </div>
                              <div style={{"zIndex":1}} className="outerDiv">
                                <div
                                  id="0:1340"
                                  style={{"marginLeft":22.5,"width":5,"minWidth":5,"height":null,"marginTop":-17.5,"marginBottom":12.5,"minHeight":5}}
                                  className="innerDiv"
                                >
                                  <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.371658 0.371658L5.62826 5.62826" stroke="black"/>
</svg>
`}} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div style={{"zIndex":3}} className="outerDiv centerer">
                          <div
                            id="0:1341"
                            style={{"width":"18.666666666666668%","marginLeft":"40.8%","height":"48.19277108433735%","top":"10.843373493975903%","backgroundColor":"rgba(0, 0, 0, 0)","overflow":"hidden"}}
                            className="innerDiv"
                          >
                            <div>
                              <div style={{}} className="outerDiv centerer">
                                <div
                                  id="0:1342"
                                  style={{"width":"100%","marginLeft":"0%","height":"100%","top":"0%","background":"linear-gradient(-2.7547169039247232rad, rgba(255, 0, 214, 1) 0%, rgba(255, 77, 0, 1) 100%)","borderRadius":"20px 20px 20px 20px"}}
                                  className="innerDiv"
                                >
                                  <div>
                                  </div>
                                </div>
                              </div>
                              <div style={{"zIndex":1,"justifyContent":"center","alignItems":"center"}} className="outerDiv centerer">
                                <div
                                  id="0:1344"
                                  style={{"width":1,"marginLeft":0,"height":13,"marginTop":0,"backgroundColor":"rgba(255, 255, 255, 1)"}}
                                  className="innerDiv"
                                >
                                  <div>
                                  </div>
                                </div>
                              </div>
                              <div style={{"zIndex":2,"justifyContent":"center","alignItems":"center"}} className="outerDiv centerer">
                                <div
                                  id="0:1345"
                                  style={{"width":13,"marginLeft":0,"height":1,"marginTop":0,"backgroundColor":"rgba(255, 255, 255, 1)"}}
                                  className="innerDiv"
                                >
                                  <div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div style={{"zIndex":4}} className="outerDiv centerer">
                          <div
                            id="0:1346"
                            style={{"width":"10.666666666666666%","marginLeft":"67.73333333333333%","height":"48.19277108433735%","top":"10.843373493975903%","backgroundColor":"rgba(0, 0, 0, 0)","overflow":"hidden"}}
                            className="innerDiv"
                          >
                            <div>
                              <div style={{}} className="outerDiv">
                                <div
                                  id="0:1349"
                                  style={{"marginLeft":12,"width":16,"minWidth":16,"height":null,"marginTop":12,"marginBottom":12,"minHeight":16}}
                                  className="innerDiv"
                                >
                                  <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle r="8" transform="matrix(-1 0 0 1 8 8)" fill="#DADADA"/>
</svg>
`}} />
                                </div>
                              </div>
                              <div style={{"zIndex":1}} className="outerDiv">
                                <div
                                  id="0:1350"
                                  style={{"marginLeft":10,"width":8,"minWidth":8,"height":null,"marginTop":-18.5,"marginBottom":12,"minHeight":6.5}}
                                  className="innerDiv"
                                >
                                  <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 0L8 5.5L0 6.5L4 0Z" fill="#DADADA"/>
</svg>
`}} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div style={{"zIndex":5}} className="outerDiv centerer">
                          <div
                            id="0:1351"
                            style={{"width":"10.666666666666666%","marginLeft":"86.4%","height":"48.19277108433735%","top":"10.843373493975903%","backgroundColor":"rgba(0, 0, 0, 0)","overflow":"hidden"}}
                            className="innerDiv"
                          >
                            <div>
                              <div style={{"zIndex":1}} className="outerDiv">
                                <div
                                  id="0:1354"
                                  style={{"marginLeft":16.3046875,"width":7.826148986816406,"minWidth":7.826148986816406,"height":null,"marginTop":12,"marginBottom":20.17391300201416,"minHeight":7.82608699798584}}
                                  className="innerDiv"
                                >
                                  <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="4.5" cy="4.49997" rx="3.99015" ry="3.99012" stroke="black" stroke-linecap="square"/>
</svg>
`}} />
                                </div>
                              </div>
                              <div style={{}} className="outerDiv">
                                <div
                                  id="0:1353"
                                  style={{"marginLeft":15,"width":10.434782981872559,"minWidth":10.434782981872559,"height":null,"marginTop":-19.521728515625,"marginBottom":12.999989032745361,"minHeight":6.521739482879639}}
                                  className="innerDiv"
                                >
                                  <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 0.524715C2.97608 0.524715 0.524715 2.97608 0.524715 6V7.36882H11.4753V6C11.4753 2.97608 9.02392 0.524715 6 0.524715Z" stroke="black"/>
</svg>
`}} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{"zIndex":1}} className="outerDiv centerer">
                    <div
                      id="0:1355"
                      style={{"width":"36%","marginLeft":"32%","height":"6.024096385542169%","top":"84.33734939759036%","backgroundColor":"rgba(0, 0, 0, 1)"}}
                      className="innerDiv"
                    >
                      <div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class CLoggedout0D920 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{"zIndex":4}} className="outerDiv">
          <div
            id="0:942"
            style={{"marginLeft":0,"width":375,"minWidth":375,"height":null,"marginTop":0,"marginBottom":105,"minHeight":707}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<img src="https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce4c/9d9d/90ad6b272045841647175c995b172824">`}} />
          </div>
        </div>
        <div style={{"zIndex":6}} className="outerDiv">
          <div
            id="0:945"
            style={{"marginLeft":142,"width":148,"minWidth":148,"height":null,"marginTop":-505,"marginBottom":451,"minHeight":54,"color":"rgba(0, 0, 0, 1)","fontSize":48,"fontWeight":400,"fontFamily":"Comfortaa","textAlign":"CENTER","fontStyle":"normal","lineHeight":"125%","letterSpacing":"-0.72px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">photo</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":7}} className="outerDiv">
          <div
            id="0:947"
            style={{"marginLeft":84,"width":38,"minWidth":38,"height":null,"marginTop":-500,"marginBottom":488.740740776062,"minHeight":11.259259223937988}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="38" height="12" viewBox="0 0 38 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0H26.7407L38 11.2593H11.2593L0 0Z" fill="#C4C4C4"/>
</svg>
`}} />
          </div>
        </div>
        <div style={{"zIndex":8}} className="outerDiv">
          <div
            id="0:948"
            style={{"marginLeft":84,"width":11.259259223937988,"minWidth":11.259259223937988,"height":null,"marginTop":-500,"marginBottom":462,"minHeight":38}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="12" height="38" viewBox="0 0 12 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.2588 38L11.2588 11.2593L-0.000470161 0L-0.000470161 26.7407L11.2588 38Z" fill="#C4C4C4"/>
</svg>
`}} />
          </div>
        </div>
        <div style={{"zIndex":11}} className="outerDiv">
          <div
            id="0:951"
            style={{"marginLeft":110.7412109375,"width":11.259259223937988,"minWidth":11.259259223937988,"height":null,"marginTop":-500,"marginBottom":462,"minHeight":38}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="12" height="38" viewBox="0 0 12 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 0L0 26.7407L11.2593 38L11.2593 11.2593L0 0Z" fill="#C4C4C4"/>
</svg>
`}} />
          </div>
        </div>
        <div style={{"zIndex":10}} className="outerDiv">
          <div
            id="0:950"
            style={{"marginLeft":84,"width":38,"minWidth":38,"height":null,"marginTop":-473.25927734375,"marginBottom":462.000018119812,"minHeight":11.259259223937988}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="38" height="12" viewBox="0 0 38 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M38 11.2593L11.2593 11.2593L0 1.81198e-05L26.7407 1.81198e-05L38 11.2593Z" fill="#C4C4C4"/>
</svg>
`}} />
          </div>
        </div>
        <div style={{"zIndex":14}} className="outerDiv">
          <div
            id="0:1300"
            style={{"marginLeft":16,"width":139,"minWidth":139,"height":null,"marginTop":-153,"marginBottom":125,"minHeight":28,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="0:1301"
                  style={{"width":"74.10071942446044%","marginLeft":"25.899280575539567%","height":"53.57142857142857%","top":"0%","color":"rgba(0, 0, 0, 1)","fontSize":13,"fontWeight":700,"fontFamily":"Roboto","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
                  className="innerDiv"
                >
                  <div>
                    <span style={{}} key="end">Pawel Czerwinski</span>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":1}} className="outerDiv centerer">
                <div
                  id="0:1302"
                  style={{"width":"69.06474820143885%","marginLeft":"25.899280575539567%","height":"46.42857142857143%","top":"53.57142857142857%","color":"rgba(0, 0, 0, 1)","fontSize":11,"fontWeight":400,"fontFamily":"Roboto","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
                  className="innerDiv"
                >
                  <div>
                    <span style={{}} key="end">@pawel_czerwinski</span>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":2}} className="outerDiv centerer">
                <div
                  id="0:1303"
                  style={{"width":"20.14388489208633%","marginLeft":"0%","height":"100%","top":"0%"}}
                  className="innerDiv"
                >
                  <div className="vector" dangerouslySetInnerHTML={{__html: `<img src="https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9e02/d8be/005651316a6f6f5b5d66edf6f2373018">`}} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":2}} className="outerDiv">
          <div
            id="0:1294"
            style={{"marginLeft":16,"width":167,"minWidth":167,"height":null,"marginTop":-85,"marginBottom":33,"minHeight":52,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="0:1295"
                  style={{"width":"100%","marginLeft":"0%","height":"100%","top":"0%","backgroundColor":"rgba(255, 255, 255, 1)","border":"2px solid rgba(0, 0, 0, 1)","borderRadius":"6px 6px 6px 6px"}}
                  className="innerDiv"
                >
                  <div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":1}} className="outerDiv centerer">
                <div
                  id="0:1296"
                  style={{"width":"26.347305389221557%","marginLeft":"36.52694610778443%","height":"28.846153846153847%","top":"36.53846153846154%","color":"rgba(0, 0, 0, 1)","fontSize":13,"fontWeight":900,"fontFamily":"Roboto","textAlign":"CENTER","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0.52px"}}
                  className="innerDiv"
                >
                  <div>
                    <span style={{}} key="end">log in</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":3}} className="outerDiv">
          <div
            id="0:1297"
            style={{"marginLeft":192,"width":167,"minWidth":167,"height":null,"marginTop":-85,"marginBottom":33,"minHeight":52,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="0:1298"
                  style={{"width":"100%","marginLeft":"0%","height":"100%","top":"0%","backgroundColor":"rgba(0, 0, 0, 1)","borderRadius":"6px 6px 6px 6px"}}
                  className="innerDiv"
                >
                  <div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":1}} className="outerDiv centerer">
                <div
                  id="0:1299"
                  style={{"width":"38.92215568862275%","marginLeft":"30.538922155688624%","height":"28.846153846153847%","top":"36.53846153846154%","color":"rgba(255, 255, 255, 1)","fontSize":13,"fontWeight":900,"fontFamily":"Roboto","textAlign":"CENTER","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0.52px"}}
                  className="innerDiv"
                >
                  <div>
                    <span style={{}} key="end">register</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv">
          <div
            id="0:941"
            style={{"marginLeft":243,"width":65,"minWidth":65,"height":null,"marginTop":-83,"marginBottom":67,"minHeight":16,"color":"rgba(0, 0, 0, 1)","fontSize":13,"fontWeight":700,"fontFamily":"SF Pro Text","textAlign":"CENTER","fontStyle":"normal","lineHeight":"125%","letterSpacing":"-0.195px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">register</span>
            </div>
          </div>
        </div>
        <div style={{}} className="outerDiv centerer">
          <div
            id="0:922"
            style={{"width":"100%","marginLeft":"0%","height":"5.41871921182266%","top":"0%","backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{"zIndex":1}} className="outerDiv">
                <div
                  id="0:939"
                  style={{"marginLeft":21,"width":56,"minWidth":56,"height":null,"marginTop":8,"marginBottom":13,"minHeight":23,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <div>
                    <div style={{"alignItems":"center"}} className="outerDiv centerer">
                      <div
                        id="0:940"
                        style={{"marginLeft":0.3330078125,"marginRight":1.6669921875,"flexGrow":1,"height":18,"marginTop":7,"color":"rgba(0, 0, 0, 1)","fontSize":15,"fontWeight":600,"fontFamily":"SF Pro Text","textAlign":"CENTER","fontStyle":"normal","lineHeight":"125%","letterSpacing":"-0.3333333432674408px"}}
                        className="innerDiv"
                      >
                        <div>
                          <span style={{}} key="end">9:27</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{"justifyContent":"flex-end"}} className="outerDiv">
                <div
                  id="0:923"
                  style={{"marginRight":14,"width":68,"minWidth":68,"height":null,"marginTop":-29,"marginBottom":13,"minHeight":16,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <div>
                    <div style={{"justifyContent":"flex-end"}} className="outerDiv">
                      <div
                        id="0:924"
                        style={{"marginRight":0,"width":25,"minWidth":25,"height":null,"marginTop":2,"marginBottom":2,"minHeight":12,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                        className="innerDiv"
                      >
                        <div>
                          <div style={{}} className="outerDiv centerer">
                            <div
                              id="0:925"
                              style={{"width":"88%","marginLeft":"0%","height":"94.44444179534912%","top":"2.777862548828125%","border":"1px solid rgba(0, 0, 0, 1)"}}
                              className="innerDiv"
                            >
                              <div>
                              </div>
                            </div>
                          </div>
                          <div style={{"zIndex":1}} className="outerDiv centerer">
                            <div
                              id="0:926"
                              style={{"width":"5.333333492279053%","marginLeft":"92%","height":"33.333333333333336%","top":"33.333333333333336%"}}
                              className="innerDiv"
                            >
                              <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="2" height="4" viewBox="0 0 2 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M0 0V4C0.80794 3.66122 1.33333 2.87313 1.33333 2C1.33333 1.12687 0.80794 0.338777 0 0Z" fill="black"/>
</svg>
`}} />
                            </div>
                          </div>
                          <div style={{"zIndex":2}} className="outerDiv centerer">
                            <div
                              id="0:927"
                              style={{"width":"72%","marginLeft":"8%","height":"61.111112435658775%","top":"19.444529215494793%","backgroundColor":"rgba(0, 0, 0, 1)"}}
                              className="innerDiv"
                            >
                              <div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div style={{"zIndex":2,"justifyContent":"flex-end"}} className="outerDiv">
                      <div
                        id="0:933"
                        style={{"marginRight":50,"width":18,"minWidth":18,"height":null,"marginTop":-14,"marginBottom":2,"minHeight":12,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                        className="innerDiv"
                      >
                        <div>
                          <div style={{}} className="outerDiv centerer">
                            <div
                              id="0:935"
                              style={{"width":"16.666666666666668%","marginLeft":"3.7055121527777777%","height":"33.333333333333336%","top":"61.110941569010414%"}}
                              className="innerDiv"
                            >
                              <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="3" height="4" viewBox="0 0 3 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 0C2.55228 0 3 0.447715 3 1V3C3 3.55228 2.55228 4 2 4H1C0.447715 4 0 3.55228 0 3V1C0 0.447715 0.447715 0 1 0H2Z" fill="#DADADA"/>
</svg>
`}} />
                            </div>
                          </div>
                          <div style={{"zIndex":1}} className="outerDiv centerer">
                            <div
                              id="0:936"
                              style={{"width":"16.666666666666668%","marginLeft":"29.63324652777778%","height":"50%","top":"44.44427490234375%"}}
                              className="innerDiv"
                            >
                              <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="3" height="6" viewBox="0 0 3 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 0H2C2.55228 0 3 0.447715 3 1V5C3 5.55228 2.55228 6 2 6H1C0.447715 6 0 5.55228 0 5V1C0 0.447715 0.447715 0 1 0Z" fill="#DADADA"/>
</svg>
`}} />
                            </div>
                          </div>
                          <div style={{"zIndex":2}} className="outerDiv centerer">
                            <div
                              id="0:937"
                              style={{"width":"16.666666666666668%","marginLeft":"55.55555555555556%","height":"69.44444179534912%","top":"25%"}}
                              className="innerDiv"
                            >
                              <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="3" height="9" viewBox="0 0 3 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 0H2C2.55228 0 3 0.447715 3 1V7.33333C3 7.88562 2.55228 8.33333 2 8.33333H1C0.447715 8.33333 0 7.88562 0 7.33333V1C0 0.447715 0.447715 0 1 0Z" fill="#DADADA"/>
</svg>
`}} />
                            </div>
                          </div>
                          <div style={{"zIndex":3}} className="outerDiv centerer">
                            <div
                              id="0:938"
                              style={{"width":"16.666666666666668%","marginLeft":"81.48328993055556%","height":"88.88889153798421%","top":"5.555470784505208%"}}
                              className="innerDiv"
                            >
                              <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="3" height="11" viewBox="0 0 3 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 0C2.55228 0 3 0.447715 3 1V9.66667C3 10.219 2.55228 10.6667 2 10.6667H1C0.447715 10.6667 0 10.219 0 9.66667V1C0 0.447715 0.447715 0 1 0L2 0Z" fill="#DADADA"/>
</svg>
`}} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div style={{"zIndex":1}} className="outerDiv centerer">
                      <div
                        id="0:928"
                        style={{"width":"30.88235294117647%","marginLeft":"29.41176470588235%","height":"93.75%","top":"6.25%","backgroundColor":"rgba(0, 0, 0, 0)"}}
                        className="innerDiv"
                      >
                        <div>
                          <div style={{}} className="outerDiv centerer">
                            <div
                              id="0:930"
                              style={{"width":"73.01587150210426%","marginLeft":"12.699962797619047%","height":"31.11111005147298%","top":"8.888956705729166%"}}
                              className="innerDiv"
                            >
                              <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="16" height="5" viewBox="0 0 16 5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.00044 2.33798C10.3219 2.33808 12.5546 3.21219 14.2371 4.77966C14.3638 4.90067 14.5663 4.89914 14.691 4.77623L15.9021 3.57849C15.9653 3.51616 16.0005 3.43171 16 3.34385C15.9995 3.25599 15.9632 3.17196 15.8993 3.11035C11.4834 -1.03678 4.51678 -1.03678 0.100859 3.11035C0.0368916 3.17192 0.000597157 3.25592 7.30289e-06 3.34378C-0.000582551 3.43164 0.0345808 3.51611 0.0977163 3.57849L1.30914 4.77623C1.43384 4.89933 1.6365 4.90086 1.76312 4.77966C3.44579 3.21209 5.67874 2.33797 8.00044 2.33798Z" fill="#DADADA"/>
</svg>
`}} />
                            </div>
                          </div>
                          <div style={{"zIndex":1}} className="outerDiv centerer">
                            <div
                              id="0:931"
                              style={{"width":"47.61904761904762%","marginLeft":"25.399925595238095%","height":"24.444444974263508%","top":"33.333333333333336%"}}
                              className="innerDiv"
                            >
                              <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="10" height="4" viewBox="0 0 10 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.99881 2.29945C6.22254 2.29938 7.4026 2.75598 8.3097 3.58054C8.43238 3.69756 8.62565 3.69502 8.74525 3.57482L9.90583 2.39766C9.96695 2.33591 10.0009 2.25215 9.99998 2.16511C9.9991 2.07807 9.9635 1.99502 9.90114 1.93453C7.13886 -0.644844 2.86111 -0.644844 0.0988288 1.93453C0.0364329 1.99502 0.000833291 2.07811 1.44426e-05 2.16518C-0.000804405 2.25225 0.0332261 2.336 0.0944733 2.39766L1.25472 3.57482C1.37432 3.69502 1.56759 3.69756 1.69028 3.58054C2.59677 2.75652 3.77589 2.29996 4.99881 2.29945Z" fill="#DADADA"/>
</svg>
`}} />
                            </div>
                          </div>
                          <div style={{"zIndex":2}} className="outerDiv centerer">
                            <div
                              id="0:932"
                              style={{"width":"22.222221465337846%","marginLeft":"38.095238095238095%","height":"22.222221692403156%","top":"60%"}}
                              className="innerDiv"
                            >
                              <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="5" height="4" viewBox="0 0 5 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.89834 1.34009C4.96508 1.27595 5.00184 1.18767 4.99993 1.09612C4.99802 1.00456 4.95761 0.91783 4.88825 0.856407C3.50964 -0.285469 1.49054 -0.285469 0.111933 0.856407C0.0425245 0.917781 0.00205366 1.00448 7.6004e-05 1.09604C-0.00190165 1.1876 0.0347892 1.2759 0.101485 1.34009L2.26052 3.47345C2.3238 3.53614 2.41007 3.57143 2.50009 3.57143C2.59011 3.57143 2.67639 3.53614 2.73967 3.47345L4.89834 1.34009Z" fill="#DADADA"/>
</svg>
`}} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":5}} className="outerDiv centerer">
          <div
            id="0:943"
            style={{"width":"36%","marginLeft":"32%","height":"0.6157635467980296%","top":"98.39901477832512%","backgroundColor":"rgba(0, 0, 0, 1)"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class CSearch0D952 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{"zIndex":15}} className="outerDiv">
          <div
            id="0:1209"
            style={{"marginLeft":0,"width":375,"minWidth":375,"height":null,"marginTop":0,"marginBottom":768,"minHeight":44,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{"zIndex":1}} className="outerDiv">
                <div
                  id="0:1226"
                  style={{"marginLeft":21,"width":56,"minWidth":56,"height":null,"marginTop":8,"marginBottom":13,"minHeight":23,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <div>
                    <div style={{"alignItems":"center"}} className="outerDiv centerer">
                      <div
                        id="0:1227"
                        style={{"marginLeft":0.3330078125,"marginRight":1.6669921875,"flexGrow":1,"height":18,"marginTop":7,"color":"rgba(0, 0, 0, 1)","fontSize":15,"fontWeight":600,"fontFamily":"SF Pro Text","textAlign":"CENTER","fontStyle":"normal","lineHeight":"125%","letterSpacing":"-0.3333333432674408px"}}
                        className="innerDiv"
                      >
                        <div>
                          <span style={{}} key="end">9:27</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{"justifyContent":"flex-end"}} className="outerDiv">
                <div
                  id="0:1210"
                  style={{"marginRight":14,"width":68,"minWidth":68,"height":null,"marginTop":-29,"marginBottom":13,"minHeight":16,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <div>
                    <div style={{"justifyContent":"flex-end"}} className="outerDiv">
                      <div
                        id="0:1211"
                        style={{"marginRight":0,"width":25,"minWidth":25,"height":null,"marginTop":2,"marginBottom":2,"minHeight":12,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                        className="innerDiv"
                      >
                        <div>
                          <div style={{}} className="outerDiv centerer">
                            <div
                              id="0:1212"
                              style={{"width":"88%","marginLeft":"0%","height":"94.44444179534912%","top":"2.777862548828125%","border":"1px solid rgba(0, 0, 0, 1)"}}
                              className="innerDiv"
                            >
                              <div>
                              </div>
                            </div>
                          </div>
                          <div style={{"zIndex":1}} className="outerDiv centerer">
                            <div
                              id="0:1213"
                              style={{"width":"5.333333492279053%","marginLeft":"92%","height":"33.333333333333336%","top":"33.333333333333336%"}}
                              className="innerDiv"
                            >
                              <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="2" height="4" viewBox="0 0 2 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M0 0V4C0.80794 3.66122 1.33333 2.87313 1.33333 2C1.33333 1.12687 0.80794 0.338777 0 0Z" fill="black"/>
</svg>
`}} />
                            </div>
                          </div>
                          <div style={{"zIndex":2}} className="outerDiv centerer">
                            <div
                              id="0:1214"
                              style={{"width":"72%","marginLeft":"8%","height":"61.111112435658775%","top":"19.44427490234375%","backgroundColor":"rgba(0, 0, 0, 1)"}}
                              className="innerDiv"
                            >
                              <div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div style={{"zIndex":2,"justifyContent":"flex-end"}} className="outerDiv">
                      <div
                        id="0:1220"
                        style={{"marginRight":50,"width":18,"minWidth":18,"height":null,"marginTop":-14,"marginBottom":2,"minHeight":12,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                        className="innerDiv"
                      >
                        <div>
                          <div style={{}} className="outerDiv centerer">
                            <div
                              id="0:1222"
                              style={{"width":"16.666666666666668%","marginLeft":"3.7055121527777777%","height":"33.333333333333336%","top":"61.110941569010414%"}}
                              className="innerDiv"
                            >
                              <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="3" height="4" viewBox="0 0 3 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 0C2.55228 0 3 0.447715 3 1V3C3 3.55228 2.55228 4 2 4H1C0.447715 4 0 3.55228 0 3V1C0 0.447715 0.447715 0 1 0H2Z" fill="#DADADA"/>
</svg>
`}} />
                            </div>
                          </div>
                          <div style={{"zIndex":1}} className="outerDiv centerer">
                            <div
                              id="0:1223"
                              style={{"width":"16.666666666666668%","marginLeft":"29.63324652777778%","height":"50%","top":"44.44427490234375%"}}
                              className="innerDiv"
                            >
                              <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="3" height="6" viewBox="0 0 3 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 0H2C2.55228 0 3 0.447715 3 1V5C3 5.55228 2.55228 6 2 6H1C0.447715 6 0 5.55228 0 5V1C0 0.447715 0.447715 0 1 0Z" fill="#DADADA"/>
</svg>
`}} />
                            </div>
                          </div>
                          <div style={{"zIndex":2}} className="outerDiv centerer">
                            <div
                              id="0:1224"
                              style={{"width":"16.666666666666668%","marginLeft":"55.55555555555556%","height":"69.44444179534912%","top":"25%"}}
                              className="innerDiv"
                            >
                              <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="3" height="9" viewBox="0 0 3 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 0H2C2.55228 0 3 0.447715 3 1V7.33333C3 7.88562 2.55228 8.33333 2 8.33333H1C0.447715 8.33333 0 7.88562 0 7.33333V1C0 0.447715 0.447715 0 1 0Z" fill="#DADADA"/>
</svg>
`}} />
                            </div>
                          </div>
                          <div style={{"zIndex":3}} className="outerDiv centerer">
                            <div
                              id="0:1225"
                              style={{"width":"16.666666666666668%","marginLeft":"81.48328993055556%","height":"88.88889153798421%","top":"5.555470784505208%"}}
                              className="innerDiv"
                            >
                              <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="3" height="11" viewBox="0 0 3 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 0C2.55228 0 3 0.447715 3 1V9.66667C3 10.219 2.55228 10.6667 2 10.6667H1C0.447715 10.6667 0 10.219 0 9.66667V1C0 0.447715 0.447715 0 1 0L2 0Z" fill="#DADADA"/>
</svg>
`}} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div style={{"zIndex":1}} className="outerDiv centerer">
                      <div
                        id="0:1215"
                        style={{"width":"30.88235294117647%","marginLeft":"29.41176470588235%","height":"93.75%","top":"6.25%","backgroundColor":"rgba(0, 0, 0, 0)"}}
                        className="innerDiv"
                      >
                        <div>
                          <div style={{}} className="outerDiv centerer">
                            <div
                              id="0:1217"
                              style={{"width":"73.01587150210426%","marginLeft":"12.699962797619047%","height":"31.11111005147298%","top":"8.888956705729166%"}}
                              className="innerDiv"
                            >
                              <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="16" height="5" viewBox="0 0 16 5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.00044 2.33798C10.3219 2.33808 12.5546 3.21219 14.2371 4.77966C14.3638 4.90067 14.5663 4.89914 14.691 4.77623L15.9021 3.57849C15.9653 3.51616 16.0005 3.43171 16 3.34385C15.9995 3.25599 15.9632 3.17196 15.8993 3.11035C11.4834 -1.03678 4.51678 -1.03678 0.100859 3.11035C0.0368916 3.17192 0.000597157 3.25592 7.30289e-06 3.34378C-0.000582551 3.43164 0.0345808 3.51611 0.0977163 3.57849L1.30914 4.77623C1.43384 4.89933 1.6365 4.90086 1.76312 4.77966C3.44579 3.21209 5.67874 2.33797 8.00044 2.33798Z" fill="black"/>
</svg>
`}} />
                            </div>
                          </div>
                          <div style={{"zIndex":1}} className="outerDiv centerer">
                            <div
                              id="0:1218"
                              style={{"width":"47.61904761904762%","marginLeft":"25.399925595238095%","height":"24.444444974263508%","top":"33.333333333333336%"}}
                              className="innerDiv"
                            >
                              <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="10" height="4" viewBox="0 0 10 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.99881 2.29945C6.22254 2.29938 7.4026 2.75598 8.3097 3.58054C8.43238 3.69756 8.62565 3.69502 8.74525 3.57482L9.90583 2.39766C9.96695 2.33591 10.0009 2.25215 9.99998 2.16511C9.9991 2.07807 9.9635 1.99502 9.90114 1.93453C7.13886 -0.644844 2.86111 -0.644844 0.0988288 1.93453C0.0364329 1.99502 0.000833291 2.07811 1.44426e-05 2.16518C-0.000804405 2.25225 0.0332261 2.336 0.0944733 2.39766L1.25472 3.57482C1.37432 3.69502 1.56759 3.69756 1.69028 3.58054C2.59677 2.75652 3.77589 2.29996 4.99881 2.29945Z" fill="black"/>
</svg>
`}} />
                            </div>
                          </div>
                          <div style={{"zIndex":2}} className="outerDiv centerer">
                            <div
                              id="0:1219"
                              style={{"width":"22.222221465337846%","marginLeft":"38.095238095238095%","height":"22.222221692403156%","top":"60%"}}
                              className="innerDiv"
                            >
                              <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="5" height="4" viewBox="0 0 5 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.89834 1.34009C4.96508 1.27595 5.00184 1.18767 4.99993 1.09612C4.99802 1.00456 4.95761 0.91783 4.88825 0.856407C3.50964 -0.285469 1.49054 -0.285469 0.111933 0.856407C0.0425245 0.917781 0.00205366 1.00448 7.6004e-05 1.09604C-0.00190165 1.1876 0.0347892 1.2759 0.101485 1.34009L2.26052 3.47345C2.3238 3.53614 2.41007 3.57143 2.50009 3.57143C2.59011 3.57143 2.67639 3.53614 2.73967 3.47345L4.89834 1.34009Z" fill="black"/>
</svg>
`}} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{}} className="outerDiv">
          <div
            id="0:1976"
            style={{"marginLeft":16,"width":148,"minWidth":148,"height":null,"marginTop":-736,"marginBottom":696,"minHeight":40,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="0:1977"
                  style={{"width":"86.48648648648648%","marginLeft":"0%","height":"100%","top":"0%","color":"rgba(0, 0, 0, 1)","fontSize":36,"fontWeight":400,"fontFamily":"Comfortaa","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"-0.54px"}}
                  className="innerDiv"
                >
                  <div>
                    <span style={{}} key="end">Search</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv">
          <div
            id="0:1973"
            style={{"width":"91.46666666666667%","marginLeft":"4.266666666666667%","height":null,"marginTop":-664,"marginBottom":612,"minHeight":52,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="0:1974"
                  style={{"width":"100%","marginLeft":"0%","height":"100%","top":"0%","backgroundColor":"rgba(255, 255, 255, 1)","border":"2px solid rgba(0, 0, 0, 1)"}}
                  className="innerDiv"
                >
                  <div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":1}} className="outerDiv centerer">
                <div
                  id="0:1975"
                  style={{"width":"9.912536443148689%","marginLeft":"4.956268221574344%","height":"34.61538461538461%","top":"32.69230769230769%","color":"rgba(0, 0, 0, 1)","fontSize":15,"fontWeight":400,"fontFamily":"Roboto","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
                  className="innerDiv"
                >
                  <div>
                    <span style={{}} key="end">dogs</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":2}} className="outerDiv">
          <div
            id="0:953"
            style={{"marginLeft":16,"width":86,"minWidth":86,"height":null,"marginTop":-580,"marginBottom":565,"minHeight":15,"color":"rgba(0, 0, 0, 1)","fontSize":13,"fontWeight":900,"fontFamily":"Roboto","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0.52px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">all results</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":4}} className="outerDiv">
          <div
            id="0:955"
            style={{"marginLeft":134,"width":107,"minWidth":107,"height":null,"marginTop":-541,"marginBottom":434,"minHeight":107}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<img src="https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e459/8d26/b1524f8371c3f9594000b7f1ae2acaea">`}} />
          </div>
        </div>
        <div style={{"zIndex":5}} className="outerDiv">
          <div
            id="0:956"
            style={{"marginLeft":252,"width":107,"minWidth":107,"height":null,"marginTop":-541,"marginBottom":434,"minHeight":107}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<img src="https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9652/1205/9c49e219d04e82c2321818d251c8a9cb">`}} />
          </div>
        </div>
        <div style={{"zIndex":3}} className="outerDiv">
          <div
            id="0:954"
            style={{"marginLeft":16,"width":107,"minWidth":107,"height":null,"marginTop":-541,"marginBottom":434,"minHeight":107}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<img src="https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eed5/884e/c48daad2850a3b08d1b5f4491d0ffb35">`}} />
          </div>
        </div>
        <div style={{"zIndex":7}} className="outerDiv">
          <div
            id="0:958"
            style={{"marginLeft":134,"width":107,"minWidth":107,"height":null,"marginTop":-423,"marginBottom":316,"minHeight":107}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<img src="https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c77/e3b9/50d2d3a020a880a4d3418cf49f593db6">`}} />
          </div>
        </div>
        <div style={{"zIndex":8}} className="outerDiv">
          <div
            id="0:959"
            style={{"marginLeft":252,"width":107,"minWidth":107,"height":null,"marginTop":-423,"marginBottom":316,"minHeight":107}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<img src="https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4a78/6c34/7bff2a06a5b1cba8f35e90151bfbc2d0">`}} />
          </div>
        </div>
        <div style={{"zIndex":6}} className="outerDiv">
          <div
            id="0:957"
            style={{"marginLeft":16,"width":107,"minWidth":107,"height":null,"marginTop":-423,"marginBottom":316,"minHeight":107}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<img src="https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0951/b59c/895fb6d3216a1378199e85b38eef2a80">`}} />
          </div>
        </div>
        <div style={{"zIndex":10}} className="outerDiv">
          <div
            id="0:961"
            style={{"marginLeft":134,"width":107,"minWidth":107,"height":null,"marginTop":-305,"marginBottom":198,"minHeight":107}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<img src="https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1537/c878/8225838ab02fb7ea0506b6ae448c0d7f">`}} />
          </div>
        </div>
        <div style={{"zIndex":11}} className="outerDiv">
          <div
            id="0:962"
            style={{"marginLeft":252,"width":107,"minWidth":107,"height":null,"marginTop":-305,"marginBottom":198,"minHeight":107}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<img src="https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6fbb/2a6b/47325bdaec1082f15c83eb58a2a8185e">`}} />
          </div>
        </div>
        <div style={{"zIndex":9}} className="outerDiv">
          <div
            id="0:960"
            style={{"marginLeft":16,"width":107,"minWidth":107,"height":null,"marginTop":-305,"marginBottom":198,"minHeight":107}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<img src="https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f701/5503/37af2fd467c0a68992f8938c9f4be88b">`}} />
          </div>
        </div>
        <div style={{"zIndex":12}} className="outerDiv">
          <div
            id="0:963"
            style={{"marginLeft":16,"width":107,"minWidth":107,"height":null,"marginTop":-187,"marginBottom":80,"minHeight":107}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<img src="https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9623/f383/b28608bde8a48459d6743b51f81db877">`}} />
          </div>
        </div>
        <div style={{"zIndex":13}} className="outerDiv">
          <div
            id="0:964"
            style={{"marginLeft":134,"width":107,"minWidth":107,"height":null,"marginTop":-187,"marginBottom":80,"minHeight":107}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<img src="https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/21af/724c/bac9b0d437378e166687ed90fb9daa7f">`}} />
          </div>
        </div>
        <div style={{"zIndex":14}} className="outerDiv">
          <div
            id="0:965"
            style={{"marginLeft":252,"width":107,"minWidth":107,"height":null,"marginTop":-187,"marginBottom":80,"minHeight":107}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<img src="https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8e99/4171/efeaea5fd2ccd4a5b08dcb8bda55b633">`}} />
          </div>
        </div>
        <div style={{}} className="outerDiv maxer">
          <div
            id="0:952"
            style={{"backgroundColor":null,"overflow":"hidden","width":"100%","pointerEvents":"none"}}
            className="innerDiv"
          >
            <div style={{"zIndex":16,"justifyContent":"center"}} className="outerDiv">
              <div
                id="0:1228"
                style={{"width":375,"marginLeft":null,"height":null,"marginTop":729,"marginBottom":0,"minHeight":83,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                className="innerDiv"
              >
                <div>
                  <div style={{}} className="outerDiv centerer">
                    <div
                      id="0:1229"
                      style={{"width":"100%","marginLeft":"0%","height":"100%","top":"0%","backgroundColor":"rgba(0, 0, 0, 0)"}}
                      className="innerDiv"
                    >
                      <div>
                        <div style={{}} className="outerDiv centerer">
                          <div
                            id="0:1230"
                            style={{"width":"100%","marginLeft":"0%","height":"100%","top":"0%","backgroundColor":"rgba(255, 255, 255, 1)","boxShadow":"0px -0.5px 0px rgba(0, 0, 0, 0.30000001192092896)"}}
                            className="innerDiv"
                          >
                            <div>
                            </div>
                          </div>
                        </div>
                        <div style={{"zIndex":1}} className="outerDiv centerer">
                          <div
                            id="0:1231"
                            style={{"width":"10.666666666666666%","marginLeft":"2.933333333333333%","height":"48.19277108433735%","top":"10.843373493975903%","backgroundColor":"rgba(0, 0, 0, 0)","overflow":"hidden"}}
                            className="innerDiv"
                          >
                            <div>
                              <div style={{"zIndex":4}} className="outerDiv">
                                <div
                                  id="0:1238"
                                  style={{"marginLeft":12,"width":8.485280990600586,"minWidth":8.485280990600586,"height":null,"marginTop":13,"marginBottom":18.514719009399414,"minHeight":8.485280990600586,"backgroundColor":"rgba(196, 196, 196, 1)"}}
                                  className="innerDiv"
                                >
                                  <div>
                                  </div>
                                </div>
                              </div>
                              <div style={{"zIndex":3}} className="outerDiv">
                                <div
                                  id="0:1237"
                                  style={{"marginLeft":19.0712890625,"width":8.485280990600586,"minWidth":8.485280990600586,"height":null,"marginTop":-26.9998779296875,"marginBottom":18.514596939086914,"minHeight":8.485280990600586,"backgroundColor":"rgba(196, 196, 196, 1)"}}
                                  className="innerDiv"
                                >
                                  <div>
                                  </div>
                                </div>
                              </div>
                              <div style={{}} className="outerDiv">
                                <div
                                  id="0:1233"
                                  style={{"marginLeft":13.7783203125,"width":1,"minWidth":1,"height":null,"marginTop":-20.943603515625,"marginBottom":13.943603515625,"minHeight":7,"backgroundColor":"rgba(0, 0, 0, 1)","opacity":0.800000011920929}}
                                  className="innerDiv"
                                >
                                  <div>
                                  </div>
                                </div>
                              </div>
                              <div style={{"zIndex":1}} className="outerDiv">
                                <div
                                  id="0:1234"
                                  style={{"marginLeft":24.7783203125,"width":1,"minWidth":1,"height":null,"marginTop":-20.943603515625,"marginBottom":13.943603515625,"minHeight":7,"backgroundColor":"rgba(0, 0, 0, 1)","opacity":0.800000011920929}}
                                  className="innerDiv"
                                >
                                  <div>
                                  </div>
                                </div>
                              </div>
                              <div style={{"zIndex":8}} className="outerDiv">
                                <div
                                  id="0:1241"
                                  style={{"marginLeft":17.7783203125,"width":4,"minWidth":4,"height":null,"marginTop":-18.943603515625,"marginBottom":17.943603515625,"minHeight":1,"backgroundColor":"rgba(0, 0, 0, 1)","opacity":0.800000011920929}}
                                  className="innerDiv"
                                >
                                  <div>
                                  </div>
                                </div>
                              </div>
                              <div style={{"zIndex":6}} className="outerDiv">
                                <div
                                  id="0:1239"
                                  style={{"marginLeft":17.7783203125,"width":1,"minWidth":1,"height":null,"marginTop":-17.943603515625,"marginBottom":13.943603515625,"minHeight":4,"backgroundColor":"rgba(0, 0, 0, 1)","opacity":0.800000011920929}}
                                  className="innerDiv"
                                >
                                  <div>
                                  </div>
                                </div>
                              </div>
                              <div style={{"zIndex":7}} className="outerDiv">
                                <div
                                  id="0:1240"
                                  style={{"marginLeft":20.7783203125,"width":1,"minWidth":1,"height":null,"marginTop":-17.943603515625,"marginBottom":13.943603515625,"minHeight":4,"backgroundColor":"rgba(0, 0, 0, 1)","opacity":0.800000011920929}}
                                  className="innerDiv"
                                >
                                  <div>
                                  </div>
                                </div>
                              </div>
                              <div style={{"zIndex":2}} className="outerDiv">
                                <div
                                  id="0:1235"
                                  style={{"marginLeft":13.7783203125,"width":12,"minWidth":12,"height":null,"marginTop":-13.943603515625,"marginBottom":12.943603515625,"minHeight":1,"backgroundColor":"rgba(0, 0, 0, 1)","opacity":0.800000011920929}}
                                  className="innerDiv"
                                >
                                  <div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div style={{"zIndex":2}} className="outerDiv centerer">
                          <div
                            id="0:1242"
                            style={{"width":"10.666666666666666%","marginLeft":"21.866666666666667%","height":"48.19277108433735%","top":"10.843373493975903%","backgroundColor":"rgba(0, 0, 0, 0)","overflow":"hidden"}}
                            className="innerDiv"
                          >
                            <div>
                              <div style={{}} className="outerDiv">
                                <div
                                  id="0:1244"
                                  style={{"marginLeft":12,"width":13,"minWidth":13,"height":null,"marginTop":12,"marginBottom":15,"minHeight":13}}
                                  className="innerDiv"
                                >
                                  <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5 6.5C12.5 9.81371 9.81371 12.5 6.5 12.5C3.18629 12.5 0.5 9.81371 0.5 6.5C0.5 3.18629 3.18629 0.5 6.5 0.5C9.81371 0.5 12.5 3.18629 12.5 6.5Z" stroke="black" stroke-linecap="square"/>
</svg>
`}} />
                                </div>
                              </div>
                              <div style={{"zIndex":1}} className="outerDiv">
                                <div
                                  id="0:1245"
                                  style={{"marginLeft":22.5,"width":5,"minWidth":5,"height":null,"marginTop":-17.5,"marginBottom":12.5,"minHeight":5}}
                                  className="innerDiv"
                                >
                                  <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.371658 0.371658L5.62826 5.62826" stroke="black"/>
</svg>
`}} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div style={{"zIndex":3}} className="outerDiv centerer">
                          <div
                            id="0:1246"
                            style={{"width":"18.666666666666668%","marginLeft":"40.8%","height":"48.19277108433735%","top":"10.843373493975903%","backgroundColor":"rgba(0, 0, 0, 0)","overflow":"hidden"}}
                            className="innerDiv"
                          >
                            <div>
                              <div style={{}} className="outerDiv centerer">
                                <div
                                  id="0:1247"
                                  style={{"width":"100%","marginLeft":"0%","height":"100%","top":"0%","background":"linear-gradient(-2.7547169039247232rad, rgba(255, 0, 214, 1) 0%, rgba(255, 77, 0, 1) 100%)","borderRadius":"20px 20px 20px 20px"}}
                                  className="innerDiv"
                                >
                                  <div>
                                  </div>
                                </div>
                              </div>
                              <div style={{"zIndex":1,"justifyContent":"center","alignItems":"center"}} className="outerDiv centerer">
                                <div
                                  id="0:1249"
                                  style={{"width":1,"marginLeft":0,"height":13,"marginTop":0,"backgroundColor":"rgba(255, 255, 255, 1)"}}
                                  className="innerDiv"
                                >
                                  <div>
                                  </div>
                                </div>
                              </div>
                              <div style={{"zIndex":2,"justifyContent":"center","alignItems":"center"}} className="outerDiv centerer">
                                <div
                                  id="0:1250"
                                  style={{"width":13,"marginLeft":0,"height":1,"marginTop":0,"backgroundColor":"rgba(255, 255, 255, 1)"}}
                                  className="innerDiv"
                                >
                                  <div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div style={{"zIndex":4}} className="outerDiv centerer">
                          <div
                            id="0:1251"
                            style={{"width":"10.666666666666666%","marginLeft":"67.73333333333333%","height":"48.19277108433735%","top":"10.843373493975903%","backgroundColor":"rgba(0, 0, 0, 0)","overflow":"hidden"}}
                            className="innerDiv"
                          >
                            <div>
                              <div style={{}} className="outerDiv">
                                <div
                                  id="0:1254"
                                  style={{"marginLeft":12,"width":16,"minWidth":16,"height":null,"marginTop":12,"marginBottom":12,"minHeight":16}}
                                  className="innerDiv"
                                >
                                  <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle r="8" transform="matrix(-1 0 0 1 8 8)" fill="#DADADA"/>
</svg>
`}} />
                                </div>
                              </div>
                              <div style={{"zIndex":1}} className="outerDiv">
                                <div
                                  id="0:1255"
                                  style={{"marginLeft":10,"width":8,"minWidth":8,"height":null,"marginTop":-18.5,"marginBottom":12,"minHeight":6.5}}
                                  className="innerDiv"
                                >
                                  <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 0L8 5.5L0 6.5L4 0Z" fill="black"/>
</svg>
`}} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div style={{"zIndex":5}} className="outerDiv centerer">
                          <div
                            id="0:1256"
                            style={{"width":"10.666666666666666%","marginLeft":"86.4%","height":"48.19277108433735%","top":"10.843373493975903%","backgroundColor":"rgba(0, 0, 0, 0)","overflow":"hidden"}}
                            className="innerDiv"
                          >
                            <div>
                              <div style={{"zIndex":1}} className="outerDiv">
                                <div
                                  id="0:1259"
                                  style={{"marginLeft":16.3046875,"width":7.826148986816406,"minWidth":7.826148986816406,"height":null,"marginTop":12,"marginBottom":20.17391300201416,"minHeight":7.82608699798584}}
                                  className="innerDiv"
                                >
                                  <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="4.5" cy="4.49997" rx="3.99015" ry="3.99012" stroke="black" stroke-linecap="square"/>
</svg>
`}} />
                                </div>
                              </div>
                              <div style={{}} className="outerDiv">
                                <div
                                  id="0:1258"
                                  style={{"marginLeft":15,"width":10.434782981872559,"minWidth":10.434782981872559,"height":null,"marginTop":-19.521728515625,"marginBottom":12.999989032745361,"minHeight":6.521739482879639}}
                                  className="innerDiv"
                                >
                                  <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 0.524715C2.97608 0.524715 0.524715 2.97608 0.524715 6V7.36882H11.4753V6C11.4753 2.97608 9.02392 0.524715 6 0.524715Z" stroke="black"/>
</svg>
`}} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{"zIndex":1}} className="outerDiv centerer">
                    <div
                      id="0:1260"
                      style={{"width":"36%","marginLeft":"32%","height":"6.024096385542169%","top":"84.33734939759036%","backgroundColor":"rgba(0, 0, 0, 1)"}}
                      className="innerDiv"
                    >
                      <div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class CProfile0D495 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv">
          <div
            id="0:496"
            style={{"marginLeft":0,"width":375,"minWidth":375,"height":null,"marginTop":0,"marginBottom":0,"minHeight":812,"backgroundColor":"rgba(255, 255, 255, 1)"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":13}} className="outerDiv">
          <div
            id="0:1045"
            style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"height":null,"marginTop":-807,"marginBottom":763,"minHeight":44,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{"zIndex":1}} className="outerDiv">
                <div
                  id="0:1062"
                  style={{"marginLeft":21,"width":56,"minWidth":56,"height":null,"marginTop":8,"marginBottom":13,"minHeight":23,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <div>
                    <div style={{"alignItems":"center"}} className="outerDiv centerer">
                      <div
                        id="0:1063"
                        style={{"marginLeft":0.33349609375,"marginRight":1.66650390625,"flexGrow":1,"height":18,"marginTop":7,"color":"rgba(0, 0, 0, 1)","fontSize":15,"fontWeight":600,"fontFamily":"SF Pro Text","textAlign":"CENTER","fontStyle":"normal","lineHeight":"125%","letterSpacing":"-0.3333333432674408px"}}
                        className="innerDiv"
                      >
                        <div>
                          <span style={{}} key="end">9:27</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div style={{"justifyContent":"flex-end"}} className="outerDiv">
                <div
                  id="0:1046"
                  style={{"marginRight":14,"width":68,"minWidth":68,"height":null,"marginTop":-29,"marginBottom":13,"minHeight":16,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                  className="innerDiv"
                >
                  <div>
                    <div style={{"justifyContent":"flex-end"}} className="outerDiv">
                      <div
                        id="0:1047"
                        style={{"marginRight":0,"width":25,"minWidth":25,"height":null,"marginTop":2,"marginBottom":2,"minHeight":12,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                        className="innerDiv"
                      >
                        <div>
                          <div style={{}} className="outerDiv centerer">
                            <div
                              id="0:1048"
                              style={{"width":"88%","marginLeft":"0%","height":"94.44444179534912%","top":"2.777862548828125%","border":"1px solid rgba(0, 0, 0, 1)"}}
                              className="innerDiv"
                            >
                              <div>
                              </div>
                            </div>
                          </div>
                          <div style={{"zIndex":1}} className="outerDiv centerer">
                            <div
                              id="0:1049"
                              style={{"width":"5.333333492279053%","marginLeft":"92%","height":"33.333333333333336%","top":"33.333333333333336%"}}
                              className="innerDiv"
                            >
                              <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="2" height="4" viewBox="0 0 2 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.4" d="M0 0V4C0.80794 3.66122 1.33333 2.87313 1.33333 2C1.33333 1.12687 0.80794 0.338777 0 0Z" fill="black"/>
</svg>
`}} />
                            </div>
                          </div>
                          <div style={{"zIndex":2}} className="outerDiv centerer">
                            <div
                              id="0:1050"
                              style={{"width":"72%","marginLeft":"8%","height":"61.111112435658775%","top":"19.444529215494793%","backgroundColor":"rgba(0, 0, 0, 1)"}}
                              className="innerDiv"
                            >
                              <div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div style={{"zIndex":2,"justifyContent":"flex-end"}} className="outerDiv">
                      <div
                        id="0:1056"
                        style={{"marginRight":50,"width":18,"minWidth":18,"height":null,"marginTop":-14,"marginBottom":2,"minHeight":12,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                        className="innerDiv"
                      >
                        <div>
                          <div style={{}} className="outerDiv centerer">
                            <div
                              id="0:1058"
                              style={{"width":"16.666666666666668%","marginLeft":"3.7027994791666665%","height":"33.333333333333336%","top":"61.110941569010414%"}}
                              className="innerDiv"
                            >
                              <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="3" height="4" viewBox="0 0 3 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 0C2.55228 0 3 0.447715 3 1V3C3 3.55228 2.55228 4 2 4H1C0.447715 4 0 3.55228 0 3V1C0 0.447715 0.447715 0 1 0H2Z" fill="#DADADA"/>
</svg>
`}} />
                            </div>
                          </div>
                          <div style={{"zIndex":1}} className="outerDiv centerer">
                            <div
                              id="0:1059"
                              style={{"width":"16.666666666666668%","marginLeft":"29.627821180555557%","height":"50%","top":"44.44427490234375%"}}
                              className="innerDiv"
                            >
                              <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="3" height="6" viewBox="0 0 3 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 0H2C2.55228 0 3 0.447715 3 1V5C3 5.55228 2.55228 6 2 6H1C0.447715 6 0 5.55228 0 5V1C0 0.447715 0.447715 0 1 0Z" fill="#DADADA"/>
</svg>
`}} />
                            </div>
                          </div>
                          <div style={{"zIndex":2}} className="outerDiv centerer">
                            <div
                              id="0:1060"
                              style={{"width":"16.666666666666668%","marginLeft":"55.55555555555556%","height":"69.44444179534912%","top":"25%"}}
                              className="innerDiv"
                            >
                              <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="3" height="9" viewBox="0 0 3 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 0H2C2.55228 0 3 0.447715 3 1V7.33333C3 7.88562 2.55228 8.33333 2 8.33333H1C0.447715 8.33333 0 7.88562 0 7.33333V1C0 0.447715 0.447715 0 1 0Z" fill="#DADADA"/>
</svg>
`}} />
                            </div>
                          </div>
                          <div style={{"zIndex":3}} className="outerDiv centerer">
                            <div
                              id="0:1061"
                              style={{"width":"16.666666666666668%","marginLeft":"81.48057725694444%","height":"88.88889153798421%","top":"5.555470784505208%"}}
                              className="innerDiv"
                            >
                              <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="3" height="11" viewBox="0 0 3 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 0C2.55228 0 3 0.447715 3 1V9.66667C3 10.219 2.55228 10.6667 2 10.6667H1C0.447715 10.6667 0 10.219 0 9.66667V1C0 0.447715 0.447715 0 1 0L2 0Z" fill="#DADADA"/>
</svg>
`}} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div style={{"zIndex":1}} className="outerDiv centerer">
                      <div
                        id="0:1051"
                        style={{"width":"30.88235294117647%","marginLeft":"29.41176470588235%","height":"93.75%","top":"6.25%","backgroundColor":"rgba(0, 0, 0, 0)"}}
                        className="innerDiv"
                      >
                        <div>
                          <div style={{}} className="outerDiv centerer">
                            <div
                              id="0:1053"
                              style={{"width":"73.01587150210426%","marginLeft":"12.697637648809524%","height":"31.11111005147298%","top":"8.888956705729166%"}}
                              className="innerDiv"
                            >
                              <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="16" height="5" viewBox="0 0 16 5" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.00044 2.33798C10.3219 2.33808 12.5546 3.21219 14.2371 4.77966C14.3638 4.90067 14.5663 4.89914 14.691 4.77623L15.9021 3.57849C15.9653 3.51616 16.0005 3.43171 16 3.34385C15.9995 3.25599 15.9632 3.17196 15.8993 3.11035C11.4834 -1.03678 4.51678 -1.03678 0.100859 3.11035C0.0368916 3.17192 0.000597157 3.25592 7.30289e-06 3.34378C-0.000582551 3.43164 0.0345808 3.51611 0.0977163 3.57849L1.30914 4.77623C1.43384 4.89933 1.6365 4.90086 1.76312 4.77966C3.44579 3.21209 5.67874 2.33797 8.00044 2.33798Z" fill="#DADADA"/>
</svg>
`}} />
                            </div>
                          </div>
                          <div style={{"zIndex":1}} className="outerDiv centerer">
                            <div
                              id="0:1054"
                              style={{"width":"47.61904761904762%","marginLeft":"25.395275297619047%","height":"24.444444974263508%","top":"33.333333333333336%"}}
                              className="innerDiv"
                            >
                              <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="10" height="4" viewBox="0 0 10 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.99881 2.29945C6.22254 2.29938 7.4026 2.75598 8.3097 3.58054C8.43238 3.69756 8.62565 3.69502 8.74525 3.57482L9.90583 2.39766C9.96695 2.33591 10.0009 2.25215 9.99998 2.16511C9.9991 2.07807 9.9635 1.99502 9.90114 1.93453C7.13886 -0.644844 2.86111 -0.644844 0.0988288 1.93453C0.0364329 1.99502 0.000833291 2.07811 1.44426e-05 2.16518C-0.000804405 2.25225 0.0332261 2.336 0.0944733 2.39766L1.25472 3.57482C1.37432 3.69502 1.56759 3.69756 1.69028 3.58054C2.59677 2.75652 3.77589 2.29996 4.99881 2.29945Z" fill="#DADADA"/>
</svg>
`}} />
                            </div>
                          </div>
                          <div style={{"zIndex":2}} className="outerDiv centerer">
                            <div
                              id="0:1055"
                              style={{"width":"22.222221465337846%","marginLeft":"38.095238095238095%","height":"22.222221692403156%","top":"60%"}}
                              className="innerDiv"
                            >
                              <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="5" height="4" viewBox="0 0 5 4" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.89834 1.34009C4.96508 1.27595 5.00184 1.18767 4.99993 1.09612C4.99802 1.00456 4.95761 0.91783 4.88825 0.856407C3.50964 -0.285469 1.49054 -0.285469 0.111933 0.856407C0.0425245 0.917781 0.00205366 1.00448 7.6004e-05 1.09604C-0.00190165 1.1876 0.0347892 1.2759 0.101485 1.34009L2.26052 3.47345C2.3238 3.53614 2.41007 3.57143 2.50009 3.57143C2.59011 3.57143 2.67639 3.53614 2.73967 3.47345L4.89834 1.34009Z" fill="#DADADA"/>
</svg>
`}} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv">
          <div
            id="0:497"
            style={{"marginLeft":124,"width":128,"minWidth":128,"height":null,"marginTop":-736,"marginBottom":608,"minHeight":128}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<img src="https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c1dd/ebaa/a96a1c8f502af1c2f1e2b4cfad4329a1">`}} />
          </div>
        </div>
        <div style={{"zIndex":2}} className="outerDiv">
          <div
            id="0:498"
            style={{"marginLeft":142,"width":92,"minWidth":92,"height":null,"marginTop":-576,"marginBottom":536,"minHeight":40,"color":"rgba(0, 0, 0, 1)","fontSize":36,"fontWeight":400,"fontFamily":"Comfortaa","textAlign":"CENTER","fontStyle":"normal","lineHeight":"125%","letterSpacing":"-0.54px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">Jane</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":3}} className="outerDiv">
          <div
            id="0:499"
            style={{"marginLeft":121,"width":133,"minWidth":133,"height":null,"marginTop":-520,"marginBottom":505,"minHeight":15,"color":"rgba(0, 0, 0, 1)","fontSize":13,"fontWeight":900,"fontFamily":"Roboto","textAlign":"CENTER","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0.52px"}}
            className="innerDiv"
          >
            <div>
              <span style={{}} key="end">San francisco, ca</span>
            </div>
          </div>
        </div>
        <div style={{"zIndex":11}} className="outerDiv">
          <div
            id="0:1978"
            style={{"marginLeft":16,"width":343,"minWidth":343,"height":null,"marginTop":-473,"marginBottom":421,"minHeight":52,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="0:1979"
                  style={{"width":"100%","marginLeft":"0%","height":"100%","top":"0%","backgroundColor":"rgba(0, 0, 0, 1)","border":"2px solid rgba(0, 0, 0, 1)","borderRadius":"6px 6px 6px 6px"}}
                  className="innerDiv"
                >
                  <div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":1}} className="outerDiv centerer">
                <div
                  id="0:1980"
                  style={{"width":"9.912536443148689%","marginLeft":"44.690261707361515%","height":"28.846153846153847%","top":"36.53846153846154%","color":"rgba(255, 255, 255, 1)","fontSize":13,"fontWeight":900,"fontFamily":"Roboto","textAlign":"CENTER","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0.52px"}}
                  className="innerDiv"
                >
                  <div>
                    <span style={{}} key="end">test</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":12}} className="outerDiv">
          <div
            id="0:1064"
            style={{"marginLeft":16,"width":343,"minWidth":343,"height":null,"marginTop":-405,"marginBottom":353,"minHeight":52,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="0:1066"
                  style={{"width":"100%","marginLeft":"0%","height":"100%","top":"0%","backgroundColor":"rgba(255, 255, 255, 1)","border":"2px solid rgba(0, 0, 0, 1)","borderRadius":"6px 6px 6px 6px"}}
                  className="innerDiv"
                >
                  <div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":1}} className="outerDiv centerer">
                <div
                  id="0:1067"
                  style={{"width":"18.367346938775512%","marginLeft":"40.608629054300295%","height":"28.846153846153847%","top":"36.53846153846154%","color":"rgba(0, 0, 0, 1)","fontSize":13,"fontWeight":900,"fontFamily":"Roboto","textAlign":"CENTER","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0.52px"}}
                  className="innerDiv"
                >
                  <div>
                    <span style={{}} key="end">message</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":4}} className="outerDiv">
          <div
            id="0:500"
            style={{"marginLeft":16,"width":167,"minWidth":167,"height":null,"marginTop":-321,"marginBottom":101,"minHeight":220}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<img src="https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bc87/1668/7e2847c4e6310a9cf712f5450617b89a">`}} />
          </div>
        </div>
        <div style={{"zIndex":6}} className="outerDiv">
          <div
            id="0:502"
            style={{"marginLeft":192,"width":167,"minWidth":167,"height":null,"marginTop":-321,"marginBottom":11,"minHeight":310}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<img src="https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c68e/8cfb/046c05a90b8c1c79310a25a47c895b38">`}} />
          </div>
        </div>
        <div style={{"zIndex":7}} className="outerDiv">
          <div
            id="0:503"
            style={{"marginLeft":82,"width":167,"minWidth":167,"height":null,"marginTop":-277,"marginBottom":-33,"minHeight":310}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<img src="https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1b4e/29d2/6a515c146ac20a2a2ca882d7dfe910c1">`}} />
          </div>
        </div>
        <div style={{"zIndex":9}} className="outerDiv">
          <div
            id="0:505"
            style={{"marginLeft":16,"width":167,"minWidth":167,"height":null,"marginTop":-91,"marginBottom":-219,"minHeight":310}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<img src="https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cbb5/7d44/b7704ab3d0726157b06e12ed92066182">`}} />
          </div>
        </div>
        <div style={{"zIndex":8}} className="outerDiv">
          <div
            id="0:504"
            style={{"marginLeft":16,"width":167,"minWidth":167,"height":null,"marginTop":228,"marginBottom":-538,"minHeight":310}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<img src="https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/022a/a896/32cfdab1b6fd73d721a42ad8b46f6071">`}} />
          </div>
        </div>
        <div style={{"zIndex":5}} className="outerDiv">
          <div
            id="0:501"
            style={{"marginLeft":192,"width":167,"minWidth":167,"height":null,"marginTop":318,"marginBottom":-538,"minHeight":220}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<img src="https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5843/7366/8f0c54440436567ba9a497914d58583b">`}} />
          </div>
        </div>
        <div style={{"zIndex":10}} className="outerDiv">
          <div
            id="0:1981"
            style={{"marginLeft":16,"width":343,"minWidth":343,"height":null,"marginTop":570,"marginBottom":-622,"minHeight":52,"backgroundColor":"rgba(0, 0, 0, 0)"}}
            className="innerDiv"
          >
            <div>
              <div style={{}} className="outerDiv centerer">
                <div
                  id="0:1982"
                  style={{"width":"100%","marginLeft":"0%","height":"100%","top":"0%","backgroundColor":"rgba(255, 255, 255, 1)","border":"2px solid rgba(0, 0, 0, 1)","borderRadius":"6px 6px 6px 6px"}}
                  className="innerDiv"
                >
                  <div>
                  </div>
                </div>
              </div>
              <div style={{"zIndex":1}} className="outerDiv centerer">
                <div
                  id="0:1983"
                  style={{"width":"19.24198250728863%","marginLeft":"40.02553867529154%","height":"28.846153846153847%","top":"36.53846153846154%","color":"rgba(0, 0, 0, 1)","fontSize":13,"fontWeight":900,"fontFamily":"Roboto","textAlign":"CENTER","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0.52px"}}
                  className="innerDiv"
                >
                  <div>
                    <span style={{}} key="end">see more</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{}} className="outerDiv maxer">
          <div
            id="0:495"
            style={{"backgroundColor":null,"overflow":"hidden","width":"100%","pointerEvents":"none"}}
            className="innerDiv"
          >
            <div style={{"zIndex":14,"justifyContent":"center"}} className="outerDiv">
              <div
                id="0:1068"
                style={{"width":375,"marginLeft":null,"height":null,"marginTop":729,"marginBottom":0,"minHeight":83,"backgroundColor":"rgba(0, 0, 0, 0)"}}
                className="innerDiv"
              >
                <div>
                  <div style={{}} className="outerDiv centerer">
                    <div
                      id="0:1069"
                      style={{"width":"100%","marginLeft":"0%","height":"100%","top":"0%","backgroundColor":"rgba(0, 0, 0, 0)"}}
                      className="innerDiv"
                    >
                      <div>
                        <div style={{}} className="outerDiv centerer">
                          <div
                            id="0:1070"
                            style={{"width":"100%","marginLeft":"0%","height":"100%","top":"0%","backgroundColor":"rgba(255, 255, 255, 1)","boxShadow":"0px -0.5px 0px rgba(0, 0, 0, 0.30000001192092896)"}}
                            className="innerDiv"
                          >
                            <div>
                            </div>
                          </div>
                        </div>
                        <div style={{"zIndex":1}} className="outerDiv centerer">
                          <div
                            id="0:287"
                            style={{"width":"10.666666666666666%","marginLeft":"2.933333333333333%","height":"48.19277108433735%","top":"10.843373493975903%","backgroundColor":"rgba(0, 0, 0, 0)","overflow":"hidden"}}
                            className="innerDiv"
                          >
                            <div>
                              <div style={{"zIndex":7}} className="outerDiv">
                                <div
                                  id="0:1077"
                                  style={{"marginLeft":12,"width":8.485280990600586,"minWidth":8.485280990600586,"height":null,"marginTop":13,"marginBottom":18.514719009399414,"minHeight":8.485280990600586,"backgroundColor":"rgba(196, 196, 196, 1)"}}
                                  className="innerDiv"
                                >
                                  <div>
                                  </div>
                                </div>
                              </div>
                              <div style={{"zIndex":6}} className="outerDiv">
                                <div
                                  id="0:1076"
                                  style={{"marginLeft":19.0712890625,"width":8.485280990600586,"minWidth":8.485280990600586,"height":null,"marginTop":-26.9998779296875,"marginBottom":18.514596939086914,"minHeight":8.485280990600586,"backgroundColor":"rgba(196, 196, 196, 1)"}}
                                  className="innerDiv"
                                >
                                  <div>
                                  </div>
                                </div>
                              </div>
                              <div style={{}} className="outerDiv">
                                <div
                                  id="0:1072"
                                  style={{"marginLeft":13.77783203125,"width":1,"minWidth":1,"height":null,"marginTop":-20.9437255859375,"marginBottom":13.9437255859375,"minHeight":7,"backgroundColor":"rgba(0, 0, 0, 1)","opacity":0.800000011920929}}
                                  className="innerDiv"
                                >
                                  <div>
                                  </div>
                                </div>
                              </div>
                              <div style={{"zIndex":1}} className="outerDiv">
                                <div
                                  id="0:1073"
                                  style={{"marginLeft":24.77783203125,"width":1,"minWidth":1,"height":null,"marginTop":-20.9437255859375,"marginBottom":13.9437255859375,"minHeight":7,"backgroundColor":"rgba(0, 0, 0, 1)","opacity":0.800000011920929}}
                                  className="innerDiv"
                                >
                                  <div>
                                  </div>
                                </div>
                              </div>
                              <div style={{"zIndex":5}} className="outerDiv">
                                <div
                                  id="0:1080"
                                  style={{"marginLeft":17.77783203125,"width":4,"minWidth":4,"height":null,"marginTop":-18.9437255859375,"marginBottom":17.9437255859375,"minHeight":1,"backgroundColor":"rgba(0, 0, 0, 1)","opacity":0.800000011920929}}
                                  className="innerDiv"
                                >
                                  <div>
                                  </div>
                                </div>
                              </div>
                              <div style={{"zIndex":3}} className="outerDiv">
                                <div
                                  id="0:1078"
                                  style={{"marginLeft":17.77783203125,"width":1,"minWidth":1,"height":null,"marginTop":-17.9437255859375,"marginBottom":13.9437255859375,"minHeight":4,"backgroundColor":"rgba(0, 0, 0, 1)","opacity":0.800000011920929}}
                                  className="innerDiv"
                                >
                                  <div>
                                  </div>
                                </div>
                              </div>
                              <div style={{"zIndex":4}} className="outerDiv">
                                <div
                                  id="0:1079"
                                  style={{"marginLeft":20.77783203125,"width":1,"minWidth":1,"height":null,"marginTop":-17.9437255859375,"marginBottom":13.9437255859375,"minHeight":4,"backgroundColor":"rgba(0, 0, 0, 1)","opacity":0.800000011920929}}
                                  className="innerDiv"
                                >
                                  <div>
                                  </div>
                                </div>
                              </div>
                              <div style={{"zIndex":2}} className="outerDiv">
                                <div
                                  id="0:1074"
                                  style={{"marginLeft":13.77783203125,"width":12,"minWidth":12,"height":null,"marginTop":-13.9437255859375,"marginBottom":12.9437255859375,"minHeight":1,"backgroundColor":"rgba(0, 0, 0, 1)","opacity":0.800000011920929}}
                                  className="innerDiv"
                                >
                                  <div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div style={{"zIndex":2}} className="outerDiv centerer">
                          <div
                            id="0:1081"
                            style={{"width":"10.666666666666666%","marginLeft":"21.866666666666667%","height":"48.19277108433735%","top":"10.843373493975903%","backgroundColor":"rgba(0, 0, 0, 0)","overflow":"hidden"}}
                            className="innerDiv"
                          >
                            <div>
                              <div style={{}} className="outerDiv">
                                <div
                                  id="0:1083"
                                  style={{"marginLeft":12,"width":13,"minWidth":13,"height":null,"marginTop":12,"marginBottom":15,"minHeight":13}}
                                  className="innerDiv"
                                >
                                  <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5 6.5C12.5 9.81371 9.81371 12.5 6.5 12.5C3.18629 12.5 0.5 9.81371 0.5 6.5C0.5 3.18629 3.18629 0.5 6.5 0.5C9.81371 0.5 12.5 3.18629 12.5 6.5Z" stroke="black" stroke-linecap="square"/>
</svg>
`}} />
                                </div>
                              </div>
                              <div style={{"zIndex":1}} className="outerDiv">
                                <div
                                  id="0:1084"
                                  style={{"marginLeft":22.5,"width":5,"minWidth":5,"height":null,"marginTop":-17.5,"marginBottom":12.5,"minHeight":5}}
                                  className="innerDiv"
                                >
                                  <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.371658 0.371658L5.62826 5.62826" stroke="black"/>
</svg>
`}} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div style={{"zIndex":3}} className="outerDiv centerer">
                          <div
                            id="0:1085"
                            style={{"width":"18.666666666666668%","marginLeft":"40.8%","height":"48.19277108433735%","top":"10.843373493975903%","backgroundColor":"rgba(0, 0, 0, 0)","overflow":"hidden"}}
                            className="innerDiv"
                          >
                            <div>
                              <div style={{}} className="outerDiv centerer">
                                <div
                                  id="0:1086"
                                  style={{"width":"100%","marginLeft":"0%","height":"100%","top":"0%","background":"linear-gradient(-2.7547169039247232rad, rgba(255, 0, 214, 1) 0%, rgba(255, 77, 0, 1) 100%)","borderRadius":"20px 20px 20px 20px"}}
                                  className="innerDiv"
                                >
                                  <div>
                                  </div>
                                </div>
                              </div>
                              <div style={{"zIndex":1,"justifyContent":"center","alignItems":"center"}} className="outerDiv centerer">
                                <div
                                  id="0:1088"
                                  style={{"width":1,"marginLeft":0,"height":13,"marginTop":0,"backgroundColor":"rgba(255, 255, 255, 1)"}}
                                  className="innerDiv"
                                >
                                  <div>
                                  </div>
                                </div>
                              </div>
                              <div style={{"zIndex":2,"justifyContent":"center","alignItems":"center"}} className="outerDiv centerer">
                                <div
                                  id="0:1089"
                                  style={{"width":13,"marginLeft":0,"height":1,"marginTop":0,"backgroundColor":"rgba(255, 255, 255, 1)"}}
                                  className="innerDiv"
                                >
                                  <div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div style={{"zIndex":4}} className="outerDiv centerer">
                          <div
                            id="0:1090"
                            style={{"width":"10.666666666666666%","marginLeft":"67.73333333333333%","height":"48.19277108433735%","top":"10.843373493975903%","backgroundColor":"rgba(0, 0, 0, 0)","overflow":"hidden"}}
                            className="innerDiv"
                          >
                            <div>
                              <div style={{}} className="outerDiv">
                                <div
                                  id="0:1093"
                                  style={{"marginLeft":12,"width":16,"minWidth":16,"height":null,"marginTop":12,"marginBottom":12,"minHeight":16}}
                                  className="innerDiv"
                                >
                                  <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle r="8" transform="matrix(-1 0 0 1 8 8)" fill="#DADADA"/>
</svg>
`}} />
                                </div>
                              </div>
                              <div style={{"zIndex":1}} className="outerDiv">
                                <div
                                  id="0:1094"
                                  style={{"marginLeft":10,"width":8,"minWidth":8,"height":null,"marginTop":-18.5,"marginBottom":12,"minHeight":6.5}}
                                  className="innerDiv"
                                >
                                  <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 0L8 5.5L0 6.5L4 0Z" fill="#DADADA"/>
</svg>
`}} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div style={{"zIndex":5}} className="outerDiv centerer">
                          <div
                            id="0:1095"
                            style={{"width":"10.666666666666666%","marginLeft":"86.4%","height":"48.19277108433735%","top":"10.843373493975903%","backgroundColor":"rgba(0, 0, 0, 0)","overflow":"hidden"}}
                            className="innerDiv"
                          >
                            <div>
                              <div style={{"zIndex":1}} className="outerDiv">
                                <div
                                  id="0:1098"
                                  style={{"marginLeft":16.3046875,"width":7.826148986816406,"minWidth":7.826148986816406,"height":null,"marginTop":12,"marginBottom":20.17391300201416,"minHeight":7.82608699798584}}
                                  className="innerDiv"
                                >
                                  <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="9" height="9" viewBox="0 0 9 9" fill="none" xmlns="http://www.w3.org/2000/svg">
<ellipse cx="4.5" cy="4.49997" rx="3.99015" ry="3.99012" stroke="black" stroke-linecap="square"/>
</svg>
`}} />
                                </div>
                              </div>
                              <div style={{}} className="outerDiv">
                                <div
                                  id="0:1097"
                                  style={{"marginLeft":15,"width":10.434782981872559,"minWidth":10.434782981872559,"height":null,"marginTop":-19.521728515625,"marginBottom":12.999989032745361,"minHeight":6.521739482879639}}
                                  className="innerDiv"
                                >
                                  <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 0.524715C2.97608 0.524715 0.524715 2.97608 0.524715 6V7.36882H11.4753V6C11.4753 2.97608 9.02392 0.524715 6 0.524715Z" stroke="black"/>
</svg>
`}} />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{"zIndex":1}} className="outerDiv centerer">
                    <div
                      id="0:1099"
                      style={{"width":"36%","marginLeft":"32%","height":"6.024096385542169%","top":"84.33734939759036%","backgroundColor":"rgba(0, 0, 0, 1)"}}
                      className="innerDiv"
                    >
                      <div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

