const currentTime = moment()
const announcement = moment("20180918", "YYYYMMDD")
const announcementTime = currentTime.diff(announcement, "months")
const release = moment("20200320", "YYYYMMDD").diff(currentTime, "days") * -1;
const mins = moment("20200320", "YYYYMMDD").diff(currentTime, "minutes") * -1;
$(".main").html(`<h1>Animal Crossing has consumed my life for about ${release} days now</h1><br>
<p>(That's ${mins} minutes BTW since March 20, 2020 at Midnight Eastern)`);