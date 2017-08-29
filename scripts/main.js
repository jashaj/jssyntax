requirejs(['../node_modules/esprima/dist/esprima'], function (parser) {
  'use strict';

  const validationBtn = document.getElementById('validate');
  const result = document.getElementById('result');


  validationBtn.addEventListener('click', validateSyntax);


  function validateSyntax(e) {
    e.preventDefault();
    try {
      const scriptArea = document.getElementById('scriptContent');
      const syntax = parser.parse(scriptArea.value, {tolerant: true, loc: true});
      const errors = syntax.errors;
      if (errors === undefined || errors.length === 0) {
        result.textContent = 'This is a valid script';
      } else {

        let list = document.createElement('ol');
        errors.forEach(function (err) {
          let item = document.createElement('li');
          item.textContent = `${err}`;
          list.appendChild(item);
        });

        result.innerHTML = `Invalid script. Number of issues: ${errors.length}`;
        result.appendChild(list);
      }

    } catch (e) {
      result.innerHTML = e;
    }

  }

});