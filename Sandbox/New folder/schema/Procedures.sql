DELIMITER $$
CREATE PROCEDURE `spAverage`()
BEGIN

select KeyName, avg(Score) as Average from scores group by KeyName;

END$$
DELIMITER ;

DELIMITER $$
CREATE PROCEDURE `spMinMax`()
BEGIN

select * from (
select distinct 'Max' as Type, FileName, Score from scores where Score = ( select max(Score) from scores)
union all
select distinct 'Min' as Type, FileName, Score from scores where Score = ( select min(Score) from scores)
) as t;

END$$
DELIMITER ;
