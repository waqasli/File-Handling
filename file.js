const fs = require("fs");

// Synchronous file write (commented out)
/*const fs=require("fs");
// Sync call ..
fs.writeFileSync('./file.txt',"hello world");
*/

// Asynchronous file write with an incorrect callback (commented out)
// fs.writeFileSync('./file.txt',"hello world", (err) => {});

// Synchronous file read (commented out)
/*const result= fs.readFileSync('./contacts.txt',"utf-8");
console.log(result);*/

// Asynchronous file read (commented out)
/*fs.readFile('./contacts.txt',"utf-8",(err,data)=>{
    if(err){
        console.log(err);
    }else{
        console.log(data);
    };
})*/

// Correct asynchronous file append
fs.appendFile('./file.txt', "hello world\n", (err) => {
    if (err) {
        console.error('Error appending to file:', err);
    } else {
        console.log('Data was appended to file!');
    }
});