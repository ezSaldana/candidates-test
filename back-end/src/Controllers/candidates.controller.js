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
candidatesController.createCandidate = async(req, res) => {
  // First, create the candidate location.
  // We need the location id to insert the candidate.
  const { name, degree, position, industry, cellphone, salary, avatar, } = req.body;
  let { location: address } = req.body;
  // Location is recieved as JSON, so i have to parse it
  address = JSON.parse(address);
  // Create model with that location
  const location = new Location({ coords: { lat: address.lat, lng: address.lng, }, ...address });
  try {
    const savedUser = await location.save();
    const candidate = new Candidate({
      name,
      position,
      degree,
      industry,
      cellphone,
      salary,
      location: savedUser._id,
      avatar,
    });
    candidate.save((err, savedCandidate) => {
      if(err) {
        return res.status(400).json({
          ok: false,
          msg: 'Candidate wasn\'t added',
          error: err,
        })
      }
      res.json({
        ok: true,
        msg: 'Candidate added',
        candidate: savedCandidate,
      })
    });
  } catch (e) {
    console.log(e);
  }
}

candidatesController.getAllCandidates = (req, res) => {
  Candidate.find({status: true})
  .populate('degree', 'name')
  .populate('position', 'name')
  .populate('industry', 'name')
  .populate('location')
  .sort({addedDate: -1})
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