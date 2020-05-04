const express = require( "express" )
const db = require("../data/config")
const router = express.Router( {
  mergeParams: true
} )

router.post( "/", async ( req, res, next ) => {
  try {
    const [ id ] = await db( "projects" ).insert( req.body )
    const resource = await db( "projects" ).where( { id } ).first()
    res.status( 201 ).json( resource )
  } catch ( err ) {
    next( err )
  }

  router.get("/", async ( req, res, next ) => {
    try {
      res.json( await db( "projects" ) )
    } catch( err ) {
      next( err )
    }
  })
} )


module.exports = router