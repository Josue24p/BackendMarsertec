--DROP DATABASE MASERTEC;
CREATE DATABASE MASERTEC;
USE MASERTEC;

-- 1) Tabla Categoria
CREATE TABLE Categoria (
    id_categoria INT AUTO_INCREMENT PRIMARY KEY,
    cat_nombre VARCHAR(255) NULL,
    cat_imagen VARCHAR(255) NULL,
    cat_descripcion TEXT NULL
);

-- 2) Tabla SubCategoria
CREATE TABLE SubCategoria (
    id_subcategoria INT AUTO_INCREMENT PRIMARY KEY,
    id_categoria INT NOT NULL,
    subcat_nombre VARCHAR(255) NULL,
    subcat_imagen VARCHAR(255) NULL,
    subcat_descripcion TEXT NULL,
    CONSTRAINT fkIdCategoria FOREIGN KEY (id_categoria) REFERENCES Categoria(id_categoria)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION
);

-- 3) Tabla Productos
CREATE TABLE Productos (
    id_producto INT AUTO_INCREMENT PRIMARY KEY,
    id_subcategoria INT NOT NULL,
    prod_nombre VARCHAR(255) NULL,
    prod_image VARCHAR(255) NULL,
    prod_descripcion TEXT NULL,
    CONSTRAINT fkSubCategoria FOREIGN KEY (id_subcategoria) REFERENCES SubCategoria(id_subcategoria)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION
);

-- 4) Tabla Usuario
CREATE TABLE Usuario (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nombre_usuario VARCHAR(20) NULL,
    apellido_usuario VARCHAR(20) NULL,
    email_usuario VARCHAR(50) NULL, -- Aumenté el tamaño, 20 es poco para un correo
    password_usuario VARCHAR(255) NULL, -- 20 es muy poco para almacenar contraseñas encriptadas
    estado_usuario VARCHAR(20) NULL,
    fecha_creacion DATETIME NULL
);

-- 5) Tabla Rol
CREATE TABLE Rol (
    id_rol INT AUTO_INCREMENT PRIMARY KEY,
    nombre_rol VARCHAR(255) NULL,
    descripcion_rol TEXT NULL
);

-- 6) Tabla UsuarioRol
CREATE TABLE UsuarioRol (
    id_usuario_rol INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT NOT NULL,
    id_rol INT NOT NULL,
    fecha_asignacion DATETIME NULL,
    CONSTRAINT fkIdRol FOREIGN KEY (id_rol) REFERENCES Rol(id_rol)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION,
    CONSTRAINT fkIdUsuario FOREIGN KEY (id_usuario) REFERENCES Usuario(id_usuario)
        ON DELETE NO ACTION
        ON UPDATE NO ACTION
);

-- 7) Tabla Contacto
CREATE TABLE Contacto (
    id_contacto INT AUTO_INCREMENT PRIMARY KEY,
    nombre_contacto VARCHAR(255) NULL,
    telefono_contacto CHAR(9) NULL,
    correo_contacto VARCHAR(255) NULL,
    mensaje_contacto TEXT NULL
);	

INSERT INTO categoria (cat_nombre, cat_imagen, cat_descripcion)
VALUES 
('Fotocheck', 'https://masertecperu.com/imagenes/fotocheck.png', 'Nuestro servicio de impresión de fotochecks incluye la elaboración del diseño y sesión fotográfica al personal en sus propias instalaciones sin costo adicional.');

INSERT INTO SubCategoria (id_categoria, subcat_nombre, subcat_imagen, subcat_descripcion)
VALUES 
(1, 'Fotocheck', 'https://copylinedigital.com/wp-content/uploads/2021/02/credencial-c.jpg', null);

INSERT INTO Contacto (nombre_contacto, telefono_contacto, correo_contacto, mensaje_contacto)
VALUES 
(
    'Juan López',            -- Nombre del contacto
    '987654321',             -- Número de teléfono (9 dígitos)
    'juan.lopez@example.com',-- Correo electrónico
    'Estoy interesado en comprar una impresora, ¿pueden enviarme más detalles?'
);

select *from categoria;

select *from SubCategoria;

select * from contacto
