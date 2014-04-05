try{ var base = window; }catch( error ){ var base = exports; }
( function module( base ){
	define( "hardenProperty",
		[
			"argumentsToArray"
		],
		function construct( ){
			var hardenProperty = function hardenProperty( ){
				var parameters = argumentsToArray( arguments );
				
				var reference = parameters[ 0 ];

				if( typeof parameters[ 1 ] == "object" ){
					var registryList = parameters[ 1 ];

					var propertyNameList = Object.keys( registryList );
					var propertyNameListLength = propertyNameList.length;
					
					if( !( propertyNameListLength > 0 ) ){
						throw new Error( "invalid registry list" );
					}

					var propertyName;
					var value;
					for( var index = 0; index < propertyNameListLength; index++ ){
						propertyName = propertyNameList[ index ];
						value = registryList[ propertyName ];
						hardenProperty( reference, propertyName, value );
					}

				}else if( parameters.length == 3 ){
					var propertyName = parameters[ 1 ];
					var value = parameters[ 2 ];

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
				}
			};
			base.hardenProperty = hardenProperty;
		} );
} )( base )