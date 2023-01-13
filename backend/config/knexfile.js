// module.exports = {
//   client: 'mysql2',
//   connection: {
//     host     : 'mysql_container',
//     user     : 'lps_us1991',
//     password : 'jwC4LElGcMAnzkgv',
//     database : 'lps2'
//   }
// }

// module.exports = {
//   client: "mysql2",
//   connection: {
//     user: "root",
//     password: "root",
//     database: "christina",
//   },
// };
module.exports = {
  client: "mysql2",
  connection: {
    host: process.env.BASE_HOST,
    user: process.env.BASE_USER,
    password: process.env.BASE_PASSWORD,
    database: process.env.BASE_NAME,
  },
};

// module.exports = {
//   client: 'mysql2',
//   connection: {
//     host     : 'mysql48.mydevil.net',
//     user     : 'm1414_odevpl',
//     password : 'e58UwG360V/FW9_J6sMsb/CF9.l.dy',
//     database : 'm1414_lps'
//   }
// }