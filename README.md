# Desafio-API-NodeJS-Express
Desafio Prático 3 (em grupo) do processo de formação Gama Academy turma 46

Construção de uma API utilizando Node.js e Express, e banco de dados MySQL, criando um banco de dados, o Diagrama Entidade-Relacionamento e as tabelas em SQL, e conectar e manipular o banco de dados através do Sequelize.


* Configurações iniciais:
  - Verificar os caminhos dos arquivos no diretório src.
  - instalação dos frameworks necessários para desenvolvimento do projeto (atualizado periodicamente):
    - Express
    - nodemon (dev)
    - sequelize
    
Script gerador do banco:
```
CREATE DATABASE la_vie_db;

CREATE TABLE `psicologos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(100) NOT NULL,
  `email` varchar(50) NOT NULL,
  `senha` varchar(70) NOT NULL,
  `apresentacao` varchar(150) DEFAULT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `pacientes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `idade` INT NOT NULL,
  `createdAt` DATE NOT NULL,
  `updatedAt` DATE NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `atendimentos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `paciente` int NOT NULL,
  `psicologo` int NOT NULL,
  `data_atendimento` date NOT NULL,
  `observacao` varchar(150) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL,
  PRIMARY KEY (`id`),
  KEY `psicologo_idx` (`psicologo`),
  KEY `paciente` (`paciente`),
  CONSTRAINT `paciente` FOREIGN KEY (`paciente`) REFERENCES `pacientes` (`id`),
  CONSTRAINT `psicologo` FOREIGN KEY (`psicologo`) REFERENCES `psicologos` (`id`)
);
```