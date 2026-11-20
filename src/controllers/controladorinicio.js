import { conectar } from '../database/conexion.js';

const bdd = await conectar();
//cuando me dio la actividad, vi las 48 y lo primero que pense fue hacer como 50 ejs pero despues se me ocurrio hacer un superswitch que dependiendo la opcion haga una consulta, lo de el const con los titulos es para cada opcion que elijas :)
const titulos = [
    'Listar los nombres de los usuarios',
    'Calcular el saldo máximo de los usuarios de sexo Mujer',
    'Listar nombre y teléfono de los usuarios con teléfono NOKIA, BLACKBERRY o SONY',
    'Contar los usuarios sin saldo o inactivos',
    'Listar el login de los usuarios con nivel 1, 2 o 3',
    'Listar los números de teléfono con saldo menor o igual a 300',
    'Calcular la suma de los saldos de los usuarios de la compañía NEXTEL',
    'Contar el número de usuarios por compañía telefónica',
    'Contar el número de usuarios por nivel',
    'Listar el login de los usuarios con nivel 2',
    'Mostrar el email de los usuarios que usan gmail',
    'Listar nombre y teléfono de los usuarios con teléfono LG, SAMSUNG o MOTOROLA',
    'Listar nombre y teléfono de los usuarios con teléfono que no sea LG o SAMSUNG',
    'Listar el login y teléfono de los usuarios con compañía IUSACELL',
    'Listar el login y teléfono de los usuarios con compañía que no sea TELCEL',
    'Calcular el saldo promedio de los usuarios con teléfono NOKIA',
    'Listar el login y teléfono de los usuarios con compañía IUSACELL o AXEL',
    'Mostrar el email de los usuarios que no usan yahoo',
    'Listar el login y teléfono de los usuarios con compañía que no sea TELCEL o IUSACELL',
    'Listar el login y teléfono de los usuarios con compañía UNEFON',
    'Listar las diferentes marcas de celular en orden alfabético descendente',
    'Listar las diferentes compañías en orden aleatorio',
    'Listar el login de los usuarios con nivel 0 o 2',
    'Calcular el saldo promedio de los usuarios con teléfono LG',
    'Listar el login de los usuarios con nivel 1 o 3',
    'Listar nombre y teléfono de los usuarios con teléfono que no sea BLACKBERRY',
    'Listar el login de los usuarios con nivel 3',
    'Listar el login de los usuarios con nivel 0',
    'Listar el login de los usuarios con nivel 1',
    'Contar el número de usuarios por sexo',
    'Listar el login y teléfono de los usuarios con compañía AT&T',
    'Listar las diferentes compañías en orden alfabético descendente',
    'Listar el login de los usuarios inactivos',
    'Listar los números de teléfono sin saldo',
    'Calcular el saldo mínimo de los usuarios de sexo Hombre',
    'Listar los números de teléfono con saldo mayor a 300',
    'Contar el número de usuarios por marca de teléfono',
    'Listar nombre y teléfono de los usuarios con teléfono que no sea LG',
    'Listar las diferentes compañías en orden alfabético ascendente',
    'Calcular la suma de los saldos de los usuarios de la compañía UNEFON',
    'Mostrar el email de los usuarios que usan hotmail',
    'Listar los nombres de los usuarios sin saldo o inactivos',
    'Listar el login y teléfono de los usuarios con compañía IUSACELL o TELCEL',
    'Listar las diferentes marcas de celular en orden alfabético ascendente',
    'Listar las diferentes marcas de celular en orden aleatorio',
    'Listar el login y teléfono de los usuarios con compañía IUSACELL o UNEFON',
    'Listar nombre y teléfono de los usuarios con teléfono que no sea MOTOROLA o NOKIA',
    'Calcular la suma de los saldos de los usuarios de la compañía TELCEL',
];
//aca renderisa la pag principal (osea number1) y le pasa el titulo para que haga los botones
export const inicio = (pet, resp) => {
    resp.render('number1', { filas: [], num: null, titulo: '', titulos });
};
//aca agarra el numero de la url y hace el switch
export const consultas = async (pet, resp) => {
    const num = Number(pet.params.num);
    let sql, titulo;

    switch (num) {
        case 1:
            titulo = 'Listar los nombres de los usuarios';
            sql = "SELECT nombre FROM usuarios";
            break;
        case 2:
            titulo = 'Calcular el saldo máximo de los usuarios de sexo Mujer';
            sql = "SELECT MAX(saldo) AS saldo_maximo FROM usuarios WHERE sexo = 'M'";
            break;
        case 3:
            titulo = 'Listar nombre y teléfono de los usuarios con teléfono NOKIA, BLACKBERRY o SONY';
            sql = "SELECT nombre, telefono FROM usuarios WHERE marca IN ('NOKIA','BLACKBERRY','SONY')";
            break;
        case 4:
            titulo = 'Contar los usuarios sin saldo o inactivos';
            sql = "SELECT COUNT(*) AS total FROM usuarios WHERE saldo = 0 OR activo = 0";
            break;
        case 5:
            titulo = 'Listar el login de los usuarios con nivel 1, 2 o 3';
            sql = "SELECT usuarios FROM usuarios WHERE nivel IN (1,2,3)";
            break;
        case 6:
            titulo = 'Listar los números de teléfono con saldo menor o igual a 300';
            sql = "SELECT telefono FROM usuarios WHERE saldo <= 300";
            break;
        case 7:
            titulo = 'Calcular la suma de los saldos de los usuarios de la compañía NEXTEL';
            sql = "SELECT SUM(saldo) AS suma FROM usuarios WHERE compania = 'NEXTEL'";
            break;
        case 8:
            titulo = 'Contar el número de usuarios por compañía telefónica';
            sql = "SELECT compania, COUNT(*) AS total FROM usuarios GROUP BY compania";
            break;
        case 9:
            titulo = 'Contar el número de usuarios por nivel';
            sql = "SELECT nivel, COUNT(*) AS total FROM usuarios GROUP BY nivel";
            break;
        case 10:
            titulo = 'Listar el login de los usuarios con nivel 2';
            sql = "SELECT usuarios FROM usuarios WHERE nivel = 2";
            break;
        case 11:
            titulo = 'Mostrar el email de los usuarios que usan gmail';
            sql = "SELECT email FROM usuarios WHERE email LIKE '%gmail%'";
            break;
        case 12:
            titulo = 'Listar nombre y teléfono de los usuarios con teléfono LG, SAMSUNG o MOTOROLA';
            sql = "SELECT nombre, telefono FROM usuarios WHERE marca IN ('LG','SAMSUNG','MOTOROLA')";
            break;
        case 13:
            titulo = 'Listar nombre y teléfono de los usuarios con teléfono que no sea LG o SAMSUNG';
            sql = "SELECT nombre, telefono FROM usuarios WHERE marca NOT IN ('LG','SAMSUNG')";
            break;
        case 14:
            titulo = 'Listar el login y teléfono de los usuarios con compañía IUSACELL';
            sql = "SELECT usuarios, telefono FROM usuarios WHERE compania = 'IUSACELL'";
            break;
        case 15:
            titulo = 'Listar el login y teléfono de los usuarios con compañía que no sea TELCEL';
            sql = "SELECT usuarios, telefono FROM usuarios WHERE compania <> 'TELCEL'";
            break;
        case 16:
            titulo = 'Calcular el saldo promedio de los usuarios con teléfono NOKIA';
            sql = "SELECT AVG(saldo) AS promedio FROM usuarios WHERE marca = 'NOKIA'";
            break;
        case 17:
            titulo = 'Listar el login y teléfono de los usuarios con compañía IUSACELL o AXEL';
            sql = "SELECT usuarios, telefono FROM usuarios WHERE compania IN ('IUSACELL','AXEL')";
            break;
        case 18:
            titulo = 'Mostrar el email de los usuarios que no usan yahoo';
            sql = "SELECT email FROM usuarios WHERE email NOT LIKE '%yahoo%'";
            break;
        case 19:
            titulo = 'Listar el login y teléfono de los usuarios con compañía que no sea TELCEL o IUSACELL';
            sql = "SELECT usuarios, telefono FROM usuarios WHERE compania NOT IN ('TELCEL','IUSACELL')";
            break;
        case 20:
            titulo = 'Listar el login y teléfono de los usuarios con compañía UNEFON';
            sql = "SELECT usuarios, telefono FROM usuarios WHERE compania = 'UNEFON'";
            break;
        case 21:
            titulo = 'Listar las diferentes marcas de celular en orden alfabético descendente';
            sql = "SELECT DISTINCT marca FROM usuarios ORDER BY marca DESC";
            break;
        case 22:
            titulo = 'Listar las diferentes compañías en orden aleatorio';
            sql = "SELECT compania FROM usuarios GROUP BY compania ORDER BY RAND()";
            break;
        case 23:
            titulo = 'Listar el login de los usuarios con nivel 0 o 2';
            sql = "SELECT usuarios FROM usuarios WHERE nivel IN (0,2)";
            break;
        case 24:
            titulo = 'Calcular el saldo promedio de los usuarios con teléfono LG';
            sql = "SELECT AVG(saldo) AS promedio FROM usuarios WHERE marca = 'LG'";
            break;
        case 25:
            titulo = 'Listar el login de los usuarios con nivel 1 o 3';
            sql = "SELECT usuarios FROM usuarios WHERE nivel IN (1,3)";
            break;
        case 26:
            titulo = 'Listar nombre y teléfono de los usuarios con teléfono que no sea BLACKBERRY';
            sql = "SELECT nombre, telefono FROM usuarios WHERE marca <> 'BLACKBERRY'";
            break;
        case 27:
            titulo = 'Listar el login de los usuarios con nivel 3';
            sql = "SELECT usuarios FROM usuarios WHERE nivel = 3";
            break;
        case 28:
            titulo = 'Listar el login de los usuarios con nivel 0';
            sql = "SELECT usuarios FROM usuarios WHERE nivel = 0";
            break;
        case 29:
            titulo = 'Listar el login de los usuarios con nivel 1';
            sql = "SELECT usuarios FROM usuarios WHERE nivel = 1";
            break;
        case 30:
            titulo = 'Contar el número de usuarios por sexo';
            sql = "SELECT sexo, COUNT(*) AS total FROM usuarios GROUP BY sexo";
            break;
        case 31:
            titulo = 'Listar el login y teléfono de los usuarios con compañía AT&T';
            sql = "SELECT usuarios, telefono FROM usuarios WHERE compania = 'AT&T'";
            break;
        case 32:
            titulo = 'Listar las diferentes compañías en orden alfabético descendente';
            sql = "SELECT DISTINCT compania FROM usuarios ORDER BY compania DESC";
            break;
        case 33:
            titulo = 'Listar el login de los usuarios inactivos';
            sql = "SELECT usuarios FROM usuarios WHERE activo = 0";
            break;
        case 34:
            titulo = 'Listar los números de teléfono sin saldo';
            sql = "SELECT telefono FROM usuarios WHERE saldo = 0";
            break;
        case 35:
            titulo = 'Calcular el saldo mínimo de los usuarios de sexo Hombre';
            sql = "SELECT MIN(saldo) AS saldo_minimo FROM usuarios WHERE sexo = 'H'";
            break;
        case 36:
            titulo = 'Listar los números de teléfono con saldo mayor a 300';
            sql = "SELECT telefono FROM usuarios WHERE saldo > 300";
            break;
        case 37:
            titulo = 'Contar el número de usuarios por marca de teléfono';
            sql = "SELECT marca, COUNT(*) AS total FROM usuarios GROUP BY marca";
            break;
        case 38:
            titulo = 'Listar nombre y teléfono de los usuarios con teléfono que no sea LG';
            sql = "SELECT nombre, telefono FROM usuarios WHERE marca <> 'LG'";
            break;
        case 39:
            titulo = 'Listar las diferentes compañías en orden alfabético ascendente';
            sql = "SELECT DISTINCT compania FROM usuarios ORDER BY compania ASC";
            break;
        case 40:
            titulo = 'Calcular la suma de los saldos de los usuarios de la compañía UNEFON';
            sql = "SELECT SUM(saldo) AS suma FROM usuarios WHERE compania = 'UNEFON'";
            break;
        case 41:
            titulo = 'Mostrar el email de los usuarios que usan hotmail';
            sql = "SELECT email FROM usuarios WHERE email LIKE '%hotmail%'";
            break;
        case 42:
            titulo = 'Listar los nombres de los usuarios sin saldo o inactivos';
            sql = "SELECT nombre FROM usuarios WHERE saldo = 0 OR activo = 0";
            break;
        case 43:
            titulo = 'Listar el login y teléfono de los usuarios con compañía IUSACELL o TELCEL';
            sql = "SELECT usuarios, telefono FROM usuarios WHERE compania IN ('IUSACELL','TELCEL')";
            break;
        case 44:
            titulo = 'Listar las diferentes marcas de celular en orden alfabético ascendente';
            sql = "SELECT DISTINCT marca FROM usuarios ORDER BY marca ASC";
            break;
        case 45:
            titulo = 'Listar las diferentes marcas de celular en orden aleatorio';
            sql = "SELECT marca FROM usuarios GROUP BY marca ORDER BY RAND()";
            break;
        case 46:
            titulo = 'Listar el login y teléfono de los usuarios con compañía IUSACELL o UNEFON';
            sql = "SELECT usuarios, telefono FROM usuarios WHERE compania IN ('IUSACELL','UNEFON')";
            break;
        case 47:
            titulo = 'Listar nombre y teléfono de los usuarios con teléfono que no sea MOTOROLA o NOKIA';
            sql = "SELECT nombre, telefono FROM usuarios WHERE marca NOT IN ('MOTOROLA','NOKIA')";
            break;
        case 48:
            titulo = 'Calcular la suma de los saldos de los usuarios de la compañía TELCEL';
            sql = "SELECT SUM(saldo) AS suma FROM usuarios WHERE compania = 'TELCEL'";
            break;
        default:
            titulo = 'Consulta inexistente';
            sql = null;
    }

    try {
        let filas = [];
        if (sql) {
            const [registro] = await bdd.query(sql);
            filas = registro;
        }
        resp.render('number1', { filas, num, titulo, titulos });
    } catch (error) {
        console.log("Error en la sentencia:", error);
    }
};

// despues lo de altas y bajas meti aparte
//altas
export const alta = (pet, resp) => {
    resp.render('alta', { mensaje: '' });
};

export const nuevousuario = async (pet, resp) => {
    const { usuarios, nombre, sexo, nivel, email, telefono, marca, compania, saldo, activo } = pet.body;

    // si algún dato no cumple su regex, no se guarda nada
    if (!validarUsuario(pet.body)) {
        return resp.render('alta', { mensaje: 'Datos inválidos, revisá el formato' });
    }

    try {
        const altasql = `INSERT INTO usuarios (usuarios, nombre, sexo, nivel, email, telefono, marca, compania, saldo, activo)
                         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
        await bdd.query(altasql, [usuarios, nombre, sexo, nivel, email, telefono, marca, compania, saldo, activo]);
        resp.render('alta', { mensaje: 'Usuario agregado correctamente' });
    } catch (error) {
        console.log("Error en la sentencia:", error);
        resp.render('alta', { mensaje: 'No se pudo agregar (el login, email o teléfono ya existe)' });
    }
};

//bajas
export const baja = async (pet, resp) => {
    const buscar = (pet.query.buscar || '').trim();
    let filas = [];
    try {
        if (buscar) {

            const [registro] = await bdd.query(
                'SELECT idx, usuarios, nombre, telefono FROM usuarios WHERE nombre LIKE ? OR usuarios LIKE ?',
                [`${buscar}%`, `${buscar}%`]
            );
            filas = registro;
        }
        resp.render('baja', { filas, buscar, mensaje: pet.query.mensaje || '' });
    } catch (error) {
        console.log("Error en la sentencia:", error);
    }
};

export const eliminarusuario = async (pet, resp) => {
    const buscar = pet.body.buscar || '';
    try {
        await bdd.query('DELETE FROM usuarios WHERE idx = ?', [pet.body.idx]);
        resp.redirect(`/baja?buscar=${encodeURIComponent(buscar)}&mensaje=${encodeURIComponent('Usuario eliminado')}`);
    } catch (error) {
        console.log("Error en la sentencia:", error);
    }
};

//restricciones
function validarUsuario(d) {
    return /^[A-Za-z0-9]{1,20}$/.test(d.usuarios) &&          // login: letras y números, 1 a 20 (20 es el limite de la bdd)
        /^[A-Za-zÁÉÍÓÚÑáéíóúñ ]{2,20}$/.test(d.nombre) &&      // nombre: solo letras y espacios
        /^[MH]$/.test(d.sexo) &&                                //M o H
        /^(100|[1-9]?\d)$/.test(d.nivel) &&                    // nivel: 0 a 100
        /^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(d.email) &&        // email: algo@algo.algo
        /^\d{2}-?\d{4}-?\d{4}$/.test(d.telefono) &&               // teléfono
        /^[A-Za-z0-9& ]{2,20}$/.test(d.marca) &&                // marca: letras, números, & y espacios
        /^[A-Za-z0-9& ]{2,20}$/.test(d.compania) &&             // compañía: lo mismo
        /^\d+(\.\d+)?$/.test(d.saldo) &&                        // saldo: número positivo, decimales opcionales
        /^[01]$/.test(d.activo);                                // activo: 0 o 1
}
