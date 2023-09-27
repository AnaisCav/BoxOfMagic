DROP TABLE IF EXISTS `product`;

CREATE TABLE `product` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `description` varchar(800) COLLATE utf8mb4_general_ci NOT NULL,
  `price` int NOT NULL,
  `money` VARCHAR(100) COLLATE utf8mb4_general_ci NOT NULL,
  `category` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `house` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `image` text COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `product` (title, description, price, money, category, house, image) VALUES (
  'Baguette en houx, avec plume de phénix', 
  'Cette baguette est en houx, avec une plume de phénix à l''intérieur et mesure 27,5 centimètres. Elle est très souple et facile à manier. Cette baguette a été fabriquée en 1991 ou avant, avec une plume du phénix de Dumbledore, Fumseck. Fumseck a également donné une de ses plumes à une autre baguette, qui se trouve être celle de Voldemort. Les baguettes des deux ennemis sont jumelles, ainsi, leurs propriétaire peuvent se blesser l''un et l''autre mais pas se tuer.', 
  9,
  'Gallions',
  'Baguette',
  '',
  '../src/assets/images/baguettes/hp.webp'
), (
  'Baguette en vigne avec ventricule de dragon', 
  'Cette baguette est en vigne, avec du ventricule de dragon à l''intérieur et mesure 27,30 centimètres', 
  6,
  'Gallions',
  'Baguette',
  '',
  '../src/assets/images/baguettes/hermione.webp'
), (
  'Baguette en noyer avec ventricule de dragon', 
  'Cette baguette est en noyer, contient du ventricule de dragon et mesure 31,8 centimètres. Elle est rigide mais facile à manier', 
  7,
  'Gallions',
  'Baguette',
  '',
  '../src/assets/images/baguettes/bellatrix.webp'
), (
  'Baguette en frênee avec crin de licorne', 
  'Cette baguette magique est en frêne, mesure 30,5 centimètres, avec à l''intérieur de crin de licorne. Cette baguette magique a été fabriquée par Garrick Ollivander.', 
  8,
  'Gallions',
  'Baguette',
  '',
  '../src/assets/images/baguettes/cedric.webp'
), (
  'Baguette en bois d''aubépine avec crin de licorne', 
  'Cette baguette est en bois d''aubépine, mesure 25 cm, est relativement souple et contient un crin de licorne. ', 
  6,
  'Gallions',
  'Baguette',
  '',
  '../src/assets/images/baguettes/draco.webp'
), (
  'Baguette de Sureau', 
  'Cette baguette est constituée d''un bois sombre provenant d''un arbuste, le sureau, et contient un crin de queue de Sombral. Elle mesure 38 centimètres et son manche est agrémenté de deux petites sphères très proches l''une de l''autre. La Baguette de Sureau, également appelée le Bâton de la Mort, la Baguette de la Destinée, ou la Baguette de Sambucus, est l''une des trois Reliques de la Mort. Il s''agit d''une baguette particulièrement puissante qui a appartenu à de nombreux mages noirs et qui est connue pour son histoire particulièrement sanglante, ses admirateurs s''entretuaient au fil des siècles dans l''espoir d''obtenir la baguette qui, selon la légende, aurait été arrachée à la Mort elle-même.', 
  25,
  'Gallions',
  'Baguette',
  '',
  '../src/assets/images/baguettes/dumbledore.webp'
), (
  'Baguette en bois de rose avec un cheveu de vélane', 
  'Cette baguette est en bois de rose, avec à l''intérieur un cheveu de vélane et mesure 23,75 centimètres. Elle est très souple et facile à manier.', 
  9,
  'Gallions',
  'Baguette',
  '',
  '../src/assets/images/baguettes/fleur.webp'
), (
  'Baguette en bois d''aubépine avec du ventricule de dragon', 
  'Cette baguette est constituée d''un bois d''aubépine, avec à l''intérieur du ventricule de dragon. Elle mesure 26,30 centimètres et est très souple.', 
  6,
  'Gallions',
  'Baguette',
  '',
  '../src/assets/images/baguettes/fred.webp'
), (
  'Baguette en bois de frêne avec un crin de licorne. ', 
  'Cette baguette est en bois de frêne et contient un crin de licorne. Elle mesure 27,75 centimètres. Elle est très rigide et difficile à manier.', 
  5,
  'Gallions',
  'Baguette',
  '',
  '../src/assets/images/baguettes/george.webp'
), (
  'Baguette en bois d''if', 
  'Cette baguette est constituée d''un bois d''if. Elle mesure 23,30 centimètres et est très souple et facile à manier.', 
  7,
  'Gallions',
  'Baguette',
  '',
  '../src/assets/images/baguettes/ginny.webp'
), (
  'Baguette en vigne avec un crin de licorne. ', 
  'Cette baguette est en vigne et contient un crin de licorne. Elle mesure 32,75 centimètres. Cette baguette magique a été fabriquée par Garrick Ollivander.', 
  7,
  'Gallions',
  'Baguette',
  '',
  '../src/assets/images/baguettes/luna.webp'
), (
  'Baguette en cyprès avec crin de licorne', 
  'Cette baguette est en cyprès avec un crin de licorne à l''intérieur. Elle mesure 25,75 centimètres et est très souple. Cette baguette magique a été fabriquée par Garrick Ollivander.', 
  8,
  'Gallions',
  'Baguette',
  '',
  '../src/assets/images/baguettes/lupin.webp'
), (
  'Baguette en sapin avec ventricule de dragon. ', 
  'Cette baguette est en sapin, avec du ventricule de dragon à l''intérieur et mesure 23,75 centimètres. Elle est rigide.', 
  9,
  'Gallions',
  'Baguette',
  '',
  '../src/assets/images/baguettes/mcgonagall.webp'
), (
  'Baguette en bois d''if avec crin de licorne', 
  'Cette baguette est en bois d''if avec un crin de licorne à l''intérieur. Elle mesure 25,75 centimètres et est très souple. Cette baguette magique a été fabriquée par Garrick Ollivander.', 
  8,
  'Gallions',
  'Baguette',
  '',
  '../src/assets/images/baguettes/narcissa.webp'
), (
  'Baguette en bois de cerisier avec crin de licorne. ', 
  'Cette baguette est en bois de cerisier avec crin de licorne à l''intérieur et mesure 33,02 centimètres. Elle est souple.', 
  9,
  'Gallions',
  'Baguette',
  '',
  '../src/assets/images/baguettes/neville.webp'
), (
  'Baguette en cyprès avec ventricule de dragon', 
  'Cette baguette est en cyprès avec ventricule de dragon à l''intérieur. Elle mesure 24,75 centimètres et est très souple. Cette baguette magique a été fabriquée par Garrick Ollivander.', 
  8,
  'Gallions',
  'Baguette',
  '',
  '../src/assets/images/baguettes/newt.webp'
), (
  'Baguette en bois d''amourette avec corne de Basilic', 
  'Cette baguette est en bois de d''amourette et contient une corne de Basilic en guise de cœur. La baguette a été fabriquée par Salazar Serpentard lui-même au xe siècle.', 
  19,
  'Gallions',
  'Baguette',
  '',
  '../src/assets/images/baguettes/nymphadora.webp'
), (
  'Baguette en saule avec crin de licorne', 
  'Cette baguette est en saule avec crin de licorne à l''intérieur. Elle mesure 35 centimètres et est très souple. Cette baguette magique a été fabriquée par Garrick Ollivander.', 
  8,
  'Gallions',
  'Baguette',
  '',
  '../src/assets/images/baguettes/ron.webp'
), (
  'Baguette en bois de cèdre. ', 
  'Cette baguette est en bois de cèdre et mesure 26 centimètres. Elle est rigide et difficile à manier.', 
  4,
  'Gallions',
  'Baguette',
  '',
  '../src/assets/images/baguettes/snape.webp'
), (
  'Baguette en roseau avec moustache de Fléreur', 
  'Cette baguette est en roseau avec moustache de Fléreur. Elle mesure 35 centimètres et est très souple. Cette baguette magique a été fabriquée par Garrick Ollivander.', 
  11,
  'Gallions',
  'Baguette',
  '',
  '../src/assets/images/baguettes/sirius.webp'
), (
  'Baguette en if avec plume de Phénix', 
  'Cette baguette est en if, avec une plume de phénix à l''intérieur et mesure 33.75 centimètres La baguette a été fabriquée par Salazar Serpentard lui-même au xe siècle.', 
  4,
  'Gallions',
  'Baguette',
  '',
  '../src/assets/images/baguettes/voldemort.webp'
), (
  'Bague de Gaunt', 
  'La bague de Gaunt est sertie d''une pierre noire, qui est en fait une des trois Reliques de la Mort. Elle est frappée d''un triangle, d''un rond et un trait, symbolisant les Reliques. La bague se transmettait de génération en génération depuis le deuxième frère Peverell, celui des trois frères qui demanda à la Mort une pierre permettant de parler avec les esprits défunts.', 
  75,
  'Gallions',
  'Bijoux',
  'Serpentard',
  '../src/assets/images/bijoux/ring.webp'
), (
  'Médaillon de Salazar Serpentard', 
  'Le médaillon appartenait à Salazar Serpentard, l''un des fondateurs de Poudlard. La famille Gaunt, descendants de Salazar Serpentard, a en sa possession ce médaillon, pour la grande fierté d''Elvis Marvolo Gaunt.', 
  81,
  'Gallions',
  'Bijoux',
  'Serpentard',
  '../src/assets/images/bijoux/locket.webp'
), (
  'Retourneur de Temps', 
  'Le Retourneur de Temps est un objet en forme de sablier permettant de retourner dans le temps. Un Retourneur de Temps doit être tourné un nombre de fois équivalent au nombre d''heures qui doivent être remontées, le maximum étant cinq heures. Au-delà de cette limite, le voyageur est en danger. Son utilisation est régie par de nombreuses lois et des sanctions sévères sont prévues pour éviter l''abus de leur utilisation.', 
  56,
  'Gallions',
  'Bijoux',
  '',
  '../src/assets/images/bijoux/timeturner.webp'
), (
  'Pendentif des Reliques de la Mort', 
  'Le pendentif des Reliques de la Mort est un bijou représentant la Baguette de Sureau, la Pierre de Résurrection et la Cape d''Invisibilité. Le pendentif est composé d''une chaîne en or avec à son extrémité le symbole des Reliques de la Mort, un triangle dans lequel on retrouve un cercle et un trait vertical partant de la base du triangle et allant jusqu''au sommet du cercle.', 
  9,
  'Mornilles',
  'Bijoux',
  '',
  '../src/assets/images/bijoux/deathlyhallows.webp'
);