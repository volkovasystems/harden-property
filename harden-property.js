try{ var base = window; }catch( error ){ var base = exports; }
( function module( base ){
	define( "hardenProperty",
		function construct( ){
			var hardenProperty = function hardenProperty( reference, propertyName, propertyValue ){
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