function startApp() {
  // Your entire app should not necessarily be coded inside this 
  // single function (though there's no penalty for that), 
  // so create and use/call additional functions from here

  // pls remove the below and make some magic in here!
  // console.log('make magic in here!');

  // const header = document.querySelector('h2');
  // if (header) {
  //   header.textContent = 'Check Your Line Network';
  // }
};


let networkPrefix = {
  // for MTN prefix
  "0703": "./img/mtn_logo.jpeg",
  "0803": "./img/mtn_logo.jpeg",
  "0806": "./img/mtn_logo.jpeg",
  "0706": "./img/mtn_logo.jpeg",
  "0810": "./img/mtn_logo.jpeg",
  "0813": "./img/mtn_logo.jpeg",
  "0816": "./img/mtn_logo.jpeg",
  "0903": "./img/mtn_logo.jpeg",
  "0903": "./img/mtn_logo.jpeg",

  // for GLO prefix
  "0805": "./img/glo_logo.png",
  "0807": "./img/glo_logo.png",
  "08011": "./img/glo_logo.png",
  "0705": "./img/glo_logo.png",
  "08015": "./img/glo_logo.png",
  "0905": "./img/glo_logo.png",

  // for Airtel prefix
  "0802": "./img/airtel_logo.png",
  "0808": "./img/airtel_logo.png",
  "0812": "./img/airtel_logo.png",
  "0701": "./img/airtel_logo.png",
  "0708": "./img/airtel_logo.png",
  "0902": "./img/airtel_logo.png",
  "0907": "./img/airtel_logo.png",
  "0901": "./img/airtel_logo.png",

  // for 9Mobile prefix
  "0809": "./img/9mobile_logo.png",
  "0817": "./img/9mobile_logo.png",
  "0818": "./img/9mobile_logo.png",
  "0908": "./img/9mobile_logo.png",
  "0909": "./img/9mobile_logo.png"
}


let telInput = document.getElementById("tel");
let showLogo = document.querySelector('.logo');
telInput.addEventListener("input", checkNetwork)

function checkNetwork(event) {
  let number = event.target.value;

  // to take care of +234 prefix
  if (number.startsWith("+234")) {
    number = number.replace("+234", "0")
  }

  for (let prefix in networkPrefix) {
    if (number.startsWith(prefix)) {
      showLogo.innerHTML = `<p id="text" style="font-style: italic; font-weight: normal;">See network carrier logo below:</p> <img src=${networkPrefix[prefix]} alt="network-logo" id="logo">`
    }
  }
}



// ======= DO NOT EDIT ============== //
export default startApp;
// ======= EEND DO NOT EDIT ========= //
