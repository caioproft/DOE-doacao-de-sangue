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

    const name = req.body.name
    const email = req.body.email
    const blood = req.body.blood

    const donor = await Donor.create(req.body);
    return res.json(donor);
  }
}

export default new DonorController();