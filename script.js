 //pin Match section-initially
 var pinDidNotMatch=document.getElementById("pinDidNotMatch")
 pinDidNotMatch.style.display="none";
 var pinMatch=document.getElementById("pinMatch");
 pinMatch.style.display="none"
// pin generate section 
var generatePin=document.getElementById("generatePin")
generatePin.addEventListener("click",function(){
 var  random= Math.floor(1000 + Math.random() * 9000);
 document.getElementById("inputText").value=random;   
})
// button  section
var Button=document.getElementsByClassName("button");
for (let i = 0; i < Button.length; i++) {
   Button[i].addEventListener("click",function(){
  var output=getOutput();
  if(this.id!="clear"&& this.id!="back")
{ 
     output=output+this.id;
    printOutput(output);
  }
  else if(this.id=="clear"){
      printOutput("");
  }
  else if(this.id=="back"){
      output=output.substr(0,output.length-1);
          printOutput(output);
     }
   
   })    
}

//  submit section
let submit=document.getElementById("submit")
submit.addEventListener("click",function(){
 var random=document.getElementById("inputText").value;
 var number= document.getElementById("outputValue").value;
 if(random==number){
  
  var pinMatch=document.getElementById("pinMatch");
  var pinDidNotMatch=document.getElementById("pinDidNotMatch");
  pinMatch.style.display="block";
  pinDidNotMatch.style.display="none"

 }
 else {
  var pinMatch=document.getElementById("pinMatch");
  var pinDidNotMatch=document.getElementById("pinDidNotMatch")
  pinDidNotMatch.style.display="block";
  pinMatch.style.display="none"
  let check=document.getElementById("checkTry").innerHTML;
  check=check-1;
  document.getElementById("checkTry").innerHTML=check;
 if (check==0){
  document.getElementById("try").innerHTML="terminated"
 }

 }

}) 

// function
function getOutput(){
  return document.getElementById("outputValue").value;
}
function printOutput(num){
return  document.getElementById("outputValue").value=num;     
}
