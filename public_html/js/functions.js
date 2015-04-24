/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


function calculateAge()
{
    //task one
    // Return today's date and time
    var currentTime = new Date();
    // returns the year (four digits)
    var currentYear = currentTime.getFullYear();
    var birthYear = document.form.text1.value;
    var currentAge = (currentYear - birthYear);
    var altCurrentAge = ((currentYear - birthYear) - 1);
    document.getElementById("output").innerHTML = (currentAge + " or " + altCurrentAge);

}

function calculateSupply()
{
    //task two
    var currentTime = new Date();
    var maxAge = 125;
    var currentAge = document.form2.text1.value;
    var dailyAmount = document.form2.text2.value;
    var yearsLeft = maxAge - currentAge;
    var canConsume = ((yearsLeft * 365) * dailyAmount);
    var rounded = Math.round(// round to nearest integer
            Number(canConsume)    // type cast your input
            );
    document.getElementById("output1").innerHTML = (" " + rounded + " ");
    document.getElementById("output2").innerHTML = (" " + maxAge + " ");
}

function doCalculate()
{
    //Task three
//note: I calculate circumference and area
    //in the same function to avoid redundancy
    var radius = document.form3.text1.value;
    var circumference = 2 * Math.PI * radius;
    var area = Math.PI * radius * radius;
    document.getElementById("output3").innerHTML = (" " + circumference + " ");
    document.getElementById("output4").innerHTML = (" " + area + " ");

}

function toFahrenheit()
{
//task four; to fahrenheit
    var celcius = document.form4.text1.value;
    var fahrenheit = ((celcius * 9) / 5) + 32;
    document.getElementById("output5").innerHTML = (" " + celcius + " ");
    document.getElementById("output6").innerHTML = (" " + fahrenheit + " ");
}

function toCelcius()
{
//task four; to celcius
    var fahrenheit = document.form4.text2.value;
    var celcius = ((fahrenheit - 32) * 5) / 9;
    document.getElementById("output7").innerHTML = (" " + fahrenheit + " ");
    document.getElementById("output8").innerHTML = (" " + celcius + " ");
}