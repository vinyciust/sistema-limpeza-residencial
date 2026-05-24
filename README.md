# sistema-limpeza-residencial

Projeto desenvolvido para a disciplina de Programação I.

API REST para gerenciamento de tipos de limpeza residencial e agendamentos de serviços de limpeza.

A regra de negócio calcula automaticamente:

- Tempo total do serviço
- Valor final do agendamento

Cálculo:
tempoTotal = dataFim - dataInicio
valorFinal = tempoTotal * valorHora do tipo de limpeza

#### sistema rodando na porta 4000

### Rotas criadas:
1. GET /tiplimpeza
2. GET /tiplimpeza/:id
3. POST /tiplimpeza
4. PUT /tiplimpeza/:id
5. DELETE /tiplimpeza/:id

6. GET /agendamento
7. GET /agendamento/:id
8. POST /agendamento
9. PUT /agendamento/:id
10. DELETE /agendamento/:id




## Entidades do banco

### tiplimpeza

Tabela responsável por armazenar os tipos de limpeza.

Campos principais:

- id
- nome
- valorHora

### agendamento

Tabela responsável por armazenar os agendamentos dos serviços de limpeza.

Campos principais:

- id
- nomeCliente
- endereco
- dataInicio
- dataFim
- tempoTotal
- valorFinal
- TipoLimpezaId

## Criação das tabelas

As tabelas não precisam ser criadas manualmente no PostgreSQL.

O projeto utiliza Sequelize, e as tabelas são criadas automaticamente ao iniciar o servidor, através do comando:
