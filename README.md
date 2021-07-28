# Teste back-end - [Credere](https://meucredere.com.br/).

## Descrição

Uma sonda exploradora da NASA pousou em marte. O pouso se deu em uma área retangular, na qual a sonda pode navegar usando uma interface web. A posição da sonda é representada pelo seu eixo x e y, e a direção que ele está apontado pela letra inicial, sendo as direções válidas:

- `E` - Esquerda
- `D` - Direita
- `C` - Cima
- `B` - Baixo

A sonda aceita três comandos:

- `GE` - girar 90 graus à esquerda
- `GD` - girar 90 graus à direta
- `M` - movimentar. Para cada comando `M` a sonda se move uma posição na direção à qual sua face está apontada.

A sonda inicia no quadrante (x = 0, y = 0), o que se traduz como a casa mais inferior da esquerda; também inicia com a face para a direita.
Se pudéssemos visualizar a posição inicial, seria:

| (0,4) |  (1,4) | (2,4) |  (3,4) | (4,4) |
|:-----:|  ----  |  ---- |  ----  |  ---- |
| (0,3) |  (1,3) | (2,3) |  (3,3) | (4,3) |
| (0,2) |  (1,2) | (2,2) |  (3,2) | (4,2) |
| (0,1) |  (1,1) | (2,1) |  (3,1) | (4,1) |
| * >   |  (1,0) | (2,0) |  (3,0) | (4,0) |

`* Indica a direção inicial da nossa sonda`

A intenção é controlar a sonda enviando a direção e quantidade de movimentos que ela deve executar. A resposta deve ser sua coordenada final caso o ponto se encontre dentro do quadrante, caso o ponto não possa ser alcançado a resposta deve ser um erro indicando que a posição é inválida. Para a execução do teste as dimensões de 5x5 pode ser usado.


## Instruções de Instalação e execução 

1. Clonar o repositório `git clone https://github.com/EdsonCandido73/backend-Credere`.
2. Dentro da pasta raiz do projeto, instale as dependências com o comando `npm install`.
3. Para iniciar, executar o comando `npm start`, o servidor utilizará a porta 3333. 

Observação: Para executar o projeto é obrigatório ter o [Node Js](https://nodejs.org/en/) instalado na versão 14 ou superior.

 
# Endpoints

## PUT/reset

Endpoint que envia a sonda para a posição inicial (x = 0, y = 0) e também posiciona a face para a direita..

https://backend-credere.herokuapp.com/reset

Retorna: código HTTP 200 OK
e a posição: 
```
{  
  "xCoordinate": 0,
  "yCoordinate": 0,
  "navDirection": "D"
}
```

## POST/move

Endpoint que recebe o movimento da sonda e responde com as coordenadas finais, caso o movimento seja válido ou uma mensagem de erro caso o movimento seja inválido..

https://backend-credere.herokuapp.com/move

Exemplo:
**Requisição válida**
```
{
  movements: ['GE', 'M', 'M', 'M', 'GD', 'M', 'M']
}
```
**Resposta**
Retorna: código HTTP 200 OK
```
{  
  "xCoordinate": 2,
  "yCoordinate": 3,
  "navDirection": "D"
}
```
Exemplo:
**Requisição inválida**
```
{
  movements: ['G', 'M', 'M']
}
```
**Resposta**
Retorna: código HTTP 422 Unprocessable Entity
```
  { erro: "Um movimento inválido foi detectado, use somente M, GD e GE."}
```

Exemplo:
**Requisição inválida**
```
{
  movements: ['M', 'M', 'M', 'M', 'M']
}
```
**Resposta**
Retorna: código HTTP 422 Unprocessable Entity
```
  { erro: "Um movimento inválido foi detectado, infelizmente a sonda ainda não possui a habilidade de movimentar-se para as coordenadas x=  e y=  "}
```

## GET /coordinates

Endpoint que retorna apenas as coordenadas atuais x e y da sonda e a direção à qual sua face está apontada..

https://backend-credere.herokuapp.com/coordinates

Por exemplo: 
```
{  
  "xCoordinate": 3,
  "yCoordinate": 3,
  "navDirection": "E"
}
```

# Testes unitários

Em fase de desenvolvimento.

### Desenvolvido por Edson Cândido - 07/2021