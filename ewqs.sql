-- phpMyAdmin SQL Dump
-- version 4.5.4.1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: 2018-02-26 23:48:25
-- 服务器版本： 5.7.10-log
-- PHP Version: 5.6.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ewqs`
--

-- --------------------------------------------------------

--
-- 表的结构 `artice`
--

CREATE TABLE `artice` (
  `id` int(10) UNSIGNED NOT NULL,
  `title` char(30) NOT NULL,
  `info` char(200) NOT NULL,
  `mainPic` char(100) NOT NULL,
  `content` text NOT NULL,
  `author` char(30) NOT NULL,
  `createDate` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `commentCount` int(11) NOT NULL DEFAULT '0',
  `type` varchar(200) DEFAULT NULL,
  `isAd` tinyint(3) UNSIGNED NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `artice`
--

INSERT INTO `artice` (`id`, `title`, `info`, `mainPic`, `content`, `author`, `createDate`, `commentCount`, `type`, `isAd`) VALUES
(1, '第一张轮播图', '这是第一张轮播图', '/img/ad_1.jpg', '这是第一张轮播图', 'angle', '2017-07-10 14:03:31', 999, ',1,', 1),
(2, '第二张轮播图', '这是第二张轮播图', '/img/ad_2.jpg', '这是第二张轮播图这是第二张轮播图这是第二张轮播图这是第二张轮播图这是第二张轮播图这是第二张轮播图', 'angle', '2017-07-10 14:03:31', 100, ',2,', 1),
(3, '第三张轮播图', '这是第三张轮播图这是第三张轮播图这是第三张轮播图这是第三张轮播图这是第三张轮播图这是第三张轮播图', '/img/ad_3.jpg', '这是第三张轮播图这是第三张轮播图这是第三张轮播图这是第三张轮播图这是第三张轮播图这是第三张轮播图这是第三张轮播图这是第三张轮播图这是第三张轮播图这是第三张轮播图这是第三张轮播图', 'angle', '2017-07-10 14:05:00', 0, ',3,', 1);

-- --------------------------------------------------------

--
-- 表的结构 `articetype`
--

CREATE TABLE `articetype` (
  `id` int(11) NOT NULL,
  `name` varchar(300) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `articetype`
--

INSERT INTO `articetype` (`id`, `name`) VALUES
(1, '热门话题'),
(2, '社区话题'),
(3, '热门提问');

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE `user` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` char(30) NOT NULL,
  `address` varchar(300) DEFAULT NULL,
  `info` varchar(300) DEFAULT NULL,
  `faceUrl` varchar(300) DEFAULT NULL,
  `price` int(10) UNSIGNED DEFAULT '0',
  `expert` tinyint(3) UNSIGNED NOT NULL DEFAULT '0',
  `phone` char(11) NOT NULL,
  `integral` int(11) NOT NULL DEFAULT '0',
  `token` varchar(300) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`id`, `name`, `address`, `info`, `faceUrl`, `price`, `expert`, `phone`, `integral`, `token`) VALUES
(1, '爱丽丝', '广州白云心里医院', '两性、异地恋', '/img/face.png', 0, 1, '18814125521', 0, ''),
(3, 'asd', NULL, NULL, NULL, 0, 0, '18814125537', 0, ''),
(4, 'asds', NULL, NULL, NULL, 0, 0, '18814125523', 0, ''),
(5, 'asds', NULL, NULL, NULL, 0, 0, '18814125522', 0, ''),
(6, 'jsjzh', NULL, NULL, NULL, 0, 0, '18818145527', 0, ''),
(7, 'asd', NULL, NULL, NULL, 0, 0, '18814125529', 0, ''),
(9, 'fghj', NULL, NULL, NULL, 0, 0, '18815125527', 0, ''),
(10, 'fghj', NULL, NULL, NULL, 0, 0, '18815125529', 0, ''),
(11, 'fghj', NULL, NULL, NULL, 0, 0, '18814125527', 0, 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTEsImlhdCI6MTUxOTQ4MTc0MCwiZXhwIjoxNTIwMDg2NTQwfQ.7dDM2ZOoUGHM5IFtbwCOWw6KmDsZwZuETlRFgCndmMI'),
(14, 'fghj', NULL, NULL, NULL, 0, 0, '18814125526', 0, ''),
(21, 'sasd', NULL, NULL, NULL, 0, 0, '18814125528', 0, '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `artice`
--
ALTER TABLE `artice`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `articetype`
--
ALTER TABLE `articetype`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `phone` (`phone`),
  ADD UNIQUE KEY `id` (`id`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `artice`
--
ALTER TABLE `artice`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- 使用表AUTO_INCREMENT `articetype`
--
ALTER TABLE `articetype`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- 使用表AUTO_INCREMENT `user`
--
ALTER TABLE `user`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
