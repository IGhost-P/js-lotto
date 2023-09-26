const readline = require("readline");

class IOHandler {
  constructor() {
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
  }

  getInput(question) {
    return new Promise((resolve) => {
      this.rl.question(question, (answer) => {
        resolve(answer);
      });
    });
  }

  displayOutput(output) {
    console.log(output);
  }

  close() {
    this.rl.close();
  }
}

export default IOHandler;
