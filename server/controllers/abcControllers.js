const Instance = require('../models/models')

const abcController = {
  //Creates a new form instance in Database
  createForm(req, res, next) {
    Instance.create({
      // clientInitials: req.body.clientInitials,
      date: req.body.date,
      behavior: req.body.behavior,
      antecedent: req.body.antecedent,
      consequence: req.body.consequence,
      settingEvents: req.body.settingEvents
    }).then(data => {
      res.locals.newInstance = data;
      return next();
    }).catch(err => {
      next({
        log: `error in createForm: ERROR: ${err}`,
        message: { err: 'Express error handler caught in createForm' }
      });
    });
  }
};




module.exports = abcController;

