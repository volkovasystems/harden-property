try{ var base = window; }catch( error ){ var base = exports; }
( function module( base ){
	define( "hardenProperty",
		function construct( ){
			var hardenProperty = function hardenProperty( reference, propertyName, propertyValue ){
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
			};
			base.hardenProperty = hardenProperty;
		} );
} )( base )