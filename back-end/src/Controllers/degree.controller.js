const Degree = require('../Models/Degree');
const degreeController = {};

degreeController.createDegree = (req, res) => {
  const { name, description } = req.body;
  const degree = new Degree({
    name,
    description
  });
  degree.save((error, savedDegree) => {
    if (error) {
      return res.status(400).json({
        ok: false,
        msg: 'Degree wasn\'t inserted',
        error,
      });
    }
    res.json({
      ok: true,
      msg: 'Degree added',
      degree: savedDegree,
    })
  })
}

degreeController.getAllDegrees = (req, res) => {
  Degree.find({ status: true })
    .sort({name: 1})
    .exec((error, degrees) => {
      if (error) {
        return res.status(400).json({
          ok: false,
          msg: 'Couldn\'t find any degrees',
          error
        });
      }
      res.json({
        ok: true,
        msg: 'Degrees found',
        count: degrees.length,
        degrees,
      });
    });
}

module.exports = degreeController;