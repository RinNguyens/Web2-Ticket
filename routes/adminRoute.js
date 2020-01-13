const express = require('express');
const router =  express.Router();
const Admin  = require('../models/AdminModel.js').Admin;
const adminController = require('../controllers/adminControllers');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const {isAuthenticatedAdmin} = require('../config/customFunction');

router.all('/*',(req,res,next) => {
    req.app.locals.layout = 'admin';
    next();
})


/*--------Index Admin-----*/
router.route('/')
    .get(adminController.index);
router.route('/admin')
    .get(adminController.index);
    
    //getter login
    
    
/*--------All ADMIN AND RESGITER-----*/

router.route('/login')
    .get(adminController.getLogin)
    .post(adminController.SummitPostLogin);

router.route('/register')
    .get(adminController.getRegisted)
    .post(adminController.RegisteredAdmin);
/*--------All Film-----*/
router.route('/film')
    .get(adminController.getFilms);
    
router.route('/film/create')
    .get(adminController.createFilms)
    .post(adminController.submitFilms);
    
router.route('/film/edit/:id')
    .get(adminController.editFilms)
    .put(adminController.editFilmSubmit);


router.route('/film/delete/:id')
    .delete(adminController.deleteFilms);

/*----------Category Routes------------*/
router.route('/category')
    .get(adminController.getCategory)
    .post(adminController.createCategory);

router.route('/category/:id')
    .delete(adminController.deleteCategory);


router.route('/category/edit/:id')
    .get(adminController.editCategoryRoute)
    .post(adminController.editCategoryFilmRoute);

/*----------ADMIN LOGIN AND RESGISTER------------*/

/*--------------CINEPLEX :  CUM RAP-----------------*/
router.route('/cineplex')
    .get(adminController.getCineplex);


router.route('/cineplex/create')
    .get(adminController.createCineplex)
    .post(adminController.SubmitCineplex);

router.route('/cineplex/delete/:id')
    .delete(adminController.deleteCineplex);


/*--------------CINEMA : RAP PHIM -----------------*/    

router.route('/cinema')
    .get(adminController.getCinema);

router.route('/cinema/create')
    .get(adminController.createCinema)
    .post(adminController.summitCinema);

router.route('/cinema/delete/:id')
    .delete(adminController.deleteCinema);


//-------------SHOWTIME : SUAT CHIEU--------------//

router.route('/showtime')
    .get(adminController.getShowtime);

router.route('/showtime/create')
    .get(adminController.createShowtime)
    .post(adminController.submitShowtime);

router.route('/showtime/delete/:id')
    .delete(adminController.deleteShowtime);

//-------------USER : NGUOI DUNG--------------//

router.route('/user')
	.get(adminController.getUser);

router.route('/user/delete/:id')
	.delete(adminController.DeleteUser);

module.exports = router;