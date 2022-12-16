-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema lavie_db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema lavie_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `lavie_db` DEFAULT CHARACTER SET utf8 ;
USE `lavie_db` ;

-- -----------------------------------------------------
-- Table `lavie_db`.`psicologos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lavie_db`.`psicologos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `senha` VARCHAR(100) NOT NULL,
  `apresentacao` TEXT NOT NULL,
  `createdAt` DATE NOT NULL,
  `updatedAt` DATE NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lavie_db`.`pacientes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lavie_db`.`pacientes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `idade` DATE NOT NULL,
  `createdAt` DATE NOT NULL,
  `updatedAt` DATE NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `lavie_db`.`atendimentos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `lavie_db`.`atendimentos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `paciente` INT NOT NULL,
  `psicologo` INT NOT NULL,
  `data_atendimento` DATE NOT NULL,
  `observacao` TEXT NOT NULL,
  `createdAt` DATE NOT NULL,
  `updatedAt` DATE NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `paciente_idx` (`paciente` ASC) VISIBLE,
  INDEX `psicologo_idx` (`psicologo` ASC) VISIBLE,
  CONSTRAINT `paciente`
    FOREIGN KEY (`paciente`)
    REFERENCES `lavie_db`.`pacientes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `psicologo`
    FOREIGN KEY (`psicologo`)
    REFERENCES `lavie_db`.`psicologos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
