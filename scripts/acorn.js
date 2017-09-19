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
      let parse = acorn.parse(scriptArea.value, options);
      let scriptBody = parse.body[0];
      if (scriptBody.type === 'FunctionDeclaration' && scriptBody.id.name === 'execute') {
        result.textContent = 'This is a valid script';
      } else {
        result.textContent = 'The script must be a function with the name execute';
      }
    } catch (e) {
      console.log(e);
      result.textContent = e;
    }

  }
});