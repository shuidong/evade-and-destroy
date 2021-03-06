/*!
 * Name    : constr-tile.js
 * Purpose : Constructor for Tile objects
 *
 * Author  : KUSANAGI Mitsuhisa <mikkun@mbg.nifty.com>
 * Licence : MIT license
 */

/*jslint bitwise, browser, multivar, this*/
/*global EAD, window*/

EAD.Tile = function (layer) {
    "use strict";

    this.layer = layer;

    this.id = 0;
    this.left = 0;
    this.top = 0;
};

EAD.Tile.SRC_COLS = 10;

EAD.Tile.prototype.draw = function () {
    "use strict";

    EAD.ctx[this.layer].drawImage(
        EAD.tileset,
        this.id % EAD.Tile.SRC_COLS * EAD.BASE_PX,
        Math.floor(this.id / EAD.Tile.SRC_COLS) * EAD.BASE_PX,
        EAD.BASE_PX,
        EAD.BASE_PX,
        Math.floor(this.left),
        Math.floor(this.top),
        EAD.BASE_PX,
        EAD.BASE_PX
    );
};
