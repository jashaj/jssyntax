require(['../node_modules/acorn/dist/acorn'], function (acorn) {
  'use strict';

  const validationBtn = document.getElementById('validate');
  const result = document.getElementById('result');


  validationBtn.addEventListener('click', validateSyntax);

  function validateSyntax(e) {
    e.preventDefault();

    const scriptArea = document.getElementById('scriptContent');

    const options = {
      ecmaVersion: 5,
      sourceType: 'script',

    };
    try {
      acorn.parse(scriptArea.value, options);
      result.textContent = 'This script is valid';
    } catch (e) {
      console.log(e);
      result.textContent = e;
    }

  }
});