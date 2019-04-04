-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Apr 04, 2019 at 03:12 AM
-- Server version: 5.7.23
-- PHP Version: 7.1.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `qbaba`
--

-- --------------------------------------------------------

--
-- Table structure for table `account`
--

CREATE TABLE `account` (
  `IdNo` int(5) NOT NULL,
  `Username` text NOT NULL,
  `Password` text NOT NULL,
  `FirstName` text NOT NULL,
  `LastName` text NOT NULL,
  `Teluser` text NOT NULL,
  `Email` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `barbershop`
--

CREATE TABLE `barbershop` (
  `BabberID` int(5) NOT NULL,
  `BaberName` varchar(30) NOT NULL,
  `OwnerName` varchar(30) NOT NULL,
  `TelBarber` int(10) NOT NULL,
  `Address` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `barbershop`
--

INSERT INTO `barbershop` (`BabberID`, `BaberName`, `OwnerName`, `TelBarber`, `Address`) VALUES
(10001, 'ThongBarber', 'thong', 878153453, '152 Moo 7 Phapatone NakhonPathom'),
(10002, 'TatBarber', 'Tat', 909404504, '15 Moo 5NakhonPathom'),
(10003, 'NaBarber', 'Na', 858494472, '94Moo 7 NakhonPathom'),
(10004, 'MivBarber', 'Miv', 854354894, '1 Moo 5 NakhonPathom');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `barbershop`
--
ALTER TABLE `barbershop`
  ADD PRIMARY KEY (`BabberID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
