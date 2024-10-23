___TERMS_OF_SERVICE___

By creating or modifying this file you agree to Google Tag Manager's Community
Template Gallery Developer Terms of Service available at
https://developers.google.com/tag-manager/gallery-tos (or such other URL as
Google may provide), as modified from time to time.


___INFO___

{
  "template": {
    "name": "Bot Detection Scorer",
    "description": "A template to determine if a user is a bot based on behavior and system properties.",
    "author": "Your Name",
    "templateType": "Variable",
    "permissions": {
      "access_globals": {
        "key": "access_globals",
        "access_globals": {
          "window": [
            "navigator",
            "screen",
            "outerWidth",
            "innerWidth"
          ],
          "document": [
            "addEventListener"
          ]
        }
      }
    },
    "code": {
      "script": "function() {\n    var score = 0;\n\n    // Adjusted scoring based on importance\n    if (navigator.webdriver) { score += 25; }\n    // WebDriver presence is a strong indicator of bot activity\n\n    if (navigator.hardwareConcurrency <= 1) { score += 15; }\n    // Low CPU cores can indicate automation\n\n    if (navigator.platform.match(/Linux|Windows NT 5.1|Win16|Win32|Mac68K|MacPPC|armv7l|aarch64/)) { score += 10; }\n    // Unusual platform and architecture combinations\n\n    if (navigator.deviceMemory <= 1) { score += 10; }\n    // Low device memory can indicate a lightweight or automated environment\n\n    if (window.screen.height - window.innerHeight === 0) { score += 10; }\n    // Page height matches viewport height, often seen in automated scraping\n\n    if (window.puppeteer || window.callPhantom || window._phantom || window.phantom || window.__nightmare || window._selenium || window.callSelenium || window._Selenium_IDE_Recorder || document.__selenium_unwrapped || document.__webdriver_evaluate || document.__selenium_evaluate || document.__webdriver_script_function || document.__webdriver_script_func || document.__webdriver_script_fn || document.__fxdriver_evaluate || document.__driver_unwrapped || document.__webdriver_unwrapped || document.__webdriver_evaluate || document.__driver_evaluate || document.__selenium_unwrapped || document.__fxdriver_unwrapped) { score += 10; }\n    // Detects known automation frameworks\n\n    if (navigator.userAgent !== navigator.appVersion) { score += 10; }\n    // User agent has been overridden\n\n    // New checks with adjusted scoring\n    if (!navigator.plugins.length) { score += 5; }\n    // Headless browsers often have no plugins\n\n    if (window.outerWidth === window.innerWidth) { score += 5; }\n    // Headless browsers often have no window chrome\n\n    // Behavioral checks (simplified example)\n    document.addEventListener('mousemove', function() { score -= 5; }, { once: true });\n    document.addEventListener('keydown', function() { score -= 5; }, { once: true });\n\n    if (score >= 35) {\n        return 'likely bot - ' + score;\n    } else {\n        return 'likely human - ' + score;\n    }\n}"
    }
  }
}
