var path = require( 'path' )

var createStringReplacePreprocessor = function ( config = {}, logger ) {

	const patterns = config.patterns || [];
	const log = logger.create( 'preprocessor.stringreplace' )

	return function ( content, file, next ) {

		log.debug( 'Processing: ', file.originalPath );

		try {

			patterns.forEach( function( pattern ){

				log.debug( 'Replacing "%s" with "%s"', pattern.match, pattern.replacement );

				content = content.replace( pattern.match, pattern.replacement );

			});

		} catch ( e ) {

			log.error( 'Error: ', e )

			return next( e, null );

		}

		next( null, content );

	};

};

createStringReplacePreprocessor.$inject = [ 'config.stringReplacePreprocessor', 'logger' ];

module.exports = {
	'preprocessor:stringreplace': [ 'factory', createStringReplacePreprocessor ]
};
