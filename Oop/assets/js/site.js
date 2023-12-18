


class testObject{
   constructor(msg){
      
      // console.log("hello from object"+msg);


      this.massege=msg
      console.log(this.massege);

   }
}

const myObject =new testObject("object1");
const myObject2 =new testObject("object2");

myObject2.massege="ny massage ";
myObject.massege="juletræ ";


console.log(myObject2.massege);
console.log(myObject.massege);


