// Modern javaScript{}........
// let numbers = () => 10;
// let token = () => 10;
// let type = () => 10;
// console.log(type())

// function generateHelloWorld() {
//     let helloWorldText = "";
//     for (let i = 0; i < 1000; i++) {
//         helloWorldText += "Hello World! ";
//     }
//     document.getElementById("output").textContent = helloWorldText;
// }
function generateHelloWorld() {
    let helloWorldText = `I LOVE YOU...`.repeat(5000);
    document.getElementById("output").textContent = helloWorldText;
    document.body.style.backgroundColor = "red";
}