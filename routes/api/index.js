const router = require("express").Router();
const contactRoutes = require("./contact");
//const loginRoutes = require("./login");

//maps with /api/contact
router.use("/contact", contactRoutes);
//router.use("/login", loginRoutes);

module.exports = router;

