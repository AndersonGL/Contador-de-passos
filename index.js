function contar() {

  let ini = document.getElementById('txti')
  let fim = document.getElementById('txtf')
  let passo = document.getElementById('txtp')
  let res = document.getElementById('res')

  if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {

    res.innerHTML = 'Impossível contar!'
    //alert('[ERRO] Faltam dados!')

  } else {

    res.innerHTML = ' Contando: <br> '
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    if (p <= 0) {
      alert('Passo inválido ! Considerando PASSO 1')
      p = 1
    }

    if (i < f) {
      // Contagem Crescente
      for (let c = i; c <= f; c += p) {
        res.innerHTML += ` ${c} \u{1F449}`
      }

    } else {
      // Contagem Regressiva
      for (let c = i; c >= f; c -= p) {
        res.innerHTML += `${c} \u{1F449}`

      }

    }

    res.innerHTML += `\u{1F6A9}`

  }

}

//alert('OK TUDO CERTO')



// variavel var ou let
// mesma coisa só let usada para escopo.


// primeiro passo testa se ta funcionando os input
// colocando em if e else valores e alert com as mensagens!!!


// criei variaveis let para converte de txt para number

//(for c - contador incia e enquanto o contador for menor
// ou igual ao f - fim  o c- contador recebe ele mesmo
// + o passo)

// o += antes do placeholder não é soma e sim conquatenação
//  depois coloco a string formatada.






  
