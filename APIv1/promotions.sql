-- phpMyAdmin SQL Dump
-- version 4.9.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Aug 25, 2021 at 09:17 AM
-- Server version: 5.6.49-cll-lve
-- PHP Version: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cokfinancialservices`
--

-- --------------------------------------------------------

--
-- Table structure for table `promotions`
--

CREATE TABLE `promotions` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(200) NOT NULL,
  `description` text,
  `status` int(10) UNSIGNED NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `created_by` int(10) UNSIGNED NOT NULL DEFAULT '1',
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_by` int(10) UNSIGNED NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `promotions`
--

INSERT INTO `promotions` (`id`, `name`, `description`, `status`, `created_at`, `created_by`, `updated_at`, `updated_by`) VALUES
(1, 'Deferred Shares 7 percent', 'C.O.K Solidity 7% P.A deferred Share promotion. ', 1, '2019-02-19 16:19:57', 1, '2019-02-19 16:19:57', 1),
(2, 'Auto Loan', '100% financing with interest rates as low as 7.99%.', 1, '2019-02-27 11:15:08', 1, '2019-02-27 11:15:08', 1),
(3, 'Unsecured Loan', 'Borrow upto $2.5 Million dollars', 1, '2019-04-04 12:58:05', 1, '2019-04-04 12:58:05', 1),
(4, 'Loan For Home', 'Loan For Home Promotion.', 1, '2019-05-27 20:12:40', 1, '2019-05-27 20:12:40', 1),
(5, 'COK Partner Plan', NULL, 1, '2019-09-13 07:12:19', 1, '2019-09-13 07:12:19', 1),
(6, 'Super Savers', NULL, 1, '2019-09-13 07:12:19', 1, '2019-09-13 07:12:19', 1),
(7, 'Home Equity Loan', 'Home Equity Loan', 1, '2021-08-25 09:15:00', 1, '2021-08-25 09:15:00', 1),
(8, 'Mortgage', 'Mortgage', 1, '2021-08-25 09:15:00', 1, '2021-08-25 09:15:00', 1),
(9, 'Mortgage Refinance', 'Mortgage Refinance', 1, '2021-08-25 09:15:58', 1, '2021-08-25 09:15:58', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `promotions`
--
ALTER TABLE `promotions`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `promotions`
--
ALTER TABLE `promotions`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
