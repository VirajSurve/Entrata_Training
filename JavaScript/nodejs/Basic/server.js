const http=require("http");

const server=http.createServer((req,res)=>{

    res.writeHead(200, {
        "Content-Type": "text/plain"
    });

    if(req.url==="/"){

        res.end("Home Page");

    }

    else if(req.url==="/about"){

        res.end("About Page");

    }

    else if(req.url==="/contact"){

        res.end("Contact Page");

    }

    else {

        res.end("404 Not Found");

    }

});

server.listen(4000,()=>{

    console.log("Server running at http://localhost:4000");

});