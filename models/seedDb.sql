USE `waifuWarsDb` ;

INSERT INTO division(divisionName) VALUES('All');
INSERT INTO division(divisionName) VALUES('Persona Series');
INSERT INTO division(divisionName) VALUES('Overwatch');

INSERT INTO waifu(waifuName, picture) VALUES('Aigis', 'aigis.png');
INSERT INTO waifu(waifuName, picture) VALUES('Chihiro Fushimi', 'chihiro-fushimi.png');
INSERT INTO waifu(waifuName, picture) VALUES('Fuuka Yamagishi', 'fuuka-yamagishi.png');
INSERT INTO waifu(waifuName, picture) VALUES('Mara', 'mara.png');
INSERT INTO waifu(waifuName, picture) VALUES('Mitsuru Kirijo', 'mitsuru-kirijo.png');
INSERT INTO waifu(waifuName, picture) VALUES('Yukari Takeba', 'yukari-takeba.png');
INSERT INTO waifu(waifuName, picture) VALUES('Yuko Nishiwaki', 'yuko-nishiwaki.png');
INSERT INTO waifu(waifuName, picture) VALUES('Ai Ebihara', 'ai-ebihara.png');
INSERT INTO waifu(waifuName, picture) VALUES('Ayane Matsunaga', 'ayane-matsunaga.png');
INSERT INTO waifu(waifuName, picture) VALUES('Chie Satonaka', 'chie-satonaka.png');
INSERT INTO waifu(waifuName, picture) VALUES('Marie', 'marie.png');
INSERT INTO waifu(waifuName, picture) VALUES('Naoto Shirogane', 'naoto-shirogane.png');
INSERT INTO waifu(waifuName, picture) VALUES('Rise Kujikawa', 'rise-kujikawa.png');
INSERT INTO waifu(waifuName, picture) VALUES('Yukiko Amagi', 'yukiko-amagi.png');
INSERT INTO waifu(waifuName, picture) VALUES('Yumi Ozawa', 'yumi-ozawa.png');
INSERT INTO waifu(waifuName, picture) VALUES('Ann Takamaki', 'ann-takamaki.png');
INSERT INTO waifu(waifuName, picture) VALUES('Chihaya Mifune', 'chihaya-mifune.png');
INSERT INTO waifu(waifuName, picture) VALUES('Futaba Sakura', 'futaba-sakura.png');
INSERT INTO waifu(waifuName, picture) VALUES('Haru Okumura', 'haru-okumura.png');
INSERT INTO waifu(waifuName, picture) VALUES('Hifumi Togo', 'hifumi-togo.png');
INSERT INTO waifu(waifuName, picture) VALUES('Ichiko Ohya', 'ichiko-ohya.png');
INSERT INTO waifu(waifuName, picture) VALUES('Makoto Niijima', 'makoto-niijima.png');
INSERT INTO waifu(waifuName, picture) VALUES('Sadayo Kawakami', 'sadayo-kawakami.png');
INSERT INTO waifu(waifuName, picture) VALUES('Tae Takemi', 'tae-takemi.png');
INSERT INTO divisionWaifus(divisionId, waifuId, currentRank) VALUES(
  (SELECT divisionId
  FROM division
  WHERE divisionName = 'Persona Series'),
  (SELECT waifuId
  FROM waifu
  WHERE waifuName = 'Aigis'), 1400);
INSERT INTO divisionWaifus(divisionId, waifuId, currentRank) VALUES(
  (SELECT divisionId
  FROM division
  WHERE divisionName = 'Persona Series'),
  (SELECT waifuId
  FROM waifu
  WHERE waifuName = 'Chihiro Fushimi'), 1400);
INSERT INTO divisionWaifus(divisionId, waifuId, currentRank) VALUES(
  (SELECT divisionId
  FROM division
  WHERE divisionName = 'Persona Series'),
  (SELECT waifuId
  FROM waifu
  WHERE waifuName = 'Fuuka Yamagishi'), 1400);
INSERT INTO divisionWaifus(divisionId, waifuId, currentRank) VALUES(
  (SELECT divisionId
  FROM division
  WHERE divisionName = 'Persona Series'),
  (SELECT waifuId
  FROM waifu
  WHERE waifuName = 'Mara'), 1400);
INSERT INTO divisionWaifus(divisionId, waifuId, currentRank) VALUES(
  (SELECT divisionId
  FROM division
  WHERE divisionName = 'Persona Series'),
  (SELECT waifuId
  FROM waifu
  WHERE waifuName = 'Mitsuru Kirijo'), 1400);
INSERT INTO divisionWaifus(divisionId, waifuId, currentRank) VALUES(
  (SELECT divisionId
  FROM division
  WHERE divisionName = 'Persona Series'),
  (SELECT waifuId
  FROM waifu
  WHERE waifuName = 'Yukari Takeba'), 1400);
INSERT INTO divisionWaifus(divisionId, waifuId, currentRank) VALUES(
  (SELECT divisionId
  FROM division
  WHERE divisionName = 'Persona Series'),
  (SELECT waifuId
  FROM waifu
  WHERE waifuName = 'Yuko Nishiwaki'), 1400);
INSERT INTO divisionWaifus(divisionId, waifuId, currentRank) VALUES(
  (SELECT divisionId
  FROM division
  WHERE divisionName = 'Persona Series'),
  (SELECT waifuId
  FROM waifu
  WHERE waifuName = 'Ai Ebihara'), 1400);
INSERT INTO divisionWaifus(divisionId, waifuId, currentRank) VALUES(
  (SELECT divisionId
  FROM division
  WHERE divisionName = 'Persona Series'),
  (SELECT waifuId
  FROM waifu
  WHERE waifuName = 'Ayane Matsunaga'), 1400);
INSERT INTO divisionWaifus(divisionId, waifuId, currentRank) VALUES(
  (SELECT divisionId
  FROM division
  WHERE divisionName = 'Persona Series'),
  (SELECT waifuId
  FROM waifu
  WHERE waifuName = 'Chie Satonaka'), 1400);
INSERT INTO divisionWaifus(divisionId, waifuId, currentRank) VALUES(
  (SELECT divisionId
  FROM division
  WHERE divisionName = 'Persona Series'),
  (SELECT waifuId
  FROM waifu
  WHERE waifuName = 'Marie'), 1400);
INSERT INTO divisionWaifus(divisionId, waifuId, currentRank) VALUES(
  (SELECT divisionId
  FROM division
  WHERE divisionName = 'Persona Series'),
  (SELECT waifuId
  FROM waifu
  WHERE waifuName = 'Naoto Shirogane'), 1400);
INSERT INTO divisionWaifus(divisionId, waifuId, currentRank) VALUES(
  (SELECT divisionId
  FROM division
  WHERE divisionName = 'Persona Series'),
  (SELECT waifuId
  FROM waifu
  WHERE waifuName = 'Rise Kujikawa'), 1400);
INSERT INTO divisionWaifus(divisionId, waifuId, currentRank) VALUES(
  (SELECT divisionId
  FROM division
  WHERE divisionName = 'Persona Series'),
  (SELECT waifuId
  FROM waifu
  WHERE waifuName = 'Yukiko Amagi'), 1400);
INSERT INTO divisionWaifus(divisionId, waifuId, currentRank) VALUES(
  (SELECT divisionId
  FROM division
  WHERE divisionName = 'Persona Series'),
  (SELECT waifuId
  FROM waifu
  WHERE waifuName = 'Yumi Ozawa'), 1400);
INSERT INTO divisionWaifus(divisionId, waifuId, currentRank) VALUES(
  (SELECT divisionId
  FROM division
  WHERE divisionName = 'Persona Series'),
  (SELECT waifuId
  FROM waifu
  WHERE waifuName = 'Ann Takamaki'), 1400);
INSERT INTO divisionWaifus(divisionId, waifuId, currentRank) VALUES(
  (SELECT divisionId
  FROM division
  WHERE divisionName = 'Persona Series'),
  (SELECT waifuId
  FROM waifu
  WHERE waifuName = 'Chihaya Mifune'), 1400);
INSERT INTO divisionWaifus(divisionId, waifuId, currentRank) VALUES(
  (SELECT divisionId
  FROM division
  WHERE divisionName = 'Persona Series'),
  (SELECT waifuId
  FROM waifu
  WHERE waifuName = 'Futaba Sakura'), 1400);
INSERT INTO divisionWaifus(divisionId, waifuId, currentRank) VALUES(
  (SELECT divisionId
  FROM division
  WHERE divisionName = 'Persona Series'),
  (SELECT waifuId
  FROM waifu
  WHERE waifuName = 'Haru Okumura'), 1400);
INSERT INTO divisionWaifus(divisionId, waifuId, currentRank) VALUES(
  (SELECT divisionId
  FROM division
  WHERE divisionName = 'Persona Series'),
  (SELECT waifuId
  FROM waifu
  WHERE waifuName = 'Hifumi Togo'), 1400);
INSERT INTO divisionWaifus(divisionId, waifuId, currentRank) VALUES(
  (SELECT divisionId
  FROM division
  WHERE divisionName = 'Persona Series'),
  (SELECT waifuId
  FROM waifu
  WHERE waifuName = 'Ichiko Ohya'), 1400);
INSERT INTO divisionWaifus(divisionId, waifuId, currentRank) VALUES(
  (SELECT divisionId
  FROM division
  WHERE divisionName = 'Persona Series'),
  (SELECT waifuId
  FROM waifu
  WHERE waifuName = 'Makoto Niijima'), 1400);
INSERT INTO divisionWaifus(divisionId, waifuId, currentRank) VALUES(
  (SELECT divisionId
  FROM division
  WHERE divisionName = 'Persona Series'),
  (SELECT waifuId
  FROM waifu
  WHERE waifuName = 'Sadayo Kawakami'), 1400);
INSERT INTO divisionWaifus(divisionId, waifuId, currentRank) VALUES(
  (SELECT divisionId
  FROM division
  WHERE divisionName = 'Persona Series'),
  (SELECT waifuId
  FROM waifu
  WHERE waifuName = 'Tae Takemi'), 1400);

    
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
  
INSERT INTO divisionWaifus(divisionId, waifuId, currentRank) 
SELECT divisionId, waifuId, 1400
FROM division d, waifu w
WHERE d.divisionName = 'ALL'



