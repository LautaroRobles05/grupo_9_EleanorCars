-- MySQL dump 10.13  Distrib 8.0.19, for Win64 (x86_64)
--
-- Host: localhost    Database: eleanor_cars
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.27-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `brands`
--

DROP TABLE IF EXISTS `brands`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `brands` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=54 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brands`
--

LOCK TABLES `brands` WRITE;
/*!40000 ALTER TABLE `brands` DISABLE KEYS */;
INSERT INTO `brands` VALUES (1,'Abarth','2023-04-07 21:00:26',NULL),(2,'Alfa Romeo','2023-04-07 21:00:26',NULL),(3,'Aston Martin','2023-04-07 21:00:26',NULL),(4,'Audi','2023-04-07 21:00:26',NULL),(5,'Bentley','2023-04-07 21:00:26',NULL),(6,'BMW','2023-04-07 21:00:26',NULL),(7,'Cadillac','2023-04-07 21:00:26',NULL),(8,'Caterham','2023-04-07 21:00:26',NULL),(9,'Chevrolet','2023-04-07 21:00:26',NULL),(10,'Citroen','2023-04-07 21:00:26',NULL),(11,'Dacia','2023-04-07 21:00:26',NULL),(12,'Ferrari','2023-04-07 21:00:26',NULL),(13,'Fiat','2023-04-07 21:00:26',NULL),(14,'Ford','2023-04-07 21:00:26',NULL),(15,'Honda','2023-04-07 21:00:26',NULL),(16,'Infiniti','2023-04-07 21:00:26',NULL),(17,'Isuzu','2023-04-07 21:00:26',NULL),(18,'Iveco','2023-04-07 21:00:26',NULL),(19,'Jaguar','2023-04-07 21:00:26',NULL),(20,'Jeep','2023-04-07 21:00:26',NULL),(21,'Kia','2023-04-07 21:00:26',NULL),(22,'KTM','2023-04-07 21:00:26',NULL),(23,'Lada','2023-04-07 21:00:26',NULL),(24,'Lamborghini','2023-04-07 21:00:26',NULL),(25,'Lancia','2023-04-07 21:00:26',NULL),(26,'Land','2023-04-07 21:00:26',NULL),(27,'Rover','2023-04-07 21:00:26',NULL),(28,'Lexus','2023-04-07 21:00:26',NULL),(29,'Lotus','2023-04-07 21:00:26',NULL),(30,'Maserati','2023-04-07 21:00:26',NULL),(31,'Mazda','2023-04-07 21:00:26',NULL),(32,'Mercedes-Benz','2023-04-07 21:00:26',NULL),(33,'Mini','2023-04-07 21:00:26',NULL),(34,'Mitsubishi','2023-04-07 21:00:26',NULL),(35,'Morgan','2023-04-07 21:00:26',NULL),(36,'Nissan','2023-04-07 21:00:26',NULL),(37,'Opel','2023-04-07 21:00:26',NULL),(38,'Peugeot','2023-04-07 21:00:26',NULL),(39,'Piaggio','2023-04-07 21:00:26',NULL),(40,'Porsche','2023-04-07 21:00:26',NULL),(41,'Renault','2023-04-07 21:00:26',NULL),(42,'Rolls-Royce','2023-04-07 21:00:26',NULL),(43,'Seat','2023-04-07 21:00:26',NULL),(44,'Skoda','2023-04-07 21:00:26',NULL),(45,'Smart','2023-04-07 21:00:26',NULL),(46,'SsangYong','2023-04-07 21:00:26',NULL),(47,'Subaru','2023-04-07 21:00:26',NULL),(48,'Suzuki','2023-04-07 21:00:26',NULL),(49,'Tata','2023-04-07 21:00:26',NULL),(50,'Tesla','2023-04-07 21:00:26',NULL),(51,'Toyota','2023-04-07 21:00:26',NULL),(52,'Volkswagen','2023-04-07 21:00:26',NULL),(53,'Volvo','2023-04-07 21:00:26',NULL);
/*!40000 ALTER TABLE `brands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carmodels`
--

DROP TABLE IF EXISTS `carmodels`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `carmodels` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `brand_id` int(11) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_03bd1ed5-766d-4c9d-b356-f9d5322e75ca` (`brand_id`),
  CONSTRAINT `FK_03bd1ed5-766d-4c9d-b356-f9d5322e75ca` FOREIGN KEY (`brand_id`) REFERENCES `brands` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=238 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carmodels`
--

LOCK TABLES `carmodels` WRITE;
/*!40000 ALTER TABLE `carmodels` DISABLE KEYS */;
INSERT INTO `carmodels` VALUES (1,'595',1,'2023-04-07 21:00:33',NULL),(2,'595',1,'2023-04-07 21:00:33',NULL),(3,'145',2,'2023-04-07 21:00:33',NULL),(4,'Giulia',2,'2023-04-07 21:00:33',NULL),(5,'Stelvio',2,'2023-04-07 21:00:33',NULL),(6,'Tonale',2,'2023-04-07 21:00:33',NULL),(7,'DB11',3,'2023-04-07 21:00:33',NULL),(8,'DBX',3,'2023-04-07 21:00:33',NULL),(9,'Vantage',3,'2023-04-07 21:00:33',NULL),(10,'A1',4,'2023-04-07 21:00:33',NULL),(11,'A3',4,'2023-04-07 21:00:33',NULL),(12,'A4',4,'2023-04-07 21:00:33',NULL),(13,'A5',4,'2023-04-07 21:00:33',NULL),(14,'A6',4,'2023-04-07 21:00:33',NULL),(15,'A7',4,'2023-04-07 21:00:33',NULL),(16,'A7 Sportback',4,'2023-04-07 21:00:33',NULL),(17,'A8',4,'2023-04-07 21:00:33',NULL),(18,'e-tron GT',4,'2023-04-07 21:00:33',NULL),(19,'Q2',4,'2023-04-07 21:00:33',NULL),(20,'Bentayga',5,'2023-04-07 21:00:33',NULL),(21,'Continental GT',5,'2023-04-07 21:00:33',NULL),(22,'Flying Spur',5,'2023-04-07 21:00:33',NULL),(23,'i4',6,'2023-04-07 21:00:33',NULL),(24,'i7',6,'2023-04-07 21:00:33',NULL),(25,'iX',6,'2023-04-07 21:00:33',NULL),(26,'iX1',6,'2023-04-07 21:00:33',NULL),(27,'iX3',6,'2023-04-07 21:00:33',NULL),(28,'Serie 1',6,'2023-04-07 21:00:33',NULL),(29,'Serie 2',6,'2023-04-07 21:00:33',NULL),(30,'Serie 3',6,'2023-04-07 21:00:33',NULL),(31,'Serie 4',6,'2023-04-07 21:00:33',NULL),(32,'Serie 5',6,'2023-04-07 21:00:33',NULL),(33,'Alero',9,'2023-04-07 21:00:33',NULL),(34,'Astro Van',9,'2023-04-07 21:00:33',NULL),(35,'Aveo',9,'2023-04-07 21:00:33',NULL),(36,'Blazer',9,'2023-04-07 21:00:33',NULL),(37,'Camaro',9,'2023-04-07 21:00:33',NULL),(38,'Captiva',9,'2023-04-07 21:00:33',NULL),(39,'Corvette',9,'2023-04-07 21:00:33',NULL),(40,'Epica',9,'2023-04-07 21:00:33',NULL),(41,'Cruze',9,'2023-04-07 21:00:33',NULL),(42,'Evanda',9,'2023-04-07 21:00:33',NULL),(43,'HHR',9,'2023-04-07 21:00:33',NULL),(44,'Kalos',9,'2023-04-07 21:00:33',NULL),(45,'Lacetti',9,'2023-04-07 21:00:33',NULL),(46,'Malibu',9,'2023-04-07 21:00:33',NULL),(47,'Matiz',9,'2023-04-07 21:00:33',NULL),(48,'Nubira',9,'2023-04-07 21:00:33',NULL),(49,'Orlando',9,'2023-04-07 21:00:33',NULL),(50,'Rezzo',9,'2023-04-07 21:00:33',NULL),(51,'Spark',9,'2023-04-07 21:00:33',NULL),(52,'TrailBlazer',9,'2023-04-07 21:00:33',NULL),(53,'Berlingo',10,'2023-04-07 21:00:33',NULL),(54,'C3',10,'2023-04-07 21:00:33',NULL),(55,'C3 Aircross',10,'2023-04-07 21:00:33',NULL),(56,'C4',10,'2023-04-07 21:00:33',NULL),(57,'C4 X',10,'2023-04-07 21:00:33',NULL),(58,'C5 Aircross',10,'2023-04-07 21:00:33',NULL),(59,'C5 X',10,'2023-04-07 21:00:33',NULL),(60,'SpaceTourer',10,'2023-04-07 21:00:33',NULL),(61,'Duster',11,'2023-04-07 21:00:33',NULL),(62,'Jogger',11,'2023-04-07 21:00:33',NULL),(63,'Sandero',11,'2023-04-07 21:00:33',NULL),(64,'Spring',11,'2023-04-07 21:00:33',NULL),(65,'360',12,'2023-04-07 21:00:33',NULL),(66,'458',12,'2023-04-07 21:00:33',NULL),(67,'488',12,'2023-04-07 21:00:33',NULL),(68,'550 Marnello',12,'2023-04-07 21:00:33',NULL),(69,'599',12,'2023-04-07 21:00:33',NULL),(70,'612',12,'2023-04-07 21:00:33',NULL),(71,'California',12,'2023-04-07 21:00:33',NULL),(72,'F430',12,'2023-04-07 21:00:33',NULL),(73,'Civic',15,'2023-04-07 21:00:33',NULL),(74,'CR-V',15,'2023-04-07 21:00:33',NULL),(75,'e',15,'2023-04-07 21:00:33',NULL),(76,'HR-V',15,'2023-04-07 21:00:33',NULL),(77,'Jazz',15,'2023-04-07 21:00:33',NULL),(78,'D-MAX',17,'2023-04-07 21:00:33',NULL),(79,'E-PACE',19,'2023-04-07 21:00:33',NULL),(80,'F-PACE',19,'2023-04-07 21:00:33',NULL),(81,'F-Type',19,'2023-04-07 21:00:33',NULL),(82,'I-PACE',19,'2023-04-07 21:00:33',NULL),(83,'XE',19,'2023-04-07 21:00:33',NULL),(84,'XF',19,'2023-04-07 21:00:33',NULL),(85,'Avenger',20,'2023-04-07 21:00:33',NULL),(86,'Compass',20,'2023-04-07 21:00:33',NULL),(87,'Gladiator',20,'2023-04-07 21:00:33',NULL),(88,'Grand Cherokee',20,'2023-04-07 21:00:33',NULL),(89,'Renegade',20,'2023-04-07 21:00:33',NULL),(90,'Wrangler',20,'2023-04-07 21:00:33',NULL),(91,'cee\'d',21,'2023-04-07 21:00:33',NULL),(92,'EV6',21,'2023-04-07 21:00:33',NULL),(93,'Niro',21,'2023-04-07 21:00:33',NULL),(94,'Picanto',21,'2023-04-07 21:00:33',NULL),(95,'Rio',21,'2023-04-07 21:00:33',NULL),(96,'Sorento',21,'2023-04-07 21:00:33',NULL),(97,'Soul',21,'2023-04-07 21:00:33',NULL),(98,'Sportage',21,'2023-04-07 21:00:33',NULL),(99,'Stinger',21,'2023-04-07 21:00:33',NULL),(100,'Stonic',21,'2023-04-07 21:00:33',NULL),(101,'Aventador',24,'2023-04-07 21:00:33',NULL),(102,'Countach',24,'2023-04-07 21:00:33',NULL),(103,'Huracán',24,'2023-04-07 21:00:33',NULL),(104,'Urus',24,'2023-04-07 21:00:33',NULL),(105,'Defender',26,'2023-04-07 21:00:33',NULL),(106,'Discovery',26,'2023-04-07 21:00:33',NULL),(107,'Discovery Sport',26,'2023-04-07 21:00:33',NULL),(108,'LandRover',26,'2023-04-07 21:00:33',NULL),(109,'Evoque',26,'2023-04-07 21:00:33',NULL),(110,'Sport',26,'2023-04-07 21:00:33',NULL),(111,'Velar',26,'2023-04-07 21:00:33',NULL),(112,'ES',28,'2023-04-07 21:00:33',NULL),(113,'IS',28,'2023-04-07 21:00:33',NULL),(114,'LC',28,'2023-04-07 21:00:33',NULL),(115,'LS',28,'2023-04-07 21:00:33',NULL),(116,'NX',28,'2023-04-07 21:00:33',NULL),(117,'RX',28,'2023-04-07 21:00:33',NULL),(118,'RZ',28,'2023-04-07 21:00:33',NULL),(119,'UX',28,'2023-04-07 21:00:33',NULL),(120,'Emira',29,'2023-04-07 21:00:33',NULL),(121,'Ghibli',30,'2023-04-07 21:00:33',NULL),(122,'GranTurismo',30,'2023-04-07 21:00:33',NULL),(123,'Grecale',30,'2023-04-07 21:00:33',NULL),(124,'Levante',30,'2023-04-07 21:00:33',NULL),(125,'MC20',30,'2023-04-07 21:00:33',NULL),(126,'Quattroporte',30,'2023-04-07 21:00:33',NULL),(127,'CX-30',31,'2023-04-07 21:00:33',NULL),(128,'CX-5',31,'2023-04-07 21:00:33',NULL),(129,'CX-60',31,'2023-04-07 21:00:33',NULL),(130,'Mazda2',31,'2023-04-07 21:00:33',NULL),(131,'Mazda3',31,'2023-04-07 21:00:33',NULL),(132,'Mazda6',31,'2023-04-07 21:00:33',NULL),(133,'MX-30',31,'2023-04-07 21:00:33',NULL),(134,'MX-5',31,'2023-04-07 21:00:33',NULL),(135,'Citan',32,'2023-04-07 21:00:33',NULL),(136,'CLA',32,'2023-04-07 21:00:33',NULL),(137,'Clase A',32,'2023-04-07 21:00:33',NULL),(138,'Clase B',32,'2023-04-07 21:00:33',NULL),(139,'Clase C',32,'2023-04-07 21:00:33',NULL),(140,'Clase E',32,'2023-04-07 21:00:33',NULL),(141,'Clase G',32,'2023-04-07 21:00:33',NULL),(142,'GLC',32,'2023-04-07 21:00:33',NULL),(143,'GLS',32,'2023-04-07 21:00:33',NULL),(144,'5',33,'2023-04-07 21:00:33',NULL),(145,'MINI',33,'2023-04-07 21:00:33',NULL),(146,'Cabrio',33,'2023-04-07 21:00:33',NULL),(147,'Clubman',33,'2023-04-07 21:00:33',NULL),(148,'Countryman',33,'2023-04-07 21:00:33',NULL),(149,'ASX',34,'2023-04-07 21:00:33',NULL),(150,'Eclipse Cross',34,'2023-04-07 21:00:33',NULL),(151,'Space Star',34,'2023-04-07 21:00:33',NULL),(152,'Plus',35,'2023-04-07 21:00:33',NULL),(153,'Ariya',36,'2023-04-07 21:00:33',NULL),(154,'Juke',36,'2023-04-07 21:00:33',NULL),(155,'LEAF',36,'2023-04-07 21:00:33',NULL),(156,'Micra',36,'2023-04-07 21:00:33',NULL),(157,'Qashqai',36,'2023-04-07 21:00:33',NULL),(158,'Townstar',36,'2023-04-07 21:00:33',NULL),(159,'X-Trail',36,'2023-04-07 21:00:33',NULL),(160,'Astra',37,'2023-04-07 21:00:33',NULL),(161,'Combo',37,'2023-04-07 21:00:33',NULL),(162,'Corsa',37,'2023-04-07 21:00:33',NULL),(163,'Crossland',37,'2023-04-07 21:00:33',NULL),(164,'Grandland',37,'2023-04-07 21:00:33',NULL),(165,'Mokka',37,'2023-04-07 21:00:33',NULL),(166,'Zafira',37,'2023-04-07 21:00:33',NULL),(167,'2008',38,'2023-04-07 21:00:33',NULL),(168,'208',38,'2023-04-07 21:00:33',NULL),(169,'3008',38,'2023-04-07 21:00:33',NULL),(170,'308',38,'2023-04-07 21:00:33',NULL),(171,'408',38,'2023-04-07 21:00:33',NULL),(172,'5008',38,'2023-04-07 21:00:33',NULL),(173,'508',38,'2023-04-07 21:00:33',NULL),(174,'Rifter',38,'2023-04-07 21:00:33',NULL),(175,'Traveller',38,'2023-04-07 21:00:33',NULL),(176,'718',40,'2023-04-07 21:00:33',NULL),(177,'911',40,'2023-04-07 21:00:33',NULL),(178,'Cayenne',40,'2023-04-07 21:00:33',NULL),(179,'Macan',40,'2023-04-07 21:00:33',NULL),(180,'Porsche',40,'2023-04-07 21:00:33',NULL),(181,'Taycan',40,'2023-04-07 21:00:33',NULL),(182,'Arkana',41,'2023-04-07 21:00:33',NULL),(183,'Austral',41,'2023-04-07 21:00:33',NULL),(184,'Captur',41,'2023-04-07 21:00:33',NULL),(185,'Clio',41,'2023-04-07 21:00:33',NULL),(186,'Espace',41,'2023-04-07 21:00:33',NULL),(187,'Grand Scénic',41,'2023-04-07 21:00:33',NULL),(188,'Kangoo',41,'2023-04-07 21:00:33',NULL),(189,'Koleos',41,'2023-04-07 21:00:33',NULL),(190,'Mégane',41,'2023-04-07 21:00:33',NULL),(191,'SpaceClass',41,'2023-04-07 21:00:33',NULL),(192,'Arona',43,'2023-04-07 21:00:33',NULL),(193,'Ateca',43,'2023-04-07 21:00:33',NULL),(194,'Ibiza',43,'2023-04-07 21:00:33',NULL),(195,'León',43,'2023-04-07 21:00:33',NULL),(196,'Tarraco',43,'2023-04-07 21:00:33',NULL),(197,'Fabia',44,'2023-04-07 21:00:33',NULL),(198,'Kamiq',44,'2023-04-07 21:00:33',NULL),(199,'Karoq',44,'2023-04-07 21:00:33',NULL),(200,'Kodiaq',44,'2023-04-07 21:00:33',NULL),(201,'Octavia',44,'2023-04-07 21:00:33',NULL),(202,'Scala',44,'2023-04-07 21:00:33',NULL),(203,'Superb',44,'2023-04-07 21:00:33',NULL),(204,'smart',45,'2023-04-07 21:00:33',NULL),(205,'fortwo',45,'2023-04-07 21:00:33',NULL),(206,'Korando',46,'2023-04-07 21:00:33',NULL),(207,'Musso',46,'2023-04-07 21:00:33',NULL),(208,'Rexton',46,'2023-04-07 21:00:33',NULL),(209,'Tivoli',46,'2023-04-07 21:00:33',NULL),(210,'Forester',47,'2023-04-07 21:00:33',NULL),(211,'Impreza',47,'2023-04-07 21:00:33',NULL),(212,'Outback',47,'2023-04-07 21:00:33',NULL),(213,'Solterra',47,'2023-04-07 21:00:33',NULL),(214,'XV',47,'2023-04-07 21:00:33',NULL),(215,'Across',48,'2023-04-07 21:00:33',NULL),(216,'Ignis',48,'2023-04-07 21:00:33',NULL),(217,'S-Cross',48,'2023-04-07 21:00:33',NULL),(218,'Swace',48,'2023-04-07 21:00:33',NULL),(219,'Swift',48,'2023-04-07 21:00:33',NULL),(220,'Vitara',48,'2023-04-07 21:00:33',NULL),(221,'Model 3',50,'2023-04-07 21:00:33',NULL),(222,'Model S',50,'2023-04-07 21:00:33',NULL),(223,'Model X',50,'2023-04-07 21:00:33',NULL),(224,'Model Y',50,'2023-04-07 21:00:33',NULL),(225,'500X',1,'2023-04-07 21:00:33',NULL),(226,'Doblo',2,'2023-04-07 21:00:33',NULL),(227,'Panda',3,'2023-04-07 21:00:33',NULL),(228,'Tipo',4,'2023-04-07 21:00:33',NULL),(229,'EcoSport',14,'2023-04-07 21:00:33',NULL),(230,'Explorer',14,'2023-04-07 21:00:33',NULL),(231,'Fiesta',14,'2023-04-07 21:00:33',NULL),(232,'Focus',14,'2023-04-07 21:00:33',NULL),(233,'Grand',14,'2023-04-07 21:00:33',NULL),(234,'Tourneo',14,'2023-04-07 21:00:33',NULL),(235,'Connect',14,'2023-04-07 21:00:33',NULL),(236,'Kuga',14,'2023-04-07 21:00:33',NULL),(237,'Mustang',14,'2023-04-07 21:00:33',NULL);
/*!40000 ALTER TABLE `carmodels` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `colors`
--

DROP TABLE IF EXISTS `colors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `colors` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `colors`
--

LOCK TABLES `colors` WRITE;
/*!40000 ALTER TABLE `colors` DISABLE KEYS */;
INSERT INTO `colors` VALUES (1,'red','2023-04-07 21:00:38',NULL),(2,'grey','2023-04-07 21:00:38',NULL),(3,'blue','2023-04-07 21:00:38',NULL),(4,'green','2023-04-07 21:00:38',NULL),(5,'yellow','2023-04-07 21:00:38',NULL),(6,'white','2023-04-07 21:00:38',NULL),(7,'black','2023-04-07 21:00:38',NULL);
/*!40000 ALTER TABLE `colors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `countrys`
--

DROP TABLE IF EXISTS `countrys`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `countrys` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `countrys`
--

LOCK TABLES `countrys` WRITE;
/*!40000 ALTER TABLE `countrys` DISABLE KEYS */;
/*!40000 ALTER TABLE `countrys` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gastypes`
--

DROP TABLE IF EXISTS `gastypes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `gastypes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tipo` varchar(50) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gastypes`
--

LOCK TABLES `gastypes` WRITE;
/*!40000 ALTER TABLE `gastypes` DISABLE KEYS */;
INSERT INTO `gastypes` VALUES (1,'GNC','2023-04-07 21:01:07',NULL),(2,'Nafta','2023-04-07 21:01:07',NULL),(3,'Diesel','2023-04-07 21:01:07',NULL),(4,'Hibrido','2023-04-07 21:01:07',NULL),(5,'Electrico','2023-04-07 21:01:07',NULL);
/*!40000 ALTER TABLE `gastypes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `genders`
--

DROP TABLE IF EXISTS `genders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `genders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `genders`
--

LOCK TABLES `genders` WRITE;
/*!40000 ALTER TABLE `genders` DISABLE KEYS */;
INSERT INTO `genders` VALUES (1,'Masculino','2023-04-17 20:56:51',NULL),(2,'Femenino','2023-04-17 20:57:13',NULL),(3,'Otro','2023-04-17 20:57:24',NULL);
/*!40000 ALTER TABLE `genders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `images` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `hierarchy` int(11) DEFAULT NULL,
  `product_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `images_name_IDX` (`name`) USING BTREE,
  KEY `product_id` (`product_id`),
  CONSTRAINT `product_id` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
INSERT INTO `images` VALUES (1,'product-727647b1-d30d-429a-8627-7bede80f24dd.png',NULL,21),(2,'product-6ab27ff1-f68f-4772-9f9f-9a377bdbd0cc.png',NULL,21),(3,'product-062ba3c8-d78d-4581-9572-34a2cd58665a.png',NULL,21);
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `model_id` int(11) NOT NULL,
  `year` year(4) DEFAULT NULL,
  `km` int(11) DEFAULT NULL,
  `color_id` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  `vehicleType_id` int(11) NOT NULL,
  `gasType_id` int(11) NOT NULL,
  `manufacturingYear` year(4) DEFAULT NULL,
  `transmission` varchar(25) DEFAULT NULL,
  `doors` tinyint(4) DEFAULT NULL,
  `equipment` varchar(500) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_13f59d9c-1cfa-4141-93d3-ea918f8de728` (`model_id`),
  KEY `FK_47db4f29-5cbe-4faf-bfa3-fd104da84eef` (`color_id`),
  KEY `FK_e819a77c-8fe9-4de4-8c06-04685bd30db9` (`gasType_id`),
  KEY `FK_a2768eea-0731-454a-adb6-e9e70598846a` (`vehicleType_id`),
  CONSTRAINT `FK_13f59d9c-1cfa-4141-93d3-ea918f8de728` FOREIGN KEY (`model_id`) REFERENCES `carmodels` (`id`),
  CONSTRAINT `FK_47db4f29-5cbe-4faf-bfa3-fd104da84eef` FOREIGN KEY (`color_id`) REFERENCES `colors` (`id`),
  CONSTRAINT `FK_a2768eea-0731-454a-adb6-e9e70598846a` FOREIGN KEY (`vehicleType_id`) REFERENCES `vehicletypes` (`id`),
  CONSTRAINT `FK_e819a77c-8fe9-4de4-8c06-04685bd30db9` FOREIGN KEY (`gasType_id`) REFERENCES `gastypes` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (2,2,2010,100000,1,20000000,1,1,2001,'manual',3,'stereo, techo corredizo','2023-04-07 20:50:13',NULL),(3,3,2003,NULL,1,100000000,1,1,1990,'automatico',4,'bluetooth, wifi','2023-04-07 20:50:13',NULL),(4,4,2001,100000,1,30000000,1,1,1989,'automatico',5,'llantas de aleación, ABS. ','2023-04-07 20:50:13',NULL),(5,4,NULL,NULL,2,4,2,1,NULL,NULL,NULL,NULL,'2023-04-07 20:50:13',NULL),(6,4,NULL,NULL,2,4,2,2,NULL,NULL,NULL,NULL,'2023-04-07 20:50:13',NULL),(7,7,NULL,NULL,5,3,3,3,NULL,NULL,NULL,NULL,'2023-04-07 20:50:13',NULL),(8,3,0000,2,2,2,2,2,2001,'1',2,'1','2023-04-19 23:23:41',NULL),(9,3,0000,2,2,2,2,2,2001,'1',2,'1','2023-04-19 23:24:24',NULL),(10,3,0000,7,3,150,2,2,2001,'1',2,'a','2023-04-19 23:44:56',NULL),(11,3,0000,7,3,150,2,2,2001,'1',2,'a','2023-04-19 23:46:20',NULL),(12,3,0000,7,3,150,2,2,2001,'1',2,'a','2023-04-19 23:48:46',NULL),(13,5,2005,6,3,1,4,3,2006,'1',2,'k','2023-04-19 23:53:00',NULL),(14,6,2001,1,2,1,2,3,2001,'1',1,'1','2023-04-19 23:55:30',NULL),(15,4,2001,4,2,4,1,2,2001,'4',4,'4','2023-04-19 23:56:54',NULL),(16,6,2004,1212124,2,2121214,1,1,0000,'Manualg',5,'no tiene4','2023-04-20 00:22:09',NULL),(18,5,0000,8,3,1,3,3,2001,'Manual',3,'no tiene4','2023-04-20 00:32:16',NULL),(19,9,2009,1,2,40000,3,2,2010,'Manual',3,'cama king','2023-04-21 20:45:46',NULL),(20,1,2009,1,1,40000,2,2,0000,'Manual',5,'cama king','2023-04-21 20:58:42','2023-04-21 21:02:39'),(21,7,2009,1,5,12000,3,1,2121,'Automatico',5,'cama king1','2023-04-21 21:05:19',NULL);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'cliente','2023-04-13 00:20:50',NULL),(2,'admin','2023-04-13 00:20:50',NULL);
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `states`
--

DROP TABLE IF EXISTS `states`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `states` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `states`
--

LOCK TABLES `states` WRITE;
/*!40000 ALTER TABLE `states` DISABLE KEYS */;
INSERT INTO `states` VALUES (1,'Buenos Aires','2023-04-18 00:00:38',NULL),(2,'Catamarca','2023-04-18 00:00:56',NULL),(3,'Chaco','2023-04-18 00:01:09',NULL),(4,'Chubut','2023-04-18 00:01:20',NULL),(5,'Córdoba','2023-04-18 00:01:35',NULL),(6,'Corrientes','2023-04-18 00:01:48',NULL),(7,'Entre Ríos','2023-04-18 00:01:59',NULL),(8,'Formosa','2023-04-18 00:02:07',NULL),(9,'Jujuy','2023-04-18 00:02:15',NULL),(10,'La Pampa','2023-04-18 00:02:24',NULL),(11,'La Rioja','2023-04-18 00:02:37',NULL),(12,'Mendoza','2023-04-18 00:02:49',NULL),(13,'Misiones','2023-04-18 00:02:58',NULL),(14,'Neuquén','2023-04-18 00:03:09',NULL),(15,'Río Negro','2023-04-18 00:03:21',NULL),(16,'Salta','2023-04-18 00:06:58',NULL),(17,'San Juan','2023-04-18 00:06:59',NULL),(18,'San Luis','2023-04-18 00:06:59',NULL),(19,'Santa Cruz','2023-04-18 00:06:59',NULL),(20,'Santa Fe','2023-04-18 00:06:59',NULL),(21,'Santiago del Estero','2023-04-18 00:06:59',NULL),(22,'Tierra del fuego, Atártida e Islas del Atlántico Sur','2023-04-18 00:06:59',NULL),(23,'Tucumán','2023-04-18 00:06:59',NULL),(24,'CABA','2023-04-18 00:08:09',NULL);
/*!40000 ALTER TABLE `states` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `userimages`
--

DROP TABLE IF EXISTS `userimages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `userimages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userimages_FK` (`user_id`),
  CONSTRAINT `userimages_FK` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `userimages`
--

LOCK TABLES `userimages` WRITE;
/*!40000 ALTER TABLE `userimages` DISABLE KEYS */;
INSERT INTO `userimages` VALUES (2,'user-588c83d0-ea93-4b13-929e-acadf472fd7b.jpg',1),(3,'pop-cat-cat.gif',5);
/*!40000 ALTER TABLE `userimages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `lastName` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `rol_id` int(11) NOT NULL,
  `nickname` varchar(255) NOT NULL,
  `gender_id` int(11) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `dni` int(11) DEFAULT NULL,
  `bornDate` date DEFAULT NULL,
  `state_id` int(11) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `nickname` (`nickname`),
  KEY `FK_32ac1af1-f02b-4f58-aba1-671d44abd08b` (`gender_id`),
  KEY `FK_6e628a7c-a299-486a-ad11-39e338908b51` (`state_id`),
  KEY `FK_53e032ef-6985-410b-b1e7-80ec494f5ddd` (`rol_id`),
  CONSTRAINT `FK_53e032ef-6985-410b-b1e7-80ec494f5ddd` FOREIGN KEY (`rol_id`) REFERENCES `roles` (`id`),
  CONSTRAINT `FK_6e628a7c-a299-486a-ad11-39e338908b51` FOREIGN KEY (`state_id`) REFERENCES `states` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Mariano','Robles','lautaro.robles1992@gmail.com',2,'laucharobles',1,'2920475048','$2a$10$bCjLWeb1KTo0pIVJbGwVFeysSjUuukpPs6aVXVKGNh2EHE1Iyt.Ei',36926640,'1991-09-16',13,'2023-04-14 23:19:16',NULL),(3,'Maximiliano','Robles','maxi.robles1992@gmail.com',1,'maxirobles',NULL,NULL,'$2a$10$hH9RdqADM6L55YcDt0.kSOvcey45FnwqxrBKx.tpcE7Ep88wmPUWO',NULL,NULL,NULL,'2023-04-17 23:18:23',NULL),(4,'Ignacio Nicolás','Moscatelli','inm300300@gmail.com',1,'Nachito',1,'1165804809','$2a$10$FdRICeXocD6hawfSc5r5I.UKJ9fxquO/BnRDpEYSsSOlIucrMg4v6',42494055,'2000-03-30',1,'2023-04-18 00:14:35',NULL),(5,'santiago','vanzillotta','santiagovanzillotta@gmail.com',1,'vanzi',NULL,NULL,'$2a$10$tJW4kcbr93XPs0ddTPEmN.lU0YYbB8fZB/f4YLWr5l7xYsu1CuyXC',NULL,NULL,NULL,'2023-04-19 20:31:10',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vehicletypes`
--

DROP TABLE IF EXISTS `vehicletypes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vehicletypes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tipo` varchar(50) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `deletedAt` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vehicletypes`
--

LOCK TABLES `vehicletypes` WRITE;
/*!40000 ALTER TABLE `vehicletypes` DISABLE KEYS */;
INSERT INTO `vehicletypes` VALUES (1,'sedan','2023-04-07 21:01:43',NULL),(2,'suv','2023-04-07 21:01:43',NULL),(3,'pickup','2023-04-07 21:01:43',NULL),(4,'van','2023-04-07 21:01:43',NULL),(5,'coupe','2023-04-07 21:01:43',NULL);
/*!40000 ALTER TABLE `vehicletypes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'eleanor_cars'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-21 21:50:36
