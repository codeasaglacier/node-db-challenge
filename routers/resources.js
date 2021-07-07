const express = require( "express" )
const db = require("../data/config")
const router = express.Router( {
  mergeParams: true
} )

router.post( "/", async ( req, res, next ) => {
  try {
    const [ id ] = await db( "resources" ).insert( req.body )
    const resource = await db( "resources" ).where( { id } ).first()
    res.status( 201 ).json( resource )
  } catch ( err ) {
    next( err )
  }
} )

  router.get("/", async ( req, res, next ) => {
    try {
      const resources = await db( "resources" )
        .select( "resources.name" )
       res.json( resources )
    } catch( err ) {
      next( err )
    }
} )



module.exports = router