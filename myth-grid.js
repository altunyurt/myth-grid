var mythGrid = function(containerId, options){
    var range = function (n) {
        return Array.apply(null, Array(n)).map(function (_, i) {return i;});
    }

    var grid = function () {
        var self = this;
        self.vm = {
            init: function () {

            },
            options: m.prop(options || {})

        }
        self.controller = function(){

        }

        self.view = function(ctrl){
            var options = self.vm.options();
            return m(".grid", {}, range(options.rows).map(function(i){
                var row = m(".row", {}, range(options.cols).map(function(j){
                    return m(".col", {}, "col " + j * i);
                }))
                return row;
            }))
        }
        return self;
    }
    m.module(document.getElementById(containerId), new grid());
}
