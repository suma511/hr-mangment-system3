'use strict';
let allUsers = document.getElementById('employeeForm');
let cardsec = document.getElementById('cards') ;
let empArr =[] ;
checkLocalAndPush() ;
 let count =0;
const tax = 0.075;
function Employee(id, fullName, departMent, level, imageUrl) {
  this.id = id;
  this.fullName = fullName;
  this.departMent = departMent;
  this.level = level;
  this.imagePath = `./images/${this.name}.PNG`;
  this.salary = 0;
}

function generateid(num){
    let n = 1 ;
    let string = "" + num ;
    let pad ="0000";
    n= pad.substring(0,pad.length-string.length)+string;
    num++;
    return n;
}
function handelSubmit(event){
event.preventDefault();
let name=event.target.name.value;
let departMent=event.target.departMent.value;
let level=event.target.level.value;
console.log(` ${name}  ${level} ${departMent}`);
let userobj ={name :name ,departMent :departMent ,level :level };
empArr.push(userobj)
let jsonArr = toJson() ;
saveToLocalS(jsonArr);

}



function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

Employee.prototype.finalsalary = function () {
  let max, min;
  switch (this.level) {
    case ("senior"):
      max = 2000;
      min = 1500;
      this.salary = parseInt(randomNumber(min, max) - (randomNumber(min, max) * 0.075));
      break;
    case ("midsenior"):
      max = 1500;
      min = 1000;
      this.salary = parseInt(randomNumber(min, max) - (randomNumber(min, max) * 0.075));

      break;
    case ("junior"):
      max = 1000;
      min = 500;
      this.salary = parseInt(randomNumber(min, max) - (randomNumber(min, max) * 0.075));

      break;
  }
}

 function render (allUsersFromLocalS) {
cardsec.innerHTML = '' ;
  for (i=0 ; i<allUsers.length;i++){      
   let div = document.createElement('div');
   cardsec.appendChild(div) ;
   let h4 = document.createElement('h4')
   div.appendChild(h4)
   h4.textContent =employeeformFromLocalS[i].name ; 
   let p = document.createElement('p') ;
   div.appendChild(p) ;
   p.textContent =employeeformFromLocalS[i].departMent;
   let p2 = document.createElement('p2')
   div.appendChild(p2)
   h2.textContent =
   employeeformFromLocalS[i].level ; 


  }
}


const Ghazi = new Employee(1000, "Gazi Samer", "adminstration", "senior");

const Lana = new Employee(1001, "Lana Ali", "Finance", "senior");

const Tamara = new Employee(1002, "Tamara Ayoub", "marketing", "senior");

const Safi = new Employee(1003, "Safi Walid", "adminstration", "medsenior");

const Omar = new Employee(1004, "Omar Zaid", "development", "senior");

const Rana = new Employee(1005, "Rana Saleh", "development", "junior");

const Hadi = new Employee(1006, "Hadi Ahmad", "finance", "medsenior");


function checkLocalAndPush() {
  if (empArr.length == 0) {
    let arr = readFromLocalS();
    if(arr.length !=0 ) {
      emparr = arr ;
    }
  }


}

function toJson () {
  let JsonArray= JSON.stringify(empArr) ;
  return JsonArray ; }

function saveToLocalS(JsonArray){
  let arr = readFromLocalS() ;
  localStorage.setItem('allUsers',JsonArray)
}
  

function readFromLocalS() {
  let jsonArr = localStorage.getItem('allUsers') ;
  let arr = JSON.parse(JsonArray) ;
  if (arr != null) {
    return arr ;
  } 
  else{
    return[] ;
  }

  
  
}



render(readFromLocalS()) ;


employeesForm.addEventListener('submit',handelSubmit) ;