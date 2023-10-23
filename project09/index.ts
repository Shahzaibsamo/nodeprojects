class CountdownTimer {
    targetDate: Date;

    constructor(targetDate: Date) {
        this.targetDate = targetDate;
    }

    startCountdown() {
        const timer = setInterval(() => {
            const now = new Date().getTime();
            const distance = this.targetDate.getTime() - now;

            if (distance < 0) {
                clearInterval(timer);
                console.log("Countdown finished!");
            } else {
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                console.log(`${days}d ${hours}h ${minutes}m ${seconds}s`);
            }
        }, 1000);
    }
}

// Set the target date for the countdown
const targetDate = new Date("2023-12-31T23:59:59");
const countdownTimer = new CountdownTimer(targetDate);

// Start the countdown
countdownTimer.startCountdown();
