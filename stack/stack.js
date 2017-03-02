function Stack(){
  this.dataStore = [];
  this.top = 0;
}


Stack.prototype.push = function(ele){
  this.dataStore[this.top++] = ele; 
}

Stack.prototype.pop = function(){
  return this.dataStore[--this.top];
}

Stack.prototype.peek = function(){
  return this.dataStore[this.top-1];
}

Stack.prototype.length = function(){
  return this.top;
}

Stack.prototype.clear = function(){
  this.top = 0;
}
/*
10진수 num을 base진수로 바꿔주는 함수
*/
function mulBase(num, base){
  var str = "";

  var s = new Stack();

  do{
     s.push(num%base);
     num = Math.floor(num/base);
  }while(num > 0)

  do{
    str += s.pop();
  }while(s.top > 0)

  return str;
}
/*
회문검사 함수
회문? 문자를 역순으로 출력해도 똑같은 문자
*/

function isPaindrome(word){
  var result = "";
  var s = new Stack();

  for(var i = 0; i<word.length; i++){
    s.push(word[i]);
  }

  while(s.length() > 0){
    result += s.pop();
  }

  if(word === result){
    return console.log("is paindrome");
  }
  else{
    return console.log("is not paindrome");
  }

}

