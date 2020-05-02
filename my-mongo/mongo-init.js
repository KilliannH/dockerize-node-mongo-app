const {
    DB_USER,
    DB_PASSWORD,
    DB_NAME
} = process.env;

db.createUser(
    {
        user: "admin",
        pwd: "admin",
        roles: [
            {
                role: "readWrite",
                db: "firstDb"
            }
        ]
    }
);