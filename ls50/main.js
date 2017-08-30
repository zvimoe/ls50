'use strict'

function calc(op) {
    const _x = document.getElementById('x');
    const _y = document.getElementById('y');
    var c = new calculator(_x, _y, 'result');
    c.Calc(op);
}

function unitTest() {
    var elx = document.createElement('input');
    elx.setAttribute("value", "3");

    var ely = document.createElement('input');
    ely.setAttribute("value", "4");

    var elresult = document.createElement('span');
    elresult.setAttribute("class", "testresult");
    
    // Please use Dependency Injection!!!
    var c = new calculator(elx, 'testx2', 'testresult');
    c.Calc('mult');

    console.log(elresult);
}


// moudle pattern
function calcModule(num1, num2) {

    // Validations
    if (typeof num1 !== 'number') {
        if (typeof num1 === 'string') {
            num1 = Number.parseFloat(num1);
            if (Number.isNaN(num1)) {
                throw "NaN";
            }
        }
        else {
            throw "NaN";
        }
    }

    // Operations
    const mult = function() {
        return num1*num2;
    }

    const divide = function() {
        if (num2 === 0) {
            throw "Cannot divide by zero";
        }
        return num1 / num2;
    } 

    return {
        mult: mult,
        divide: divide

    }
}

function calcClosure() {
    var _history = [];

    const log = function(x, y, res) {
        _history.push('x: ' + x + ", y: " + y + " , result:" + res);
    }

    const getHistory = function () {
        return _history;
    }

    // Operations
    const mult = function(num1, num2) {
        log(num1, num2, num1*num2);
        return num1*num2;
    }

    const divide = function(num1, num2) {
        if (num2 === 0) {
            throw "Cannot divide by zero";
        }
        log(num1, num2, num1/num2);
        return num1 / num2;
    } 

    return {
        mult: mult,
        divide: divide,
        getHistory: getHistory
    }
}

