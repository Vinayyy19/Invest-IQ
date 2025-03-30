const express = require("express");
const router = express.Router();
const passport = require("passport");
const UserController = require("../controller/user.js");
const User = require("../model/userSchema.js"); 

router.route("/signup")
  .get((req, res) => {
    res.render("../views/pages/signup.ejs");
  })
  .post((req, res) => {
    UserController.signUp(req, res);
  });
router.route("/login")
  .get((req, res) => {
    res.render("../views/pages/login.ejs");
  })
  .post(
    passport.authenticate("local",{ failureRedirect: "/login", failureFlash: true , successFlash: "Welcome back!" }),
    UserController.login
  );

router.get('/logout', UserController.logOut);

router.route("/home")
  .get((req, res) => {
    res.render("../views/pages/home.ejs");
  });
  router.route("/insurance")
  .get((req, res) => {
    if (!req.user){
      req.flash("need to login or sighup to access this page");
      return res.redirect("/home");
    }
    res.render("../views/pages/insurance.ejs", { userId: req.user._id });
  });

router.route("/stock")
  .get((req, res) => {
    if (!req.user){
      req.flash("need to login or sighup to access this page");
      return res.redirect("/home");
    }
    res.render("../views/pages/stock.ejs", { userId: req.user._id });
  });

router.route("/bond")
  .get((req, res) => {
    if (!req.user){
      req.flash("need to login or sighup to access this page");
      return res.redirect("/home");
    }
    res.render("../views/pages/bond.ejs", { userId: req.user._id });
  });

  // router.route("/home")
  // .get((req, res) => {
  //   res.render("../views/pages/home.ejs");
  // });

  router.get("/profile/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        console.log(user);
        if (!user) {
            return res.status(404).send("User not found");
        }
        const userData = {
            id: user._id,
            firstname: user.firstname,
            email: user.email,
            walletBalance: user.wallet.balance,
            income: user.income || 0,
            expenses: user.expenses || 0,
            transactions: user.transactions || [],
        };

        res.render("../views/pages/profile.ejs", { user: userData });
    } catch (error) {
        console.error(error);
        req.flash("Server Error, please try later");
        res.redirect("/home");
    }
});

  router.route("/bond")
  .get((req, res) => {
    if (!req.user){
      req.flash("need to login or sighup to access this page");
      return res.redirect("/home");
    }
    res.render("../views/pages/bond.ejs",{ userId: req.user._id });
  });

 
  router.route('/wallet/:id/add').post( UserController.addBalance);
  
  router.route('/wallet/:id/sub').post(UserController.subBalance);
  

// Profile route to view the user profile
// router.route("/profile/:id")
//   .get(async (req, res) => {
//     try {
//       const { id } = req.params; // Use req.params.id to get the user ID
//       const user = await UserController.getUserById(id); // Get user data from the controller

//       if (!user) {
//         return res.status(404).send("User not found"); // Handle user not found
//       }

//       res.render("../views/pages/profile.ejs", { user }); // Pass the user object to the view
//     } catch (error) {
//       console.error(error);
//       res.status(500).send("Internal Server Error");
//     }
//   });

module.exports = router;
