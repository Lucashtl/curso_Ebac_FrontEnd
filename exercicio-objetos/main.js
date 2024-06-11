class Aluno {
    constructor(nome, nota){
        this.nome = nome,
        this.nota = nota
    }
}

const Lucas = new Aluno('Lucas', 7)
const Maria = new Aluno('Lucas', 7)
const Pedro = new Aluno('Lucas', 5)
const Julia = new Aluno('Lucas', 8)
const Matheus = new Aluno('Lucas', 10)


const alunos = [Lucas, Maria, Pedro, Julia, Matheus]


const alunosFiltrados = alunos.filter(function(item){
    return item.nota >= 6
})

console.log(alunosFiltrados)