CREATE TABLE usuario (
id serial PRIMARY KEY,
username varchar(15) UNIQUE NOT NULL,
email varchar(255) UNIQUE NOT NULL,
senha varchar(255) NOT NULL,
nome varchar(100),
dt_cadastro date DEFAULT current_date
);

CREATE TABLE jogo (
id serial PRIMARY KEY, 
nome VARCHAR(120) NOT NULL,
genero VARCHAR(10),
ano_lancamento INTEGER NOT NULL,
descricao TEXT,
imagem VARCHAR(255)
);

CREATE TABLE avaliacao (
id serial PRIMARY KEY,
nota decimal(2,1) NOT NULL CHECK(nota BETWEEN 1 AND 5),
comentario TEXT,
status varchar(20) CHECK(status in ('Jogando', 'Zerado')),
dt_avaliacao date DEFAULT current_date,
id_usuario INT REFERENCES usuario(id),
id_jogo INT REFERENCES jogo(id)
);

CREATE TABLE plataforma (
id serial PRIMARY KEY,
nome VARCHAR(200) UNIQUE NOT NULL
);

CREATE TABLE jogo_plataforma (
id_jogo_plataforma serial PRIMARY KEY,
id_jogo INTEGER REFERENCES jogo(id),
id_plataforma INTEGER REFERENCES plataforma(id)
);

select * from usuario