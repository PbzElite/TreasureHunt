class System{
    constructor(){

    }
    authenticate(actualCode,enteredCode){
        textSize(50);
        fill ("black");
        text(code,300,300);
        
        if(actualCode === enteredCode.toUpperCase()){
            return true
            console.log("true");
        }
        else{
            return false
            console.log("false");
        }
    }
}