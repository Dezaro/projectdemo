/*
SQLyog Ultimate v12.15 (64 bit)
MySQL - 10.1.10-MariaDB : Database - projectdemo
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`projectdemo` /*!40100 DEFAULT CHARACTER SET latin1 */;

USE `projectdemo`;

/*Table structure for table `post` */

DROP TABLE IF EXISTS `post`;

CREATE TABLE `post` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `post_title` varchar(45) NOT NULL,
  `sub_title` text NOT NULL,
  `post_content` text NOT NULL,
  `user_id` int(10) NOT NULL,
  `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;

/*Data for the table `post` */

insert  into `post`(`id`,`post_title`,`sub_title`,`post_content`,`user_id`,`created`) values 
(1,'New post title','New post sub title','New post content',1,'2017-06-05 10:58:36'),
(13,'First Edit Post','New post sub title','da2 ',1,'2017-06-05 13:54:16'),
(14,'da1 42222212','New post sub title','da2 ',1,'2017-06-07 10:15:49'),
(15,'Rest Insert','New post sub title','Restful content',1,'2017-06-05 10:58:38'),
(16,'Rest Insert','New post sub title','Restful content',1,'2017-06-05 10:58:39'),
(17,'Rest Insert 1','New post sub title','Restful content',1,'2017-06-05 10:58:39'),
(18,'First Created Post','First Created Post','First Created Post',1,'2017-06-05 15:16:05'),
(19,'post_title 1','post_title 1','post_title 1',1,'2017-06-05 15:17:29'),
(20,'Lorem Ipsum','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu metus tortor. Sed fermentum placerat nisi, dapibus luctus mi luctus tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aenean suscipit fermentum odio eu tempus. Vestibulum lacinia purus ut purus mollis, a volutpat diam vestibulum. Sed eget mauris maximus, dignissim dui ac, imperdiet eros. Sed sollicitudin consectetur nibh non tempus.','Vestibulum a ipsum tristique erat efficitur suscipit. Donec quis ante blandit dolor volutpat varius. Curabitur dictum erat neque, vitae consectetur ante iaculis vitae. Aenean et est malesuada, vehicula felis in, egestas arcu. Vivamus porttitor finibus sapien egestas tempor. Nulla et risus a justo egestas imperdiet. Aliquam erat volutpat. In ut mi in libero volutpat pretium. Nullam et enim eget felis laoreet gravida. Curabitur nec nisl id justo feugiat fermentum. Curabitur accumsan velit et mi porttitor pulvinar. Proin quis ultricies lectus. Ut mi nisl, ultricies ut mi et, efficitur semper neque. Nullam ultrices magna quis molestie venenatis. Aenean gravida, neque vel dictum varius, justo orci cursus urna, sed dignissim eros mi in lectus. Nunc eu mollis lacus.',7,'2017-06-07 17:54:34');

/*Table structure for table `user_roles` */

DROP TABLE IF EXISTS `user_roles`;

CREATE TABLE `user_roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_name` varchar(45) NOT NULL,
  `role` varchar(45) NOT NULL,
  KEY `id` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

/*Data for the table `user_roles` */

insert  into `user_roles`(`id`,`user_name`,`role`) values 
(1,'delo','ROLE_ADMIN'),
(2,'lilyana','ROLE_ADMIN');

/*Table structure for table `users` */

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_name` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `name` varchar(45) NOT NULL,
  `enable` int(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;

/*Data for the table `users` */

insert  into `users`(`id`,`user_name`,`password`,`name`,`enable`) values 
(1,'delo','delo','Delo Georgiev Branchev',1),
(7,'lilyana','lilyana','Lilyana ',1);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
