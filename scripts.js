// task1
let person1={
  name: "ანა",
  age: 28
}
let person2={
    name: "ლევანი",
    age: 21
}
if(person1.age>person2.age){
    let diff = person1.age - person2.age;
    console.log(`${person1.name} ლევანზე ${diff} წლით უფროსია`)
}




// task2
const students = ['John','Sam','Ann','Will','Andrew','Joseph','Lorelai','Amelie','Den',];
let length = students.length;
let middle = (length-1)/2;
console.log(students[middle]);


// task 3
let student ={
    firstName: 'john',
    lastName: 'smith',
    age: 19,
    subjects: ['math','sport','biology','physics','psychology'],
    roommate: {
        firstName:'Joseph',
        lastName:'Stalin',
    }
}
let subject =student.subjects;
for(i=0; i<student.subjects.length; i++){
    console.log(subject[i]);
}
let fullName = student.firstName  + ' ' +  student.lastName;
console.log(fullName);
let roommateFullName = student.roommate.firstName  + ' ' +  student.roommate.lastName;


let result = `${fullName} არის ${student.age} წლის და მისი რუმმეითი არის : ${roommateFullName}`
console.log(result)

// task4

const randomArray = ["Banana", "Orange", "Apple", "Mango",2,12];
i = 0;
while(typeof randomArray[i]==="string"){
    console.log(randomArray[i]);
    i++; 
}



 const numberArray = [12,23,43,11,9,2,121,90];
 for(i=0; i<numberArray.length; i++){
 if(numberArray[i]>31 && numberArray[i]%2==0){
      console.log(numberArray[i] + "Element is greater than provided value and is EVEN")
   }else if(numberArray[i]<31 && numberArray[i]%2!=0){
         console.log(numberArray[i] + "Element is less than provided value and is ODD")
   }
}
// part 2
// task1
let sampleObject = {
   isItarable : false,
   sampleArray : [12,63,21,34,98,57]
}

function checkSampleObject(argumentObject){
   if(argumentObject.isItarable){
      for(let i=0; i<argumentObject.sampleArray.length; i++){
         
         console.log(argumentObject.sampleArray[i]);
      }
   }else{
      console.log("provided array isn't itarable")
   }
}
checkSampleObject(sampleObject);
// task 2
function checkPythagoras(x,y,z){
   if((x**2 + y**2) == z**2){
      console.log('true')
   }else if((x**2 + z**2) == y**2){
      console.log('true')
   }else if((y**2 + z**2) == x**2){
      console.log('true')
   }else{
      console.log("false")
   }
    
}
checkPythagoras(4,5,3);
// task 3
let numbersArray =[14,25,6,75,11,2];

function minMax(randomArray){
   let min = randomArray[0];
   let max = randomArray[0];
   
   
   for(let i=0; i<randomArray.length; i++){
      
      if(randomArray[i] < min){
         min = randomArray[i];
      }
      if(randomArray[i] > max){
         max = randomArray[i];
      }    
   }
   console.log("min value is:" + min + " and max value is:" + max);
};
minMax(numbersArray);
// task 4
function checkDeg(deg){
   if(deg>0 && deg<90){
      return "Acute angle";
   }else if(deg==90){
      return "Right angle";
   }else if(deg>90 && deg<180){
      return "Obtuse angle";
   }else if(deg==180){
      return "Straight angle";
   }

}
console.log(checkDeg(90));
// task 5
 let studentInfo = [
   {name: "student1", grade : 21},
   {name: "student2", grade : 71},
   {name: "student3", grade : 45} 
];
 function gradeCalculator(studentInfo){
   for(let i=0; i<studentInfo.length; i++){
      if(studentInfo[i].grade<50){
         console.log(studentInfo[i].name + " finalscore F");
      } else if(studentInfo[i].grade>50 && studentInfo[i].grade<=60){
         console.log(studentInfo[i].name + " finalscore E");
      }else if(studentInfo[i].grade>=61 && studentInfo[i].grade<=70){
         console.log(studentInfo[i].name + " finalscore D");
      }else if(studentInfo[i].grade>=71 && studentInfo[i].grade<=80){
         console.log(studentInfo[i].name + " finalscore C");
      }else if(studentInfo[i].grade>=81 && studentInfo[i].grade<=90){
         console.log(studentInfo[i].name + " finalscore B");
      }else {
         console.log(studentInfo[i].name + " finalscore A" );
      }
   }
 }
 gradeCalculator(studentInfo);