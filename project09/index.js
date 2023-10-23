var CountdownTimer = /** @class */ (function () {
    function CountdownTimer(targetDate) {
        this.targetDate = targetDate;
    }
    CountdownTimer.prototype.startCountdown = function () {
        var _this = this;
        var timer = setInterval(function () {
            var now = new Date().getTime();
            var distance = _this.targetDate.getTime() - now;
            if (distance < 0) {
                clearInterval(timer);
                console.log("Countdown finished!");
            }
            else {
                var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                console.log("".concat(days, "d ").concat(hours, "h ").concat(minutes, "m ").concat(seconds, "s"));
            }
        }, 1000);
    };
    return CountdownTimer;
}());
// Set the target date for the countdown
var targetDate = new Date("2023-12-31T23:59:59");
var countdownTimer = new CountdownTimer(targetDate);
// Start the countdown
countdownTimer.startCountdown();
