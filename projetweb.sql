-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3036
-- Généré le : mar. 29 mars 2022 à 20:40
-- Version du serveur : 10.4.22-MariaDB
-- Version de PHP : 8.1.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `projetweb`
--

-- --------------------------------------------------------

--
-- Structure de la table `chrchemploistage`
--

CREATE TABLE `chrchemploistage` (
  `idCherch` int(255) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `TypeOfUsing` int(255) NOT NULL,
  `idcv` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `cv`
--

CREATE TABLE `cv` (
  `idcv` int(255) NOT NULL,
  `FirstName` varchar(255) NOT NULL,
  `LastName` varchar(255) NOT NULL,
  `DateNaissance` varchar(255) NOT NULL,
  `PlaceNaissance` varchar(255) NOT NULL,
  `Diplomes` text NOT NULL,
  `Langue` text NOT NULL,
  `Skills` text NOT NULL,
  `Hobies` text NOT NULL,
  `Localisation` varchar(255) NOT NULL,
  `PhoneNumber` int(255) NOT NULL,
  `Email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `entrepriseaccount`
--

CREATE TABLE `entrepriseaccount` (
  `idEntreprise` int(255) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `TypeOfUsing` varchar(255) NOT NULL DEFAULT 'Entreprise',
  `idEntrDetail` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `entreprisedetails`
--

CREATE TABLE `entreprisedetails` (
  `idEntrDetail` int(11) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Localisation` varchar(255) NOT NULL,
  `DomainActivitéPrincip` varchar(255) NOT NULL,
  `DomainActiviteSecondaire` varchar(255) NOT NULL,
  `Description` text NOT NULL,
  `Email` varchar(255) NOT NULL,
  `SponsorNo` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `events`
--

CREATE TABLE `events` (
  `OrganizedBy` int(255) NOT NULL,
  `Theme` varchar(255) NOT NULL,
  `Where` varchar(255) NOT NULL,
  `When` date NOT NULL,
  `Description` varchar(255) NOT NULL,
  `id` int(255) NOT NULL,
  `Name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `normaluseraccount`
--

CREATE TABLE `normaluseraccount` (
  `idNormlUser` int(255) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `Password` varchar(255) NOT NULL,
  `TypeOfUsing` varchar(255) NOT NULL DEFAULT 'NormalUser'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `personalprojectpubs`
--

CREATE TABLE `personalprojectpubs` (
  `id` int(255) NOT NULL,
  `Titre` varchar(255) NOT NULL,
  `Description` text NOT NULL,
  `Name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `stage`
--

CREATE TABLE `stage` (
  `id` int(255) NOT NULL,
  `Where` varchar(255) NOT NULL,
  `when` date NOT NULL,
  `theme` varchar(255) NOT NULL,
  `Description` text NOT NULL,
  `FreeNo` varchar(255) NOT NULL,
  `OrganizedBy` varchar(255) NOT NULL,
  `Name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `chrchemploistage`
--
ALTER TABLE `chrchemploistage`
  ADD PRIMARY KEY (`idCherch`),
  ADD UNIQUE KEY `id` (`idCherch`,`Email`),
  ADD KEY `idcv` (`idcv`);

--
-- Index pour la table `cv`
--
ALTER TABLE `cv`
  ADD PRIMARY KEY (`idcv`),
  ADD UNIQUE KEY `Email` (`Email`),
  ADD KEY `idcv` (`idcv`),
  ADD KEY `idcv_2` (`idcv`);

--
-- Index pour la table `entrepriseaccount`
--
ALTER TABLE `entrepriseaccount`
  ADD PRIMARY KEY (`idEntreprise`),
  ADD UNIQUE KEY `Email` (`Email`),
  ADD KEY `idEntrDetail` (`idEntrDetail`);

--
-- Index pour la table `entreprisedetails`
--
ALTER TABLE `entreprisedetails`
  ADD PRIMARY KEY (`idEntrDetail`),
  ADD UNIQUE KEY `id` (`idEntrDetail`,`Email`),
  ADD UNIQUE KEY `NomComplet` (`Name`),
  ADD KEY `idEntr` (`idEntrDetail`),
  ADD KEY `NomComplet_2` (`Name`);

--
-- Index pour la table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Name` (`Name`);

--
-- Index pour la table `normaluseraccount`
--
ALTER TABLE `normaluseraccount`
  ADD PRIMARY KEY (`idNormlUser`);

--
-- Index pour la table `personalprojectpubs`
--
ALTER TABLE `personalprojectpubs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Name` (`Name`);

--
-- Index pour la table `stage`
--
ALTER TABLE `stage`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Name` (`Name`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `chrchemploistage`
--
ALTER TABLE `chrchemploistage`
  MODIFY `idCherch` int(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `cv`
--
ALTER TABLE `cv`
  MODIFY `idcv` int(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `entrepriseaccount`
--
ALTER TABLE `entrepriseaccount`
  MODIFY `idEntreprise` int(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `entreprisedetails`
--
ALTER TABLE `entreprisedetails`
  MODIFY `idEntrDetail` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `events`
--
ALTER TABLE `events`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `normaluseraccount`
--
ALTER TABLE `normaluseraccount`
  MODIFY `idNormlUser` int(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `personalprojectpubs`
--
ALTER TABLE `personalprojectpubs`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `stage`
--
ALTER TABLE `stage`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `chrchemploistage`
--
ALTER TABLE `chrchemploistage`
  ADD CONSTRAINT `chrchemploistage_ibfk_1` FOREIGN KEY (`idCherch`) REFERENCES `cv` (`idcv`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
