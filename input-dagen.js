const names = [];

let i = 0;

minimaalDrie() 

function minimaalDrie() {
  let getal = prompt("Hoeveel namen wil je in het lijstje stoppen? (Minimaal 3)");
  if (getal < 3) {
    window.alert("Minimaal 3!!!");
    minimaalDrie()
  } else {
    while (i < getal) {
      myFunction()
      i++;
    }
  }
}

function myFunction() {
    let person = prompt("Please enter your name");
    if (person != null) {
      names.push(person);
      document.getElementById("names2").innerHTML = names;
    }
}

document.getElementById("namesReverse").innerHTML = names.reverse();
