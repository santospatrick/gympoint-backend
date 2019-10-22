import Student from '../models/Student';
import Checkin from '../models/Checkin';

class CheckinController {
  async index(req, res) {
    const { studentId } = req.params;

    if (!studentId) {
      return res.status(400).json({ error: 'Student not provided' });
    }

    const student = await Student.findByPk(studentId);

    if (!student) {
      return res.status(400).json({ error: 'Student does not exist' });
    }

    const checkins = await Checkin.findAll({
      where: { student_id: student.id },
    });

    const data = checkins.map(({ id, student_id }) => ({ id, student_id }));

    return res.json(data);
  }
}

export default new CheckinController();
