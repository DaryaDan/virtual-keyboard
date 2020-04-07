const Keyboard = {
  elements: {
    main: null,
    text: null,
    keysContainer: null,
    keys: [],
  },

  eventHandlers: {
    oninput: null,
    onclose: null,
  },

  properties: {
    value: '',
    capsLock: false,
  },

  init() {
    // Create main elements
    this.elements.text = document.createElement('textarea');
    this.elements.main = document.createElement('div');
    this.elements.keysContainer = document.createElement('div');

    // Setup main elements
    this.elements.main.classList.add('keyboard');
    this.elements.text.classList.add('use-keyboard-input');
    this.elements.keysContainer.appendChild(this.createKeys());
    this.elements.keys = this.elements.keysContainer.querySelectorAll('.keyboard__key');

    document.body.innerHTML = 'Изменить язык: Alt+Shift. Работа сделана в Windows';

    // Add to DOM
    this.elements.main.appendChild(this.elements.keysContainer);
    document.body.appendChild(this.elements.main);

    document.body.appendChild(this.elements.text);

    // Automatically use keyboard for elements with .use-keyboard-input
    document.querySelectorAll('.use-keyboard-input').forEach((element) => {
      element.addEventListener('focus', () => {
        this.open(element.value, (currentValue) => {
          element.value = currentValue;
        });
      });
    });
  },

  createKeys() {
    const fragment = document.createDocumentFragment();

    const keyLayout = [192, 49, 50, 51, 52, 53, 54, 55, 56, 57, 48, 189, 187, 8,
      9, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80, 219, 221, 220,
      20, 65, 83, 68, 70, 71, 72, 74, 75, 76, 186, 222, 106, 13,
      16, 90, 88, 67, 86, 66, 78, 77, 188, 190, 191, 107, 38, 46,
      17, 27, 91, 18, 32, 154, 37, 40, 39];

    // Creates HTML for an icon
    const createIconHTML = (iconname) => `<i class="material-icons">${iconname}</i>`;

    keyLayout.forEach((key) => {
      const keyElement = document.createElement('button');
      const insertLineBreak = [8, 220, 13, 46].indexOf(key) !== -1;

      // Add attributes/classes
      keyElement.setAttribute('type', 'button');
      this.elements.text.setAttribute('id', 'up_low');
      keyElement.classList.add('keyboard__key');
      keyElement.setAttribute('data', key);

      let flag = false;
      let q = 0; let a = 0; let
        count = 0;

      if (localStorage.lang === null) {
        localStorage.lang = 0;
      }

      document.onkeydown = function check(event) {
        for (let s = 0; s < keyLayout.length; s += 1) {
          if (event.keyCode === keyLayout[s]) {
            q = 1;
          }
        }
        if (q === 1) {
          q = 0;
          document.querySelector(`button[data = "${event.keyCode}"]`).classList.add('active');
        }

        if (event.keyCode === 18) flag = true;
        if (event.keyCode === 16 && flag) {
          flag = false;
          if (localStorage.lang % 2 === 0) localStorage.lang = 1;
          else localStorage.lang = 0;
          window.location.reload();
        }
      };

      document.onkeyup = function change1(event) {
        for (let s = 0; s < keyLayout.length; s += 1) {
          if (event.keyCode === keyLayout[s]) {
            a = 1;
          }
        }
        if (a === 1) {
          a = 0;
          document.querySelector(`button[data = "${event.keyCode}"]`).classList.remove('active');
        }
      };

      switch (key) {
        case 8:
          keyElement.classList.add('keyboard__key');
          keyElement.innerHTML = createIconHTML('backspace');

          keyElement.addEventListener('click', () => {
            const x = this.properties.value.substring(0, this.properties.value.length - 1);
            this.properties.value = x;
            this.triggerEvent('oninput');
          });

          break;

        case 81:
          keyElement.classList.add('keyboard__key');
          if (localStorage.lang % 2 === 0) {
            keyElement.innerHTML = 'й';
          } else {
            keyElement.innerHTML = 'q';
          }
          keyElement.addEventListener('click', () => {
            if (localStorage.lang % 2 === 0) {
              this.properties.value += 'й';
            } else {
              this.properties.value += 'q';
            }
            this.triggerEvent('oninput');
          });
          break;

        case 87:
          keyElement.classList.add('keyboard__key');
          if (localStorage.lang % 2 === 0) {
            keyElement.innerHTML = 'ц';
          } else {
            keyElement.innerHTML = 'w';
          }
          keyElement.addEventListener('click', () => {
            if (localStorage.lang % 2 === 0) {
              this.properties.value += 'ц';
            } else {
              this.properties.value += 'w';
            }
            this.triggerEvent('oninput');
          });
          break;

        case 69:
          keyElement.classList.add('keyboard__key');
          if (localStorage.lang % 2 === 0) {
            keyElement.innerHTML = 'у';
          } else {
            keyElement.innerHTML = 'e';
          }
          keyElement.addEventListener('click', () => {
            if (localStorage.lang % 2 === 0) {
              this.properties.value += 'у';
            } else {
              this.properties.value += 'e';
            }
            this.triggerEvent('oninput');
          });
          break;

        case 82:
          keyElement.classList.add('keyboard__key');
          if (localStorage.lang % 2 === 0) {
            keyElement.innerHTML = 'к';
          } else {
            keyElement.innerHTML = 'r';
          }
          keyElement.addEventListener('click', () => {
            if (localStorage.lang % 2 === 0) {
              this.properties.value += 'к';
            } else {
              this.properties.value += 'r';
            }
            this.triggerEvent('oninput');
          });
          break;

        case 84:
          keyElement.classList.add('keyboard__key');
          if (localStorage.lang % 2 === 0) {
            keyElement.innerHTML = 'е';
          } else {
            keyElement.innerHTML = 't';
          }
          keyElement.addEventListener('click', () => {
            if (localStorage.lang % 2 === 0) {
              this.properties.value += 'е';
            } else {
              this.properties.value += 't';
            }
            this.triggerEvent('oninput');
          });
          break;

        case 89:
          keyElement.classList.add('keyboard__key');
          if (localStorage.lang % 2 === 0) {
            keyElement.innerHTML = 'н';
          } else {
            keyElement.innerHTML = 'y';
          }
          keyElement.addEventListener('click', () => {
            if (localStorage.lang % 2 === 0) {
              this.properties.value += 'н';
            } else {
              this.properties.value += 'y';
            }
            this.triggerEvent('oninput');
          });
          break;

        case 85:
          keyElement.classList.add('keyboard__key');
          if (localStorage.lang % 2 === 0) {
            keyElement.innerHTML = 'г';
          } else {
            keyElement.innerHTML = 'u';
          }
          keyElement.addEventListener('click', () => {
            if (localStorage.lang % 2 === 0) {
              this.properties.value += 'г';
            } else {
              this.properties.value += 'u';
            }
            this.triggerEvent('oninput');
          });
          break;

        case 73:
          keyElement.classList.add('keyboard__key');
          if (localStorage.lang % 2 === 0) {
            keyElement.innerHTML = 'ш';
          } else {
            keyElement.innerHTML = 'i';
          }
          keyElement.addEventListener('click', () => {
            if (localStorage.lang % 2 === 0) {
              this.properties.value += 'ш';
            } else {
              this.properties.value += 'i';
            }
            this.triggerEvent('oninput');
          });
          break;

        case 79:
          keyElement.classList.add('keyboard__key');
          if (localStorage.lang % 2 === 0) {
            keyElement.innerHTML = 'щ';
          } else {
            keyElement.innerHTML = 'o';
          }
          keyElement.addEventListener('click', () => {
            if (localStorage.lang % 2 === 0) {
              this.properties.value += 'щ';
            } else {
              this.properties.value += 'o';
            }
            this.triggerEvent('oninput');
          });
          break;

        case 80:
          keyElement.classList.add('keyboard__key');
          if (localStorage.lang % 2 === 0) {
            keyElement.innerHTML = 'з';
          } else {
            keyElement.innerHTML = 'p';
          }
          keyElement.addEventListener('click', () => {
            if (localStorage.lang % 2 === 0) {
              this.properties.value += 'з';
            } else {
              this.properties.value += 'p';
            }
            this.triggerEvent('oninput');
          });
          break;

        case 65:
          keyElement.classList.add('keyboard__key');
          if (localStorage.lang % 2 === 0) {
            keyElement.innerHTML = 'ф';
          } else {
            keyElement.innerHTML = 'a';
          }
          keyElement.addEventListener('click', () => {
            if (localStorage.lang % 2 === 0) {
              this.properties.value += 'ф';
            } else {
              this.properties.value += 'a';
            }
            this.triggerEvent('oninput');
          });
          break;

        case 83:
          keyElement.classList.add('keyboard__key');
          if (localStorage.lang % 2 === 0) {
            keyElement.innerHTML = 'ы';
          } else {
            keyElement.innerHTML = 's';
          }
          keyElement.addEventListener('click', () => {
            if (localStorage.lang % 2 === 0) {
              this.properties.value += 'ы';
            } else {
              this.properties.value += 's';
            }
            this.triggerEvent('oninput');
          });
          break;

        case 68:
          keyElement.classList.add('keyboard__key');
          if (localStorage.lang % 2 === 0) {
            keyElement.innerHTML = 'в';
          } else {
            keyElement.innerHTML = 'd';
          }
          keyElement.addEventListener('click', () => {
            if (localStorage.lang % 2 === 0) {
              this.properties.value += 'в';
            } else {
              this.properties.value += 'd';
            }
            this.triggerEvent('oninput');
          });
          break;

        case 70:
          keyElement.classList.add('keyboard__key');
          if (localStorage.lang % 2 === 0) {
            keyElement.innerHTML = 'а';
          } else {
            keyElement.innerHTML = 'f';
          }
          keyElement.addEventListener('click', () => {
            if (localStorage.lang % 2 === 0) {
              this.properties.value += 'а';
            } else {
              this.properties.value += 'f';
            }
            this.triggerEvent('oninput');
          });
          break;

        case 71:
          keyElement.classList.add('keyboard__key');
          if (localStorage.lang % 2 === 0) {
            keyElement.innerHTML = 'п';
          } else {
            keyElement.innerHTML = 'g';
          }
          keyElement.addEventListener('click', () => {
            if (localStorage.lang % 2 === 0) {
              this.properties.value += 'п';
            } else {
              this.properties.value += 'g';
            }
            this.triggerEvent('oninput');
          });
          break;

        case 72:
          keyElement.classList.add('keyboard__key');
          if (localStorage.lang % 2 === 0) {
            keyElement.innerHTML = 'р';
          } else {
            keyElement.innerHTML = 'h';
          }
          keyElement.addEventListener('click', () => {
            if (localStorage.lang % 2 === 0) {
              this.properties.value += 'р';
            } else {
              this.properties.value += 'h';
            }
            this.triggerEvent('oninput');
          });
          break;

        case 74:
          keyElement.classList.add('keyboard__key');
          if (localStorage.lang % 2 === 0) {
            keyElement.innerHTML = 'о';
          } else {
            keyElement.innerHTML = 'j';
          }
          keyElement.addEventListener('click', () => {
            if (localStorage.lang === 0) {
              this.properties.value += 'о';
            } else {
              this.properties.value += 'j';
            }
            this.triggerEvent('oninput');
          });
          break;

        case 75:
          keyElement.classList.add('keyboard__key');
          if (localStorage.lang % 2 === 0) {
            keyElement.innerHTML = 'л';
          } else {
            keyElement.innerHTML = 'k';
          }
          keyElement.addEventListener('click', () => {
            if (localStorage.lang % 2 === 0) {
              this.properties.value += 'л';
            } else {
              this.properties.value += 'k';
            }
            this.triggerEvent('oninput');
          });
          break;

        case 76:
          keyElement.classList.add('keyboard__key');
          if (localStorage.lang % 2 === 0) {
            keyElement.innerHTML = 'д';
          } else {
            keyElement.innerHTML = 'l';
          }
          keyElement.addEventListener('click', () => {
            if (localStorage.lang % 2 === 0) {
              this.properties.value += 'д';
            } else {
              this.properties.value += 'l';
            }
            this.triggerEvent('oninput');
          });
          break;

        case 154:
          keyElement.classList.add('keyboard__key');
          keyElement.innerHTML = 'prt sc';
          break;

        case 46:
          keyElement.classList.add('keyboard__key');
          keyElement.innerHTML = 'delete';

          keyElement.addEventListener('click', () => {
            const t = this.properties.value.substring(1, this.properties.value.length - 1);
            this.properties.value = t;

            this.triggerEvent('oninput');
          });

          break;

        case 106:
          keyElement.classList.add('keyboard__key');
          keyElement.innerHTML = '*';
          keyElement.addEventListener('click', () => {
            this.properties.value += '*';
            this.triggerEvent('oninput');
          });
          break;

        case 107:
          keyElement.classList.add('keyboard__key');
          keyElement.innerHTML = '+';
          keyElement.addEventListener('click', () => {
            this.properties.value += '+';
            this.triggerEvent('oninput');
          });
          break;

        case 9:
          keyElement.classList.add('keyboard__key');
          keyElement.innerHTML = 'tab';
          break;

        case 27:
          keyElement.classList.add('keyboard__key');
          keyElement.innerHTML = 'esc';
          keyElement.addEventListener('click', () => {
            this.close();
            this.triggerEvent('onclose');
          });
          break;

        case 192:
          keyElement.classList.add('keyboard__key');
          if (localStorage.lang % 2 === 0) {
            keyElement.innerHTML = 'ё';
          } else {
            keyElement.innerHTML = '`';
          }
          keyElement.addEventListener('click', () => {
            if (localStorage.lang % 2 === 0) {
              this.properties.value += 'ё';
            } else {
              this.properties.value += '`';
            }
            this.triggerEvent('oninput');
          });
          break;

        case 189:
          keyElement.classList.add('keyboard__key');
          keyElement.innerHTML = '-';
          keyElement.addEventListener('click', () => {
            this.properties.value += '-';
            this.triggerEvent('oninput');
          });
          break;

        case 187:
          keyElement.classList.add('keyboard__key');
          keyElement.innerHTML = '=';
          keyElement.addEventListener('click', () => {
            this.properties.value += '=';
            this.triggerEvent('oninput');
          });
          break;

        case 219:
          keyElement.classList.add('keyboard__key');
          if (localStorage.lang % 2 === 0) {
            keyElement.innerHTML = 'х';
          } else {
            keyElement.innerHTML = '[';
          }
          keyElement.addEventListener('click', () => {
            if (localStorage.lang % 2 === 0) {
              this.properties.value += 'х';
            } else {
              this.properties.value += '[';
            }
            this.triggerEvent('oninput');
          });
          break;

        case 221:
          keyElement.classList.add('keyboard__key');
          if (localStorage.lang % 2 === 0) {
            keyElement.innerHTML = 'ъ';
          } else {
            keyElement.innerHTML = ']';
          }
          keyElement.addEventListener('click', () => {
            if (localStorage.lang % 2 === 0) {
              this.properties.value += 'ъ';
            } else {
              this.properties.value += ']';
            }
            this.triggerEvent('oninput');
          });
          break;

        case 220:
          keyElement.classList.add('keyboard__key');
          keyElement.innerHTML = '\\';
          keyElement.addEventListener('click', () => {
            this.properties.value += '\\';
            this.triggerEvent('oninput');
          });
          break;

        case 186:
          keyElement.classList.add('keyboard__key');
          if (localStorage.lang % 2 === 0) {
            keyElement.innerHTML = 'ж';
          } else {
            keyElement.innerHTML = ';';
          }
          keyElement.addEventListener('click', () => {
            if (localStorage.lang % 2 === 0) {
              this.properties.value += 'ж';
            } else {
              this.properties.value += ';';
            }
            this.triggerEvent('oninput');
          });
          break;


        case 222:
          keyElement.classList.add('keyboard__key');
          if (localStorage.lang % 2 === 0) {
            keyElement.innerHTML = 'э';
          } else {
            keyElement.innerHTML = "'";
          }
          keyElement.addEventListener('click', () => {
            if (localStorage.lang % 2 === 0) {
              this.properties.value += 'э';
            } else {
              this.properties.value += "'";
            }
            this.triggerEvent('oninput');
          });
          break;

        case 90:
          keyElement.classList.add('keyboard__key');
          if (localStorage.lang % 2 === 0) {
            keyElement.innerHTML = 'я';
          } else {
            keyElement.innerHTML = 'z';
          }
          keyElement.addEventListener('click', () => {
            if (localStorage.lang % 2 === 0) {
              this.properties.value += 'я';
            } else {
              this.properties.value += 'z';
            }
            this.triggerEvent('oninput');
          });
          break;

        case 88:
          keyElement.classList.add('keyboard__key');
          if (localStorage.lang % 2 === 0) {
            keyElement.innerHTML = 'ч';
          } else {
            keyElement.innerHTML = 'x';
          }
          keyElement.addEventListener('click', () => {
            if (localStorage.lang % 2 === 0) {
              this.properties.value += 'ч';
            } else {
              this.properties.value += 'x';
            }
            this.triggerEvent('oninput');
          });
          break;

        case 67:
          keyElement.classList.add('keyboard__key');
          if (localStorage.lang % 2 === 0) {
            keyElement.innerHTML = 'с';
          } else {
            keyElement.innerHTML = 'c';
          }
          keyElement.addEventListener('click', () => {
            if (localStorage.lang % 2 === 0) {
              this.properties.value += 'с';
            } else {
              this.properties.value += 'c';
            }
            this.triggerEvent('oninput');
          });
          break;

        case 86:
          keyElement.classList.add('keyboard__key');
          if (localStorage.lang % 2 === 0) {
            keyElement.innerHTML = 'м';
          } else {
            keyElement.innerHTML = 'v';
          }
          keyElement.addEventListener('click', () => {
            if (localStorage.lang % 2 === 0) {
              this.properties.value += 'м';
            } else {
              this.properties.value += 'v';
            }
            this.triggerEvent('oninput');
          });
          break;

        case 66:
          keyElement.classList.add('keyboard__key');
          if (localStorage.lang % 2 === 0) {
            keyElement.innerHTML = 'и';
          } else {
            keyElement.innerHTML = 'b';
          }
          keyElement.addEventListener('click', () => {
            if (localStorage.lang % 2 === 0) {
              this.properties.value += 'и';
            } else {
              this.properties.value += 'b';
            }
            this.triggerEvent('oninput');
          });
          break;

        case 78:
          keyElement.classList.add('keyboard__key');
          if (localStorage.lang % 2 === 0) {
            keyElement.innerHTML = 'т';
          } else {
            keyElement.innerHTML = 'n';
          }
          keyElement.addEventListener('click', () => {
            if (localStorage.lang % 2 === 0) {
              this.properties.value += 'т';
            } else {
              this.properties.value += 'n';
            }
            this.triggerEvent('oninput');
          });
          break;

        case 77:
          keyElement.classList.add('keyboard__key');
          if (localStorage.lang % 2 === 0) {
            keyElement.innerHTML = 'ь';
          } else {
            keyElement.innerHTML = 'm';
          }
          keyElement.addEventListener('click', () => {
            if (localStorage.lang % 2 === 0) {
              this.properties.value += 'ь';
            } else {
              this.properties.value += 'm';
            }
            this.triggerEvent('oninput');
          });
          break;

        case 188:
          keyElement.classList.add('keyboard__key');
          if (localStorage.lang % 2 === 0) {
            keyElement.innerHTML = 'б';
          } else {
            keyElement.innerHTML = ',';
          }
          keyElement.addEventListener('click', () => {
            if (localStorage.lang % 2 === 0) {
              this.properties.value += 'б';
            } else {
              this.properties.value += ',';
            }
            this.triggerEvent('oninput');
          });
          break;

        case 190:
          keyElement.classList.add('keyboard__key');
          if (localStorage.lang % 2 === 0) {
            keyElement.innerHTML = 'ю';
          } else {
            keyElement.innerHTML = '.';
          }
          keyElement.addEventListener('click', () => {
            if (localStorage.lang % 2 === 0) {
              this.properties.value += 'ю';
            } else {
              this.properties.value += '.';
            }
            this.triggerEvent('oninput');
          });
          break;

        case 191:
          keyElement.classList.add('keyboard__key');
          if (localStorage.lang % 2 === 0) {
            keyElement.innerHTML = '.';
          } else {
            keyElement.innerHTML = '/';
          }
          keyElement.addEventListener('click', () => {
            if (localStorage.lang % 2 === 0) {
              this.properties.value += '.';
            } else {
              this.properties.value += '/';
            }
            this.triggerEvent('oninput');
          });
          break;

        case 18:
          keyElement.classList.add('keyboard__key');
          keyElement.innerHTML = 'alt';
          break;

        case 17:
          keyElement.classList.add('keyboard__key');
          keyElement.innerHTML = 'ctrl';
          break;

        case 16:
          keyElement.classList.add('keyboard__key');
          keyElement.innerHTML = 'shift';
          break;


        case 38:
          keyElement.classList.add('keyboard__key');
          keyElement.innerHTML = createIconHTML('keyboard_arrow_up');
          break;

        case 40:
          keyElement.classList.add('keyboard__key');
          keyElement.innerHTML = createIconHTML('keyboard_arrow_down');
          break;

        case 37:
          keyElement.classList.add('keyboard__key');
          keyElement.innerHTML = createIconHTML('keyboard_arrow_left');
          break;

        case 39:
          keyElement.classList.add('keyboard__key');
          keyElement.innerHTML = createIconHTML('keyboard_arrow_right');
          break;

        case 91:
          keyElement.classList.add('keyboard__key');
          keyElement.innerHTML = createIconHTML('language');
          break;

        case 20:
          keyElement.classList.add('keyboard__key', 'keyboard__key--activatable');
          keyElement.innerHTML = createIconHTML('keyboard_capslock');

          keyElement.addEventListener('click', () => {
            if (count % 2 === 0) {
              this.toggleCapsLock();
              keyElement.classList.toggle('keyboard__key--active', this.properties.capsLock);
              document.getElementById('up_low').style.textTransform = 'uppercase';
            } else if (count % 2 !== 0) {
              this.toggleCapsLock();
              keyElement.classList.toggle('keyboard__key--active', this.properties.capsLock);
              document.getElementById('up_low').style.textTransform = 'none';
            }
            count += 1;
          });

          break;

        case 13:
          keyElement.classList.add('keyboard__key');
          keyElement.innerHTML = createIconHTML('keyboard_return');

          keyElement.addEventListener('click', () => {
            this.properties.value += '\n';
            this.triggerEvent('oninput');
          });

          break;

        case 32:
          keyElement.classList.add('keyboard__key--extra-wide');
          keyElement.innerHTML = createIconHTML('space_bar');

          keyElement.addEventListener('click', () => {
            this.properties.value += ' ';
            this.triggerEvent('oninput');
          });

          break;

        default:

          keyElement.textContent = String.fromCharCode(key).toLowerCase();

          keyElement.addEventListener('click', () => {
            this.properties.value += String.fromCharCode(key);
            this.triggerEvent('oninput');
          });

          break;
      }

      fragment.appendChild(keyElement);

      if (insertLineBreak) {
        fragment.appendChild(document.createElement('br'));
      }
    });

    return fragment;
  },

  triggerEvent(handlerName) {
    if (typeof this.eventHandlers[handlerName] === 'function') {
      this.eventHandlers[handlerName](this.properties.value);
    }
  },

  toggleCapsLock() {
    this.properties.c = !this.properties.c;

    for (const key of this.elements.keys) {
      if (key.childElementCount === 0) {
        const m = this.properties.c ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
        key.textContent = m;
      }
    }
  },

  open(initialValue, oninput, onclose) {
    this.properties.value = initialValue || '';
    this.eventHandlers.oninput = oninput;
    this.eventHandlers.onclose = onclose;
    this.elements.main.classList.remove('keyboard--hidden');
  },

  close() {
    this.properties.value = '';
    this.eventHandlers.oninput = oninput;
    this.eventHandlers.onclose = onclose;
    this.elements.main.classList.add('keyboard--hidden');
  },
};

window.addEventListener('DOMContentLoaded', () => {
  Keyboard.init();
});
