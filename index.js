const express = require("express")
const helmet = require("helmet")
const projectsRouter = require("./routers/projects")
const tasksRouter = require("./routers/tasks")
const resourcesRouter = require("./routers/resources")

const server = express()
const port = process.env.PORT || 5000

server.use(helmet())
server.use(express.json())

server.use("/projects", projectsRouter)
// server.use("/tasks", tasksRouter)
// server.use("/resources", resourcesRouter)

server.use((err, req, res, next) => {
	console.log(err)
	res.status(500).json({
		message: "Something went wrong",
	})
})

server.listen(port, () => {
	console.log(`Running at http://localhost:${port}`)
})
