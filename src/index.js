'use strict';
var Line = require('lightning-line');
var _ = require('lodash');

var Visualization = Line.extend({

    getDefaultOptions: function() {
        return {
            maxLength: 50
        }
    },

    appendData: function(formattedData) {

        var self = this;
        var options = this.options;

        var delta = self.data.series[0].d[self.data.series[0].d.length - 1].x;

        _.map(formattedData.series, function(s) {
            _.map(s.d, function(p) {
                p.x = p.x + delta + 1
            })
        });

        _.map(self.data.series, function(s, i) {
            s.d = s.d.concat(formattedData.series[i].d)
        });

        if (options.maxLength) {
            if (self.data.series[0].d.length > options.maxLength) {
                _.map(self.data.series, function(s) {
                    s.d = s.d.slice(s.d.length - options.maxLength, s.d.length)
                })
            }
        }

        self.setAxis();
        self.updateAxis();
        self.redraw();
    }

});


module.exports = Visualization;