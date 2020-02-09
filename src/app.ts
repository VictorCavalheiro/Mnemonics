const path = require('path');
const spawn = require("child_process").spawnSync;
const fs = require('fs');


const directoryPath = "/home/bisteka/Pictures/";

const files = fs.readdirSync(directoryPath);

while(true){
    
    files.forEach((element: string) => {
        let value = directoryPath+element;

        const pythonProcess = spawn('python3',["/home/bisteka/mnemonics/Mnemonics/main.py",value]);
    });      
    
}
