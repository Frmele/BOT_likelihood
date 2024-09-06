function() {
    var score = 0;

    // Adjusted scoring based on importance
    if (navigator.webdriver) { score += 25; }
    // WebDriver presence is a strong indicator of bot activity

    if (navigator.hardwareConcurrency <= 1) { score += 15; }
    // Low CPU cores can indicate automation

    if (navigator.platform.match(/Linux|Windows NT 5.1|Win16|Win32|Mac68K|MacPPC|armv7l|aarch64/)) { score += 10; }
    // Unusual platform and architecture combinations

    if (navigator.deviceMemory <= 1) { score += 10; }
    // Low device memory can indicate a lightweight or automated environment

    if (window.screen.height - window.innerHeight === 0) { score += 10; }
    // Page height matches viewport height, often seen in automated scraping

    if (window.puppeteer || window.callPhantom || window._phantom || window.phantom || window.__nightmare || window._selenium || window.callSelenium || window._Selenium_IDE_Recorder || document.__selenium_unwrapped || document.__webdriver_evaluate || document.__selenium_evaluate || document.__webdriver_script_function || document.__webdriver_script_func || document.__webdriver_script_fn || document.__fxdriver_evaluate || document.__driver_unwrapped || document.__webdriver_unwrapped || document.__webdriver_evaluate || document.__driver_evaluate || document.__selenium_unwrapped || document.__fxdriver_unwrapped) { score += 10; }
    // Detects known automation frameworks

    if (navigator.userAgent !== navigator.appVersion) { score += 10; }
    // User agent has been overridden

    // New checks with adjusted scoring
    if (!navigator.plugins.length) { score += 5; }
    // Headless browsers often have no plugins

    if (window.outerWidth === window.innerWidth) { score += 5; }
    // Headless browsers often have no window chrome

    // Behavioral checks (simplified example)
    document.addEventListener('mousemove', function() { score -= 5; }, { once: true });
    document.addEventListener('keydown', function() { score -= 5; }, { once: true });

    if (score >= 50) {
        return 'likely bot - ' + score;
    } else {
        return 'likely human - ' + score;
    }
}
