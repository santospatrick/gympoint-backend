import Sequelize from 'sequelize';

const models = [];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize();

    models.map(model => model.init(this.connection));
  }
}

export default new Database();
