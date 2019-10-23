module.exports = {
  dialect: 'postgres',
  host: process.env.DB_HOST,
  username: process.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
