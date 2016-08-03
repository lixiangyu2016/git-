
var fs =require('fs');
/*
var q=null;
console.log(q)
var a=fs.mkdir(q,b('q/w/r/t'));
function b(){
   var p=arguments[0].split('/');
    for (var i=0;i< p.length;i++){
     var mk='./'+p[i]+'/'+p[i+1]+'/'+p[i+2]+'/'+p[i+3];
        if(i==0){
       /!*var b= fs.mkdir(mk,function(){})*!/
     q=mk}
    }

}
*/

/*fs.mkdirSync('./q/w/r/t')*/

function mkdir(path) {
    var reg = /[/\./]/g;
    var res = path.replace(reg, function () {
        return '';
    });
    var path = '';
    var a=0;
    var path = res[0];
    mk();
    function mk(){fs.mkdir(path,function fn(){
        if(a==res.length-1)return;
        a++;
        path+='/'+res[a];
        mk();
    })
    }
}
mkdir('q/w/e/r')



