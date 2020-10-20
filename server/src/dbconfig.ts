module.exports = {
    // user          : process.env.NODE_ORACLEDB_USER || "hr",
    user          : "qord",

    // Get the password from the environment variable
    // NODE_ORACLEDB_PASSWORD.  The password could also be a hard coded
    // string (not recommended), or it could be prompted for.
    // Alternatively use External Authentication so that no password is
    // needed.
    // password      : process.env.NODE_ORACLEDB_PASSWORD,
    password      : "qord123",

    // For information on connection strings see:
    // https://oracle.github.io/node-oracledb/doc/api.html#connectionstrings
    // connectString : process.env.NODE_ORACLEDB_CONNECTIONSTRING || "localhost/taskmanager",
    connectString : process.env.NODE_ORACLEDB_CONNECTIONSTRING || "localhost:1522/taskmanager",

    // Setting externalAuth is optional.  It defaults to false.  See:
    // https://oracle.github.io/node-oracledb/doc/api.html#extauth
    externalAuth  : process.env.NODE_ORACLEDB_EXTERNALAUTH ? true : false
};