USE `waifuWarsDb` ;

INSERT INTO division(divisionName) VALUES('Persona Series');

INSERT INTO waifu(waifuName, picture) VALUES('Rise Kujikawa', 'rise-kujikawa.png');
INSERT INTO waifu(waifuName, picture) VALUES('Chie Satonaka', 'chie-satonaka.png');
INSERT INTO waifu(waifuName, picture) VALUES('Naoto Shirogane', 'naoto-shirogane.png');
INSERT INTO waifu(waifuName, picture) VALUES('Yukiko Amagi', 'yukiko-amagi.png');

INSERT INTO divisionWaifus(divisionId, waifuId, currentRank) VALUES(
	(SELECT divisionId
	FROM division
    WHERE divisionName = 'Persona Series'), 1, 1400);
INSERT INTO divisionWaifus(divisionId, waifuId, currentRank) VALUES(
	(SELECT divisionId
	FROM division
    WHERE divisionName = 'Persona Series'), 2, 1400);
INSERT INTO divisionWaifus(divisionId, waifuId, currentRank) VALUES(
	(SELECT divisionId
	FROM division
    WHERE divisionName = 'Persona Series'), 3, 1400);
INSERT INTO divisionWaifus(divisionId, waifuId, currentRank) VALUES(
	(SELECT divisionId
	FROM division
    WHERE divisionName = 'Persona Series'), 4, 1400);
    
    
INSERT INTO division(divisionName) VALUES('Overwatch');

INSERT INTO waifu(waifuName, picture) VALUES('Bastion', 'bastion.jpg');
INSERT INTO waifu(waifuName, picture) VALUES('Doomfist', 'doomfist.jpg');
INSERT INTO waifu(waifuName, picture) VALUES('Dva', 'dva.jpg');
INSERT INTO waifu(waifuName, picture) VALUES('Genji', 'genji.jpg');
INSERT INTO waifu(waifuName, picture) VALUES('Hanzo', 'hanzo.jpg');
INSERT INTO waifu(waifuName, picture) VALUES('Junkrat', 'junkrat.jpg');
INSERT INTO waifu(waifuName, picture) VALUES('Lucio', 'lucio.jpg');
INSERT INTO waifu(waifuName, picture) VALUES('Mccree', 'mccree.jpg');
INSERT INTO waifu(waifuName, picture) VALUES('Mei', 'mei.jpg');
INSERT INTO waifu(waifuName, picture) VALUES('Mercy', 'mercy.jpg');
INSERT INTO waifu(waifuName, picture) VALUES('Moira', 'moira.jpg');
INSERT INTO waifu(waifuName, picture) VALUES('Orisa', 'orisa.jpg');
INSERT INTO waifu(waifuName, picture) VALUES('Pharah', 'pharah.jpg');
INSERT INTO waifu(waifuName, picture) VALUES('Reaper', 'reaper.jpg');
INSERT INTO waifu(waifuName, picture) VALUES('Reinhardt', 'reinhardt.jpg');
INSERT INTO waifu(waifuName, picture) VALUES('Roadhog', 'roadhog.jpg');
INSERT INTO waifu(waifuName, picture) VALUES('Soldier 76', 'soldier-76.jpg');
INSERT INTO waifu(waifuName, picture) VALUES('Sombra', 'sombra.jpg');
INSERT INTO waifu(waifuName, picture) VALUES('Symmetra', 'symmetra.jpg');
INSERT INTO waifu(waifuName, picture) VALUES('Torbjorn', 'torbjorn.jpg');
INSERT INTO waifu(waifuName, picture) VALUES('Tracer', 'tracer.jpg');
INSERT INTO waifu(waifuName, picture) VALUES('Widowmaker', 'widowmaker.jpg');
INSERT INTO waifu(waifuName, picture) VALUES('Winston', 'winston.jpg');
INSERT INTO waifu(waifuName, picture) VALUES('Zarya', 'zarya.jpg');
INSERT INTO waifu(waifuName, picture) VALUES('Zenyatta', 'zenyatta.jpg');

INSERT INTO divisionWaifus(divisionId, waifuId, currentRank) VALUES(
(SELECT divisionId
FROM division
WHERE divisionName = 'Overwatch'),
(SELECT waifuId
FROM waifu
WHERE waifuName = 'Bastion'), 1400);
INSERT INTO divisionWaifus(divisionId, waifuId, currentRank) VALUES(
(SELECT divisionId
FROM division
WHERE divisionName = 'Overwatch'),
(SELECT waifuId
FROM waifu
WHERE waifuName = 'Doomfist'), 1400);
INSERT INTO divisionWaifus(divisionId, waifuId, currentRank) VALUES(
(SELECT divisionId
FROM division
WHERE divisionName = 'Overwatch'),
(SELECT waifuId
FROM waifu
WHERE waifuName = 'Dva'), 1400);
INSERT INTO divisionWaifus(divisionId, waifuId, currentRank) VALUES(
(SELECT divisionId
FROM division
WHERE divisionName = 'Overwatch'),
(SELECT waifuId
FROM waifu
WHERE waifuName = 'Genji'), 1400);
INSERT INTO divisionWaifus(divisionId, waifuId, currentRank) VALUES(
(SELECT divisionId
FROM division
WHERE divisionName = 'Overwatch'),
(SELECT waifuId
FROM waifu
WHERE waifuName = 'Hanzo'), 1400);
INSERT INTO divisionWaifus(divisionId, waifuId, currentRank) VALUES(
(SELECT divisionId
FROM division
WHERE divisionName = 'Overwatch'),
(SELECT waifuId
FROM waifu
WHERE waifuName = 'Junkrat'), 1400);
INSERT INTO divisionWaifus(divisionId, waifuId, currentRank) VALUES(
(SELECT divisionId
FROM division
WHERE divisionName = 'Overwatch'),
(SELECT waifuId
FROM waifu
WHERE waifuName = 'Lucio'), 1400);
INSERT INTO divisionWaifus(divisionId, waifuId, currentRank) VALUES(
(SELECT divisionId
FROM division
WHERE divisionName = 'Overwatch'),
(SELECT waifuId
FROM waifu
WHERE waifuName = 'Mccree'), 1400);
INSERT INTO divisionWaifus(divisionId, waifuId, currentRank) VALUES(
(SELECT divisionId
FROM division
WHERE divisionName = 'Overwatch'),
(SELECT waifuId
FROM waifu
WHERE waifuName = 'Mei'), 1400);
INSERT INTO divisionWaifus(divisionId, waifuId, currentRank) VALUES(
(SELECT divisionId
FROM division
WHERE divisionName = 'Overwatch'),
(SELECT waifuId
FROM waifu
WHERE waifuName = 'Mercy'), 1400);
INSERT INTO divisionWaifus(divisionId, waifuId, currentRank) VALUES(
(SELECT divisionId
FROM division
WHERE divisionName = 'Overwatch'),
(SELECT waifuId
FROM waifu
WHERE waifuName = 'Moira'), 1400);
INSERT INTO divisionWaifus(divisionId, waifuId, currentRank) VALUES(
(SELECT divisionId
FROM division
WHERE divisionName = 'Overwatch'),
(SELECT waifuId
FROM waifu
WHERE waifuName = 'Orisa'), 1400);
INSERT INTO divisionWaifus(divisionId, waifuId, currentRank) VALUES(
(SELECT divisionId
FROM division
WHERE divisionName = 'Overwatch'),
(SELECT waifuId
FROM waifu
WHERE waifuName = 'Pharah'), 1400);
INSERT INTO divisionWaifus(divisionId, waifuId, currentRank) VALUES(
(SELECT divisionId
FROM division
WHERE divisionName = 'Overwatch'),
(SELECT waifuId
FROM waifu
WHERE waifuName = 'Reaper'), 1400);
INSERT INTO divisionWaifus(divisionId, waifuId, currentRank) VALUES(
(SELECT divisionId
FROM division
WHERE divisionName = 'Overwatch'),
(SELECT waifuId
FROM waifu
WHERE waifuName = 'Reinhardt'), 1400);
INSERT INTO divisionWaifus(divisionId, waifuId, currentRank) VALUES(
(SELECT divisionId
FROM division
WHERE divisionName = 'Overwatch'),
(SELECT waifuId
FROM waifu
WHERE waifuName = 'Roadhog'), 1400);
INSERT INTO divisionWaifus(divisionId, waifuId, currentRank) VALUES(
(SELECT divisionId
FROM division
WHERE divisionName = 'Overwatch'),
(SELECT waifuId
FROM waifu
WHERE waifuName = 'Soldier 76'), 1400);
INSERT INTO divisionWaifus(divisionId, waifuId, currentRank) VALUES(
(SELECT divisionId
FROM division
WHERE divisionName = 'Overwatch'),
(SELECT waifuId
FROM waifu
WHERE waifuName = 'Sombra'), 1400);
INSERT INTO divisionWaifus(divisionId, waifuId, currentRank) VALUES(
(SELECT divisionId
FROM division
WHERE divisionName = 'Overwatch'),
(SELECT waifuId
FROM waifu
WHERE waifuName = 'Symmetra'), 1400);
INSERT INTO divisionWaifus(divisionId, waifuId, currentRank) VALUES(
(SELECT divisionId
FROM division
WHERE divisionName = 'Overwatch'),
(SELECT waifuId
FROM waifu
WHERE waifuName = 'Torbjorn'), 1400);
INSERT INTO divisionWaifus(divisionId, waifuId, currentRank) VALUES(
(SELECT divisionId
FROM division
WHERE divisionName = 'Overwatch'),
(SELECT waifuId
FROM waifu
WHERE waifuName = 'Tracer'), 1400);
INSERT INTO divisionWaifus(divisionId, waifuId, currentRank) VALUES(
(SELECT divisionId
FROM division
WHERE divisionName = 'Overwatch'),
(SELECT waifuId
FROM waifu
WHERE waifuName = 'Widowmaker'), 1400);
INSERT INTO divisionWaifus(divisionId, waifuId, currentRank) VALUES(
(SELECT divisionId
FROM division
WHERE divisionName = 'Overwatch'),
(SELECT waifuId
FROM waifu
WHERE waifuName = 'Winston'), 1400);
INSERT INTO divisionWaifus(divisionId, waifuId, currentRank) VALUES(
(SELECT divisionId
FROM division
WHERE divisionName = 'Overwatch'),
(SELECT waifuId
FROM waifu
WHERE waifuName = 'Zarya'), 1400);
INSERT INTO divisionWaifus(divisionId, waifuId, currentRank) VALUES(
(SELECT divisionId
FROM division
WHERE divisionName = 'Overwatch'),
(SELECT waifuId
FROM waifu
WHERE waifuName = 'Zenyatta'), 1400);



