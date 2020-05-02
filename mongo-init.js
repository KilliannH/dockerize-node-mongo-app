const {
    DB_USER,
    DB_PASSWORD,
    DB_NAME
} = process.env;

db.createUser(
    {
        user: "user",
        pwd: "user",
        roles: [
            {
                role: "readWrite",
                db: "firstDb"
            }
        ]
    }
);