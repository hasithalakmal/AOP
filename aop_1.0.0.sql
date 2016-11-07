CREATE DATABASE  IF NOT EXISTS `aop_2012cs077` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `aop_2012cs077`;
-- MySQL dump 10.13  Distrib 5.7.12, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: aop_2012cs077
-- ------------------------------------------------------
-- Server version	5.5.5-10.1.13-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `account`
--

DROP TABLE IF EXISTS `account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `account` (
  `acc_id` int(11) NOT NULL AUTO_INCREMENT,
  `acc_acch_id` int(11) NOT NULL,
  `acc_number` varchar(45) NOT NULL,
  `acc_min_balance` double DEFAULT '500',
  `acc_type` varchar(45) DEFAULT 'Savings Account',
  `acc_balance` double DEFAULT NULL,
  `acc_state` int(11) DEFAULT '1',
  `acc_create` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `acc_last_modified` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`acc_id`),
  KEY `acc_hholder_idx` (`acc_acch_id`),
  CONSTRAINT `acc_hholder` FOREIGN KEY (`acc_acch_id`) REFERENCES `accountholder` (`acch_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account`
--

LOCK TABLES `account` WRITE;
/*!40000 ALTER TABLE `account` DISABLE KEYS */;
/*!40000 ALTER TABLE `account` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `accountholder`
--

DROP TABLE IF EXISTS `accountholder`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `accountholder` (
  `acch_id` int(11) NOT NULL AUTO_INCREMENT,
  `acch_name` varchar(45) DEFAULT NULL,
  `acch_mobile` varchar(45) DEFAULT NULL,
  `acch_adress` varchar(45) DEFAULT NULL,
  `acch_state` int(11) DEFAULT '1',
  `acch_create` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `acch_last_modified` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`acch_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `accountholder`
--

LOCK TABLES `accountholder` WRITE;
/*!40000 ALTER TABLE `accountholder` DISABLE KEYS */;
/*!40000 ALTER TABLE `accountholder` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `client_message`
--

DROP TABLE IF EXISTS `client_message`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `client_message` (
  `msg_id` int(11) NOT NULL AUTO_INCREMENT,
  `msg_title` varchar(100) NOT NULL,
  `msg_body` varchar(500) NOT NULL,
  `msg_acch_id` int(11) DEFAULT NULL,
  `msg_states` int(11) DEFAULT '1',
  `msg_create` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`msg_id`),
  KEY `acch_id_idx` (`msg_acch_id`),
  CONSTRAINT `acch_id` FOREIGN KEY (`msg_acch_id`) REFERENCES `accountholder` (`acch_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `client_message`
--

LOCK TABLES `client_message` WRITE;
/*!40000 ALTER TABLE `client_message` DISABLE KEYS */;
/*!40000 ALTER TABLE `client_message` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password`
--

DROP TABLE IF EXISTS `password`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `password` (
  `pass_id` int(11) NOT NULL AUTO_INCREMENT,
  `pass_user_name` varchar(45) DEFAULT NULL,
  `pass_password` varchar(45) DEFAULT NULL,
  `pass_api_key` varchar(45) DEFAULT NULL,
  `pass_acch_id` int(11) DEFAULT NULL,
  `pass_user_type` varchar(45) DEFAULT NULL,
  `pass_status` int(11) DEFAULT '0',
  `pass_create` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `pass_modifi` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`pass_id`),
  KEY `acc_holder_idx` (`pass_acch_id`),
  CONSTRAINT `acc_holder` FOREIGN KEY (`pass_acch_id`) REFERENCES `accountholder` (`acch_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password`
--

LOCK TABLES `password` WRITE;
/*!40000 ALTER TABLE `password` DISABLE KEYS */;
/*!40000 ALTER TABLE `password` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transaction`
--

DROP TABLE IF EXISTS `transaction`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `transaction` (
  `tra_id` int(11) NOT NULL AUTO_INCREMENT,
  `tra_acc_id` int(11) NOT NULL,
  `tra_type` varchar(45) NOT NULL,
  `tra_amount` double NOT NULL,
  `tra_related_acc` int(11) DEFAULT NULL,
  `tra_create` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `tra_state` int(11) DEFAULT '1',
  PRIMARY KEY (`tra_id`),
  KEY `account_idx` (`tra_acc_id`),
  CONSTRAINT `account` FOREIGN KEY (`tra_acc_id`) REFERENCES `account` (`acc_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transaction`
--

LOCK TABLES `transaction` WRITE;
/*!40000 ALTER TABLE `transaction` DISABLE KEYS */;
/*!40000 ALTER TABLE `transaction` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping events for database 'aop_2012cs077'
--

--
-- Dumping routines for database 'aop_2012cs077'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-08-19 10:03:43
