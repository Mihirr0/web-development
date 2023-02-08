const fs=require("fs")
let text=fs.readFileSync("dele.txt","utf-8");
text=text.replace("moduless","nde.js");
 console.log(text);
 console.log("creating a new file...")
 fs.writeFileSync("mihir.txt",text)