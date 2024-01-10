let a  = null;
let b = 345;
let c = true;
let d = BigInt("567");
let e = "Harry";
let f = Symbol("I am a nice symbol");
let g =undefined;

let obj ={
    harry:90,
    shubh:45,
    shiv:89,
    rithika:80
}
for(let a in obj){
    console.log("marks of " + a + "are" + obj[a]);
} 