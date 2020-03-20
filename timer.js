const currentTime = moment()
const announcement = moment("20180918", "YYYYMMDD")
const announcementTime = currentTime.diff(announcement, "months")
const release = moment("20200320", "YYYYMMDD").diff(currentTime, "minutes");
const seconds = moment("20200320", "YYYYMMDD").diff(currentTime, "seconds");
$(".main").html(`<h2>Dawn of</h2>
<h1>The Final Day</h1>
<p>(Until Animal Crossing: New Horizons)</p>
<h3>-${release} minutes Remain-</h3>
(that's ${seconds} seconds)`);