const Myapp = require("../models/myapp.model");

module.exports.findAllMyapps = (req, res) => {
  Myapp.find()
    .then(allMyapps => res.json({ myapps: allMyapps }))
    .catch(err => res.status(400).json({ message: "Something went wrong", ...err }));
};

module.exports.findOneSingleMyapp = (req, res) => {
	Myapp.findOne({ _id: req.params.id })
		.then(oneSingleMyapp => res.json({ myapp: oneSingleMyapp }))
		.catch(err => res.status(400).json({ message: "Something went wrong", ...err }));
};

module.exports.createNewMyapp = (req, res) => {
  Myapp.create(req.body)
    .then(newlyCreatedMyapp => res.json({ myapp: newlyCreatedMyapp }))
    .catch(err => res.status(400).json({ message: "Something went wrong", ...err }));
};

module.exports.updateExistingMyapp = (req, res) => {
  Myapp.findOneAndUpdate({ _id: req.params.id }, req.body, { runValidators: true, new: true })
    .then(updatedMyapp => res.json({ myapp: updatedMyapp }))
    .catch(err => res.status(400).json({ message: "Something went wrong", ...err }));
};

module.exports.deleteAnExistingMyapp = (req, res) => {
  Myapp.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.status(400).json({ message: "Something went wrong", ...err }));
};
