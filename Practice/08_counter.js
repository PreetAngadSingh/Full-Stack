let count = 30;
function counter(){
    console.log(count--);
    if(count==-1){
        clearInterval(timer);
    }
}

let timer = setInterval(counter, 1000);