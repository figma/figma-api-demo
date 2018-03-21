// Copyright 2010 futomi  http://www.html5.jp/
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// perspective.js v0.0.2
// 2010-08-28

/* -------------------------------------------------------------------
* define objects (name space) for this library.
* ----------------------------------------------------------------- */
if( typeof html5jp == 'undefined' ) {
    html5jp = new Object();
}

(function () {

    /* -------------------------------------------------------------------
    * constructor
    * ----------------------------------------------------------------- */
    html5jp.perspective = function(ctxd, image) {
        // check the arguments
        if( ! ctxd || ! ctxd.strokeStyle ) { return; }
        if( ! image || ! image.width || ! image.height ) { return; }
        // prepare a <canvas> for the image
        var cvso = document.createElement('canvas');
        cvso.width = parseInt(image.width);
        cvso.height = parseInt(image.height);
        var ctxo = cvso.getContext('2d');
        ctxo.drawImage(image, 0, 0, cvso.width, cvso.height);
        // prepare a <canvas> for the transformed image
        var cvst = document.createElement('canvas');
        cvst.width = ctxd.canvas.width;
        cvst.height = ctxd.canvas.height;
        var ctxt = cvst.getContext('2d');
        // parameters
        this.p = {
            ctxd: ctxd,
            cvso: cvso,
            ctxo: ctxo,
            ctxt: ctxt
        }
    };

    /* -------------------------------------------------------------------
    * prototypes
    * ----------------------------------------------------------------- */
    var proto = html5jp.perspective.prototype;

    /* -------------------------------------------------------------------
    * public methods
    * ----------------------------------------------------------------- */
    proto.draw = function(points) {
        var d0x = points[0][0];
        var d0y = points[0][1];
        var d1x = points[1][0];
        var d1y = points[1][1];
        var d2x = points[2][0];
        var d2y = points[2][1];
        var d3x = points[3][0];
        var d3y = points[3][1];
        // compute the dimension of each side
        var dims = [
            Math.sqrt( Math.pow(d0x-d1x, 2) + Math.pow(d0y-d1y, 2) ), // top side
            Math.sqrt( Math.pow(d1x-d2x, 2) + Math.pow(d1y-d2y, 2) ), // right side
            Math.sqrt( Math.pow(d2x-d3x, 2) + Math.pow(d2y-d3y, 2) ), // bottom side
            Math.sqrt( Math.pow(d3x-d0x, 2) + Math.pow(d3y-d0y, 2) )  // left side
        ];
        //
        var ow = this.p.cvso.width;
        var oh = this.p.cvso.height;
        // specify the index of which dimension is longest
        var base_index = 0;
        var max_scale_rate = 0;
        var zero_num = 0;
        for( var i=0; i<4; i++ ) {
            var rate = 0;
            if( i % 2 ) {
                rate = dims[i] / ow;
            } else {
                rate = dims[i] / oh;
            }
            if( rate > max_scale_rate ) {
                base_index = i;
                max_scale_rate = rate;
            }
            if( dims[i] == 0 ) {
                zero_num ++;
            }
        }
        if(zero_num > 1) { return; }
        //
        var step = 2;
        var cover_step = step * 5;
        //
        var ctxo = this.p.ctxo;
        var ctxt = this.p.ctxt;
        ctxt.clearRect(0, 0, ctxt.canvas.width, ctxt.canvas.height);
        if(base_index % 2 == 0) { // top or bottom side
            var ctxl = this.create_canvas_context(ow, cover_step);
            var cvsl = ctxl.canvas;
            for( var y=0; y<oh; y+=step ) {
                var r = y / oh;
                var sx = d0x + (d3x-d0x) * r;
                var sy = d0y + (d3y-d0y) * r;
                var ex = d1x + (d2x-d1x) * r;
                var ey = d1y + (d2y-d1y) * r;
                var ag = Math.atan( (ey-sy) / (ex-sx) );
                var sc = Math.sqrt( Math.pow(ex-sx, 2) + Math.pow(ey-sy, 2) ) / ow;
                ctxl.setTransform(1, 0, 0, 1, 0, -y);
                ctxl.drawImage(ctxo.canvas, 0, 0);
                //
                ctxt.translate(sx, sy);
                ctxt.rotate(ag);
                ctxt.scale(sc, sc);
                ctxt.drawImage(cvsl, 0, 0);
                //
                ctxt.setTransform(1, 0, 0, 1, 0, 0);
            }
        } else if(base_index % 2 == 1) { // right or left side
            var ctxl = this.create_canvas_context(cover_step, oh);
            var cvsl = ctxl.canvas;
            for( var x=0; x<ow; x+=step ) {
                var r =  x / ow;
                var sx = d0x + (d1x-d0x) * r;
                var sy = d0y + (d1y-d0y) * r;
                var ex = d3x + (d2x-d3x) * r;
                var ey = d3y + (d2y-d3y) * r;
                var ag = Math.atan( (sx-ex) / (ey-sy) );
                var sc = Math.sqrt( Math.pow(ex-sx, 2) + Math.pow(ey-sy, 2) ) / oh;
                ctxl.setTransform(1, 0, 0, 1, -x, 0);
                ctxl.drawImage(ctxo.canvas, 0, 0);
                //
                ctxt.translate(sx, sy);
                ctxt.rotate(ag);
                ctxt.scale(sc, sc);
                ctxt.drawImage(cvsl, 0, 0);
                //
                ctxt.setTransform(1, 0, 0, 1, 0, 0);
            }
        }
        // set a clipping path and draw the transformed image on the destination canvas.
        this.p.ctxd.save();
        this.set_clipping_path(this.p.ctxd, [[d0x, d0y], [d1x, d1y], [d2x, d2y], [d3x, d3y]]);
        this.p.ctxd.drawImage(ctxt.canvas, 0, 0);
        this.p.ctxd.restore();
    }

    /* -------------------------------------------------------------------
    * private methods
    * ----------------------------------------------------------------- */

    proto.create_canvas_context = function(w, h) {
        var canvas = document.createElement('canvas');
        canvas.width = w;
        canvas.height = h;
        var ctx = canvas.getContext('2d');
        return ctx;
    };

    proto.set_clipping_path = function(ctx, points) {
        ctx.beginPath();
        ctx.moveTo(points[0][0], points[0][1]);
        for( var i=1; i<points.length; i++ ) {
            ctx.lineTo(points[i][0], points[i][1]);
        }
        ctx.closePath();
        ctx.clip();
    };

})();
