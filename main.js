menu_list_array=
["Margherita Pizza",
"Marinara Pizza",
"Quattro Stagioni Pizza",
"Capricciosa Pizza",
"Quattro Formaggi Pizza",
"Diavola Pizza"];

function get_menu();
{
var htmldata;
htmldata="ol class'menulist'>"
menu_list_array.sort();
for(var i=0;i<menu_list_array.length;i++){
    htmldata=htmldata+'<li>' + menu_list_array[i]+'</li>'
}
htmldata=htmldata+"</ol>"
document.getElementById("Display_menu").innerHTML=htmldata;}

function Add_item(){
    var htmldata;
    var item=document.getElementById("add_item").nodeValue;
    menu_list_array.sort();
    htmldata="select class='card'>"
    for(var i=0;i<menu_list_array.length;i++){

        htmldata=htmldata+'<div class="card">'
        +'<image src="images/pizzaImage.png"/>'
        + menu_list_array[i] + '</div>'
    }
    htmldata=htmldata+"</section>"
    document.getElementById("display_addedmenu").innerHTML = htmldata;
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
}