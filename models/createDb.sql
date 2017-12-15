-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema waifuWarsDb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema waifuWarsDb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `waifuWarsDb` DEFAULT CHARACTER SET utf8 ;
USE `waifuWarsDb` ;

-- -----------------------------------------------------
-- Table `waifuWarsDb`.`division`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `waifuWarsDb`.`division` ;

CREATE TABLE IF NOT EXISTS `waifuWarsDb`.`division` (
  `divisionId` INT NOT NULL AUTO_INCREMENT,
  `divisionName` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`divisionId`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `waifuWarsDb`.`waifu`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `waifuWarsDb`.`waifu` ;

CREATE TABLE IF NOT EXISTS `waifuWarsDb`.`waifu` (
  `waifuId` INT NOT NULL AUTO_INCREMENT,
  `waifuName` VARCHAR(255) NOT NULL,
  `picture` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`waifuId`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `waifuWarsDb`.`divisionWaifus`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `waifuWarsDb`.`divisionWaifus` ;

CREATE TABLE IF NOT EXISTS `waifuWarsDb`.`divisionWaifus` (
  `divisionWaifuId` INT NOT NULL AUTO_INCREMENT,
  `currentRank` INT NOT NULL,
  `divisionId` INT NOT NULL,
  `waifuId` INT NOT NULL,
  PRIMARY KEY (`divisionWaifuId`),
  INDEX `divisionId_idx` (`divisionId` ASC),
  INDEX `characterId_idx` (`waifuId` ASC),
  CONSTRAINT `divisionId`
    FOREIGN KEY (`divisionId`)
    REFERENCES `waifuWarsDb`.`division` (`divisionId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `characterId`
    FOREIGN KEY (`waifuId`)
    REFERENCES `waifuWarsDb`.`waifu` (`waifuId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `waifuWarsDb`.`rankLog`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `waifuWarsDb`.`rankLog` ;

CREATE TABLE IF NOT EXISTS `waifuWarsDb`.`rankLog` (
  `rankId` INT NOT NULL AUTO_INCREMENT,
  `date` DATETIME NOT NULL,
  `rank` INT NOT NULL,
  `divisionWaifuId` INT NOT NULL,
  PRIMARY KEY (`rankId`),
  INDEX `divisionWaifuId_idx` (`divisionWaifuId` ASC),
  CONSTRAINT `divisionWaifuId`
    FOREIGN KEY (`divisionWaifuId`)
    REFERENCES `waifuWarsDb`.`divisionWaifus` (`divisionWaifuId`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
