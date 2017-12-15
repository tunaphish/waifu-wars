USE `waifuWarsDb` ;

DROP EVENT IF EXISTS logScoresEvent;

delimiter |
CREATE EVENT logScoresEvent 
	ON SCHEDULE EVERY 5 MINUTE
	DO
		BEGIN
			INSERT INTO rankLog(divisionWaifuId, date, rank)
			SELECT divisionWaifuId, now(), currentRank
			FROM divisionWaifus;
		END |
delimiter ;

SET GLOBAL event_scheduler = ON;