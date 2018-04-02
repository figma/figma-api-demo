import React, { PureComponent } from 'react';
import { CSortAscending } from './components/CSortAscending';
import { CSortDescending } from './components/CSortDescending';
import { CSortableList } from './components/CSortableList';
import { CListContainer } from './components/CListContainer';

export class MasterListContainer extends PureComponent {
  render() {
    return <div className="master" style={{backgroundColor: "rgba(255, 255, 255, 1)"}}>
      <CListContainer {...this.props} nodeId="1:4" />
    </div>
  }
}

export function getComponentFromId(id) {
  if (id === "3:2") return CSortAscending3D2;
  if (id === "3:3") return CSortDescending3D3;
  if (id === "3:5") return CSortableList3D5;
  if (id === "1:4") return CListContainer1D4;
  return null;
}

class CSortAscending3D2 extends PureComponent {
  render() {
    return (
      <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="16" height="8" viewBox="0 0 16 8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g data-name="Canvas" fill="none">
<g data-name="#SortAscending">
<g transform="translate(1.12494 0.689577) scale(0.974724)">
<path d="M 0 7L 14 7L 6.5625 0L 0 7Z" stroke="#BB6BD9"/>
</g>
</g>
</g>
</svg>

`}} />
    );
  }
}

class CSortDescending3D3 extends PureComponent {
  render() {
    return (
      <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="16" height="8" viewBox="0 0 16 8" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g data-name="Canvas" fill="none">
<g data-name="#SortDescending">
<g transform="translate(1.12494 7.31043) scale(0.974724 -0.974724)">
<path d="M 0 7L 14 7L 6.5625 0L 0 7Z" stroke="#BB6BD9"/>
</g>
</g>
</g>
</svg>

`}} />
    );
  }
}

class CSortableList3D5 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{}} className="outerDiv">
          <div
            id="1:11"
            style={{"marginLeft":2,"marginRight":2,"flexGrow":1,"height":48,"marginTop":2,"marginBottom":15,"border":"1px solid rgba(187, 107, 217, 1)"}}
            className="innerDiv"
          >
            <div>
            </div>
          </div>
        </div>
        <div style={{"zIndex":3}} className="outerDiv">
          <div
            id="2:11"
            style={{"marginLeft":12,"width":9.5,"minWidth":9.5,"height":null,"marginTop":-48,"marginBottom":30,"minHeight":18}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="10" height="19" viewBox="0 0 10 19" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g data-name="Canvas" fill="none">
<g data-name="Vector 3">
<g transform="translate(0.466101 1.04247) scale(0.932202)">
<path d="M 0 0L 0 18L 9.5 8.5L 0 0Z" stroke="#BB6BD9"/>
</g>
</g>
</g>
</svg>

`}} />
          </div>
        </div>
        <div style={{"zIndex":2}} className="outerDiv">
          <div
            id="2:12"
            style={{"marginLeft":13,"width":8,"minWidth":8,"height":null,"marginTop":-46,"marginBottom":31,"minHeight":15}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="9" height="17" viewBox="0 0 9 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g data-name="Canvas" fill="none">
<g data-name="Vector 3.1">
<g transform="translate(0.48747 1.0827) scale(0.97494)">
<path d="M 0 0L 0 15L 8 7.08333L 0 0Z" stroke="#F0C9FF"/>
</g>
</g>
</g>
</svg>

`}} />
          </div>
        </div>
        <div style={{"zIndex":4}} className="outerDiv">
          <div
            id="3:4"
            style={{"marginLeft":36,"width":248,"minWidth":248,"height":15,"marginTop":-46,"marginBottom":31,"color":"rgba(96, 24, 122, 1)","fontSize":12,"fontWeight":400,"fontFamily":"Roboto","textAlign":"LEFT","fontStyle":"normal","lineHeight":"125%","letterSpacing":"0px"}}
            className="innerDiv"
          >
            <div>
              {this.props.item && this.props.item.split("\n").map((line, idx) => <div key={idx}>{line}</div>)}
              {!this.props.item && (<div>
                <span style={{}} key="end">List item 1</span>
              </div>)}
            </div>
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv">
          <div
            id="2:7"
            style={{"marginLeft":2,"marginRight":2,"flexGrow":1,"height":null,"marginTop":-15,"marginBottom":11,"minHeight":4}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="300" height="4" viewBox="0 0 300 4" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g data-name="Canvas" fill="none">
<g data-name="Rectangle 3">
<path d="M 0 0L 300 0L 295 4L 5 4L 0 0Z" fill="#F0C9FF"/>
</g>
</g>
</svg>

`}} />
          </div>
        </div>
      </div>
    );
  }
}

class CListContainer1D4 extends PureComponent {
  render() {
    return (
      <div>
        <div style={{"zIndex":3}} className="outerDiv">
          <div
            id="1:5"
            style={{"marginLeft":9,"width":34,"minWidth":34,"height":null,"marginTop":14,"marginBottom":110,"minHeight":19}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="34" height="19" viewBox="0 0 34 19" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g data-name="Canvas" fill="none">
<g data-name="Vector">
<g transform="translate(0.747522 0.475) scale(0.95)">
<path d="M 0 5.06798L 3.10435 5.36231C 7.3913 5.89594 7.53913 -2.58446 11.6783 0.800278C 14.1992 2.86174 12.3681 10.0224 12.2696 10.9545C 13.6493 10.0715 17.2661 4.00841 23.6522 5.06798C 30.0383 6.12755 33.6551 5.80379 34 5.36231C 32.3739 8.54486 31.9304 14.9278 23.6522 17.7789C 13.2381 21.3656 3.9913 16.3995 7.53913 11.3038C 8.32754 10.3718 9.4313 8.50772 7.53913 8.50772C 5.17391 8.50772 1.18261 7.86406 0 5.06798Z" stroke="#BB6BD9"/>
</g>
</g>
</g>
</svg>

`}} />
          </div>
        </div>
        <div style={{"zIndex":1}} className="outerDiv">
          <div
            id="5:0"
            style={{"marginLeft":10,"width":32,"minWidth":32,"height":null,"marginTop":-128,"marginBottom":111,"minHeight":17}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="33" height="18" viewBox="0 0 33 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g data-name="Canvas" fill="none">
<g data-name="Vector">
<g transform="translate(0.796922 0.497039) scale(0.992684)">
<path d="M 0 4.53451L 2.92174 4.79785C 6.95652 5.27532 7.09565 -2.31241 10.9913 0.716038C 13.3639 2.5605 11.6406 8.96745 11.5478 9.80136C 12.8464 9.01134 16.2504 3.58648 22.2609 4.53451C 28.2713 5.48254 31.6754 5.19287 32 4.79785C 30.4696 7.6454 30.0522 13.3565 22.2609 15.9075C 12.4593 19.1166 3.75652 14.6732 7.09565 10.1139C 7.83768 9.28001 8.87652 7.61218 7.09565 7.61218C 4.86957 7.61218 1.11304 7.03627 0 4.53451Z" stroke="#F0C9FF"/>
</g>
</g>
</g>
</svg>

`}} />
          </div>
        </div>
        <div style={{}} className="outerDiv">
          <div
            id="5:1"
            style={{"marginLeft":10,"width":31,"minWidth":31,"height":null,"marginTop":-127,"marginBottom":111,"minHeight":16}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="32" height="17" viewBox="0 0 32 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g data-name="Canvas" fill="none">
<g data-name="Vector">
<g transform="translate(0.806084 0.496732) scale(0.992252)">
<path d="M 0 4.26777L 2.83043 4.51563C 6.73913 4.965 6.87391 -2.17639 10.6478 0.673918C 12.9463 2.40988 11.2768 8.43995 11.187 9.22481C 12.4449 8.48126 15.7426 3.37551 21.5652 4.26777C 27.3878 5.16004 30.6855 4.8874 31 4.51563C 29.5174 7.19567 29.113 12.5708 21.5652 14.9717C 12.07 17.9921 3.63913 13.8101 6.87391 9.51899C 7.59275 8.73413 8.59913 7.1644 6.87391 7.1644C 4.71739 7.1644 1.07826 6.62237 0 4.26777Z" stroke="#F5E8FA"/>
</g>
</g>
</g>
</svg>

`}} />
          </div>
        </div>
        <div style={{"zIndex":5,"justifyContent":"flex-end"}} className="outerDiv">
          <div
            id="3:2"
            style={{"marginRight":56,"width":14,"minWidth":14,"height":null,"marginTop":-123,"marginBottom":116,"minHeight":7}}
            className="innerDiv"
          >
            <CSortAscending {...this.props} nodeId="3:2" />
          </div>
        </div>
        <div style={{"zIndex":6,"justifyContent":"flex-end"}} className="outerDiv">
          <div
            id="3:3"
            style={{"marginRight":24,"width":14,"minWidth":14,"height":null,"marginTop":-123,"marginBottom":116,"minHeight":7}}
            className="innerDiv"
          >
            <CSortDescending {...this.props} nodeId="3:3" />
          </div>
        </div>
        <div style={{"zIndex":4}} className="outerDiv">
          <div
            id="2:1"
            style={{"marginLeft":0,"width":1260,"minWidth":1260,"height":null,"marginTop":-99,"marginBottom":95.76071000099182,"minHeight":3.2392899990081787}}
            className="innerDiv"
          >
            <div className="vector" dangerouslySetInnerHTML={{__html: `<svg preserveAspectRatio="none" width="1128" height="4" viewBox="0 0 1128 4" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<g data-name="Canvas" fill="none">
<g data-name="Vector 2">
<g transform="translate(0.333014 0.65541) scale(0.894443)">
<path d="M 0 0C 2.1913 2.44444 7.99826 5.86667 13.6957 0C 15.887 2.44444 21.6939 5.86667 27.3913 0C 29.5826 2.44444 35.3896 5.86667 41.087 0C 43.2783 2.44444 49.0852 5.86667 54.7826 0C 56.9739 2.44444 62.7809 5.86667 68.4783 0C 70.6696 2.44444 76.4765 5.86667 82.1739 0C 84.3652 2.44444 90.1722 5.86667 95.8696 0C 98.0609 2.44444 103.868 5.86667 109.565 0C 111.757 2.44444 117.563 5.86667 123.261 0C 125.452 2.44444 131.259 5.86667 136.957 0C 139.148 2.44444 144.955 5.86667 150.652 0C 152.843 2.44444 158.65 5.86667 164.348 0C 166.539 2.44444 172.346 5.86667 178.043 0C 180.235 2.44444 186.042 5.86667 191.739 0C 193.93 2.44444 199.737 5.86667 205.435 0C 207.626 2.44444 213.433 5.86667 219.13 0C 221.322 2.44444 227.129 5.86667 232.826 0C 235.017 2.44444 240.824 5.86667 246.522 0C 248.713 2.44444 254.52 5.86667 260.217 0C 262.409 2.44444 268.216 5.86667 273.913 0C 276.104 2.44444 281.911 5.86667 287.609 0C 289.8 2.44444 295.607 5.86667 301.304 0C 303.496 2.44444 309.303 5.86667 315 0C 317.191 2.44444 322.998 5.86667 328.696 0C 330.887 2.44444 336.694 5.86667 342.391 0C 344.583 2.44444 350.39 5.86667 356.087 0C 358.278 2.44444 364.085 5.86667 369.783 0C 371.974 2.44444 377.781 5.86667 383.478 0C 385.67 2.44444 391.477 5.86667 397.174 0C 399.365 2.44444 405.172 5.86667 410.87 0C 413.061 2.44444 418.868 5.86667 424.565 0C 426.757 2.44444 432.563 5.86667 438.261 0C 440.452 2.44444 446.259 5.86667 451.957 0C 454.148 2.44444 459.955 5.86667 465.652 0C 467.843 2.44444 473.65 5.86667 479.348 0C 481.539 2.44444 487.346 5.86667 493.043 0C 495.235 2.44444 501.042 5.86667 506.739 0C 508.93 2.44444 514.737 5.86667 520.435 0C 522.626 2.44444 528.433 5.86667 534.13 0C 536.322 2.44444 542.129 5.86667 547.826 0C 550.017 2.44444 555.824 5.86667 561.522 0C 563.713 2.44444 569.52 5.86667 575.217 0C 577.409 2.44444 583.216 5.86667 588.913 0C 591.104 2.44444 596.911 5.86667 602.609 0C 604.8 2.44444 610.607 5.86667 616.304 0C 618.496 2.44444 624.303 5.86667 630 0C 632.191 2.44444 637.998 5.86667 643.696 0C 645.887 2.44444 651.694 5.86667 657.391 0C 659.583 2.44444 665.39 5.86667 671.087 0C 673.278 2.44444 679.085 5.86667 684.783 0C 686.974 2.44444 692.781 5.86667 698.478 0C 700.67 2.44444 706.477 5.86667 712.174 0C 714.365 2.44444 720.172 5.86667 725.87 0C 728.061 2.44444 733.868 5.86667 739.565 0C 741.757 2.44444 747.563 5.86667 753.261 0C 755.452 2.44444 761.259 5.86667 766.957 0C 769.148 2.44444 774.955 5.86667 780.652 0C 782.843 2.44444 788.65 5.86667 794.348 0C 796.539 2.44444 802.346 5.86667 808.043 0C 810.235 2.44444 816.042 5.86667 821.739 0C 823.93 2.44444 829.737 5.86667 835.435 0C 837.626 2.44444 843.433 5.86667 849.13 0C 851.322 2.44444 857.129 5.86667 862.826 0C 865.017 2.44444 870.824 5.86667 876.522 0C 878.713 2.44444 884.52 5.86667 890.217 0C 892.409 2.44444 898.216 5.86667 903.913 0C 906.104 2.44444 911.911 5.86667 917.609 0C 919.8 2.44444 925.607 5.86667 931.304 0C 933.496 2.44444 939.303 5.86667 945 0C 947.191 2.44444 952.998 5.86667 958.696 0C 960.887 2.44444 966.694 5.86667 972.391 0C 974.583 2.44444 980.39 5.86667 986.087 0C 988.278 2.44444 994.085 5.86667 999.783 0C 1001.97 2.44444 1007.78 5.86667 1013.48 0C 1015.67 2.44444 1021.48 5.86667 1027.17 0C 1029.37 2.44444 1035.17 5.86667 1040.87 0C 1043.06 2.44444 1048.87 5.86667 1054.57 0C 1056.76 2.44444 1062.56 5.86667 1068.26 0C 1070.45 2.44444 1076.26 5.86667 1081.96 0C 1084.15 2.44444 1089.95 5.86667 1095.65 0C 1097.84 2.44444 1103.65 5.86667 1109.35 0C 1111.54 2.44444 1117.35 5.86667 1123.04 0C 1125.23 2.44444 1131.04 5.86667 1136.74 0C 1138.93 2.44444 1144.74 5.86667 1150.43 0C 1152.63 2.44444 1158.43 5.86667 1164.13 0C 1166.32 2.44444 1172.13 5.86667 1177.83 0C 1180.02 2.44444 1185.82 5.86667 1191.52 0C 1193.71 2.44444 1199.52 5.86667 1205.22 0C 1207.41 2.44444 1213.22 5.86667 1218.91 0C 1221.1 2.44444 1226.91 5.86667 1232.61 0C 1234.8 2.44444 1240.61 5.86667 1246.3 0C 1248.5 2.44444 1254.3 5.86667 1260 0" stroke="#BB6BD9"/>
</g>
</g>
</g>
</svg>

`}} />
          </div>
        </div>
        <div style={{"zIndex":7}} className="outerDiv">
          <div
            id="3:5"
            style={{"marginLeft":5,"marginRight":6,"flexGrow":1,"height":null,"marginTop":-78,"marginBottom":13,"minHeight":65,"backgroundColor":"rgba(255, 255, 255, 1)","overflow":"hidden"}}
            className="innerDiv"
          >
            <CSortableList {...this.props} nodeId="3:5" />
          </div>
        </div>
        <div style={{"zIndex":2}} className="outerDiv centerer">
          <div
            id="2:13"
            style={{"marginLeft":0,"marginRight":0,"flexGrow":1,"marginTop":0,"marginBottom":0,"border":"1px solid rgba(187, 107, 217, 1)"}}
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

