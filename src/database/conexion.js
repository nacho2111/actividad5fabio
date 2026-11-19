import mysql from "mysql2/promise";

export async function conectar() {
    try {
        const bdd = await mysql.createConnection({
            host: 'localhost',
            database: 'marcote',
            user: 'root',
            password: "Puchus25"
        });
        console.log(`conectado`);
        return bdd;
    } catch (error) {
        console.log(`no conecta`, error);
    }
}