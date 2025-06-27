let input = '';

    function updateDisplay() {
      document.getElementById('display').textContent = input || '0';
    }

    function appendNumber(num) {
      input += num;
      updateDisplay();
    }

    function appendOperator(op) {
      if (input === '') return;
      const lastChar = input[input.length - 1];
      if (lastChar === '+' || lastChar === '-' || lastChar === '*' || lastChar === '/') return;
      input += op;
      updateDisplay();
    }

    function clearDisplay() {
      input = '';
      updateDisplay();
    }

    function backspace() {
      input = input.slice(0, -1);
      updateDisplay();
    }

    function calculate() {
      if (input !== '') {
        input = eval(input).toString();
        updateDisplay();
      }
    }

    updateDisplay();