const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: process.env.DATABASE_PASSWORD,
  database: 'gobarber',
  define: {
    timestamps: true,
    // underscored: true,
    // underscoredAll: true,
  },
};
