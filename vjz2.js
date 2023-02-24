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
    /*for (var j=0; j < myArray.length; j++){
        console.log(myArray[j])
    }*/
    return true;
}

console.log("rezultat: " + isUniqChara(lose))
return;
jedinstveniZnakovi(dobro);
jedinstveniZnakovi(lose);
