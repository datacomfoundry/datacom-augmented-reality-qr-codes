// Handles loading the events for <model-viewer>'s slotted progress bar
const onProgress = (event) => {
  const progressBar = event.target.querySelector('.progress-bar');
  const updatingBar = event.target.querySelector('.update-bar');

  updatingBar.style.width = `${event.detail.totalProgress * 100}%`;
  if (event.detail.totalProgress === 1) {
    progressBar.classList.add('hide');
  } else {
    progressBar.classList.remove('hide');
    if (event.detail.totalProgress === 0) {
      event.target.querySelector('.center-pre-prompt').classList.add('hide');
    }
  }
};
document.querySelector('model-viewer').addEventListener('progress', onProgress);

function clickButton() {
  document.getElementById('ar-button').click();
}

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    setTimeout(clickButton, 2000);
  }
};

// Selects a random 3D model to be displayed within model-viewer window

const astroRobotModel = "https://foundryar.blob.core.windows.net/datacom-qr-code/astronaut_avatar.glb"
const iceCreamManModel = "https://foundryar.blob.core.windows.net/datacom-qr-code/icecream_avatar.glb"

const lunarRoverIosModel = "https://foundryar.blob.core.windows.net/datacom-qr-code/LunarRover_English.reality"
const habIosModel = "https://foundryar.blob.core.windows.net/datacom-qr-code/hab_en.reality"
const cosmonautIosModel = "https://foundryar.blob.core.windows.net/datacom-qr-code/CosmonautSuit_en.reality"
const iceCreamManIosModel = "https://foundryar.blob.core.windows.net/datacom-qr-code/high_poly_icecream_avatar.usdz"

const array = [astroRobotModel, iceCreamManModel]
const arrayIos = [lunarRoverIosModel, habIosModel, cosmonautIosModel, iceCreamManIosModel]

const chooseModel = array[getRandomInt(2)]
const chooseIosModel = arrayIos[getRandomInt(4)]

let elem = document.getElementById('model-viewer');
elem.src = chooseModel;
elem['ios-src'] = chooseIosModel;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}