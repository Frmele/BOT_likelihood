{
  "template": {
    "name": "Bot Detection Scorer",
    "description": "A template to determine if a user is a bot based on behavior and system properties.",
    "author": "Francesca Mele",
    "templateType": "Variable",
    "permissions": {
      "access_globals": {
        "window": [
          "navigator"
        ]
      }
    },
    "code": {
      "script": "function() {\n    var score = 0;\n\n    if (navigator.webdriver) { score += 25; }\n    if (navigator.hardwareConcurrency <= 1) { score += 15; }\n    if (navigator.platform.match(/Linux|Windows NT 5.1|Win16|Win32|Mac68K|MacPPC|armv7l|aarch64/)) { score += 10; }\n    if (navigator.deviceMemory <= 1) { score += 10; }\n    if (navigator.userAgent !== navigator.appVersion) { score += 10; }\n    if (!navigator.plugins.length) { score += 5; }\n    if (window.outerWidth === window.innerWidth) { score += 5; }\n\n    if (score >= 35) {\n        return 'likely bot - ' + score;\n    } else {\n        return 'likely human - ' + score;\n    }\n}"
    }
  }
}
