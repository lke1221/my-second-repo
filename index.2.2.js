const fs = require('fs');
const util = require('util')
const path = require('path');

const readDirectory = function(dir) {
    fs.readdir(dir, (err,filelist)=>{
        if(err) console.error(err);
        else{
            filelist.forEach(file => {
                const absolute = path.join(dir, file);
                fs.stat(absolute, (err, stats)=>{
                    if(err) console.error(err);
                    else{
                        if(stats.isDirectory()) readDirectory(absolute);
                        else console.log(absolute);
                    }
                });
            });
        }
    });
}


readDirectory("./test");