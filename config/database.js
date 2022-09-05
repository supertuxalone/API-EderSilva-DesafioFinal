-- `dashboard-ford-api`.dados_veiculo definition

CREATE TABLE IF NOT EXISTS `dados_veiculo` (
  `id` int NOT NULL AUTO_INCREMENT,
  `vin` text NOT NULL DEFAULT (_utf8mb4''),
  `odometro` varchar(30) NOT NULL DEFAULT (_utf8mb4''),
  `tirePressure` varchar(30) NOT NULL DEFAULT (_utf8mb4''),
  `status` varchar(30) NOT NULL DEFAULT (_utf8mb4''),
  `batteryStatus` varchar(30) NOT NULL DEFAULT (_utf8mb4''),
  `fuelLevel` varchar(30) NOT NULL DEFAULT (_utf8mb4''),
  `lat` varchar(30) NOT NULL DEFAULT (_utf8mb4''),
  `longi` varchar(30) NOT NULL DEFAULT (_utf8mb4''),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=ascii;


-- `dashboard-ford-api`.model_veiculo definition

CREATE TABLE IF NOT EXISTS `model_veiculo` (
  `id` int NOT NULL AUTO_INCREMENT,
  `model` text NOT NULL DEFAULT (_utf8mb4''),
  `volumetotal` int DEFAULT NULL,
  `connected` int DEFAULT NULL,
  `softwareUpdates` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=ascii;


-- `dashboard-ford-api`.usuario definition

CREATE TABLE IF NOT EXISTS `usuario` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(30) NOT NULL,
  `email` varchar(255) NOT NULL,
  `senha` varchar(255) NOT NULL,
  `nome_completo` varchar(40) NOT NULL,
  `data_cadastro` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `nome` (`nome`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=ascii;