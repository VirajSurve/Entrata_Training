//XMLHttpRequest METHOD

function loadUsersXHR() {

    let xhr=new XMLHttpRequest();

    document.getElementById("status").innerHTML="Loading using XMLHttpRequest...";

    xhr.onreadystatechange=function(){

        if(xhr.readyState===4 && xhr.status===200){

            let users=JSON.parse(xhr.responseText);

            displayUsers(users);

            document.getElementById("status").innerHTML="Loaded using XMLHttpRequest";
        }
    };

    xhr.open(
        "GET",
        "https://jsonplaceholder.typicode.com/users",
        true
    );

    xhr.send();
}



//FETCH METHOD

function loadUsersFetch(){

    document.getElementById("status").innerHTML="Loading using fetch()...";

    fetch("https://jsonplaceholder.typicode.com/users")

        .then(response=>response.json())

        .then(users=>{

            displayUsers(users);

            document.getElementById("status").innerHTML="Loaded using fetch()";
        })

        .catch(error=>{

            console.error(error);

            document.getElementById("status").innerHTML="Fetch failed";
        });
}



//ASYNC / AWAIT METHOD

async function loadUsersAsync() {

    try {

        document.getElementById("status").innerHTML="Loading using async/await...";

        let response=await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        let users=await response.json();

        displayUsers(users);

        document.getElementById("status").innerHTML="Loaded using async/await";

    } catch(error) {

        console.error(error);

        document.getElementById("status").innerHTML="Async request failed";
    }
}


//XMLHttpRequest POST METHOD

function createPostXHR(){

    let xhr=new XMLHttpRequest();

    document.getElementById("status").innerHTML="Sending POST using XMLHttpRequest...";

    xhr.onreadystatechange=function(){

        if(xhr.readyState===4&&xhr.status===201){

            let data=JSON.parse(xhr.responseText);
            console.log("POST XHR Response:",data);

            document.getElementById("status").innerHTML="POST using XMLHttpRequest successful";
        }
    };

    xhr.open(
        "POST",
        "https://jsonplaceholder.typicode.com/posts",
        true
    );

    xhr.setRequestHeader("Content-Type","application/json");

    xhr.send(JSON.stringify({
        title:"AJAX POST Example",
        body:"Creating new resource",
        userId:1
    }));
}


//FETCH POST METHOD

function createPostFetch(){

    document.getElementById("status").innerHTML="Sending POST using fetch()...";

    fetch("https://jsonplaceholder.typicode.com/posts",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            title:"AJAX POST Example",
            body:"Creating new resource",
            userId:1
        })
    })
    .then(response=>response.json())
    .then(data=>{
        console.log("POST Fetch Response:",data);
        document.getElementById("status").innerHTML="POST using fetch() successful";
    })
    .catch(error=>{
        console.error(error);
        document.getElementById("status").innerHTML="POST using fetch() failed";
    });
}


//ASYNC / AWAIT POST METHOD

async function createPostAsync(){

    try{
        document.getElementById("status").innerHTML="Sending POST using async/await...";

        let response=await fetch(
            "https://jsonplaceholder.typicode.com/posts",
            {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    title:"Async POST",
                    body:"Created with async/await",
                    userId:2
                })
            }
        );

        let data=await response.json();
        console.log("POST Async Response:",data);

        document.getElementById("status").innerHTML="POST using async/await successful";
    }catch(error){
        console.error(error);
        document.getElementById("status").innerHTML="POST using async/await failed";
    }
}



//COMMON DISPLAY FUNCTION

function displayUsers(users) {

    let output="";

    users.forEach(user=>{

        output+="<li>"+
            user.name+
            " ("+user.email+")"+
            "</li>";
    });

    document.getElementById("userList").innerHTML=
        output;
}