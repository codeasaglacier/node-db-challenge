const express = require( "express" )
const db = require("../data/config")
const router = express.Router( {
  mergeParams: true
} )

router.post( "/", async ( req, res, next ) => {
  try {
    const [ id ] = await db( "projects" ).insert( req.body )
    const project = await db( "projects" ).where( { id } ).first()
    res.status( 201 ).json( project )
  } catch ( err ) {
    next( err )
  }

router.get("/", async ( req, res, next ) => {
    try {
      const projects = await db( "projects" )
        .select( "projects.name" )
      res.json( projects )
    } catch( err ) {
      next( err )
    }
  })
} )

router.get("/:id", async (req, res, next) => {
	try {
		res.json(req.user)
	} catch(err) {
		next(err)
	}
})



module.exports = router