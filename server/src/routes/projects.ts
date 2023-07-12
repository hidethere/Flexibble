const express = require("express")
const router = express.Router()

const ProjectController = require("../controllers/ProjectController")

// POST
router.post('/project', ProjectController.CreateProject)

module.exports = router


export{}