const formConsultarCep = document.querySelector('#consultarCep')
const inputCep = formConsultarCep.cep
const divDados = document.querySelector('#dados')

formConsultarCep.addEventListener('submit', (event) => {
  event.preventDefault() //anula o comportamento padrao de envio do form
  consultarCep(inputCep.value)

})



async function consultarCep(cep) {
  let response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
  let dadosCep = await response.json()

  divDados.innerHTML = `
    <p>Endereço: ${dadosCep.logradouro}</p>
    <p>CEP: ${dadosCep.cep}</p>


  `
  
}

consultarCep()