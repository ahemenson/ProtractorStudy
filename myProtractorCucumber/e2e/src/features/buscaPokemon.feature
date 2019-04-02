# language: pt

@Test
Funcionalidade: Busca de pokémons
Cenário: Pesquisa de pelo nome do pokémon
Dado que eu estou na tela de listagem de pokémons
Quando eu digito "flyi" no campo de pesquisa
Então devo visualizar três pokémons no resultado
