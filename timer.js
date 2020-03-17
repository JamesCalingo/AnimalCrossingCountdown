const announcement = moment("20180918", "YYYYMMDD").fromNow();
const release = moment("20200320", "YYYYMMDD").fromNow();
$(".main").html(`Animal Crossing: New Horizons was announced over ${announcement} and comes out ${release}!`)