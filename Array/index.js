Array.prototype.forEach = function(callbackfn, thisArg = this) {
    for (let i = 0; i < this.length; i++) {
        callbackfn.call(thisArg, this[i], i, this);
    }
}

Array.prototype.filter = function(callbackfn, thisArg = this) {
    const res = [];

    this.forEach((el, index) => callbackfn.call(thisArg, el, index, this) ? res.push(el) : null)
    return res;
}

Array.prototype.every = function(callbackfn, thisArg = this) {
    for (let i = 0; i < this.length; i++) {
        if (!callbackfn.call(thisArg, this[i], i, this))
            return false;
    }

    return true;
}

Array.prototype.some = function(callbackfn, thisArg = this) {
    for (let i = 0; i < this.length; i++) {
        if (callbackfn.call(thisArg, this[i], i, this))
            return true;
    }

    return false;
}

Array.prototype.map = function(callbackfn, thisArg = this) {
    const res = [];

    this.forEach((el, index) => res.push(callbackfn.call(thisArg, el, index, this)));
    return res;
}

Array.prototype.reduce = function(callbackfn, acc, thisArg = this) {
    this.forEach((el, index) => acc = callbackfn.call(thisArg, acc, el, index));
    return acc;
}

Array.prototype.indexOf = function(searchElement, fromIndex = 0) {
    for (let i = fromIndex; i < this.length; i++) {
        if (this[i] === searchElement)
            return i;
    }

    return -1;
}

Array.prototype.lastIndexOf = function(searchElement, fromIndex = 0) {
    let res;

    for (let i = fromIndex; i < this.length; i++) {
        if (this[i] === searchElement)
            res = i;
    }

    return res !== undefined ? res : -1;
}

Array.prototype.find = function(callbackfn, thisArg = this) {
    for (let i = 0; i < this.length; i++) {
        if (callbackfn.call(thisArg, this[i], i, this)) {
            return this[i]
        }
    }
}

Array.prototype.findIndex = function(callbackfn, thisArg = this) {
    for (let i = 0; i < this.length; i++) {
        if (callbackfn.call(thisArg, this[i], i, this)) {
            return i
        }
    }
}

Array.prototype.entries = function() {
    const res = [];

    this.forEach((el, index) => res.push(index, el));

    return res;
}

module.exports = Array;