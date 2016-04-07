var r_isregex = require('is-regex');

module.exports = {
    each: function(obj, fn) {
        var res;
        
        if(!this.isFunction(fn)) return;
        
        if(this.isArray(obj)) {
            for(var i=0, len= obj.length; i < len;) {
                if((res = fn.call(obj, obj[i], i++)) === false) break;
            }
        } else {
            for(var i in obj) {
                if((res = fn.call(obj, obj[i], i)) === false) break;
            }
        }
        
        return res;
    },
    isArray: function(o) {
        return Array.isArray(o);
    },
    isObject: function(o) {
        return typeof o === 'object';
    },
    isFunction: function(o) {
        return typeof o === 'function';
    },
    isNumber: function(o) {
        return typeof o === 'number';
    },
    isBoolean: function(o) {
        return typeof o === 'boolean';
    },
    isString: function(o) {
        return typeof o === 'string';
    },
    isEmptyString: function(s) {
        return s === '';
    },
    isUndefined: function(o) {
        return typeof o === 'undefined';
    },
    isNull: function(o) {
        return typeof o === 'null';
    },
    isNullOrUndefined: function(o) {
        return this.isNull(o) || this.isUndefined(o);
    },
    isNothing: function(o) {
        return this.isNullOrUndefined(o) || this.isEmptyString(o); 
    },
    isRegExp: function(o) {
        return r_isregex(o);
    }
};