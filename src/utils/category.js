export default {
  methods: {
    getCategoryList: function() {
      let categoryList = [
        {id:1, name:"スポーツ"},
        {id:2, name:"芸術"},
        {id:3, name:"文化"},
        {id:4, name:"ペット"}
      ]

      return this.clone(categoryList);
    },
    clone: function(obj) {
      var _isArray = this.isArray(obj);
      var _isObject = this.isObject(obj);
      if( !_isArray && !_isObject ) return undefined;
      var result = _isArray ? [] : {}, key, val;
      for( key in obj ){
        val = obj[key];
        if( this.isArray(val) || this.isObject(val) ) val = this.clone(val);
        result[key] = val;
      }
      return result;
    },
    isArray: function(val) {
      return Object.prototype.toString.call(val) === "[object Array]";
    },
    isObject: function(obj) {
      var type = typeof obj;
      return type === "function" || type === "object" && !!obj && !this.isArray(obj);
    }

  }
}
