//const { _ } = require("core-js");

var dobro = 1234567890;
var lose = "1123456";
var jedinstveniZnakovi = function(password){
    console.log("test " + password);
    let isNum = _.isNumber(password);
    console.log("is number " + isNum);
};

function isUniqChara(password){
    var myArray = [];
    for(var i = 0; i <= password.length; i++){
        var myChar = password.charAt(i);
        if (!myArray.includes(myChar)){
            myArray.push(myChar);
        }
        else {
            return false;
        }
    }
    return true;
}

function isVeceOd10(password){
    if (password.length > 10){
        return password.substring(0, 10);
    }
    return password
}

console.log("rezultat: " + isUniqChara(dobro.toString()))

console.log("rezultat duljine: " + isVeceOd10(dobro))
return;

jedinstveniZnakovi(dobro);
jedinstveniZnakovi(lose);
