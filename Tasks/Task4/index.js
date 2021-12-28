// let d = new Date();
// console.log(d);
// console.log(d.getTime())
// let hr = d.getHours();
// let min = d.getMinutes();
// let sec = d.getSeconds();

// let $hour = document.getElementById('hour');
// let $minute = document.getElementById('minute');
// let $seconds = document.getElementById('seconds');

// // console.log($hour);
// $hour.innerHTML = hr;
// $minute.innerHTML = min;
// $seconds.innerHTML = sec;


setInterval(() => {
let $time = document.querySelector('.time');
let $date = new Date();
let $hours = $date.getHours();
let $minutes = $date.getMinutes();
let $seconds = $date.getSeconds();
let day_night = "AM";

if($hours > 12) {
  day_night = "PM";
  $hours =  $hours - 12;
}
if($hours < 10) {
  $hours = "0" + $hours;
}
if($minutes < 10) {
  $minutes = "0" + $minutes;
}
if($seconds < 10) {
  $seconds = "0" + $seconds;
}
$time.textContent = $hours + ":" + $minutes + ":" + $seconds + " " + day_night;
})