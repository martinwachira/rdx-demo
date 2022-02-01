import logger from "./primary-test.js";

const Second = () => {
  logger.printLog();
  logger.log("Second log");
  logger.printLog();
};

export default Second;
