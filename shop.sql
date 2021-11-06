-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 06, 2021 at 08:36 AM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 7.3.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `shop`
--

-- --------------------------------------------------------

--
-- Table structure for table `comment`
--

CREATE TABLE `comment` (
  `commentID` varchar(10) NOT NULL,
  `commentTime` varchar(50) NOT NULL,
  `custName` varchar(50) NOT NULL,
  `custEmail` varchar(50) DEFAULT NULL,
  `custPhone` varchar(11) DEFAULT NULL,
  `content` varchar(255) NOT NULL,
  `productID` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `comment`
--

INSERT INTO `comment` (`commentID`, `commentTime`, `custName`, `custEmail`, `custPhone`, `content`, `productID`) VALUES
('1', 'Wed Nov 03 2021 22:16:51 GMT+0700 (Indochina Time)', 'quang ', '', '', '12 qwesdsad', '2'),
('2', 'Wed Nov 03 2021 22:17:58 GMT+0700 (Indochina Time)', 'quang ', '', '', 'qweqwe', '2');

-- --------------------------------------------------------

--
-- Table structure for table `feedback`
--

CREATE TABLE `feedback` (
  `feedbackID` varchar(10) NOT NULL,
  `custName` varchar(50) DEFAULT NULL,
  `productName` varchar(50) NOT NULL,
  `custPhone` varchar(11) DEFAULT NULL,
  `custEmail` varchar(50) DEFAULT NULL,
  `content` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `feedback`
--

INSERT INTO `feedback` (`feedbackID`, `custName`, `productName`, `custPhone`, `custEmail`, `content`) VALUES
('1', 'mon doan', 'iphone 13 promax', '0706358446', 'quang@gmail.com', 'qweqweqe'),
('2', 'undefined', 'undefined', 'undefined', 'undefined', 'undefined');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `productID` varchar(10) NOT NULL,
  `productName` varchar(50) NOT NULL,
  `productTypeID` varchar(10) NOT NULL,
  `productImage` varchar(100) NOT NULL,
  `salePrice` int(11) NOT NULL,
  `description` varchar(1000) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`productID`, `productName`, `productTypeID`, `productImage`, `salePrice`, `description`) VALUES
('2', 'Wi-Fi Smart Camera', '1', '/images/header/cart-items/item2.jpg', 123, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.'),
('5', 'QUỐC DT', '1', '/images/uploads/so-do-hoat-dong-may-ATM.drawio.png', 123, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.'),
('7', '123', '3', '/images/uploads/so-do-hoat-dong-may-ATM.drawio.png', 123, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.');

-- --------------------------------------------------------

--
-- Table structure for table `producttypes`
--

CREATE TABLE `producttypes` (
  `productTypeID` varchar(10) NOT NULL,
  `productTypeName` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `producttypes`
--

INSERT INTO `producttypes` (`productTypeID`, `productTypeName`) VALUES
('1', 'Smart Watch'),
('2', 'Smart Phone'),
('3', 'Smart Thing');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`commentID`),
  ADD KEY `productID` (`productID`);

--
-- Indexes for table `feedback`
--
ALTER TABLE `feedback`
  ADD PRIMARY KEY (`feedbackID`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`productID`);

--
-- Indexes for table `producttypes`
--
ALTER TABLE `producttypes`
  ADD PRIMARY KEY (`productTypeID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
