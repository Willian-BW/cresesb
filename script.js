const bodyResponse = document.createElement("div");


let resp = fetch("https://google.com")
console.log(resp);
bodyResponse.innerHTML = resp;

document.body.appendChild(bodyResponse);
