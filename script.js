console.log("hello world")

let butt = document.getElementById("bttn")

butt.addEventListener("contextmenu",()=>{

    // alert("hello Misha")
    // confirm("are ypu confirm")
    console.log("yes boss")
    
})


butt.addEventListener("keydown",(e)=>{

    // alert("hello Misha")
    // confirm("are ypu confirm")
    console.log("yes boss", e, e.keyCode)
    
})
