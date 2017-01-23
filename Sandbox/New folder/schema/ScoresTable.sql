CREATE TABLE IF NOT EXISTS `scores` (
  `ScoreID` int(11) NOT NULL AUTO_INCREMENT,
  `FileName` varchar(255) NOT NULL,
  `KeyName` varchar(255) NOT NULL,
  `Score` int(11) NOT NULL,
  `RunDate` datetime NOT NULL,
  PRIMARY KEY (`ScoreID`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8;
