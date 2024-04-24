# Bot Detection Template

This template provides a JavaScript function for detecting bots within web applications. It utilizes various browser properties and behaviors commonly associated with automated scripts or bots.

## Functionality

The bot detection script evaluates several criteria to determine the likelihood of a visitor being a bot or a human. Here's an overview of the detection criteria:

- **WebDriver Detection**: Checks for the presence of WebDriver, commonly used for automated web testing.
- **Hardware Concurrency**: Examines the number of CPU cores, which can indicate automation or server farm activity when minimal.
- **Platform and Architecture**: Detects unusual platform and architecture combinations often associated with bots.
- **Device Memory**: Identifies low device memory, characteristic of lightweight or automated environments.
- **Viewport Height**: Detects when the page height matches the viewport height, often seen in automated scraping.
- **Browser Objects Detection**: Checks for the presence of known browser automation objects such as Puppeteer, PhantomJS, and Selenium.

Based on the accumulated score from these criteria, the script determines whether the visitor is likely a bot or a human.

## Usage

To use this bot detection script:

1. Copy the provided JavaScript function into your project.
2. Integrate the function into your web application, preferably within your analytics or tracking code.
3. Call the function when needed to determine the nature of the visitor.

```javascript
function botDetection() {
  // Insert the bot detection script here
}
