-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema marcote
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema marcote
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `marcote` DEFAULT CHARACTER SET utf8 ;
-- -----------------------------------------------------
-- Schema nacho
-- -----------------------------------------------------
USE `marcote` ;

-- -----------------------------------------------------
-- Table `marcote`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `marcote`.`usuarios` (
  `idx` INT NOT NULL AUTO_INCREMENT,
  `usuarios` VARCHAR(20) NOT NULL,
  `nombre` VARCHAR(20) NOT NULL,
  `sexo` VARCHAR(1) NOT NULL,
  `nivel` TINYINT NOT NULL,
  `email` VARCHAR(50) NOT NULL,
  `telefono` VARCHAR(20) NOT NULL,
  `marca` VARCHAR(20) NOT NULL,
  `compania` VARCHAR(20) NOT NULL,
  `saldo` FLOAT NULL,
  `activo` TINYINT NOT NULL,
  PRIMARY KEY (`idx`),
  UNIQUE INDEX `usuarios_UNIQUE` (`usuarios` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  UNIQUE INDEX `telefono_UNIQUE` (`telefono` ASC) VISIBLE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
