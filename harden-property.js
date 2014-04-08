try{ var base = window; }catch( error ){ var base = exports; }
( function module( base ){
	define( "hardenProperty",
		function construct( ){
			/*
				@module-documentation:
				
				@end-module-documentation
			*/
			var hardenProperty = function hardenProperty( reference, propertyName, value ){
				if( typeof reference != "object" 
					&& typeof reference != "function" )
				{
					throw new Error( "invalid reference" );
				}

				if( typeof propertyName != "string" ){
					throw new Error( "invalid property name" );
				}

				Object.defineProperty( reference, propertyName,
					{
						"enumerable": false,
						"configurable": false,
						"writable": false,
						"value": value
					} );

				var parameters = argumentsToArray( arguments );
				
				reference = parameters[ 0 ];

				if( typeof parameters[ 1 ] == "object" ){
					

				}
			};
			base.hardenProperty = hardenProperty;
		} );
} )( base )