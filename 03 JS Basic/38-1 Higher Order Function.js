//Ex1
function callTwice(func){
    func();
    func();
}
function laugh() {
    console.log("HAHA ");
}
callTwice(laugh)

//Ex2
function callSixth(func){
    func();
    func();
    func();
    func();
    func();
    func();
}
function hello(){
    console.log("Hello World");
}
callSixth(hello)