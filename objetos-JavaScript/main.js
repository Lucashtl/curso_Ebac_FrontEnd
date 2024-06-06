function pokemon(nome, tipo, level) {
    this.nome = nome;
    this.tipo = tipo;
    this.level = level;
}

function pokemonAgua(nome, tipo, level, ataque) {
    pokemon.call(this, nome, tipo, level);
    this.ataque = ataque

}

function pokemonTreino(nome, tipo, level, tempoDeTreino, XPganho){
    pokemon.call(this,nome, tipo, level);
this.tempoDeTreino = tempoDeTreino;
this.XPganho = XPganho;

}

const treino = new pokemonTreino('Charizard', 'Fogo', 25, '2 Dias', '400/1000')
const pokemon1 = new pokemon('Miltwo', 'pisiquico', 200);
const pokemonAgua1 = new pokemonAgua('Blastoise', 'agua', 'Jato de agua', 50);
console.log(treino);