module.exports = {
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'gympoint',
  dialect: 'postgres',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
