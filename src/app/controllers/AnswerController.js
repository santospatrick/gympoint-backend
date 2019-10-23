import * as Yup from 'yup';

import HelpOrder from '../models/HelpOrder';

class AnswerController {
  async store(req, res) {
    const schema = Yup.object().shape({
      answer: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed' });
    }

    const { helpOrderId } = req.params;

    if (!helpOrderId) {
      return res.status(400).json({ error: 'Help order not provided' });
    }

    const helpOrder = await HelpOrder.findByPk(helpOrderId);

    if (!helpOrder) {
      return res.status(400).json({ error: 'Help order does not exist' });
    }

    if (helpOrder.answer_at) {
      return res.status(400).json({ error: 'Help order already answered' });
    }

    const { answer } = req.body;

    const { id, question, answer_at } = await helpOrder.update({
      answer,
      answer_at: new Date(),
    });

    return res.json({ id, question, answer, answer_at });
  }
}

export default new AnswerController();
