const User = require("../model/userSchema.js");
// const User = require("../model/userSchema.js");

module.exports.signUp = async (req, res) => {
  console.log(req.body);
    try {
      const { email, firstname, password } = req.body;
      console.log(email);
      console.log(firstname);
      // Validate input data
      if (!email || !password) {
        req.flash("failed", "Email and password are required.");
        return res.redirect("/signup");
    }
      console.log(req.body);
      console.log(password);
      const newUser = new User({ email, firstname });
      const registerUser = await User.register(newUser,password);
      req.login(registerUser,(err)=>{
        if(err){
          return next(err);
        }
        req.flash("success", "Welcome to InvestIQ");
        console.log("Successfull");
        return res.redirect("/home");
      });
    } catch (err) {
      req.flash("failed", err.message);
    console.log(err);
      res.redirect("/signup");
    }
  }

  module.exports.login = async(req, res) => {
    req.flash("success","Welcome to InvestIQ");
    // let redirectUrl = res.locals.redirectUrl || "/home";
    res.redirect("/home");
  }

module.exports.logOut = function(req, res, next){
    req.logout(function(err) {
      if (err) { return next(err); }
      req.flash("success","Logged Out Successfully");
      res.redirect('/login');
    });
  }

module.exports.getUserById = async (id) => {
    try {
      const user = await User.findById(id);
      return user;
    } catch (error) {
      console.error(error);
      return null;
    }
}

module.exports.addBalance = async (req, res) => {
    try {
        const { id } = req.params;
        const { amount } = req.body;

        if (amount <= 0) return res.status(400).json({ error: "Invalid amount" });

        const user = await User.findById(id);
        if (!user) return res.status(404).json({ error: "User not found" });

        user.wallet.balance += amount;
        await user.save();

        res.json({ message: "Balance added successfully", newBalance: user.wallet.balance });
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
};

module.exports.subBalance = async (req, res) => {
  try {
      const { id } = req.params;
      const { amount } = req.body;

      if (amount <= 0) return res.status(400).json({ error: "Invalid amount" });

      const user = await User.findById(id);
      if (!user) return res.status(404).json({ error: "User not found" });

      console.log("User balance before withdrawal:", user.wallet.balance); 
      if (user.wallet.balance < amount) {
          return res.status(400).json({ error: "Insufficient funds" });
      }

      user.wallet.balance -= amount;
      await user.save();

      res.json({ message: "Balance withdrawn successfully", newBalance: user.wallet.balance });
  } catch (error) {
      console.error("Server Error:", error);
      res.status(500).json({ error: "Server error" });
  }
};
