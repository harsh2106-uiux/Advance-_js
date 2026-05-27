// "use strict"
const user = {
    username : "harsh",
    age : 21 ,

    welcomemessage : function () {
        console.log('${this.username} , welcome to website');
        
    }
}
user.welcomemessage()
user.username = "hp"
user.welcomemessage()


function show() {
    console.log(this);
    
}
show();


const user = {
    name : "harsh",
    showname(){
        console.log(this.name);
        
    }
};
user.showname();

