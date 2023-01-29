document.addEventListener('DOMContentLoaded', function() {

    // Index Page Mouseout Event -> annoying popup
    if (document.body.classList.contains('index')) {
        document.addEventListener("mouseout", function (event) {
            if (event.toElement == null && event.relatedTarget == null) {
                alert("Don't leave! You're missing out on... well that is TBD...\nDon't you find this pop-up annoying too?");
            }
        });
    }

    // Page 5 redirect and Countdown code
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

    //
    // TEMPLATES:
    //
    // header
    //
    const templateHeader = document.createElement('div');

    templateHeader.innerHTML = `
        <header>
            <h1 style="display: inline-block;"><a href="index.html">Projet NSI - Site Web</a></h1>
            <nav>
                <ul>
                    <li><a href="page2.html">About</a></li>
                    <li><a href="index.html">Projects</a></li>
                </ul>
            </nav>
        </header>
    `;

    document.getElementById('templateHeader').appendChild(templateHeader);

    //
    //footer
    //
    const templateFooter = document.createElement('div');

    templateFooter.innerHTML = `
        <footer>
            <div class="footer-leftSection">
                <a href="index.html">Home</a>
                <a href="page2.html">About</a>
                <a href="index.html">Projects</a>
            </div>
            <div class="footer-rightSection">
                <a href="https://creativecommons.org/licenses/by-nc-nd/4.0/">
                    <img alt="Creative Commons License" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png"/>
                </a>
            </div>
        </footer>
    `;

    document.getElementById('templateFooter').appendChild(templateFooter);
})