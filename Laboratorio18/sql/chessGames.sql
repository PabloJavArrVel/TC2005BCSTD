DROP DATABASE IF EXISTS chessGames;
CREATE DATABASE chessGames;
USE chessGames;

CREATE TABLE IF NOT EXISTS games (
    id INT AUTO_INCREMENT PRIMARY KEY,
    white VARCHAR(255) NOT NULL,
    black VARCHAR(255) NOT NULL,
    ratingWhite INT NOT NULL,
    ratingBlack INT NOT NULL,
    moves VARCHAR(10000) NOT NULL
);

INSERT INTO games (white, black, ratingWhite, ratingBlack, moves) 
VALUES 
    ('Magnus Carlsen', 'Baku Boulevard', 2890, 2738, '1. Nf3 Nf6 2. g3 g6 3. b3 b6 4. Bg2 Bb7 5. O-O Bg7 6. Bb2 O-O 7. c4 c5 8. d4cxd4 9. Qxd4 d6 10. Nc3 Nbd7 11. Ne1 Bxg2 12. Nxg2 Ne5 13. Rfd1 Qc8 14. Nf4 Re815. Qd2 h5 16. Ncd5 Ne4 17. Qc2 Ng5 18. Rac1 h4 19. f3 h3 20. Nd3 e6 21. Ne3 Qb722. Nxe5 dxe5 23. Ng4 Nxf3+ 24. exf3 Qxf3 1-0'),
    ('Howgwarts', 'TheThunderboltKing', 930, 970, '1. d4 d5 2. Bf4 Nf6 3. e3 Bf5 4. Nf3 e6 5. c4 Bb4+ 6. Nc3 O-O 7. Qd2 Bxc3 8.Qxc3 Ne4 9. Qc2 Nxf2 10. Qxf2 1-0'),
    ('ELPRESID3NTE', 'TheThunderboltking', 979, 938, '1. e4 e5 2. Nf3 Nf6 3. d4 c6 4. dxe5 Nxe4 5. Bd3 d5 6. Bxe4 dxe4 7. Qxd8+ Kxd8 8. Nd4 Bc5 9. Be3 Bg4 10. O-O f6 11. exf6 gxf6 12. f3 exf3 13. gxf3 Bh3 14. Ne6+ Ke8 15. Nxc5 Bxf1 16. Kxf1 Na6 17. Nc3 Nxc5 18. Bxc5 Rd8 19. Re1+ Kf7 20. Re7+ Kf8 21. Rxh7+ Kg8 22. Rxh8+ Kxh8 23. Bd4 Rxd4 24. Ne4 Rd1+ 25. Kg2 b5 26. Nxf6 Rd2+ 27. Kg3 Rxc2 28. b3 Rxa2 29. h4 Ra3 30. Kg4 Rxb3 31. f4 b4 32. h5 a5 33. Nd7 Rb1 34. Kg5 Rh1 35. h6 Kh7 36. Nf8+ Kh8 37. Kg6 Kg8 38. Ne6 b3 39. Ng5 b2 40. h7+ Kh8 41. Nf7# 1-0'),
    ('thaimer', 'TheThunderboltking', 979, 938, '1. e3 d5 2. a3 e5 3. Qh5 Nc6 4. Bb5 Nf6 (4... Bd7) 5. Bxc6+ bxc6 6. Qxe5+ Be7 7.Nf3 Ng4 8. Qxg7 Bf6 9. Qxh8+ Bxh8 10. Nd4 Bxd4 11. exd4 Qe7+ 0-1'),
    ('Mattyucr', 'TheThunderboltKing', '1009', '932', '1. e4 c6 2. c4 d5 3. cxd5 cxd5 4. e5 Nc6 5. Qa4 Bd7 6. Qb5 Qc7 7. Nf3 Nxe5 8.Qxd5 Nxf3+ 9. Qxf3 Qxc1+ 10. Qd1 Qxd1+ 11. Kxd1 Nf6 12. Nc3 e6 13. Bb5 O-O-O 14.Re1 Bxb5 15. Nxb5 Bc5 16. Rc1 b6 17. Nxa7+ Kb7 18. Nb5 Bxf2 19. Re2 Bc5 20. h3Ka6 21. a4 Kb7 22. Kc2 Nd5 23. d4 Bxd4 24. Nxd4 Nb4+ 25. Kc3 Na2+ 0-1');