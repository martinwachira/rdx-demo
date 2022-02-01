/**
 * Singleton design patter
 */

class FancyLog {
  constructor() {
    if (FancyLog.instance === null) {
      FancyLog.instance = this;
      this.logs = [];
    }
    return FancyLog.instance;
  }

  log(message) {
    this.logs.push(message);
    console.log(`Fancy, ${message}`);
  }

  printLog() {
    console.log(`${this.logs.length}, Logs`);
  }
}

const logger = new FancyLog();
Object.freeze(logger);
export default logger;
