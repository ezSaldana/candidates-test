const Candidate = require("../Models/Candidate");
const Location = require("../Models/Location");

const candidatesController = {};

/**
 * Adds a new candidate to the database.
 * 
 * @param {Request} req request object
 * @param {Response} res response object
 * 
 * A function that inserts a new candidate in the candidates schema with their respective props.
 * This function first inserts a location in the locations schema and then returns an object of
 * the recently inserted location object to get the id and pass it to location prop in candidates
 * model.
 */
candidatesController.createCandidate = (req, res) => {
  if (req.get('Content-type') === 'x-www-form-urlencoded') {
    console.log('entro al urlencoded');
    req.body = {...req.body, location: JSON.parse(req.body.location) };
  }
  // First, create the candidate location.
  // We need the location id to insert the candidate.
  const { name, degree, position, industry, cellphone, salary, avatar, location: address } = req.body;
  // let { location: address } = req.body;
  // Create model with that location
  try {
    console.log('1');
    const location = new Location({ coords: { lat: address.lat, lng: address.lng, }, ...address });
    console.log('2');
    location.save((err, savedLocation) => {
      if(err) {
        return res.status(400).json({
          ok: false,
          msg: 'Couldn\'t add location',
          error: {
            ...err,
            message: 'Location validation failed: location: Field is required, please select a location that contains at least your region, country and city.'
          }
        });
      }
      const candidate = new Candidate({
        name,
        position,
        degree,
        industry,
        cellphone,
        salary,
        location: savedLocation._id,
        avatar,
      });
      candidate.save(async(err, savedCandidate) => {
        if (err) {
          return res.status(400).json({
            ok: false,
            msg: 'Candidate wasn\'t added',
            error: err,
          })
        }
        const schemas = ['degree', 'position', 'industry', 'location'];
        for (item of schemas) {
          item !== 'location' ?
            savedCandidate = await savedCandidate.populate(item, 'name').execPopulate() :
            savedCandidate = await savedCandidate.populate(item).execPopulate()
        }
        res.json({
          ok: true,
          msg: 'Candidate Added Succesfully',
          candidate: savedCandidate,
        })
      });
    });
  } catch (err) {
    res.json({
      ok: false,
      message: 'Unhandled Error',
      error: err,
    })
  }
}

candidatesController.getAllCandidates = (req, res) => {
  Candidate.find({ status: true })
    .populate('degree', 'name')
    .populate('position', 'name')
    .populate('industry', 'name')
    .populate('location')
    .sort({ addedDate: -1 })
    .exec((error, candidates) => {
      if (error) {
        return res.status(400).json({
          ok: false,
          msg: 'Couldn\'t find any candidates',
          error: error.errors
        });
      }
      res.json({
        ok: true,
        msg: 'Candidates found',
        count: candidates.length,
        candidates,
      });
    });
}

module.exports = candidatesController;