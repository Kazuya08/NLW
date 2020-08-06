// procurar o botão 
document.querySelector("#add-time")
//quando clicar no botão
.addEventListener('click', cloneField)

//Executar uma ação
function cloneField() {
    //Duplicar os campos. que campos?
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true) //coletamos o campo e o clonenode faz o clone
    
    //limpar os campos. Que campos?
    const fields = newFieldContainer.querySelectorAll('input')

    //para cada campo, limpar
    fields.forEach(function(field) {
        //pegar o field do momento e limpa ele
        field.value = ""
    })

    //Coletar na página: onde colocar?
    document.querySelector('#shedule-items').appendChild(newFieldContainer)
}