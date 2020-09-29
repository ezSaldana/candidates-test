const Industry = require('../Models/Industry');

const industriesController = {};

industriesController.createIndustry = (req, res) => {
  const { name, description } = req.body;
  const industry = new Industry({ name, description });
  industry.save((error, savedIndustry) => {
    if (error) {
      return res.status(400).json({
        ok: false,
        msg: 'Industry wasn\'t added',
        error: error.errors,
      });
    }
    res.json({
      ok: true,
      msg: 'Industry added',
      industry: savedIndustry,
    });
  });
}

industriesController.getAllIndustries = (req, res) => {
  Industry.find({ status: true })
    .sort({ name: 1 })
    .exec((error, industries) => {
      if (error) {
        return res.status(400).json({
          ok: false,
          msg: 'Couldn\'t find any industries',
          error: error.errors
        });
      }
      res.json({
        ok: true,
        msg: 'Industries found',
        count: industries.length,
        industries,
      });
    });
}

module.exports = industriesController;