let number = document.querySelector("input#txtnum");
let sel = document.querySelector("select#sel");
let res = document.querySelector("p#res");
let list = [];




function add() {
    let n = +number.value;
    list.sort();     

    if (n < 1 || n > 100 || list.includes(n)) {
        alert("Invalid Value or already added to the list");
    } else {
        list.push(n);        
        let item = document.createElement("option");
        item.text = `Number ${n} added`; 
        sel.appendChild(item);
        res.innerHTML = ""
               
    }
    number.value = "";
    number.focus();
    
  }



function analyze() {
       
    let total = list.length;
    let max = list[list.length - 1];
    let min = list[0];
    let sum = 0;
    for (let i = 0; i < list.length; i++) {
        sum += list[i];
    }
    let avg = sum / total;

    res.innerHTML = "";
    res.innerHTML += `In total, we have ${total} numbers added <br><br>`;
    res.innerHTML += `The highest number is ${min} <br><br>`;
    res.innerHTML += `The lowest number is ${max} <br><br>`;
    res.innerHTML += `The sum of all values ${sum} <br><br>`;
    res.innerHTML += `The average is ${avg} <br><br>`;
    
      }
    
    

     console.log(list);


  

