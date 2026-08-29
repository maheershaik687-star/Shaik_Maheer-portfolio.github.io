const button = document.getElementById("mode");

button.onclick = () => {

    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){
        button.innerHTML="☀";
    }else{
        button.innerHTML="🌙";
    }

}