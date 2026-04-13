function showMethod(message){
    document.getElementById("methodOutput").textContent=message;
}

function changeText(){
    document.getElementById("title").textContent="Heading Changed!";
    document.getElementById("output").textContent="Heading text updated.";
    showMethod("Used getElementById + textContent to change heading text.");
}

function changeColor(){
    document.body.style.backgroundColor="lightblue";
    document.getElementById("output").textContent="Background changed to light blue.";
    showMethod("Used document.body.style.backgroundColor to update page style.");
}

function highlightHeading(){
    document.querySelector("#title").style.color="red";
    document.getElementById("output").textContent="Heading color changed to red.";
    showMethod("Used querySelector('#title') + style.color.");
}

function showName() {

    let name = document.getElementById("nameInput").value;

    document.getElementById("output").textContent = "Hello " + name;
    showMethod("Used input value + getElementById + textContent.");
}

let cnt=1;
function addItem(){
    let li=document.createElement("li");
    li.textContent="New Item Added " + cnt;
    cnt++;
    document.getElementById("list").appendChild(li);
    document.getElementById("output").textContent="List item added.";
    showMethod("Used createElement('li') + appendChild().");
}

function removeItem(){
    let list=document.getElementById("list");
    if(list.lastElementChild){
        list.removeChild(list.lastElementChild);
        document.getElementById("output").textContent="Last list item removed.";
        showMethod("Used removeChild() on list.lastElementChild.");
    }
}

function changeAttribute(){
    document.getElementById("myImage").setAttribute("src","https://picsum.photos/seed/app/200/200");
    document.getElementById("output").textContent="Image source attribute changed.";
    showMethod("Used setAttribute('src', newUrl).");
}

function addClass(){
    document.getElementById("title").classList.add("highlight");
    document.getElementById("output").textContent="Class 'highlight' added to heading.";
    showMethod("Used classList.add('highlight').");
}

function removeClass() {
    document.getElementById("title").classList.remove("highlight");
    document.getElementById("output").textContent="Class 'highlight' removed from heading.";
    showMethod("Used classList.remove('highlight').");
}

document.getElementById("output").textContent="Click a button to see DOM method result.";

let parentTag=document.getElementById("title").parentElement.tagName;
let liCount=document.getElementsByTagName("li").length;
let highlightCount=document.getElementsByClassName("highlight").length;

showMethod("Parent element of title: "+parentTag+", li count: "+liCount+", highlight count: "+highlightCount+".");