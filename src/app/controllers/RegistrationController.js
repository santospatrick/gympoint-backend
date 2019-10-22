import * as Yup from 'yup';
import Student from '../models/Student';
import Plan from '../models/Plan';
import Registration from '../models/Registration';

class RegistrationController {
  async store(req, res) {
    const schema = Yup.object().shape({
      start_date: Yup.date().required(),
      student_id: Yup.number()
        .positive()
        .required(),
      plan_id: Yup.number()
        .positive()
        .required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed' });
    }

    const { start_date, student_id, plan_id } = req.body;

    const studentExists = await Student.findByPk(student_id);

    if (!studentExists) {
      return res.status(400).json({ error: 'Student does not exist' });
    }

    const plan = await Plan.findByPk(plan_id);

    if (!plan) {
      return res.status(400).json({ error: 'Plan does not exist' });
    }

    const userAlreadyHasPlan = await Registration.findOne({
      where: { student_id },
    });

    if (userAlreadyHasPlan) {
      return res.status(400).json({ error: 'User already has a plan' });
    }

    // TODO: somar meses a partir do "start_date" (precisa do date-fns)
    const end_date = '2020-01-22T12:00:00-03:00';
    const price = plan.price * plan.duration;

    const registration = await Registration.create({
      student_id,
      plan_id,
      start_date,
      end_date,
      price,
    });

    // TODO: enviar e-mail com informações da matrícula

    return res.json(registration);
  }
}

export default new RegistrationController();
