const bodyResponse = document.createElement("div");

console.log("Testando!!!")
let resp = fetch("https://google.com")
console.log(resp);
bodyResponse.innerHTML = resp;

document.body.appendChild(bodyResponse);
