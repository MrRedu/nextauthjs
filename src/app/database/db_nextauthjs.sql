SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

CREATE DATABASE db_nextauthjs;
USE db_nextauthjs;

CREATE TABLE `tbl_roles` (
  `id_rol` int(11) NOT NULL,
  `name_rol` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='Tabla de roles.';

INSERT INTO `tbl_roles` (id_rol, name_rol) VALUES
(1, 'Administrador'),
(2, 'Desarrollador'),
(3, 'Usuario');


CREATE TABLE `tbl_users` (
  `id_user` int(11) NOT NULL,
  `email_user` varchar(48) NOT NULL,
  `password_user` varchar(255) NOT NULL,
  `fullname_user` varchar(32) NOT NULL,
  `id_rol` int(11) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='Tabla de usuarios.';


INSERT INTO `tbl_users` (id_user, email_user, password_user, fullname_user, id_rol) VALUES
(1, 'usuario1@example.com', 'usuario1', 'Eduardo', 1),
(2, 'usuario2@example.com', 'usuario2', 'Ana Gómez', 2),
(3, 'usuario3@example.com', 'usuario3', 'Luis Fernández', 3);



ALTER TABLE `tbl_users`
  ADD PRIMARY KEY (`id_user`);

ALTER TABLE `tbl_roles`
  ADD PRIMARY KEY (`id_rol`);

ALTER TABLE `tbl_users`
  ADD CONSTRAINT `tbl_users_ibfk_1` FOREIGN KEY (`id_rol`) REFERENCES `tbl_roles` (`id_rol`);



COMMIT;