/* eslint linebreak-style: ["error", "windows"] */
const container = document.createElement('div');
container.className = 'container';
document.body.append(container);
const rusLet = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace', 'tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'del', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'enter', 'shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '↑', 'shift', 'ctrl', 'win', 'alt', 'space', 'alt', '←', '↓', '→', 'ctrl'];
const engLet = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace', 'tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'del', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'enter', 'shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '↑', 'shift', 'ctrl', 'win', 'alt', 'space', 'alt', '←', '↓', '→', 'ctrl'];
const buttonsCode = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];
const rusLetUp = ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace', 'tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'del', 'CapsLock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'enter', 'shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '↑', 'shift', 'ctrl', 'win', 'alt', 'space', 'alt', '←', '↓', '→', 'ctrl'];
const engLetUp = ['~', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'backspace', 'tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'del', 'CapsLock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'enter', 'shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '↑', 'shift', 'ctrl', 'win', 'alt', 'space', 'alt', '←', '↓', '→', 'ctrl'];

container.insertAdjacentHTML('afterbegin', '<textarea autofocus class="textarea" id="textarea" rows="5" cols="50"></textarea>');
container.insertAdjacentHTML('afterbegin', '<p class="description">Перекючение языка : Alt + Shift</p>');
container.insertAdjacentHTML('afterbegin', '<p class="description">ОС Windows</p>');

const keyboard = document.createElement('div');
keyboard.className = 'keyboard';
container.append(keyboard);

// --loc stor

let languageUp = false;
let languageEng = true;
let shifted = false;

// --row
const row = document.createElement('div');
row.className = 'row';
keyboard.append(row);

const Backquote = document.createElement('div');
Backquote.className = 'btn';
Backquote.id = 'btn-backquote';
Backquote.innerHTML = '`';
row.append(Backquote);

const digit1 = document.createElement('div');
digit1.className = 'btn';
digit1.id = 'btn-digit1';
digit1.innerHTML = '1';
row.append(digit1);

const digit2 = document.createElement('div');
digit2.className = 'btn';
digit2.id = 'btn-digit2';
digit2.innerHTML = '2';
row.append(digit2);

const digit3 = document.createElement('div');
digit3.className = 'btn';
digit3.id = 'btn-digit3';
digit3.innerHTML = '3';
row.append(digit3);

const digit4 = document.createElement('div');
digit4.className = 'btn';
digit4.id = 'btn-digit4';
digit4.innerHTML = '4';
row.append(digit4);

const digit5 = document.createElement('div');
digit5.className = 'btn';
digit5.id = 'btn-digit5';
digit5.innerHTML = '5';
row.append(digit5);

const digit6 = document.createElement('div');
digit6.className = 'btn';
digit6.id = 'btn-digit6';
digit6.innerHTML = '6';
row.append(digit6);

const digit7 = document.createElement('div');
digit7.className = 'btn';
digit7.id = 'btn-digit7';
digit7.innerHTML = '7';
row.append(digit7);

const digit8 = document.createElement('div');
digit8.className = 'btn';
digit8.id = 'btn-digit8';
digit8.innerHTML = '8';
row.append(digit8);

const digit9 = document.createElement('div');
digit9.className = 'btn';
digit9.id = 'btn-digit9';
digit9.innerHTML = '9';
row.append(digit9);

const digit0 = document.createElement('div');
digit0.className = 'btn';
digit0.id = 'btn-digit0';
digit0.innerHTML = '0';
row.append(digit0);

const minus = document.createElement('div');
minus.className = 'btn';
minus.id = 'btn-minus';
minus.innerHTML = '-';
row.append(minus);

const equal = document.createElement('div');
equal.className = 'btn';
equal.id = 'btn-equal';
equal.innerHTML = '=';
row.append(equal);

const backspace = document.createElement('div');
backspace.className = 'btn';
backspace.id = 'btn-backspace';
backspace.innerHTML = 'backspace';
row.append(backspace);

// --row
const row2 = document.createElement('div');
row2.className = 'row';
keyboard.append(row2);

const tab = document.createElement('div');
tab.className = 'btn';
tab.id = 'btn-tab';
tab.innerHTML = 'tab';
row2.append(tab);

const letterQ = document.createElement('div');
letterQ.className = 'btn';
letterQ.id = 'btn-letterQ';
letterQ.innerHTML = 'q';
row2.append(letterQ);

const letterW = document.createElement('div');
letterW.className = 'btn';
letterW.id = 'btn-letterW';
letterW.innerHTML = 'w';
row2.append(letterW);

const letterE = document.createElement('div');
letterE.className = 'btn';
letterE.id = 'btn-letterE';
letterE.innerHTML = 'e';
row2.append(letterE);

const letterR = document.createElement('div');
letterR.className = 'btn';
letterR.id = 'btn-letterR';
letterR.innerHTML = 'r';
row2.append(letterR);

const letterT = document.createElement('div');
letterT.className = 'btn';
letterT.id = 'btn-letterT';
letterT.innerHTML = 't';
row2.append(letterT);

const letterY = document.createElement('div');
letterY.className = 'btn';
letterY.id = 'btn-letterY';
letterY.innerHTML = 'y';
row2.append(letterY);

const letterU = document.createElement('div');
letterU.className = 'btn';
letterU.id = 'btn-letterU';
letterU.innerHTML = 'u';
row2.append(letterU);

const letterI = document.createElement('div');
letterI.className = 'btn';
letterI.id = 'btn-letterI';
letterI.innerHTML = 'i';
row2.append(letterI);

const letterO = document.createElement('div');
letterO.className = 'btn';
letterO.id = 'btn-letterO';
letterO.innerHTML = 'o';
row2.append(letterO);

const letterP = document.createElement('div');
letterP.className = 'btn';
letterP.id = 'btn-letterP';
letterP.innerHTML = 'p';
row2.append(letterP);

const bracketLeft = document.createElement('div');
bracketLeft.className = 'btn';
bracketLeft.id = 'btn-bracketLeft';
bracketLeft.innerHTML = '[';
row2.append(bracketLeft);

const bracketRight = document.createElement('div');
bracketRight.className = 'btn';
bracketRight.id = 'btn-bracketRight';
bracketRight.innerHTML = ']';
row2.append(bracketRight);

const backlash = document.createElement('div');
backlash.className = 'btn';
backlash.id = 'btn-backlash';
backlash.innerHTML = '\\';
row2.append(backlash);

const del = document.createElement('div');
del.className = 'btn';
del.id = 'btn-del';
del.innerHTML = 'del';
row2.append(del);

// --row
const row3 = document.createElement('div');
row3.className = 'row';
keyboard.append(row3);

const CapsLock = document.createElement('div');
CapsLock.className = 'btn';
CapsLock.id = 'btn-CapsLock';
CapsLock.innerHTML = 'CapsLock';
row3.append(CapsLock);

const letterA = document.createElement('div');
letterA.className = 'btn';
letterA.id = 'btn-letterA';
letterA.innerHTML = 'a';
row3.append(letterA);

const letterS = document.createElement('div');
letterS.className = 'btn';
letterS.id = 'btn-letterS';
letterS.innerHTML = 's';
row3.append(letterS);

const letterD = document.createElement('div');
letterD.className = 'btn';
letterD.id = 'btn-letterD';
letterD.innerHTML = 'd';
row3.append(letterD);

const letterF = document.createElement('div');
letterF.className = 'btn';
letterF.id = 'btn-letterF';
letterF.innerHTML = 'f';
row3.append(letterF);

const letterG = document.createElement('div');
letterG.className = 'btn';
letterG.id = 'btn-letterG';
letterG.innerHTML = 'g';
row3.append(letterG);

const letterH = document.createElement('div');
letterH.className = 'btn';
letterH.id = 'btn-letterH';
letterH.innerHTML = 'h';
row3.append(letterH);

const letterJ = document.createElement('div');
letterJ.className = 'btn';
letterJ.id = 'btn-letterJ';
letterJ.innerHTML = 'j';
row3.append(letterJ);

const letterK = document.createElement('div');
letterK.className = 'btn';
letterK.id = 'btn-letterK';
letterK.innerHTML = 'k';
row3.append(letterK);

const letterL = document.createElement('div');
letterL.className = 'btn';
letterL.id = 'btn-letterL';
letterL.innerHTML = 'l';
row3.append(letterL);

const semicolon = document.createElement('div');
semicolon.className = 'btn';
semicolon.id = 'btn-semicolon';
semicolon.innerHTML = ';';
row3.append(semicolon);

const quote = document.createElement('div');
quote.className = 'btn';
quote.id = 'btn-quote';
quote.innerHTML = "'";
row3.append(quote);

const enter = document.createElement('div');
enter.className = 'btn';
enter.id = 'btn-enter';
enter.innerHTML = 'enter';
row3.append(enter);

// --row 4

const row4 = document.createElement('div');
row4.className = 'row';
keyboard.append(row4);

const shiftLeft = document.createElement('div');
shiftLeft.className = 'btn';
shiftLeft.id = 'btn-shiftLeft';
shiftLeft.innerHTML = 'shift';
row4.append(shiftLeft);

const letterZ = document.createElement('div');
letterZ.className = 'btn';
letterZ.id = 'btn-letterZ';
letterZ.innerHTML = 'z';
row4.append(letterZ);

const letterX = document.createElement('div');
letterX.className = 'btn';
letterX.id = 'btn-letterX';
letterX.innerHTML = 'x';
row4.append(letterX);

const letterC = document.createElement('div');
letterC.className = 'btn';
letterC.id = 'btn-letterC';
letterC.innerHTML = 'c';
row4.append(letterC);

const letterV = document.createElement('div');
letterV.className = 'btn';
letterV.id = 'btn-letterV';
letterV.innerHTML = 'v';
row4.append(letterV);

const letterB = document.createElement('div');
letterB.className = 'btn';
letterB.id = 'btn-letterB';
letterB.innerHTML = 'b';
row4.append(letterB);

const letterN = document.createElement('div');
letterN.className = 'btn';
letterN.id = 'btn-letterN';
letterN.innerHTML = 'n';
row4.append(letterN);

const letterM = document.createElement('div');
letterM.className = 'btn';
letterM.id = 'btn-letterM';
letterM.innerHTML = 'm';
row4.append(letterM);

const comma = document.createElement('div');
comma.className = 'btn';
comma.id = 'btn-comma';
comma.innerHTML = ',';
row4.append(comma);

const period = document.createElement('div');
period.className = 'btn';
period.id = 'btn-period';
period.innerHTML = '.';
row4.append(period);

const slash = document.createElement('div');
slash.className = 'btn';
slash.id = 'btn-slash';
slash.innerHTML = '/';
row4.append(slash);

const arrowUp = document.createElement('div');
arrowUp.className = 'btn';
arrowUp.id = 'btn-arrowUp';
arrowUp.innerHTML = '↑';
row4.append(arrowUp);

const shiftRight = document.createElement('div');
shiftRight.className = 'btn';
shiftRight.id = 'btn-shiftRight';
shiftRight.innerHTML = 'shift';
row4.append(shiftRight);

// --row 5
const row5 = document.createElement('div');
row5.className = 'row';
keyboard.append(row5);

const ctrlLeft = document.createElement('div');
ctrlLeft.className = 'btn';
ctrlLeft.id = 'btn-ctrlLeft';
ctrlLeft.innerHTML = 'ctrl';
row5.append(ctrlLeft);

const win = document.createElement('div');
win.className = 'btn';
win.id = 'btn-win';
win.innerHTML = 'win';
row5.append(win);

const altLeft = document.createElement('div');
altLeft.className = 'btn';
altLeft.id = 'btn-altLeft';
altLeft.innerHTML = 'alt';
row5.append(altLeft);

const space = document.createElement('div');
space.className = 'btn';
space.id = 'btn-space';
space.innerHTML = 'space';
row5.append(space);

const altRight = document.createElement('div');
altRight.className = 'btn';
altRight.id = 'btn-altRight';
altRight.innerHTML = 'alt';
row5.append(altRight);

const arrowLeft = document.createElement('div');
arrowLeft.className = 'btn';
arrowLeft.id = 'btn-arrowLeft';
arrowLeft.innerHTML = '←';
row5.append(arrowLeft);

const arrowDown = document.createElement('div');
arrowDown.className = 'btn';
arrowDown.id = 'btn-arrowDown';
arrowDown.innerHTML = '↓';
row5.append(arrowDown);

const arrowRight = document.createElement('div');
arrowRight.className = 'btn';
arrowRight.id = 'btn-arrowRight';
arrowRight.innerHTML = '→';
row5.append(arrowRight);

const ctrlRight = document.createElement('div');
ctrlRight.className = 'btn';
ctrlRight.id = 'btn-ctrlRight';
ctrlRight.innerHTML = 'ctrl';
row5.append(ctrlRight);

// --add spans
let btns = document.querySelectorAll('.btn');
btns = Array.from(btns);

// --language--//

// eslint-disable-next-line func-names
const changeLanguage = function () {
  if (languageEng) {
    for (let i = 0; i < rusLet.length; i += 1) {
      if (rusLet[i] === 'Control') btns[i].innerHTML = 'Ctrl';
      else if (rusLet[i] === 'Meta') btns[i].innerHTML = 'Win';
      else if (rusLet[i] === 'AltGraph') btns[i].innerHTML = 'Alt Gr';
      else if (rusLet[i] === 'ArrowUp') btns[i].innerHTML = '↑';
      else if (rusLet[i] === 'ArrowLeft') btns[i].innerHTML = '←';
      else if (rusLet[i] === 'ArrowRight') btns[i].innerHTML = '→';
      else if (rusLet[i] === 'ArrowDown') btns[i].innerHTML = '↓';
      else {
        // eslint-disable-next-line no-unused-expressions
        languageUp ? btns[i].innerHTML = rusLetUp[i] : btns[i].innerHTML = rusLet[i];
      }
    }
    languageEng = false;
    localStorage.setItem('languageEng', 'false');
  } else {
    for (let i = 0; i < engLet.length; i += 1) {
      if (rusLet[i] === 'Control') btns[i].innerHTML = 'Ctrl';
      else if (rusLet[i] === 'Meta') btns[i].innerHTML = 'Win';
      else if (rusLet[i] === 'AltGraph') btns[i].innerHTML = 'Alt Gr';
      else if (rusLet[i] === 'ArrowUp') btns[i].innerHTML = '↑';
      else if (rusLet[i] === 'ArrowLeft') btns[i].innerHTML = '←';
      else if (rusLet[i] === 'ArrowRight') btns[i].innerHTML = '→';
      else if (rusLet[i] === 'ArrowDown') btns[i].innerHTML = '↓';
      else {
        // eslint-disable-next-line no-unused-expressions
        languageUp ? btns[i].innerHTML = engLetUp[i] : btns[i].innerHTML = engLet[i];
      }
    }
    languageEng = true;
    localStorage.setItem('languageEng', 'true');
  }
};

function runOnKeys(func, ...keys) {
  const pressed = new Set();

  document.addEventListener('keydown', (event) => {
    pressed.add(event.key);
    // eslint-disable-next-line no-restricted-syntax
    for (const key of keys) {
      if (!pressed.has(key)) {
        return;
      }
    }
    pressed.clear();
    func();
  });

  document.addEventListener('keyup', (event) => {
    pressed.delete(event.key);
  });
}
runOnKeys(changeLanguage, 'Shift', 'Alt');

// --caps
// eslint-disable-next-line func-names
const changeUp = function () {
  if (!languageUp) {
    for (let i = 0; i < rusLet.length; i += 1) {
      if (rusLet[i] === 'Control') btns[i].innerHTML = 'Ctrl';
      else if (rusLet[i] === '1' && shifted) btns[i].innerHTML = '!';
      else if (rusLet[i] === '2' && shifted) btns[i].innerHTML = languageEng ? '@' : '"';
      else if (rusLet[i] === '3' && shifted) btns[i].innerHTML = languageEng ? '#' : '№';
      else if (rusLet[i] === '4' && shifted) btns[i].innerHTML = languageEng ? '$' : ';';
      else if (rusLet[i] === '5' && shifted) btns[i].innerHTML = '%';
      else if (rusLet[i] === '6' && shifted) btns[i].innerHTML = languageEng ? '^' : ':';
      else if (rusLet[i] === '7' && shifted) btns[i].innerHTML = languageEng ? '&' : '?';
      else if (rusLet[i] === '8' && shifted) btns[i].innerHTML = '*';
      else if (rusLet[i] === '9' && shifted) btns[i].innerHTML = '(';
      else if (rusLet[i] === '0' && shifted) btns[i].innerHTML = ')';
      else if (rusLet[i] === '-' && shifted) btns[i].innerHTML = '_';
      else if (rusLet[i] === '=' && shifted) btns[i].innerHTML = '+';
      else {
        // eslint-disable-next-line no-unused-expressions
        languageEng ? btns[i].innerHTML = engLetUp[i] : btns[i].innerHTML = rusLetUp[i];
      }
    }
    languageUp = true;
    localStorage.setItem('languageUp', 'true');
  } else {
    for (let i = 0; i < engLet.length; i += 1) {
      if (rusLet[i] === 'Control') btns[i].innerHTML = 'Ctrl';
      else if (rusLet[i] === '1' && shifted) btns[i].innerHTML = '!';
      else if (rusLet[i] === '2' && shifted) btns[i].innerHTML = languageEng ? '@' : '"';
      else if (rusLet[i] === '3' && shifted) btns[i].innerHTML = languageEng ? '#' : '№';
      else if (rusLet[i] === '4' && shifted) btns[i].innerHTML = languageEng ? '$' : ';';
      else if (rusLet[i] === '5' && shifted) btns[i].innerHTML = '%';
      else if (rusLet[i] === '6' && shifted) btns[i].innerHTML = languageEng ? '^' : ':';
      else if (rusLet[i] === '7' && shifted) btns[i].innerHTML = languageEng ? '&' : '?';
      else if (rusLet[i] === '8' && shifted) btns[i].innerHTML = '*';
      else if (rusLet[i] === '9' && shifted) btns[i].innerHTML = '(';
      else if (rusLet[i] === '0' && shifted) btns[i].innerHTML = ')';
      else if (rusLet[i] === '-' && shifted) btns[i].innerHTML = '_';
      else if (rusLet[i] === '=' && shifted) btns[i].innerHTML = '+';
      else {
        // eslint-disable-next-line no-unused-expressions
        languageEng ? btns[i].innerHTML = engLet[i] : btns[i].innerHTML = rusLet[i];
      }
    }
    languageUp = false;
    localStorage.setItem('languageUp', 'false');
  }
};

for (let i = 0; i < btns.length; i += 1) {
  btns[i].setAttribute('keyname', btns[i].innerHTML);
  btns[i].setAttribute('upperCaseName', btns[i].innerHTML.toUpperCase());
}
window.addEventListener('keydown', (e) => {
  if (e.code === 'Space') {
    space.classList.add('active');
  // eslint-disable-next-line no-empty
  } else if (e.code === 'CapsLock') {
  } else if (e.code === 'Delete') {
    del.classList.add('active');
  } else if (e.code === 'Backspace') {
    backspace.classList.add('active');
  } else if (e.code === 'Enter') {
    enter.classList.add('active');
  } else if (e.code === 'Tab') {
    tab.classList.add('active');
  } else if (e.code === 'MetaLeft') {
    win.classList.add('active');
  } else if (e.code === 'ShiftLeft') {
    if (e.repeat) { return; }
    shifted = true;
    shiftLeft.classList.add('active');
    shiftRight.classList.remove('active');
    changeUp();
  } else if (e.code === 'ShiftRight') {
    if (e.repeat) { return; }
    shifted = true;
    shiftRight.classList.add('active');
    shiftLeft.classList.remove('active');
    changeUp();
  } else if (e.code === 'ControlLeft') {
    ctrlLeft.classList.add('active');
    ctrlRight.classList.remove('active');
  } else if (e.code === 'ControlRight') {
    ctrlRight.classList.add('active');
    ctrlLeft.classList.remove('active');
  } else if (e.code === 'AltLeft') {
    altLeft.classList.add('active');
    altRight.classList.remove('active');
  } else if (e.code === 'AltRight') {
    altRight.classList.add('active');
    altLeft.classList.remove('active');
  } else if (e.code === 'ArrowUp') {
    e.preventDefault();
    // eslint-disable-next-line no-use-before-define
    textarea.value += '↑';
    arrowUp.classList.add('active');
  } else if (e.code === 'ArrowDown') {
    e.preventDefault();
    // eslint-disable-next-line no-use-before-define
    textarea.value += '↓';
    arrowDown.classList.add('active');
  } else if (e.code === 'ArrowLeft') {
    e.preventDefault();
    // eslint-disable-next-line no-use-before-define
    textarea.value += '←';
    arrowLeft.classList.add('active');
  } else if (e.code === 'ArrowRight') {
    e.preventDefault();
    // eslint-disable-next-line no-use-before-define
    textarea.value += '→';
    arrowRight.classList.add('active');
  } else {
    btns[buttonsCode.indexOf(e.code)].classList.add('active');
  }
});
window.addEventListener('keyup', (e) => {
  if (e.code === 'CapsLock') {
    CapsLock.classList.toggle('active');
    changeUp();
  } else if (e.code === 'Space') {
    space.classList.remove('active');
  } else if (e.code === 'Delete') {
    del.classList.remove('active');
  } else if (e.code === 'Backspace') {
    backspace.classList.remove('active');
  } else if (e.code === 'Enter') {
    enter.classList.remove('active');
  } else if (e.code === 'Tab') {
    tab.classList.remove('active');
  } else if (e.code === 'MetaLeft') {
    win.classList.remove('active');
  } else if (e.code === 'ShiftLeft') {
    shiftLeft.classList.remove('active');
    shifted = false;
    changeUp();
  } else if (e.code === 'ShiftRight') {
    shiftRight.classList.remove('active');
    shifted = false;
    changeUp();
  } else if (e.code === 'ControlLeft') {
    ctrlLeft.classList.remove('active');
  } else if (e.code === 'ControlRight') {
    ctrlRight.classList.remove('active');
  } else if (e.code === 'AltLeft') {
    altLeft.classList.remove('active');
  } else if (e.code === 'AltRight') {
    altRight.classList.remove('active');
  } else if (e.code === 'ArrowUp') {
    arrowUp.classList.remove('active');
  } else if (e.code === 'ArrowDown') {
    arrowDown.classList.remove('active');
  } else if (e.code === 'ArrowLeft') {
    arrowLeft.classList.remove('active');
  } else if (e.code === 'ArrowRight') {
    arrowRight.classList.remove('active');
  } else {
    btns[buttonsCode.indexOf(e.code)].classList.remove('active');
  }
});
const textarea = document.querySelector('.textarea');
window.addEventListener('mousedown', (e) => {
  if (e.target.getAttribute('keyname') === 'space') {
    space.classList.add('active');
    // eslint-disable-next-line no-undef
    textarea.value = `${textarea.value.substring(0, textarea.selectionStart)} ${textarea.value.substring(textarea.selectionStart)}`;
  // eslint-disable-next-line no-empty
  } else if (e.target.getAttribute('keyname') === 'CapsLock') {
  } else if (e.target.getAttribute('keyname') === 'del') {
    del.classList.add('active');
    // eslint-disable-next-line max-len
    textarea.value = textarea.value.substring(0, textarea.selectionStart) + textarea.value.substring(textarea.selectionStart + 1);
  } else if (e.target.getAttribute('keyname') === 'backspace') {
    backspace.classList.add('active');
    const a = textarea.selectionStart;
    // eslint-disable-next-line max-len
    textarea.value = textarea.value.substring(0, textarea.selectionStart - 1) + textarea.value.substring(textarea.selectionStart);
    // eslint-disable-next-line no-multi-assign
    textarea.selectionStart = textarea.selectionEnd = a - 1;
  } else if (e.target.getAttribute('keyname') === 'enter') {
    enter.classList.add('active');
    textarea.value = `${textarea.value.substring(0, textarea.selectionStart)}\n${textarea.value.substring(textarea.selectionStart)}`;
  } else if (e.target.getAttribute('keyname') === 'tab') {
    tab.classList.add('active');
    textarea.value = `${textarea.value.substring(0, textarea.selectionStart)}    ${textarea.value.substring(textarea.selectionStart)}`;
  } else if (e.target.getAttribute('keyname') === 'win') {
    win.classList.add('active');
  } else if (e.target.getAttribute('keyname') === 'shift') {
    e.target.classList.add('active');
    shifted = true;
    changeUp();
  } else if (e.target.getAttribute('keyname') === 'ctrl') {
    e.target.classList.add('active');
  } else if (e.target.getAttribute('keyname') === 'alt') {
    e.target.classList.add('active');
  } else if (e.target.getAttribute('keyname') === '↑') {
    textarea.value += '↑';
    arrowUp.classList.add('active');
  } else if (e.target.getAttribute('keyname') === '↓') {
    textarea.value += '↓';
    arrowDown.classList.add('active');
  } else if (e.target.getAttribute('keyname') === '←') {
    textarea.value += '←';
    arrowLeft.classList.add('active');
  } else if (e.target.getAttribute('keyname') === '→') {
    textarea.value += '→';
    arrowRight.classList.add('active');
  } else {
    for (let i = 0; i < btns.length; i += 1) {
      if (e.target.getAttribute('keyname') === btns[i].getAttribute('keyname') || e.target.getAttribute('keyname') === btns[i].getAttribute('upperCaseName')) {
        btns[i].classList.add('active');
      }
    }
    if (e.target.classList.contains('btn')) { textarea.value += e.target.innerHTML; }
  }
});
window.addEventListener('mouseup', (e) => {
  if (e.target.getAttribute('keyname') === 'CapsLock') {
    CapsLock.classList.toggle('active');
    changeUp();
  } else if (e.target.getAttribute('keyname') === 'space') {
    space.classList.remove('active');
  } else if (e.target.getAttribute('keyname') === 'del') {
    del.classList.remove('active');
  } else if (e.target.getAttribute('keyname') === 'backspace') {
    backspace.classList.remove('active');
  } else if (e.target.getAttribute('keyname') === 'enter') {
    enter.classList.remove('active');
  } else if (e.target.getAttribute('keyname') === 'tab') {
    tab.classList.remove('active');
  } else if (e.target.getAttribute('keyname') === 'win') {
    win.classList.remove('active');
  } else if (e.target.getAttribute('keyname') === 'shift') {
    e.target.classList.remove('active');
    shifted = false;
    changeUp();
  } else if (e.target.getAttribute('keyname') === 'ctrl') {
    e.target.classList.remove('active');
  } else if (e.target.getAttribute('keyname') === 'alt') {
    e.target.classList.remove('active');
  } else if (e.target.getAttribute('keyname') === '↑') {
    arrowUp.classList.remove('active');
  } else if (e.target.getAttribute('keyname') === '↓') {
    arrowDown.classList.remove('active');
  } else if (e.target.getAttribute('keyname') === '←') {
    arrowLeft.classList.remove('active');
  } else if (e.target.getAttribute('keyname') === '→') {
    arrowRight.classList.remove('active');
  } else {
    for (let i = 0; i < btns.length; i += 1) {
      if (e.target.getAttribute('keyname') === btns[i].getAttribute('keyname') || e.target.getAttribute('keyname') === btns[i].getAttribute('upperCaseName')) {
        btns[i].classList.remove('active');
      }
    }
  }
});

document.addEventListener('DOMContentLoaded', () => {
  if (JSON.parse(localStorage.getItem('languageEng'))) {
    languageEng = false;
    changeLanguage();
  } else {
    languageEng = true;
    changeLanguage();
  }
  if (JSON.parse(localStorage.getItem('languageUp'))) {
    languageUp = false;
    changeUp();
    document.querySelector('#btn-CapsLock').classList.add('active');
  } else {
    languageUp = true;
    changeUp();
    document.querySelector('#btn-CapsLock').classList.remove('active');
  }
});
