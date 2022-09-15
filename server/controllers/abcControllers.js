const Instance = require('../models/models');

const abcController = {
// 
  //get info from database
  getClient(req, res, next) {
    const client = req.params.client;
    Instance.find({clientInitials: client})
    .then(data => {
      res.locals.data = data;
      return next();
    })
    .catch(err =>{
      next({
        log: `error in getClient: ERROR: ${err}`,
        message: { err: 'Express error handler caught in getClient' }
      });
    });
  },
  //Creates a new form instance in Database
  createForm(req, res, next) {
    Instance.create({
      clientInitials: req.body.clientInitials,
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
  },
  
  deleteForm(req, res, next) {
    const id = req.params.id;
    Instance.findOneAndDelete({_id: id})
    .then(data => {
      res.locals.form = data;
      return next();
    }).catch(err => {
      next({
        log: `error in deleteForm: ERROR: ${err}`,
        message: { err: 'Express error handler caught in deleteForm' }
      });
    })
  },

  updateForm(req, res, next) {
    console.log(req.body)
    
    const id = req.params.id;
    Instance.findByIdAndUpdate(id, req.body)
    .then(data => {
      res.locals.update = data;
      return next();
    }).catch(err => {
      next({
        log: `error in deleteForm: ERROR: ${err}`,
        message: { err: 'Express error handler caught in deleteForm' }
      });
    })
  }
};


module.exports = abcController;

