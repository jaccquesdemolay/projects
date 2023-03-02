-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3308
-- Generation Time: Mar 02, 2023 at 09:01 PM
-- Server version: 8.0.18
-- PHP Version: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `eventswebpg`
--

-- --------------------------------------------------------

--
-- Table structure for table `county`
--

DROP TABLE IF EXISTS `county`;
CREATE TABLE IF NOT EXISTS `county` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=44 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `county`
--

INSERT INTO `county` (`id`, `name`) VALUES
(1, 'Avon'),
(2, 'Bedfordshire'),
(3, 'Berkshire'),
(4, 'Buckinghamshire'),
(5, 'Cambridgeshire'),
(6, 'Cheshire'),
(7, 'Cornwall'),
(8, 'Cumbria'),
(9, 'Derbyshire'),
(10, 'Devon'),
(11, 'Dorset'),
(12, 'Durham'),
(13, 'Essex'),
(14, 'Gloucestershire'),
(15, 'Greater London'),
(16, 'Hampshire'),
(17, 'Herefordshire'),
(18, 'Hertfordshire'),
(19, 'Isle of Wight'),
(20, 'Kent'),
(21, 'Lancashire'),
(22, 'Leicestershire'),
(23, 'Lincolnshire'),
(24, 'Merseyside'),
(25, 'Norfolk'),
(26, 'Northamptonshire'),
(27, 'Northumberland'),
(28, 'Nottinghamshire'),
(29, 'Oxfordshire'),
(30, 'Rutland'),
(31, 'Schools'),
(32, 'Shropshire'),
(33, 'Somerset'),
(34, 'Staffordshire'),
(35, 'Suffolk'),
(36, 'Surrey'),
(37, 'Sussex'),
(38, 'Tyne and Wear'),
(39, 'Warwickshire'),
(40, 'West Midlands'),
(41, 'Wiltshire'),
(42, 'Worcestershire'),
(43, 'Yorkshire');

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

DROP TABLE IF EXISTS `events`;
CREATE TABLE IF NOT EXISTS `events` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(35) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `text` varchar(500) NOT NULL,
  `city` varchar(100) NOT NULL,
  `county_id` int(11) NOT NULL,
  `image` varchar(300) NOT NULL,
  `date` date NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `events`
--

INSERT INTO `events` (`id`, `title`, `text`, `city`, `county_id`, `image`, `date`) VALUES
(1, 'Experience Leicester\'s Festival of ', 'Wrap up warm for Leicester’s spectacular Diwali lights switch and celebrations leading up to the epic finale on Diwali Day.', 'Leicester', 22, 'images/leicester1.jpg', '2023-03-10'),
(2, 'Leicester\'s Caribbean Carnival', 'Join the annual Leicester Caribbean Carnival in August for a celebration of culture and tradition full of music, colour and dance.', 'Leicester', 22, 'images/leicester2.jpg', '2023-03-22'),
(3, 'Shirley Valentine Tickets', 'Shirley Valentine is the celebrated one-woman play written by Willy Russell, winning him his third\r\nOlivier Award.', 'London', 15, 'images/london1.jpg', '2023-04-13'),
(4, 'Live at the Palace', 'Live at the Palace returns to picturesque Fulham Palace House & Garden this May with headliners Ministry Of Sound Classical and Groove Armada.', 'Fulham Palace House', 15, 'images/london2.jpg', '2023-05-28'),
(5, 'Reading Festival / Leeds Festival 2', 'Twin music festivals taking place simultaneously over the same UK bank holiday weekend on Friday 25 - Sunday 27 August 2023.', 'Leeds', 43, 'images/yorkshire1.jpg', '2023-08-25'),
(6, 'Boygenius', 'Phoebe Bridgers, Lucy Dacus and Julien Baker, are set to perform the outdoor summer show on August 20 in front of almost 25,000 fans.', 'Gunnersbury Park London', 15, 'images/london3.jpg', '2023-08-20'),
(7, 'Disney\'s Frozen The Musical', 'Disney\'s Frozen The Musical ran for 851 performances. Directed by Michael Grandage, an spectacular show for families.', 'Theatre Royal Drury Lane', 15, 'images/london4.jpg', '2023-05-24'),
(8, 'Phil Wang', 'David Letterman appearance, and role on Life & Beth with Amy Schumer, Phil Wang is bringing a brand new stand-up show to venues nationwide. ', 'Oxford', 29, 'images/oxford1.jpg', '2023-03-14'),
(9, 'Water Festival', 'Don’t miss this exciting literature event, a festival of words and ideas, set by the lake surrounded by the Lake District fells.', 'Keswick', 8, 'images/cumbria1.jpg', '2023-03-30'),
(10, 'Get a fix at the London Coffee Fest', 'Master your latte art and sample some of the best small batch and specialist coffee at the city’s annual Coffee Festival in March.', 'London', 15, 'images/london5.jpg', '2023-03-21'),
(11, 'The changing of the Guards ', 'For sheer pomp and ceremony, you can’t beat the changing of the guard at Buckingham Palace, St James’s Palace and Wellington Barracks.', 'London', 15, 'images/london6.jpg', '2023-07-12'),
(12, 'Go horse riding in Hyde Park', 'Saddle up and enjoy a horseback ride in Hyde Park, once Henry VII\'s favourite hunting spot (when he wasn\'t ordering \"Off with her head!\").', 'Hyde Park', 15, 'images/london9.jpg', '2023-05-16'),
(13, 'Take a boat trip in Little Venice', 'ruise along the canal connecting London\'s picturesque Little Venice to the colourful hub of Camden Lock.', 'Warwick Avenue', 15, 'images/london7.jpg', '2023-04-06'),
(14, 'See a play under the stars', 'Experience theatre performed in the open air, amid the beautiful, green surroundings of Regent\'s Park.', 'Regent\'s Park', 15, 'images/london8.jpg', '2023-03-24'),
(15, 'The London Dungeon', 'You\'re lost in the streets of East London where Jack the Ripper is on the prowl. Will you make it out alive? Head to London Dungeon to find out.', 'London Bridge', 15, 'images/london10.jpg', '2023-04-18'),
(16, 'Parliament\'s medieval Westminster H', 'Explore 1,000 years of British history on a tour of the Houses of Parliament, from the Westminster Palace to the Commons Chamber.', 'Westminster', 15, 'images/london11.jpg', '2023-03-30');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
