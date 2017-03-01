function List(){
  this.listSize = 0;
  this.dataStore = [];
  this.pos = 0;
}

List.prototype.append = function(ele){
  this.dataStore[this.listSize++] = ele;
}

List.prototype.find = function(ele){
  var i=0;
  for(i;i<this.dataStore.length;i++){
    if(this.dataStore[i] === ele){
      return i;
    }
  }
  return -1;
}

List.prototype.remove = function(ele){
  var foundAt = 0;
  foundAt = this.find(ele);
  if(foundAt > -1){
    this.dataStore.splice(foundAt, 1);
    --this.listSize;
    return true;
  }
  return false;
}

List.prototype.length = function(){
  return this.listSize;
}

List.prototype.toString = function(){
  console.log(this.dataStore);
}

List.prototype.insert = function(ele, after){
  var insertPos = 0;
  insertPos = this.find(after);
  console.log(insertPos)
  if(insertPos > -1){
    this.dataStore.splice(insertPos+1, 0, ele);
    ++this.listSize;
    return true;
  }
  return false;
}

List.prototype.clear = function(){
  delete this.dataStore;
  this.dataStore.length = 0;
  this.listSize = this.pos = 0;
}

List.prototype.contains = function(ele){
  var i = 0;
  for(i;i<this.dataStore.length;i++){
    if(this.dataStore[i] === "ele"){
      return true;
    }
  }
  return false;

}

List.prototype.front = function(){
  this.pos = 0;
}

List.prototype.end = function(){
  this.pos = dataStore.length-1;
}

List.prototype.prev = function(){
  if(this.pos > 0){
    this.pos = this.pos - 1;
  }
}

List.prototype.next = function(){
  if(this.pos < this.dataStore.length-1){
    this.pos = this.pos + 1;
  }
}

List.prototype.curPos = function(){
  return this.pos;
}

List.prototype.moveTo = function(pos){
  this.pos = pos;
}

List.prototype.getElement = function(){
  return this.dataStore[this.pos];
}
