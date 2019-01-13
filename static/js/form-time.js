(function(global, factory) {
  "use strict";
  typeof exports === "object" && typeof module !== "undefined" ? module.exports = factory() :
  typeof define === "function" && define.amd ? define(factory) :
  global.formTime = factory();
}(this, function() {
  "use strict";

    function formTime(){
      return this;
    }

    formTime.formShowDate = function formShowDate(date) {
      if (date == false) {
         date = new Date;
       }
      return date.slice(0, 10) + ' ' + date.slice(11, 19);
    };

    formTime.formMysqlDate = function formMysqlDate(day, time) {
      return day.toJSON().slice(0, 10) + "T" + time.toJSON().slice(11, 19);
    };

    return formTime;
}));
