# gympoint-backend
Desafio do app "Gympoint" do curso GoStack da Rockseat

## Índice
- [Setup](#setup)
- [VSCode (Debug)](#vscode-debug)
- [Insomnia](#Insomnia)

## Setup
1. Configure o arquivo `.env` corretamente (preenchendo as variáveis encontradas no `.env.example`)

2. Rode os seguintes comandos:
```bash
yarn
yarn dev

# Para iniciar fila de e-mails no redis
yarn queue
```

## VSCode (Debug)

1. Rode o seguinte comando para subir o servidor
```
yarn dev:debug
```

2. Depois inicie uma sessão de debug no vscode

![VSCode debug](docs/debug.png)

## Insomnia
[Baixe aqui](https://raw.githubusercontent.com/santospatrick/gympoint-backend/master/json/Insomnia_2019-10-19.json) o arquivo .json do projeto do Insomnia para testar as requisições
