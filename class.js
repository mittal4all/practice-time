class Do(){
  Costructor(name,age){
  this.name=name;
  this.age=age;
  }
}
const data=new Do("ankit",34);

class Do1 extends Do(){
  Constructor(name,age,score){
  super(name,age)
  }
}
