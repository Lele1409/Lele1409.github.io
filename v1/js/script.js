document.addEventListener('DOMContentLoaded', function() {

    if (document.body.classList.contains('index')) {
        document.addEventListener("mouseout", function (event) {
            if (event.toElement == null && event.relatedTarget == null) {
                alert("Don't leave! You're missing out on... well that is TBD...\nDon't you find this pop-up annoying too?");
            }
        });
    }

    if (document.body.classList.contains('page5')) {
        // Select span elements to write to:
        const redirectCountdown = document.getElementById('redirect-countdown');
        const redirectURL = document.getElementById('redirect-url');

        // Set url and write to DOM as redirect-url
        const randomNumber = Math.floor(Math.random() * 10) + 1
        const url = './pdf/' + randomNumber + '.pdf';
        redirectURL.innerText = url;

        // Create countdown starting value and write to redirect-countdown
        let countdown = 15;
        redirectCountdown.innerText = countdown.toString();

        // Each second, subtract 1 from countdown and update redirect-countdown value
        setInterval(function () {
            countdown--
            redirectCountdown.innerText = countdown.toString();
        }, 1000)

        // After countdown time is up, make the redirect
        setTimeout(function () {
            window.location.replace(url);
        }, countdown * 1000)
    }

})