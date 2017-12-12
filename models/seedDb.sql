USE `waifuWarsDb` ;

INSERT INTO division(divisionName) VALUES('Persona 4');

INSERT INTO waifu(waifuName, picture) VALUES('Rise Kujikawa', 'rise-kujikawa.png');
INSERT INTO waifu(waifuName, picture) VALUES('Chie Satonaka', 'chie-satonaka.png');
INSERT INTO waifu(waifuName, picture) VALUES('Naoto Shirogane', 'naoto-shirogane.png');
INSERT INTO waifu(waifuName, picture) VALUES('Yukiko Amagi', 'yukiko-amagi.png');


INSERT INTO divisionWaifus(divisionId, waifuId, currentRank) VALUES(
	(SELECT divisionId
	FROM division
    WHERE divisionName = 'Persona 4'), 1, 1400);
    
    
INSERT INTO divisionWaifus(divisionId, waifuId, currentRank) VALUES(
	(SELECT divisionId
	FROM division
    WHERE divisionName = 'Persona 4'), 2, 1400);
    
    
INSERT INTO divisionWaifus(divisionId, waifuId, currentRank) VALUES(
	(SELECT divisionId
	FROM division
    WHERE divisionName = 'Persona 4'), 3,1400);
    
    
INSERT INTO divisionWaifus(divisionId, waifuId, currentRank) VALUES(
	(SELECT divisionId
	FROM division
    WHERE divisionName = 'Persona 4'), 4, 1400);