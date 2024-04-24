function() {
  var score = 0;
  // setting up an initial value in a variable as 0
 
  if (navigator.webdriver) {
    score += 20;
  }
  // checks the presence of a WebDriver to automate web tests
  
  if (navigator.hardwareConcurrency <= 1) {
    score += 15;
  }
  // indicates that it checks the number of CPU cores, which can be indicative of automation or server farm activity when smaller than 1 or equal to 0
  
  if (navigator.platform.indexOf('Linux') !== -1 ||
    navigator.platform.indexOf('Windows NT 5.1') !== -1 ||
    navigator.platform.indexOf('Win16') !== -1 ||
    navigator.platform.indexOf('Win32') !== -1 ||
    navigator.platform.indexOf('Mac68K') !== -1 ||
    navigator.platform.indexOf('MacPPC') !== -1 ||
    (navigator.platform.indexOf('Linux') !== -1 && (navigator.platform.indexOf('armv7l') !== -1 || navigator.platform.indexOf('aarch64') !== -1))) {
    score += 15;
  }
  // Checks for unusual platform and architecture combinations often associated with bots. The indexOf method is used to check if the navigator.platform string contains certain substrings. If a substring is found, it returns the position (index) of the first occurrence; otherwise, it returns -1.
  
  if (navigator.deviceMemory <= 1) {
    score += 15;
  }
  // Identifies low device memory, which can be a sign of lightweight or automated environments.
  
  if (window.screen.height - window.innerHeight === 0) {
    score += 15;
  }
  // Detects when the page height matches the viewport height, often seen in automated scraping. In some cases it defines if the browser could be headless because the browser UI is missing and you interact with the browser only from a code on another service 
  
  if (window.puppeteer || window.callPhantom || window._phantom || window.phantom || window.__nightmare || window._selenium || window.callSelenium || window._Selenium_IDE_Recorder ||document.__selenium_unwrapped || document.__webdriver_evaluate || document.__selenium_evaluate || document.__webdriver_script_function || document.__webdriver_script_func || document.__webdriver_script_fn || document.__fxdriver_evaluate || document.__driver_unwrapped || document.__webdriver_unwrapped || document.__webdriver_evaluate || document.__driver_evaluate || document.__selenium_unwrapped || document.__fxdriver_unwrapped) {
    score += 10;
  }
  
  // article to support Selenium detection in the network via document detection Keys and window detection keys https://syntaxfix.com/question/4447/can-a-website-detect-when-you-are-using-selenium-with-chromedriver
   
  if (navigator.userAgent !== navigator.appVersion) {
    score += 10;
  }
  // Check if the user agent has been overridden
 
  if (score >= 30) {
    return 'likely bot';
  } else {
    return 'likely human';
  }
}
