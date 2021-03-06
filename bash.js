const prompt = (data) => {
    console.log(data);
    process.stdout.write('> ');
  };
// process.stdout.write("prompt > ");  //see lin 1-4, and ln 7 & 8

const main = (data) => {
    // process.stdin.on("data", (data) => {     //this piece is now on ln 30
        const entry = data.toString().trim();
        const [cmd, arg] = entry.split(' ');
      
        if (cmd === "pwd") {
          require("./pwd");
        } else if(cmd === "ls") {
          require("./ls");
        } else if(cmd === "cat") {
              require("./cat")(arg, prompt);
        } else {
          process.stdout.write("You typed: " + cmd);
        }
      
        process.stdout.write("\nprompt > ");
    //   });
}

prompt('Welcome to Node Shell!');
process.stdin.on('data', main);