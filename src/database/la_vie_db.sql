-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema la_vie_db
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema la_vie_db
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `la_vie_db` DEFAULT CHARACTER SET utf8 ;
USE `la_vie_db` ;

-- -----------------------------------------------------
-- Table `la_vie_db`.`Atendimento`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `la_vie_db`.`Atendimento` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `paciente_id` INT NOT NULL,
  `psicologo_id` INT NOT NULL,
  `data_atendimento` DATE NOT NULL,
  `observacao` TEXT NOT NULL,
  `createdAt` DATE NOT NULL,
  `updatedAt` DATE NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `la_vie_db`.`Pacientes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `la_vie_db`.`Pacientes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `idade` INT NOT NULL,
  `createdAt` DATE NOT NULL,
  `updatedAt` DATE NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `la_vie_db`.`Psicologos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `la_vie_db`.`Psicologos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(100) NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `senha` VARCHAR(70) NOT NULL,
  `apresentacao` VARCHAR(150) NULL,
  `createdAt` DATE NOT NULL,
  `updatedAt` DATE NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `la_vie_db`.`Atendimento_has_Psicologos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `la_vie_db`.`Atendimento_has_Psicologos` (
  `Atendimento_id` INT NOT NULL,
  `Psicologos_id` INT NOT NULL,
  PRIMARY KEY (`Atendimento_id`, `Psicologos_id`),
  INDEX `fk_Atendimento_has_Psicologos_Psicologos1_idx` (`Psicologos_id` ASC) VISIBLE,
  INDEX `fk_Atendimento_has_Psicologos_Atendimento_idx` (`Atendimento_id` ASC) VISIBLE,
  CONSTRAINT `fk_Atendimento_has_Psicologos_Atendimento`
    FOREIGN KEY (`Atendimento_id`)
    REFERENCES `la_vie_db`.`Atendimento` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Atendimento_has_Psicologos_Psicologos1`
    FOREIGN KEY (`Psicologos_id`)
    REFERENCES `la_vie_db`.`Psicologos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `la_vie_db`.`Atendimento_has_Pacientes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `la_vie_db`.`Atendimento_has_Pacientes` (
  `Atendimento_id` INT NOT NULL,
  `Pacientes_id` INT NOT NULL,
  PRIMARY KEY (`Atendimento_id`, `Pacientes_id`),
  INDEX `fk_Atendimento_has_Pacientes_Pacientes1_idx` (`Pacientes_id` ASC) VISIBLE,
  INDEX `fk_Atendimento_has_Pacientes_Atendimento1_idx` (`Atendimento_id` ASC) VISIBLE,
  CONSTRAINT `fk_Atendimento_has_Pacientes_Atendimento1`
    FOREIGN KEY (`Atendimento_id`)
    REFERENCES `la_vie_db`.`Atendimento` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Atendimento_has_Pacientes_Pacientes1`
    FOREIGN KEY (`Pacientes_id`)
    REFERENCES `la_vie_db`.`Pacientes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
