import HelpOrder from '../models/HelpOrder';

class AvailableController {
  async index(req, res) {
    const helpOrders = await HelpOrder.findAll({
      where: { answer: null },
      attributes: ['id', 'question'],
    });

    return res.json(helpOrders);
  }
}

export default new AvailableController();
