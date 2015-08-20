function rand(max,min){
  return Math.floor(Math.random()*(max-min)+min);
}

function Mind(){
  this.code="";
  this.dict=["R","G","Y","B","V","O","N","W","A","P"];
  this.p=0;
  this.c=0;
  this.codel=4;
  this.colorl=6;
  this.generate = function(codel=this.codel,colorl=this.colorl){
    this.code="";
    this.colorl=colorl;
    this.codel=codel;
    if(this.colorl<=this.dict.length){
      for(var i=0;i<this.codel;i++){
        this.code+=this.dict[rand(0,this.colorl)];
      }
      return true;
    }
    return false;
  }
  this.check = function(word){
    this.p=0;this.c=0;
    if(this.validate(word)==false){return null;}
    var tempW=[],tempC=[];
    for(var i=0;i<this.code.length;i++){
      if(this.code[i]==word[i]){
        tempC.push(i);
        tempW.push(i);
        this.p+=1;
      }
    }
    for(var i=0;i<word.length;i++){
      for(var j=0;j<this.code.length;j++){
        if(tempC.indexOf(j)==-1 && tempW.indexOf(i)==-1){
          if(this.code[j]==word[i]){
            tempC.push(j);
            this.c+=1;
            break;
          }
        }
      }
    }
    return {"p":this.p,"c":this.c};
  }
  this.equals = function(other){
    return this.p==other.p && this.c==other.c;
  }
  this.validate = function(code){
    if(code.length!=this.codel){return false;}
    for(var i=0;i<code.length;i++){
      if(this.dict.indexOf(code[i])==-1){
        return false;
      }
    }
    return true;
  }
}



/*
//Test case:
var m=new Mind();
m.code="VYVR";
if(m.check("VOOO"),m.equals({"p":1,"c":0})){console.log("OK")};
if(m.check("YYYO"),m.equals({"p":1,"c":0})){console.log("OK")};
if(m.check("YVYV"),m.equals({"p":0,"c":3})){console.log("OK")};
m.code="OBBG";
if(m.check("BBYY"),m.equals({"p":1,"c":1})){console.log("OK")};
if(m.check("BYYY"),m.equals({"p":0,"c":1})){console.log("OK")};
if(m.check("BYYB"),m.equals({"p":0,"c":2})){console.log("OK")};
//This should print 6 "OK"
m.code="YVOO";
if(m.check("RYGB"),m.equals({"p":0,"c":1})){console.log("OK")};
if(m.check("BOVG"),m.equals({"p":0,"c":2})){console.log("OK")};
if(m.check("RGOV"),m.equals({"p":1,"c":1})){console.log("OK")};
if(m.check("GGGG"),m.equals({"p":0,"c":0})){console.log("OK")};
if(m.check("OOOO"),m.equals({"p":2,"c":0})){console.log("OK")};
if(m.check("VVOO"),m.equals({"p":3,"c":0})){console.log("OK")};
if(m.check("YVOO"),m.equals({"p":4,"c":0})){console.log("OK")};
//This should print 7 "OK"
*/
