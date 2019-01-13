export default {
  methods: {
    formShowDate: function(date) {
      if (date == false) {
         date = new Date;
       }
      return date.slice(0, 10) + ' ' + date.slice(11, 19);
    },
    formMysqlDate: function(date, time) {
      return date + "T" + time + ':00';
    },
    timeToDate: function(time) {
      return '0000/00/00' + "T" + time + ':00';
    }
  }
}
