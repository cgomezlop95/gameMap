function mouseMoved() {
  if (
    (mouseX >= merchant.x &&
      mouseX <= merchant.x + merchantImg.width &&
      mouseY >= merchant.y &&
      mouseY <= merchant.y + merchantImg.height) ||
    (mouseX >= monk.x &&
      mouseX <= monk.x + monkImg.width &&
      mouseY >= monk.y &&
      mouseY <= monk.y + monkImg.height)
  ) {
    dialogueText = "Hola, Milburn, deberías ir al puerto a pescar o al mercado";
    dialogueVisible = true;
  } else if (
    (mouseX >= boat.x &&
      mouseX <= boat.x + boatImg.width &&
      mouseY >= boat.y &&
      mouseY <= boat.y + boatImg.height) ||
    (mouseX >= boat2.x &&
      mouseX <= boat2.x + boat2Img.width &&
      mouseY >= boat2.y &&
      mouseY <= boat2.y + boat2Img.height)
  ) {
    dialogueText = "Haz clic en el barco para recoger la pesca";
    dialogueVisible = true;
  } else if (
    mouseX >= market.x &&
    mouseX <= market.x + marketImg.width &&
    mouseY >= market.y &&
    mouseY <= market.y + marketImg.height
  ) {
    dialogueText = "Haz clic en el mercado para comprar alimentos";
    dialogueVisible = true;
  } else if (
    mouseX >= myHouse.x &&
    mouseX <= myHouse.x + ownHouseImg.width &&
    mouseY >= myHouse.y &&
    mouseY <= myHouse.y + ownHouseImg.height
  ) {
    dialogueText = "Haz clic para ir a casa a dormir";
    dialogueVisible = true;
  } else if (
    mouseX >= bank.x &&
    mouseX <= bank.x + bankImg.width &&
    mouseY >= bank.y &&
    mouseY <= bank.y + bankImg.height
  ) {
    dialogueText = "Haz clic para sacar dinero";
    dialogueVisible = true;
  } else if (
    mouseX >= people.x &&
    mouseX <= people.x + peopleImg.width &&
    mouseY >= people.y &&
    mouseY <= people.y + peopleImg.height
  ) {
    dialogueText = "Haz clic para sociabilizar";
    dialogueVisible = true;
  } else {
    dialogueVisible = false;
  }
}

function mousePressed() {
  if (
    ((mouseX >= boat.x &&
      mouseX <= boat.x + boatImg.width &&
      mouseY >= boat.y &&
      mouseY <= boat.y + boatImg.height) ||
      (mouseX >= market.x &&
        mouseX <= market.x + marketImg.width &&
        mouseY >= market.y &&
        mouseY <= market.y + marketImg.height) ||
      (mouseX >= boat2.x &&
        mouseX <= boat2.x + boat2Img.width &&
        mouseY >= boat2.y &&
        mouseY <= boat2.y + boat2Img.height)) &&
    hungerUpdate <= 90
  ) {
    hungerUpdate += 10;
    hunger.innerHTML = `${hungerUpdate}`;
    document.getElementById("hungerBox").style.width = `${hungerUpdate}%`;
  } else if (
    mouseX >= myHouse.x &&
    mouseX <= myHouse.x + ownHouseImg.width &&
    mouseY >= myHouse.y &&
    mouseY <= myHouse.y + ownHouseImg.height &&
    sleepUpdate <= 90
  ) {
    sleepUpdate += 10;
    sleep.innerHTML = `${sleepUpdate}`;
    document.getElementById("sleepBox").style.width = `${sleepUpdate}%`;
  } else if (
    mouseX >= bank.x &&
    mouseX <= bank.x + bankImg.width &&
    mouseY >= bank.y &&
    mouseY <= bank.y + bankImg.height &&
    moneyUpdate <= 90
  ) {
    moneyUpdate += 10;
    money.innerHTML = `${moneyUpdate}`;
    document.getElementById("moneyBox").style.width = `${moneyUpdate}%`;
  } else if (
    mouseX >= people.x &&
    mouseX <= people.x + peopleImg.width &&
    mouseY >= people.y &&
    mouseY <= people.y + peopleImg.height &&
    socialUpdate <= 90
  ) {
    socialUpdate += 10;
    social.innerHTML = `${socialUpdate}`;
    document.getElementById("socialBox").style.width = `${socialUpdate}%`;
  }
}
