# GymPass-Style-API

## RFs Requisitos funcionais

- [x] Deve ser possivel se cadastrar 
- [x] Deve ser possivel se autenticar
- [x] Deve ser possivel obter o perfil de um usuário logado
- [x] Deve ser possivel obter o número de check-ins realizados pelo usuários logado
- [x] Deve ser possivel o usuário obter seu histórico de check-ins
- [x] Deve ser possivel o usuário buscar academias proximas
- [x] Deve ser possivel o usuário buscar academias pelo nome
- [x] Deve ser possivel o usuário realizar check-in em uma academia 
- [x] Deve ser possível validar o check-in de um usuário
- [x] Deve ser possivel cadastrar uma academia


## RNs (Regras de Negócios)

- [x] O usuário não deve poder se cadastrar com um e-mail duplicado
- [x] O usuário não pode fazer 2 check-ins no mesmo dia
- [x] O check-in não pode fazer check-in se estiver perto (100m) da academia
- [x] O check-in só pode ser validao até 20min após ser criado
- [ ] O check-in só pode ser validado por administrador
- [ ] A academia só pode ser cadastrada por administradores


## RNFs (Requisitos não-funcionais)

- [x] A senha do usuário precisa estar criptografada
- [x] Os dados da aplicação precisam estar persistidos em um banco PostgreSQL
- [x] Todas as listas de dados precisam estar paginadas com 20 itens por pagina
- [ ] O usuário deve ser identificado por um JWT (JSON Web Token)