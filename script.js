const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)
// Criando um novo objeto NLWSetup

const button = document.querySelector('header button')
button.addEventListener('click', add)
form.addEventListener("change", save)

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Dia já incluso ❌")
    return
  }
  
  alert('Adicionado com sucesso! ✅')
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))

  localStorage.getItem("NLWSetup@habits")
}
// toda vez que clicar no botão, vai executar a sequência de códigos que está nesta função!

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}
nlwSetup.setData(data)
nlwSetup.load()
