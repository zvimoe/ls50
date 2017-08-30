'use strict'
/*
    @x - id of x element (number)
    @y - id of y element (number)
*/
function calculator(_x, _y, result) {

    const Mult = function() {
        for( let i=0; i < document.getElementsByClassName(result).length; i++) {
            document.getElementsByClassName(result)[i].innerHTML = _x.value * _y.value;
        }
        
    }
    const getX = function() {
        return _x;
    }

    const Calc = function(op) {
        //if (Number.isNaN(Number.parseFloat(this._x.value))) {
        //    throw "Not a number";
       // }
        switch (op) {
            case 'mult':
                this.Mult();
                break;
        }
    }
    
    return {
        getX: getX,
        y: _y,
        Mult: Mult,
        Calc: Calc
    }
}