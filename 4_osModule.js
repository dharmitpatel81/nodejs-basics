import os from 'os';

console.log(os.type());
console.log(os.version());
console.log(os.freemem());
console.log(os.totalmem());
console.log(os.hostname());
console.log(os.homedir()); // user's home directory
console.log(os.release());
console.log(os.platform());
console.log(os.uptime());

// Code from geek for geek
var ut_sec = os.uptime();
var ut_min = ut_sec / 60;
var ut_hour = ut_min / 60;

ut_sec = Math.floor(ut_sec);
ut_min = Math.floor(ut_min);
ut_hour = Math.floor(ut_hour);

ut_hour = ut_hour % 60;
ut_min = ut_min % 60;
ut_sec = ut_sec % 60;

console.log("Up time: "
    + ut_hour + " Hour(s) "
    + ut_min + " minute(s) and "
    + ut_sec + " second(s)");