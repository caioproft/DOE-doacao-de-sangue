import Donor from '../model/Donor';
import * as Yup from 'yup';

class DonorController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().required(),
      blood: Yup.string().required()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'É preciso informar todos os campos do formulário.' })
    }

    await Donor.create(req.body);
    return res.redirect("/");
  }
}

export default new DonorController();