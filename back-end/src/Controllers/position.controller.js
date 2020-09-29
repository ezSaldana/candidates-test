const Position = require('../Models/Position');

const positionController = {};

positionController.createPosition = (req, res) => {
  const { name, description } = req.body;
  const position = new Position({ name, description });
  position.save((error, savedPosition) => {
    if (error) {
      return res.status(400).json({
        ok: false,
        msg: 'Position wasn\'t added',
        error,
      });
    }
    res.json({
      ok: true,
      msg: 'Position added',
      position: savedPosition,
    });
  })
}

positionController.getAllPositions = (req, res) => {
  Position.find({ status: true })
    .sort({ name: 1 })
    .exec((error, positions) => {
      if(error) {
        return res.status(400).json({
          ok: false,
          msg: 'Couldn\'t find any positions',
          error
        });
      }
      res.json({
        ok: true,
        msg: 'Positions found',
        count: positions.length,
        positions,
      });
    });
}

module.exports = positionController;