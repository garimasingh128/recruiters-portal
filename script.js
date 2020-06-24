var x = 0;
var y=0;
var array = Array();
var array2= Array();

function add_element_to_array()
{
 array[x] = document.getElementById("text1").value;
 alert("Element: " + array[x] + " Added at index " + x);
 x++;
}
function add_element_to_array2()
{
 array[x] = document.getElementById("text2").value;
 alert("Element: " + array[x] + " Added at index " + x);
 x++;
}

function add_element_to_array3()
{
 array[x] = document.getElementById("text3").value;
 alert("Element: " + array[x] + " Added at index " + x);
 x++;
}
function add_element_to_array4()
{
 array[x] = document.getElementById("text4").value;
 alert("Element: " + array[x] + " Added at index " + x);
 x++;
}
function add_element_to_array5()
{
 array[x] = document.getElementById("text5").value;
 alert("Element: " + array[x] + " Added at index " + x);
 x++;
}
function add_element_to_array6()
{
 array2[y] = document.getElementById("text6").value;
 y++;
}
function add_element_to_array7()
{
 array2[y] = document.getElementById("text7").value;
 y++;
}function add_element_to_array8()
{
    array2[y] = document.getElementById("text8").value;
    y++;
}function add_element_to_array9()
{
    array2[y] = document.getElementById("text9").value;
    y++;
}function add_element_to_array10()
{
    array2[y] = document.getElementById("text10").value;
    y++;
}

function display_array()
{

   document.getElementById("q3").innerHTML = array[0];
   document.getElementById("x3").innerHTML = array[1];
   document.getElementById("r3").innerHTML = array[2];
   document.getElementById("a3").innerHTML = array[3];
   document.getElementById("b3").innerHTML = array[4];

   document.getElementById("q2").innerHTML = array2[0];
   document.getElementById("x2").innerHTML = array2[1];
   document.getElementById("r2").innerHTML = array2[2];
   document.getElementById("a2").innerHTML = array2[3];
   document.getElementById("b2").innerHTML = array2[4];
}
// var e = "<hr/>";   
    
// for (var y=0; y<array.length; y++)
// {
//   e += "Element " + y + " = " + array[y] + "<br/>";
// }



// document.getElementById("xyz").value = array[0];
// document.getElementById("xyz").innerHTML = array[0];