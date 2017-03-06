var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];
var robert = ["Robert", "26835", "66000", 1];
var mayella = ["Mayella", "89068", "35000", 2];

var employees = [atticus, jem, boo, scout, robert, mayella];

function convertEmployees(array) {
  for (var i = 0; i < array.length; i++) {
    var newEmployeeArray = new Object(array[i]);
  }
}

function newEmployee(employeeArray){
  //constructor for new employee array
  this.name = employeeArray[0];
  this.
  //Figures out employee bonus percentage
  var employeeBonus = 0;
  function bonusPercent(rating){
    if(newEmployeeArray[4]==5){
      employeeBonus += '.10';
    } else if (newEmployeeArray[4]==3) {
      employeeBonus += '.04';
    } else if (newEmployeeArray[4]==4) {
      employeeBonus += '.06';
    } else {
      employeeBonus += 0;
    }

    if(newEmployeeArray[1].length==4){
      employeeBonus += '.05';
    }

    if(newEmployeeArray[2]>65000)
    {
      employeeBonus -= '.01';
    }

    if(employeeBonus > '.13')
    {
      employeeBonus = '.13';
    }
    else if (employeeBonus < 0) {
      employeeBonus = 0;
    }

    return employeeBonus;
  }

//figures out the total bonus
  function totalBonus(){
    var totalBonus = parsInt(employeeBonus*newEmployeeArray[2]);
    return totalBonus;
  }

//figures out annual compensation
  function totalComp(){
    var total = (totalBonus+newEmployeeArray[2]);
  }
}
