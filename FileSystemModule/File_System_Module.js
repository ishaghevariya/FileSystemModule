const readline = require("readline");
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

const fs = require('fs');

var filename = "";
var directory = "";
var content = "";


var createDirectoryWizard = () =>{
   rl.question("Please Enter Directory Name:",(ans) =>{
      directory = ans;
      fs.mkdir(ans,(err) => {
          if(err){
              console.log(err);
          }else{
              console.log("Create Directory:"+directory);
            }
            repeat();
      });
   });
};

var removeDirectoryWizard = () =>{
  rl.question("Enter directory name which you want to delete:",(ans) => {
    directory = ans;
    fs.rmdir(ans,(err) =>{
      if(err){
          console.log(err);
      }else{
          console.log("Delete Directory:"+directory);
      }
      repeat();
    });
  });
};

var createFileWizard = () =>{
    rl.question("Enter File name:",(ans) =>{
     filename = ans + ".txt";
      rl.question("Enter File Content:",(ans) => {
          content =ans;
         fs.writeFile(filename,content,(err) =>{
            if(err){
                console.log(err);
            }else{
                console.log("File Created SuccessFully..!")
            }
            repeat();
         });       
     });
    });
};
var readFileWizard = () =>{
    rl.question("Enter File Name Which You Want to read:",(ans) => {
     filename = ans + ".txt";
     fs.readFile(filename , 'utf8',(err,result) =>{
       if(err){
           console.log(err);
       }else{
           console.log( result );
       }
       repeat();
     });
    });
};
var deleteFileWizard = () =>{
    rl.question("Enter File Name Which You want to Delete:",(ans) => {
       filename = ans + ".txt";
       fs.unlink(filename,(err) => {
           if(err){
               console.log(err);
           }else{
               console.log("Deleted File:"+ filename);
           }
           repeat();
       });
    });
};
var appendFileWizard = () =>{
    rl.question("Enter File name Which you want to appdend:",(ans) =>{
      filename = ans + ".txt";
      rl.question("Enter content:",(ans) => {
       content = ans;
       fs.appendFile(filename,content,(err) => {
          if(err){
              console.log(err);
          }else{
              console.log("Append File Content:" + filename);
          }
          repeat();
       });
      });
    });
};
var updateFileWizard = () =>{
    rl.question("Enter File Name Which You want to update all file:",(ans) =>{
     filename = ans + ".txt";
     rl.question("Enter content:",(ans) =>{
         content = ans;
         fs.writeFile(filename,content,(err)=>{
           if(err){
               console.log(err);
           }else{
               console.log("Update file Data:"+ filename);
           }
           repeat();
         });
     });
    });
};
var renameFileWizard = () =>{
    rl.question("Enter File name Which you want to rename:",(ans) => {
       filename = ans + ".txt";
       rl.question("Enter New Name Of File:",(ans) => {
        var nfilename = ans+".txt";
        fs.rename(filename,nfilename,(err) => {
          if(err){
              console.log(err);
          }else{
              console.log("New file name Is:" + nfilename);
          }
          repeat();
        });
       });
    });
};

console.log("Welcome to Isha's File System..!");

var instruction = () =>{
    console.log("\n Enter 1 to create Directory");
    console.log("Enter 2 to Remove Directory");
    console.log("Enter 3 to create File and Write");
    console.log("Enter 4 to read File");
    console.log("Enter 5 to Delete File");
    console.log("Enter 6 to Append Data To File");
    console.log("Enter 7 to update File with New Data");
    console.log("Enter 8 to Rename File");
    console.log("Enter 0 to Exit");
};

var start =() =>{
    rl.question("Enter Your Choise:",(ans) => {
         if(ans == '1'){
             createDirectoryWizard();
         }else if(ans == '2'){
             removeDirectoryWizard();
         }else if(ans == '3'){
             createFileWizard();
         }else if(ans == '4'){
             readFileWizard();
         }else if(ans == '5'){
             deleteFileWizard();
         }else if(ans == '6'){
             appendFileWizard();
         }else if(ans == '7'){
             updateFileWizard();
         }else if(ans == "8"){
             renameFileWizard();
         }else if(ans == "0"){
             rl.close();
         }else{
             console.log("Invalid Choice Please Try Again");
             start();
         }
    });
};

var repeat = () =>{
    instruction();
    start();
};

console.log("Welcome to Isha's File System..!");
repeat();