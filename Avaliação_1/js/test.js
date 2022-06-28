var tema1 = true;

function tema(){
    if(!tema1){
        light();
    }
    else{
        dark();
    }
}

function light(){
    document.body.classList.remove('dark-mode');
    document.body.classList.add('light-mode');
    tema1 = true;
}

function dark(){
    document.body.classList.remove('light-mode');
    document.body.classList.add('dark-mode');
    tema1 = false;
}

window.onload = dark();


    // /* https://colorhunt.co/palette/7c9473cfdac8e8eae6cdd0cb */
    // --background-light: #E8EAE6;
    // --c1-light: #7C9473;
    // --c2-light: #CDD0CB;
    // --c3-light: #CFDAC8;
