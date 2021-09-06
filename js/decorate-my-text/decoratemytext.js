function do_bold(){
    let bold = document.getElementById("text");
    if (bold.style.fontWeight=== "bold"){
        bold.style.fontWeight='normal';
    }else{
        bold.style.fontWeight= "bold";
    }
    bold.style.color = "green";
    bold.style.textDecoration = 'underline';
    console.log(document.getElementById('bling').value );
    if (document.getElementById('bling').checked  === true){
        document.body.style.backgroundImage = "url('background.jpg')";
    }else{
        document.body.style.backgroundImage = "";
        document.body.style.backgroundColor = 'white';
    }

}


function btn_BD(){
    setInterval(biggerDecoration, 500);
}

function biggerDecoration(){
    console.log("function call");   
    let textarea = document.querySelector("textarea");
    let t_size = window.getComputedStyle(textarea, null).getPropertyValue('font-size');
    let f_size= parseFloat(t_size);
    document.getElementById("text").style.fontSize = (f_size + 2 )+"px";
}


function malkovich(){
    let array = document.getElementById('text').innerHTML.split(/\s+/);
    for (let i=0;i<array.length;i++){
        console.log(array[i]);
        if ( array[i].length>=5){
            array[i] = 'Malkovitch';
        }
    }
    let res = "";
    for (let i=0;i<array.length;i++){
        res = res + " " + array[i];
    }
    document.getElementById('text').innerHTML = res;
}
