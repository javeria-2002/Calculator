let input = document.getElementById('inputBox');
//to take input
let buttons = document.querySelectorAll('button');
//to select all buttons

let string = ""; //to store the result in the string
let arr = Array.from(buttons);//to get all buttons in array
arr.forEach(button => {
    button.addEventListener('click', (e) => { //to get user response after it clicks on a button
        if (e.target.innerHTML == '=') { //to check if the button was clicked or if it is is an equal to btn?
            string = eval(string); //evaluate func is an inbuilt fuction that evaluates
            input.value = string; //store input value in string
        }

        else if (e.target.innerHTML == 'AC') {//agar all clear btn pr click kerain tou kia response hoga
            string = "";
            input.value = string;
        }
            
        else if (e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);  //to return substring
            input.value = string;
        }
            
        else {
            string += e.target.innerHTML;
            input.value = string;
        }
        
    })
})