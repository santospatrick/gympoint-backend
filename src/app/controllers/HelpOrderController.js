import * as Yup from 'yup';

import Student from '../models/Student';
import HelpOrder from '../models/HelpOrder';

class HelpOrderController {
  async index(req, res) {
    const { studentId } = req.params;

    if (!studentId) {
      return res.status(400).json({ error: 'Student not provided' });
    }

    const student = await Student.findByPk(studentId);

    if (!student) {
      return res.status(400).json({ error: 'Student does not exist' });
    }

    const helpOrders = await HelpOrder.findAll({
      where: { student_id: student.id },
      attributes: ['id', 'question', 'answer', 'answer_at', 'created_at'],
      order: [['createdAt', 'DESC']],
    });

    return res.json(helpOrders);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      question: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed' });
    }

    const { studentId } = req.params;

    if (!studentId) {
      return res.status(400).json({ error: 'Student not provided' });
    }

    const student = await Student.findByPk(studentId);

    if (!student) {
      return res.status(400).json({ error: 'Student does not exist' });
    }

    const { question } = req.body;

    const helpOrder = await HelpOrder.create({
      student_id: student.id,
      question,
    });

    return res.json(helpOrder);
  }
}

export default new HelpOrderController();
