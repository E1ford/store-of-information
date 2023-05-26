//Functional 
function Size(width, heigth) {
  this.width = width;
  this.heigth = heigth;

  this.resize = (width, heigth) => {
    this.width = width;
    this.heigth = heigth;
  };
}

function Size3D(width, heigth, z) {
  Size.call(this, width, heigth);
  this.z = z;

  const resize = this.resize; //сохраняем родительский метод
  this.resize = (width, heigth, z) => {
    resize.call(this, width, heigth);
    this.z = z;
  }; //расширяем
}

// проверка функции конструктора Size
const canvas = new Size(1, 1);
console.log(canvas); // -> Size { width: 1, heigth: 1, resize: [Function (anonymous)] }
canvas.resize(20, 20);
console.log(canvas); // -> Size { width: 20, heigth: 20, resize: [Function (anonymous)] }

// проверка функции конструктора Size3D 
const canvas3D = new Size3D(5, 5, 5);
console.log(canvas3D); // -> Size3D { width: 5, heigth: 5, resize: [Function(anonymous)], z: 5 }
canvas3D.resize(55, 55, 55);
console.log(canvas3D); // -> Size3D { width: 55, heigth: 55, resize: [Function(anonymous)], z: 55 }



// Prototype 
function Size(width, heigth) {
  this.width = width;
  this.heigth = heigth;
}
Size.prototype.resize = function (width, heigth) {
  this.width = width;
  this.heigth = heigth;
};

function Size3D(width, heigth, z) {
  Size.call(this, width, heigth);
  this.z = z;
}
Size3D.prototype = Object.create(Size.prototype); // делаем Size3D наследником Size
Size3D.prototype.constructor = Size3D; // эта строка не обязательна

Size3D.prototype.resize = function (width, heigth, z) {
  Size.prototype.resize.call(this, width, heigth); // вызывыаем родительский метод
  this.z = z; // расширяем его
};

// проверка функции конструктора Size
const canvas = new Size(1, 1);
console.log(canvas); // -> Size { width: 1, heigth: 1 }
canvas.resize(20, 20);
console.log(canvas); // -> Size { width: 20, heigth: 20 }

// проверка функции конструктора Size3D
const canvas3D = new Size3D(5, 5, 5);
console.log(canvas3D); // -> Size3D { width: 5, heigth: 5, z: 5 }
canvas3D.resize(55, 55, 55);
console.log(canvas3D); // -> Size3D { width: 55, heigth: 55, z: 55 }

// Class
class Size {
  constructor(width, heigth) { // определяем поля который будут в новом объекте
    this.width = width;
    this.heigth = heigth;
  }
  resize(width, heigth) { // создаем метод который поместится в цепочку прототипов
    this.width = width;
    this.heigth = heigth;
  }
}

class Size3D extends Size { // делаем класс Size3D наследником Size
  constructor(width, heigth, z) {
    super(width, heigth); // вызываем конструктор родителя
    this.z = z; // расширяем родительский конструктор
  }
  resize(width, heigth, z) {
    super.resize(width, heigth); // вызываем родительский метод
    this.z = z;                  // дополняем этот метод новым функционалом
  }
}


// проверка функции конструктора Size
const canvas = new Size(1, 1);
console.log(canvas); // -> Size { width: 1, heigth: 1 }
canvas.resize(20, 20);
console.log(canvas); // -> Size { width: 20, heigth: 20 }

// проверка функции конструктора Size3D
const canvas3D = new Size3D(5, 5, 5);
console.log(canvas3D); // -> Size3D { width: 5, heigth: 5, z: 5 }
canvas3D.resize(55, 55, 55);
console.log(canvas3D); // -> Size3D { width: 55, heigth: 55, z: 55 }