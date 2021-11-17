
var x;
var resX


function convertx () {
    
    
    x = document.getElementById("Numb1").value;
    if (x <= -128 || x>= 128)
    document.getElementById("bruh").innerHTML = 'bruh';
    else
    if (x < 0 ) {
    negative (x);
    }
    else {
    resX = (Number(x).toString(2));
    while (resX.length != 8) {
        resX = "0" + resX;
    }
    document.getElementById("bruh").innerHTML = resX;
var zero = resX [0];
var one = resX [1];
var two = resX [2];
var three = resX [3];
var four = resX [4];
var five = resX [5];
var six = resX [6];
var seven = resX [7];
document.getElementById("1").innerHTML = seven;
document.getElementById("2").innerHTML = six;
document.getElementById("3").innerHTML = five;
document.getElementById("4").innerHTML = four;
document.getElementById("5").innerHTML = three;
document.getElementById("6").innerHTML = two;
document.getElementById("7").innerHTML = one;
document.getElementById("8").innerHTML = zero;
if (zero == '1'){
    document.getElementById("h").innerHTML = "-128";
    }
    else {
    document.getElementById("h").innerHTML = "0";
    }
   //----------------------------------------
   if (one == '1'){
    document.getElementById("g").innerHTML = "64";
    }
    else {
    document.getElementById("g").innerHTML = "0";
    }
   //----------------------------------------
   if (two == '1'){
    document.getElementById("f").innerHTML = "32";
    }
    else {
    document.getElementById("f").innerHTML = "0";
    }
   //----------------------------------------
   if (three == '1'){
    document.getElementById("e").innerHTML = "16";
    }
    else {
    document.getElementById("e").innerHTML = "0";
    }
   //----------------------------------------
   if (four == '1'){
    document.getElementById("d").innerHTML = "8";
    }
    else {
    document.getElementById("d").innerHTML = "0";
    }
   //----------------------------------------
   if (five == '1'){
    document.getElementById("c").innerHTML = "4";
    }
    else {
    document.getElementById("c").innerHTML = "0";
    }
   //----------------------------------------
   if (six == '1'){
    document.getElementById("b").innerHTML = "2";
    }
    else {
    document.getElementById("b").innerHTML = "0";
    }
   //----------------------------------------
   if (seven == '1'){
    document.getElementById("a").innerHTML = "1";
    }
    else {
    document.getElementById("a").innerHTML = "0";
    }
   //----------------------------------------
    }
   
}


function negative (x) {
    var minus;
var index;
var part1;
var part2;
var i = 0;
var res = '';
var result;
    x = x * -1;
    resX = (Number(x).toString(2));
    while (resX.length != 8) {
        resX = "0" + resX;
    }
minus = resX.split("");
minus = minus.reverse();
minus = minus.join("");
index= minus.indexOf("1")+1;
part1 = minus.slice (0,index);
part2 = minus.slice (index,8);
while (i<part2.length) {
    if (part2 [i] == '1'){
    res = res + '0'
    }
    else {
        res = res + '1';
    }
    i++
}
result = part1 + res;
result = result.split("");
result = result.reverse();
result = result.join("");
document.getElementById("bruh").innerHTML = result;
let zero =result [0];
var one = result [1];
var two = result [2];
var three = result [3];
var four = result [4];
var five = result [5];
var six = result [6];
var seven = result [7];
document.getElementById("1").innerHTML = seven;
document.getElementById("2").innerHTML = six;
document.getElementById("3").innerHTML = five;
document.getElementById("4").innerHTML = four;
document.getElementById("5").innerHTML = three;
document.getElementById("6").innerHTML = two;
document.getElementById("7").innerHTML = one;
document.getElementById("8").innerHTML = zero;
if (zero == '1'){
    document.getElementById("h").innerHTML = "-128";
    }
    else {
    document.getElementById("h").innerHTML = "0";
    }
   //----------------------------------------
   if (one == '1'){
    document.getElementById("g").innerHTML = "64";
    }
    else {
    document.getElementById("g").innerHTML = "0";
    }
   //----------------------------------------
   if (two == '1'){
    document.getElementById("f").innerHTML = "32";
    }
    else {
    document.getElementById("f").innerHTML = "0";
    }
   //----------------------------------------
   if (three == '1'){
    document.getElementById("e").innerHTML = "16";
    }
    else {
    document.getElementById("e").innerHTML = "0";
    }
   //----------------------------------------
   if (four == '1'){
    document.getElementById("d").innerHTML = "8";
    }
    else {
    document.getElementById("d").innerHTML = "0";
    }
   //----------------------------------------
   if (five == '1'){
    document.getElementById("c").innerHTML = "4";
    }
    else {
    document.getElementById("c").innerHTML = "0";
    }
   //----------------------------------------
   if (six == '1'){
    document.getElementById("b").innerHTML = "2";
    }
    else {
    document.getElementById("b").innerHTML = "0";
    }
   //----------------------------------------
   if (seven == '1'){
    document.getElementById("a").innerHTML = "1";
    }
    else {
    document.getElementById("a").innerHTML = "0";
    }



   
}

//--------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------
let bool = false;
function inputA () {
    
    bool = !bool;

    
}
let bool2 = false;
function inputB () {
    
    bool2 = !bool2;

}
let flip = false;
function flipy () {
    flip = !flip;
}

function and ()
{
    if (bool == true && bool2 == true)
    {
        document.getElementById("andgate").src = "and3.jpg"; 
    }
    else if (bool == true && bool2 == false)
    {
        document.getElementById("andgate").src = "and2.jpg";
    }
    else if (bool == false && bool2 == true)
    {
        document.getElementById("andgate").src = "and4.jpg";
    }
    else 
    {
        document.getElementById("andgate").src = "and1.jpg"; 
    }
}
function not ()
{
    if (bool == true && bool2 == true)
    {
        document.getElementById("orgate").src = "not4.jpg"; 
    }
    else if (bool == true && bool2 == false)
    {
        document.getElementById("orgate").src = "not2.jpg";
    }
    else if (bool == false && bool2 == true)
    {
        document.getElementById("orgate").src = "not3.jpg";
    }
    else 
    {
        document.getElementById("orgate").src = "not1.jpg"; 
    }
}
function xor ()
{
    if (bool == true && bool2 == true)
    {
        document.getElementById("xorgate").src = "xor2.jpg"; 
    }
    else if (bool == true && bool2 == false)
    {
        document.getElementById("xorgate").src = "xor3.jpg";
    }
    else if (bool == false && bool2 == true)
    {
        document.getElementById("xorgate").src = "xor4.jpg";
    }
    else 
    {
        document.getElementById("xorgate").src = "xor1.jpg"; 
    }
}
function or ()
{
if ( bool == true)
document.getElementById("notgate").src = "realnot1.jpg";
else
document.getElementById("notgate").src = "realnot2.jpg";
}
function flipflop ()
{
    var flip
    if (bool == true && bool2 == false) 
    document.getElementById("flipgate").src = "flip2.jpg";
    
    else if (bool == false && bool2 == false)
    document.getElementById("flipgate").src = "flip3.jpg";
else if (bool == true && bool2 == true && flip == true)

document.getElementById("flipgate").src = "flip6.jpg";

    else if (bool == true && bool2 == true)
document.getElementById("flipgate").src = "flip4.jpg";
else if (bool == false && bool2 == true)
document.getElementById("flipgate").src = "flip5.jpg";


}






function brother () {
 
    weight = document.getElementById("we").value;
    height = document.getElementById("he").value;
    height = height * height;
    bmiresy = (weight / height) *703;
   
    if (bmiresy < 18)
    document.getElementById("res").innerHTML = 'Underweight';
    else if (bmiresy <= 25)
    document.getElementById("res").innerHTML = 'Normal';
    else if (bmiresy <= 30)
    document.getElementById("res").innerHTML = 'OverWeight';
    else if (bmiresy <= 35)
    document.getElementById("res").innerHTML = 'Obese';
    else 
    document.getElementById("res").innerHTML = 'Extremely Obese';
    bmiresy = bmiresy.toFixed (2)
    document.getElementById("demo").innerHTML = bmiresy;
    
    }