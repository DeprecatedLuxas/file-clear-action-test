const core = require("@actions/core");
const github = require("@actions/github");
const fs = require("fs");

try {
  const nameToGreet = core.getInput("who-to-greet");
  console.log(`Hello ${nameToGreet}!`);
  const time = new Date().toTimeString();
  core.setOutput("time", time);

  fs.writeFileSync("/test.json", JSON.stringify({ time}));
} catch (error) {
  core.setFailed(error.message);
}
