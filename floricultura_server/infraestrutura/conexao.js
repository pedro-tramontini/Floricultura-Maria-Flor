const { Client } = require('pg');

const conexao = new Client({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "postgres", // adicione sua senha aqui, se tiver
    database: "Floricultura_Maria_Flor"
});

conexao.connect((err) => {
    if (err) {
        console.error('❌ Erro ao conectar no PostgreSQL:', err.message);
    } else {
        console.log('✅ Conectado ao PostgreSQL com sucesso!');
    }
});

module.exports = conexao;
