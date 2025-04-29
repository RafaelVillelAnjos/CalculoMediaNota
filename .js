function calculoMedia(){
    const aluno = prompt("Digite o nome do aluno:")
    const nota1 = Number(prompt("Digite sua primeira nota:")) 
    const nota2 = Number(prompt("Digite sua segunda nota:")) 

    const media = (nota1 + nota2)/2

    if(media>=7){
        alert("O aluno " +aluno+ " atingiu a média!!")
    } else {
        alert("O aluno " +aluno+ " não atingiu a média.")
    }
}