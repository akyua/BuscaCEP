async function checarCEP(CEP){
    let mensagemErro = document.getElementById('erro')
    let addInfos = document.getElementById('infos')
    mensagemErro.innerHTML = "";
    try{
        let checarCEP = await fetch(`https://viacep.com.br/ws/${CEP}/json/`)
        let checarCEPConvertido = await checarCEP.json();
        if (checarCEPConvertido.erro){
            throw Error('CEP não existente!')
        }
        addInfos.innerHTML= `<label for="endereco" class="form-container">
        Endereço
        <input class="form-field js-field" id="endereco" name="endereco"  type="text">
    </label>
    <label for="bairro" class="form-container">
        Bairro
        <input class="form-field js-field" id="bairro" name="bairro" type="text">
    </label>
    <div class="flex">
        <label for="cidade" class="form-container-flex">
            Cidade
            <input class="form-field js-field" id="cidade" name="cidade" type="text">
        </label>
        <label for="uf" class="form-container-flex">
            UF
            <input class="form-field js-field" id="uf" name="uf" type="text">
        </label>
    </div>`
        let cidade = document.getElementById('cidade');
        let endereco = document.getElementById('endereco');
        let uf = document.getElementById('uf');
        console.log(checarCEPConvertido)
        
        cidade.value = checarCEPConvertido.localidade;
        endereco.value = checarCEPConvertido.logradouro;
        uf.value = checarCEPConvertido.uf
        bairro.value = checarCEPConvertido.bairro;
        return checarCEPConvertido;
    } catch (erro) {
        mensagemErro.innerHTML = `<p>CEP invalido. Tente novamente!</p>`
        console.log(erro)
    }
}

    let CEP = document.getElementById('CEP');
    let btn = document.getElementById('btn');
    btn.addEventListener('click', () => checarCEP(CEP.value))
    
