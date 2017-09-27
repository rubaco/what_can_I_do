function Person(dob) {
    this.dob = new Date(dob);
  }
  
  Person.prototype.age = function() {
    var ageDiff = new Date(Date.now() - this.dob);
    return Math.abs(ageDiff.getUTCFullYear() - 1970);
  };
  
 

 /// class Person{

   // dob;
   // constructor(dob){

   // }
   // age(){
    //    var ageDiff = new Date(Date.now() = this.dob);
     //   retrun Math.abs(ageDiff.getUTCFullYear() - 1970);
   // }
 // }

 Person.prototype.whatCanIDo = function() {
    var what = [];
  
    var age = this.age();
  
    if (age >= 18) {
      what.push('vote');
    }

    if (age >= 21) {
        what.push('alcohol');
      }

    if (age >= 25) {
    what.push('representative');
    }

    if (age >= 30) {
        what.push('senator');
        }

    if (age >= 35) {
        what.push('president');
        }
  
    return what;
  };

  module.exports = Person;