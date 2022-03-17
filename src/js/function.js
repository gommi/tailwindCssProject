
const button = document.querySelector('#menu-button');
const menu = document.querySelector('#menu');

menu.classList.toggle('hidden');


button.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});

var timesClicked = 1;

function btnClick(){
  timesClicked ++;
    
  document.getElementById('timesClicked').innerHTML = timesClicked;
  return true 
}

function btnClickMin(){
  if(timesClicked == 1){
    document.getElementById("timesClicked").innerHTML = 1;
  }else{
    timesClicked --;
  }
    
  document.getElementById('timesClicked').innerHTML = timesClicked;
  return true 
}


function opisClick() {
  document.getElementById("txtOne").innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.";
  document.getElementById("txtTwo").innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  document.getElementById("txtThree").innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.";

  document.getElementById('opis').style.cssText = 'border-bottom: 3px solid #FFC107;';
  document.getElementById('specifikacija').style.cssText = 'border-bottom: 1px solid #656565;';
  document.getElementById('ostalo').style.cssText = 'border-bottom: 1px solid #656565;';

}


function specifikacijaClick() {
  document.getElementById("txtOne").innerHTML = "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.";
  document.getElementById("txtTwo").innerHTML = "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.";
  document.getElementById("txtThree").innerHTML = "Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of \"de Finibus Bonorum et Malorum\" (The Extremes of Good and Evil) by Cicero, written in 45 BC.";

  document.getElementById('opis').style.cssText = 'border-bottom: 1px solid #656565;';
  document.getElementById('specifikacija').style.cssText = 'border-bottom: 3px solid #FFC107;';
  document.getElementById('ostalo').style.cssText = 'border-bottom: 1px solid #656565;';
}

function ostaloClick() {
  document.getElementById("txtOne").innerHTML = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.";
  document.getElementById("txtTwo").innerHTML = "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.";
  document.getElementById("txtThree").innerHTML = "Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.";

  document.getElementById('opis').style.cssText = 'border-bottom: 1px solid #656565;';
  document.getElementById('specifikacija').style.cssText = 'border-bottom: 1px solid #656565;';
  document.getElementById('ostalo').style.cssText = 'border-bottom: 3px solid #FFC107;';
}

function btnSearch() {
  var x = document.getElementById("esearch");

  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}