const form = document.querySelector('#form-habits');
const button = document.querySelector('#button');
const nlwSetup = new NLWSetup(form);

button.addEventListener('click', add);
form.addEventListener('change', save);

function add() {
   const today = new Date().toLocaleDateString('pt-br').slice(0, -5);


   if (nlwSetup.dayExists(today)){
      alert('⛔ O dia já foi incluso');
      return;
   }

   nlwSetup.addDay(today);
}

function save() {
   localStorage.setItem('NLWSetup@habitos', JSON.stringify(nlwSetup.data));
}

const data = JSON.parse(localStorage.getItem('NLWSetup@habitos')) || {};
nlwSetup.setData(data);
nlwSetup.load();