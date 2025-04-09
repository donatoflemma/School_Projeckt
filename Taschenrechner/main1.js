let numero_a = "" ;
let boolean_a = false;
let numero_b = "" ;
let boolean_b = false;
let operatore = "";
let boolean_operatore = false;
let memory_n = 0;
let result = 0;

let list_a = [];
let list_b = [];

function memory(n){
    switch(n){
        case "MC":
            document.getElementById("result_id").innerHTML = "number stored was deleted";
            memory_n  = 0;
            break;
        case "MR":
            document.getElementById("result_id").innerHTML = memory_n;
            break;
        case "M+":
            memory_n = parseFloat(memory_n) + parseFloat(numero_a);
            document.getElementById("result_id").innerHTML = "number stored: " + memory_n;
            list_a = [];
            boolean_a = false;
            break;
        case "M-":
            memory_n = parseFloat(memory_n) - parseFloat(numero_a);
            document.getElementById("result_id").innerHTML = "number stored: " + memory_n;
            list_a = [];
            boolean_a = false;
            break;
        case "MS":
            if (!boolean_a && numero_a != 0){
                memory_n = parseFloat(numero_a);
                list_a = [];
                boolean_a = false;
                document.getElementById("result_id").innerHTML = "number stored";
                
            }
            else{
                memory_n = result;
                document.getElementById("result_id").innerHTML = "result stored";
                
            }
            break;
    }
   

}

function number(n){
    if (!boolean_operatore){
        list_a.push(document.getElementById(n).innerHTML);
        boolean_a = true; 
        numero_a = list_a.join("");
        document.getElementById("result_id").innerHTML = numero_a;
        console.log("a: " + numero_a + "  op:"+ operatore +  " b: " + numero_b);
        //console.log(list_a);
    }
    else if (boolean_a && boolean_operatore){
        list_b.push(document.getElementById(n).innerHTML);
        numero_b = list_b.join("");
        document.getElementById("result_id").innerHTML = numero_b;
        boolean_b = true;
        console.log("a: " + numero_a + "  op:"+ operatore +  " b: " + numero_b);
        //console.log(list_b);
    }
}

function operator(o){
    if (boolean_a && !boolean_operatore)
       boolean_operatore = true;
        
        operatore = document.getElementById(o).innerHTML;
        document.getElementById("result_id").innerHTML = operatore;
        console.log("a: " + numero_a + "  op:"+ operatore +  " b: " + numero_b);
}
function equal(){
    switch(operatore){
        case "/":
            result = parseFloat(numero_a) / parseFloat(numero_b);
            document.getElementById("result_id").innerHTML = result;
            break;
        case "*":
            result = parseFloat(numero_a) * parseFloat(numero_b);
            document.getElementById("result_id").innerHTML = result;
            break;
        case "+":
            result = parseFloat(numero_a) + parseFloat(numero_b);
            document.getElementById("result_id").innerHTML = result;
            break;
        case "-":
            result = parseFloat(numero_a) - parseFloat(numero_b);
            document.getElementById("result_id").innerHTML = result;
            break;
        case "%":
            result = (parseFloat(numero_a) * parseFloat(numero_b)) / 100;
            document.getElementById("result_id").innerHTML = result;
            break;
        
    }
    numero_a = result;
    list_a = []; 
    list_b = [];
    numero_b = 0;
    operatore = 0;
    boolean_b = false;
    boolean_operatore = false;
    // controllare se é giusto 
    boolean_a=true;
    console.log("a: " + numero_a + "  op:"+ operatore +  " b: " + numero_b);

}


function sqrt(){
    if (numero_a < 0){ 
        document.getElementById("result_id").innerHTML = "negative number root";
        return NaN;
    }

    let x = parseFloat(numero_a);
    let precisione = 0.00001;
      
    while (Math.abs(x * x - numero_a) > precisione) {
        x = (x + numero_a / x) / 2;
    }
    numero_a = Math.floor(x);
    document.getElementById("result_id").innerHTML = Math.floor(x);
    boolean_b = false;
    boolean_operatore = false;
    return x;
}

function power(){
    result = parseFloat(numero_a) * parseFloat(numero_a);
    numero_a = result;
    document.getElementById("result_id").innerHTML = result;
    boolean_b = false;
    boolean_operatore = false;
}
function invert(){
    result = 1 / parseFloat(numero_a);
    numero_a = result;
    document.getElementById("result_id").innerHTML = result;
    boolean_b = false;
    boolean_operatore = false;
        
}
function clear_Entry(){
    if (!boolean_a && !boolean_operatore){
        numero_a = 0;
        boolean_a = false;
        list_a = []; 
        console.log("a:" + numero_a + "op:" + operatore + "b:" + numero_b);
        document.getElementById("result_id").innerHTML = "";
    }
    else if (boolean_a && !boolean_b){
        operatore = 0;
        boolean_a = false;
        console.log("a:" + numero_a + " op:" + operatore + "  b:" + numero_b);
        document.getElementById("result_id").innerHTML = numero_a;
    }
    else {
        numero_b = 0;
        boolean_b = false; 
        list_b = [];
        console.log("a:" + numero_a + "  op:" + operatore + " b:" + numero_b);
        document.getElementById("result_id").innerHTML = operatore;
    }

}

function cleare(){
    numero_a = 0;
    numero_b = 0;
    operatore = 0;
    memory_n = 0;
    list_a = []; 
    list_b = [];
    boolean_a = false;
    boolean_b = false;
    boolean_operatore = false;
    document.getElementById("result_id").innerHTML = "";
    console.log("a:" + numero_a + " op:" + operatore + " b:" + numero_b);
}
function delet(){
    if (boolean_a && !boolean_operatore){
        list_a.pop(); 
        numero_a = list_a.join("");
        document.getElementById("result_id").innerHTML = numero_a;
        console.log("a:" + numero_a + " op:" + operatore + " b:" + numero_b);
        console.log(list_a);
    }
    else if (boolean_a && !boolean_b){
         operatore = 0;
         boolean_operatore = false;
         document.getElementById("result_id").innerHTML = "";
        console.log("a:" + numero_a + " op:" + operatore + " b:" + numero_b);
    }
    else {
        list_b.pop();
        numero_b = list_b.join("");
        document.getElementById("result_id").innerHTML = numero_b;
        console.log("a:" + numero_a + " op:" + operatore + " b:" + numero_b);
    }
}

function invert_Signt(){
    if (!boolean_operatore && !boolean_b){
        numero_a = - numero_a;
        document.getElementById("result_id").innerHTML = numero_a;
            }
    else if(boolean_a && boolean_operatore){
        numero_b = - numero_b;
        document.getElementById("result_id").innerHTML = numero_b;
            }
}