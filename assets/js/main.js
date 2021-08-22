function clickHowManyRounds(){
    console.log("test");
    let showCustomInput = document.getElementById("howManyCustomRounds");
    console.log(showCustomInput);
    showCustomInput.classList.remove("howManyCustomRounds2");
    console.log(showCustomInput.classList);
}
// Wie kann ich am besten den input:number wieder verstecken, wenn ich nach custom wieder eine Rundenzahl angebe?

// Random Zahl zwischen 0 & 100
// console.log(Math.floor(Math.random()*101));
let randomNumber = (Math.floor(Math.random()*101));
console.log(randomNumber);


// Los geht´s mit guess
// Wenn Runden gewählt wurden und eine Number eingegeben wurde und auf guess geklickt wurde dann lösche Auswahl der Runden und zeige die verbleibenden Spielrunden an

// let spielRunden4 = document.getElementById("fourRounds");
// console.log(spielRunden4);
// let spielRunden5 = document.getElementById("fiveRounds");
// console.log(spielRunden5);
// let spielRunden6 = document.getElementById("sixRounds");
// console.log(spielRunden6);

// if (spielRunden4 == true){
//     console.log("checked");
// }

function clickFourRounds(){
    let spielRunden4 = document.getElementById("fourRounds");
    if(spielRunden4.checked == true){
        console.log("test1");
    }
}
// test();

// + value vom input number zwischen 0 und 100
// function firstNumber(){
//     let firstNumber = document.getElementById("number").value;
//     console.log(firstNumber);
//     if(firstNumber >= 0 && firstNumber <=100){
//         document.getElementById("jsForm").innerHTML = "test2";
//     }
// }




// show new form + hide old form
function showNewForm(){
    console.log("test10");
    document.getElementById("oldForm").style.display = "none";
    // document.getElementById("newFormClass").style.display = "block";
    // let showNewForm1 = document.getElementById("newFormId");
    
}
