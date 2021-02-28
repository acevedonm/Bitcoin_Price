var getDateTime = function () {
  const date = new Date();
  var hour = date.getHours();
  hour = (hour < 10 ? "0" : "") + hour;
  var min = date.getMinutes();
  min = (min < 10 ? "0" : "") + min;
  var sec = "00";
  var year = date.getFullYear();
  var mouth = date.getMonth() + 1;
  mouth = (mouth < 10 ? "0" : "") + mouth;
  var day = date.getDate();
  day = (day < 10 ? "0" : "") + day;

  return year + "-" + mouth + "-" + day + "_" + hour + ":" + min + ":" + sec;
};

module.exports = getDateTime;
