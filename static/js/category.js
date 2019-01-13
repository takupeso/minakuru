(function(global, factory) {
  "use strict";
  typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() :
  // typeof define === "function" && define.amd ? define(factory) :
  global.category = factory();
}(this, function() {
  "use strict";

  var categoryList = [
    {id:1, name:"スポーツ"},
    {id:2, name:"芸術"},
    {id:3, name:"文化"},
    {id:4, name:"ペット"}
  ];

    function category(){
      return this;
    }

    category.getCategoryList = function() {
      return clone(categoryList);
    };

    category.getCategoryName = function(id) {
      for( var i = 0; i < categoryList.length; i++ ) {
        if(categoryList[i].id == id) {
          return categoryList[i].name
        }
      }
      return '';
    }

    function clone(obj){
      var _isArray = isArray(obj);
      var _isObject = isObject(obj);
      if( !_isArray && !_isObject ) return undefined;
      var result = _isArray ? [] : {}, key, val;
      for( key in obj ){
        val = obj[key];
        if( isArray(val) || isObject(val) ) val = clone(val);
        result[key] = val;
      }
      return result;
    }

      /**
       * -------------------------------------------------------------
       * Decision Helpers
       * -------------------------------------------------------------
       */
      function isArray(val){
        return Object.prototype.toString.call(val) === "[object Array]";
      }

      function isObject(obj){
        var type = typeof obj;
        return type === "function" || type === "object" && !!obj && !isArray(obj);
      }

      return category;
}));
