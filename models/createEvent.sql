USE `waifuWarsDb` ;

CREATE EVENT logScoresEvent 
	ON SCHEDULE AT CURRENT_TIMESTAMP + INTERVAL 1 MINUTE
    DO
		INSERT INTO rankLog(divisionWaifusId, date, rank)
        SELECT divisionWaifusId, now(), currentRank
        FROM divisionWafus