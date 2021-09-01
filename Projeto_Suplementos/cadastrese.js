// VALIDAÇÃO DE FORMULÁRIO

class Validator {

    validations = [];
  
    currentDay = 0;
    currentName = "";
    currentCPF = 0;
    currentEmail = "";
    currentSelect = "";
  
    constructor() {
      this.validations = [
        'data-maxlength',
        'data-uppercase',
        'data-email',
        'data-validate-day',
        'data-gender'
      ]
    }
  
    // iniciar a validação de todos os campos
    validate(form) {
      //  pegar os inputs e os selects
      let inputs = form.getElementsByTagName('input');
      let selects = form.getElementsByTagName('select');
  
      // tranforma uma HTMLCollection -> array
      let inputsArray = [...inputs, ...selects];
  
      // uma array com os resultados (true ou false) de cada validação
      let resultados = [];
  
      // loop nos inputs e validação dos dados
      inputsArray.forEach(function (input) {
  
        // loop com todas as validações
        for (let i = 0; this.validations.length > i; i++) {
  
          // verifica se a validação atual existe no input
          if (input.getAttribute(this.validations[i]) != null) {
  
            // limpando a string para se tornar num método
            let method = this.validations[i].replace('data-', '').replace('-', '');
  
            // valor do input
            let value = input.getAttribute(this.validations[i]);
  
            // invocar o método - retorna um resultado (true ou false)
            let resultado = this[method](input, value);
  
            // array resultados está recebendo todas as respostas das validações
            resultados.push(resultado);
          }
        }
      }, this);
      return resultados.every(function (elemento) {
        return elemento === true;
      });
    }
  
    // verifica se as letras do nome estão maiúsculas
    uppercase(input) {
      if (!input.value) {
        alert(`Digite seu nome`);
        return false;
      }
  
      this.currentName = input.value.toUpperCase();
      return true;
    }
  
    // verifica se o CPF tem um número certo de caracteres
    maxlength(input, maxValue) {
      let inputLength = input.value.length;
      let errorMessage = `O campo CPF deve ter ${maxValue} caracteres.`
  
      if (inputLength < maxValue) {
        alert(errorMessage);
        return false;
      }
  
      this.currentCPF = input.value;
      return true;
    }
  
  
    // validar email
    email(input) {
      let regex = /\S+@\S+\.\S+/;
  
      let email = input.value;
  
      if (!regex.test(email)) {
        alert(`Insira um e-mail válido`);
        return false;
      }
  
      this.currentEmail = email;
      return true;
    }
  
    // validar gênero
    gender(input) {
      if (!input.value) {
        alert("Selecione uma opção");
        return false;
      }
      this.currentSelect = input.value;
      return true;
    }
  
  }
  
  let form = document.getElementById("register");
  let submit = document.getElementById("btnSubmit");
  let validator = new Validator();
  
  // evento que dispara as validações
  submit.addEventListener('click', function (e) {
  
    e.preventDefault();
  
    let confirmation = document.getElementById("confirmedData");
  
  
  
  });