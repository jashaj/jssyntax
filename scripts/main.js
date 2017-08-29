requirejs(['../node_modules/esprima/dist/esprima'], function (parser) {


  var validationBtn = document.getElementById('validate');
  var result = document.getElementById('result');


  validationBtn.addEventListener('click', validateSyntax);


  function validateSyntax(e) {
    e.preventDefault();
    try {
      var scriptArea = document.getElementById('scriptContent');
      var syntax = parser.parse(scriptArea.value);
      var errors = syntax.errors;
      if (errors === undefined || errors.length === 0) {
        result.textContent = 'This is a valid script';
      } else {

        var list = document.createElement('ol');
        errors.forEach(function (err) {
          var item = document.createElement('li');
          item.textContent = err.index + ': ' + err.description;
          list.appendChild(item);
        });

        result.innerHTML = 'Invalid script. Number of issues: ' + errors.length;
        result.appendChild(list);
      }

    } catch (e) {
      result.innerHTML = e;
    }

  }

});
