Function.prototype.method = function(name, func){
  if(!this.prototype[name]){
    this.prototype[name] = func;
  }
}

function Queue(){
  this.dataStore = [];
}

Queue.method("enqueue", function(ele){
  this.dataStore.push(ele);
});
/*
Queue.prototype.enqueue = function(ele){
  this.dataStore.push(ele);
}*/

Queue.prototype.dequeue = function(){
  return this.dataStore.shift();
}

Queue.prototype.front = function(){
  return this.dataStore[0];
}

Queue.prototype.end = function(){
  return this.dataStore[this.dataStore.length-1]; 
}

Queue.prototype.toString = function(){
  var str = "";
  for(var i = 0; i<this.dataStore.length; i++){
    str += this.dataStore[i] + "/n";
  }
  return str;
}

Queue.prototype.empty = function(){
  if(this.dataStore.length === 0){
    return true;
  }else{
    return false;
  }
}

function Dancer(name, sex){
  this.name = name;
  this.sex = sex;
}

function getDancers(males, females){
  var names = read("dancers.txt").split("\n");
  for(var i=0;i<names.length;i++){
    names[i] = names[i].trim();
  }

  for(var i=0;i<names.length;i++){
    var dancer = names[i].split(" ");
    var sex = dancer[0];
    var name = dancer[1];
    if(sex === "F"){
      females.enqueue(new Dancer(name, sex));
    }else{
      males.enqueue(new Dancer(name, sex));
    }
  }
}

function dance(males, females){
  var man = "",
      woman = "";
  while(!males.empty() && !females.empty()){
    man = males.dequeue();
    woman = females.dequeue();
  }
}