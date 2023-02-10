const cpfDigitado = Array.from(document.querySelectorAll('.cpf'));
const btn1 = document.querySelector('.retirar');
const btn2 = document.querySelector('.formatar');

function somenteNumeros(event){
    event = cpfDigitado.forEach(item => {
        let cpfLista = item.value;
        const cpfLimpo = cpfLista.replace(/\D/g, '');
        item.value = cpfLimpo;
      })
  }

  function cpfFormatado(event){
    event = cpfDigitado.forEach(item => {
        let cpfLista1 = item.value;
        const cpfLimpo = cpfLista1.replace(/\D/g, '');
        const regExpCPF1 = /(\d{3})(\d{3})(\d{3})(\d{2})/g;
        const cpfFinal = cpfLimpo.replace(regExpCPF1, '$1.$2.$3-$4');
        item.value = cpfFinal;
      })
    }

    btn1.addEventListener('click', somenteNumeros);
    btn2.addEventListener('click', cpfFormatado);