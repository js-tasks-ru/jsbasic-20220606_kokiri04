let calculator = {
  sum () {
    return this.a + this.b;
  },
  mul () {
    return this.a * this.b;
  },
  read () {
    this.a = +prompt('a?');
    this.b = +prompt('b?');
  },
};

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
