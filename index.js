// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
  cats.push(name);
  return cats;
}

function destructivelyPrependCat(name){
  cats.unshift(name);
  return cats;
}

function destructivelyRemoveLastCat(){
  cats.pop();
  return cats;
}

function destructivelyRemoveFirstCat(){
  cats.shift();
  return cats;
}
 
function appendCat(name){
  const name1 = [...cats,name];
  return name1;
}

function prependCat(name){
  const name2=[name,...cats];
  return name2;
}

function removeLastCat(){
  const remlastcats= cats.slice(0,cats.length-1);
  return remlastcats;
}

function removeFirstCat(){
  const remfirstcat= cats.slice(1)
  return remfirstcat;
}