CREATE TABLE roles (
  idRol INT NOT NULL AUTO_INCREMENT,
  DescriptionRol VARCHAR(50) NOT NULL,
  PRIMARY KEY (idRol)
);

CREATE TABLE privileges (
  idPrivilege INT NOT NULL AUTO_INCREMENT,
  action VARCHAR(50) NOT NULL,
  PRIMARY KEY (idPrivilege)
);

CREATE TABLE roles_privileges (
  idRol INT NOT NULL,
  idPrivilege INT NOT NULL,
  PRIMARY KEY (idRol, idPrivilege),
  FOREIGN KEY (idRol) REFERENCES roles(idRol) ON DELETE CASCADE,
  FOREIGN KEY (idPrivilege) REFERENCES privileges(idPrivilege) ON DELETE CASCADE
);

CREATE TABLE users (
  IdUser INT NOT NULL AUTO_INCREMENT,
  Name VARCHAR(100) NOT NULL,
  PRIMARY KEY (IdUser),
  password VARCHAR(600) NOT NULL
);

CREATE TABLE users_roles (
  IdUser INT NOT NULL,
  idRol INT NOT NULL,
  PRIMARY KEY (IdUser, idRol),
  FOREIGN KEY (IdUser) REFERENCES users(IdUser) ON DELETE CASCADE,
  FOREIGN KEY (idRol) REFERENCES roles(idRol) ON DELETE CASCADE
);

INSERT INTO users (IdUser, Name,password) VALUES (1, 'Pablo Javier Arreola Velasco','lol23');

INSERT INTO roles (DescripcionRol) VALUES ('registered'), ('admin');

INSERT INTO privileges (action) VALUES ('view_game'), ('create_game'), ('edit_game'), ('delete_game');

INSERT INTO roles_privileges (idRol, idPrivilege) VALUES 
(2, 2),
(2, 3),
(3, 1),
(3, 2),
(3, 3),
(3, 4);

INSERT INTO users_roles (IdUser, idRol) VALUES (1, 3);
