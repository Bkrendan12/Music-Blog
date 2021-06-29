const router = require("express").Router();
const userRoutes = require("./userroutes");
const projectRoutes = require("./projectroutes");

router.use("/users", userRoutes);
router.use("/projects", projectRoutes);

module.exports = router;
