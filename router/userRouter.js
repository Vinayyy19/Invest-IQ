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
    UserController.signUp(req, res); // Handle user signup
  });

router.route("/login")
  .get((req, res) => {
    res.render("../views/pages/login.ejs");
  })
  .post(
    passport.authenticate("local",{ failureRedirect: "/login", failureFlash: true }),
    UserController.login
  );

router.get('/logout', UserController.logOut);

router.route("/home")
  .get((req, res) => {
    res.render("../views/pages/home.ejs");
  });
  router.route("/insurance")
  .get((req, res) => {
    if (!req.user) return res.redirect("/login"); // Redirect if not logged in
    res.render("../views/pages/insurance.ejs", { userId: req.user._id });
  });

router.route("/stock")
  .get((req, res) => {
    if (!req.user) return res.redirect("/login");
    res.render("../views/pages/stock.ejs", { userId: req.user._id });
  });

router.route("/bond")
  .get((req, res) => {
    if (!req.user) return res.redirect("/login");
    res.render("../views/pages/bond.ejs", { userId: req.user._id });
  });

  // router.route("/home")
  // .get((req, res) => {
  //   res.render("../views/pages/home.ejs");
  // });

  router.get("/profile/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).send("User not found");
        }
        const userData = {
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
        res.status(500).send("Server Error");
    }
});

  router.route("/bond")
  .get((req, res) => {
    res.render("../views/pages/bond.ejs",{ userId: req.user._id });
  });

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
