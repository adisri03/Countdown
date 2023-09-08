var timer = null;
var end;
var toZero;
var btn = document.getElementById("btn");
var xDay = document.getElementById("day");
var xHour = document.getElementById("hour");
var xMinute = document.getElementById("minute");
var xSecond = document.getElementById("second");
var endtime = document.getElementById("endtime");
var startBtn = document.getElementById("start-count");
toZero = xDay.innerHTML = xHour.innerHTML = xMinute.innerHTML = xSecond.innerHTML = "00";
startBtn.onclick = function () {
    end = endtime.value;
    if (!end) {
        alert("Please enter the date first！")
        return false;
    };
    countDown();
    timer = setInterval(countDown, 1000);
}

function countDown() {
    var timedate = new Date(Date.parse(end.replace(/-/g, "/")));
    var now = new Date();
    var date = (timedate.getTime() - now.getTime()) / 1000;
    var day = Math.floor(date / (60 * 60 * 24));
    var _hour = date - day * 60 * 60 * 24;
    var hour = Math.floor(_hour / (60 * 60));
    var _minute = _hour - hour * 60 * 60;
    var minute = Math.floor(_minute / (60));
    var _second = _minute - minute * 60;
    var second = Math.floor(_second);

    function toDou(n) {
        if (n < 10) {
            return '0' + n;
        } else {
            return '' + n;
        }
    }
    if (date > 0) {
        xDay.innerHTML = toDou(day);
        xHour.innerHTML = toDou(hour);
        xMinute.innerHTML = toDou(minute);
        xSecond.innerHTML = toDou(second);
    } else {
        btn.className = "";
        btn.className = "btn";
        btn.onclick = function () {
            alert("Try Again Please!")
        }
        endtime.value = "";
        clearInterval(timer);
        toZero;
    }
}
