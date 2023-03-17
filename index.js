
function idade_canina(a){
  b = a * 7
  return "A idade do seu cachorro em anos caninos é de " + b
}

var idade_hum = parseInt(prompt("Digite a idade do seu cachorro em anos humanos:\n"))
console.log(idade_canina(idade_hum))

