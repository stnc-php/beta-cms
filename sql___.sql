CREATE TABLE IF NOT EXISTS `articles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) NOT NULL,
  `title` text NOT NULL,
  `description` text NOT NULL,
  `keywords` text NOT NULL,
  `content` text NOT NULL,
  `type` varchar(50) NOT NULL,
  `category` varchar(40) NOT NULL,
  `visible` varchar(3) NOT NULL,
  `slug` text NOT NULL,
  `article_date` date NOT NULL,
  `sidebar` text NOT NULL,
  `page_order` int(11) NOT NULL,
  `parent` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=48;


CREATE TABLE IF NOT EXISTS `settings` (
  `home_page` int(11) NOT NULL,
  `template` varchar(50) NOT NULL,
  `sitename` varchar(250) NOT NULL,
  `email_address` varchar(200) NOT NULL,
  `password` text NOT NULL
    ) ENGINE=MyISAM DEFAULT CHARSET=latin1;
	
	
	INSERT INTO `articles` (`id`, `name`, `title`, `description`, `keywords`, `content`, `type`, `category`, `visible`, `slug`, `article_date`, `sidebar`, `page_order`, `parent`) VALUES
(27, 'Home', 'My Website', 'My Website', 'My Website', '<p>\r\n <strong>Home Page</strong></p>\r\n<p>\r\n Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#39;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>\r\n<p>\r\n It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\r\n', '', '', 'No', 'home', '0000-00-00', '<p>\r\n <strong>Where does it come from?</strong></p>\r\n<p>\r\n Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC</p>\r\n', 1, 0),

(45, 'Drop down', 'Parent page', 'Parent page', 'Parent page', '<p>\r\n <strong>This page is a parent of other child pages.</strong></p>\r\n<p>\r\n It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\r\n', '', '', 'Yes', 'dropdown', '0000-00-00', '<p>\r\n <strong>Sidebar content</strong></p>\r\n<p>\r\n It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\r\n', 2, 0);




INSERT INTO `settings` (`home_page`, `template`, `sitename`, `email_address`, `password`) VALUES
(27, 'plan', 'My Website', 'you@email.com', '21232f297a57a5a743894a0e4a801fc3');