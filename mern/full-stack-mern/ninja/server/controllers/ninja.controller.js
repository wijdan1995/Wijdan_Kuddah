const {Ninja, Ninjutsu} = require("../models/ninja.model");

// Ninja
module.exports.findAllNinjas = (req, res) => {
  Ninja.find()
    .then(allNinjas => res.json({ ninjas: allNinjas }))
    .catch(err => res.status(400).json({ message: "Something went wrong", ...err }));
};

module.exports.findOneSingleNinja = (req, res) => {
  Ninja.findOne({ _id: req.params.id })
    .then(oneSingleNinja => res.json({ ninja: oneSingleNinja }))
    .catch(err => res.status(400).json({ message: "Something went wrong", ...err }));
};

module.exports.createNewNinja = (req, res) => {
  Ninja.findOne({ name: req.body.name })
    .then( ninja => {
      if(!ninja){
        Ninja.create(req.body)
        .then(newlyCreatedNinja => res.json({ ninja: newlyCreatedNinja }))
        .catch(err => res.status(400).json({ message: "Something went wrong", ...err }));
      } else {
        res.status(400).json({
          errors: {
              name: {
                message:`The name ${req.body.name} has already used!`
              }
          }
        });
      }
    })
    .catch(err => res.status(400).json({ message: "Something went wrong", ...err }));
    
  
};

module.exports.updateExistingNinja = (req, res) => {
  Ninja.findOneAndUpdate({ _id: req.params.id }, req.body, { runValidators: true, new: true })
    .then(updatedNinja => res.json({ ninja: updatedNinja }))
    .catch(err => res.status(400).json({ message: "Something went wrong", ...err }));
};

module.exports.deleteAnExistingNinja = (req, res) => {
  Ninja.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.status(400).json({ message: "Something went wrong", ...err }));
};

// Ninjutsu
module.exports.addNinjutsu = (req, res) => {
  Ninja.findOne({_id: req.params.id})
    .then(ninja => {
        let exists = false;
        for(let ninjutsu of ninja.ninjutsu) {
            if(ninjutsu.name === req.body.name) {
                exists = true;
                break;
            }
        }
        if(exists) {
          res.status(400).json({
            errors: {
              name: {
                message:`The ninjutsu name ${req.body.name} has already added`
              }
            }
          });
        } else {
          Ninjutsu.create(req.body)
          .then(newlyCreatedNinjutsu => {
            Ninja.findOneAndUpdate({ _id: req.params.id }, {$push: {ninjutsu: newlyCreatedNinjutsu}}, { runValidators: true, new: true })
              .then(updatedNinja => res.json({ ninja: updatedNinja }))
              .catch(err => res.status(400).json({ message: "Something went wrong", ...err }));
          })
          .catch(err => res.status(400).json({ message: "Something went wrong", ...err }));
        }
    }).catch(err => res.json(err));
  
};

module.exports.removeNinjutsu = (req, res) => {
  Ninja.findOneAndUpdate({ _id: req.params.id }, {$pull: {ninjutsu: {_id: req.params.nid}}}, { runValidators: true, new: true })
    .then(updatedNinja => res.json({ ninja: updatedNinja }))
    .catch(err => res.status(400).json({ message: "Something went wrong", ...err }));

};
