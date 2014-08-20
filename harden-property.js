/*:
    @module-license:
        The MIT License (MIT)

        Copyright (c) 2014 Richeve Siodina Bebedor

        Permission is hereby granted, free of charge, to any person obtaining a copy
        of this software and associated documentation files (the "Software"), to deal
        in the Software without restriction, including without limitation the rights
        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
        copies of the Software, and to permit persons to whom the Software is
        furnished to do so, subject to the following conditions:

        The above copyright notice and this permission notice shall be included in all
        copies or substantial portions of the Software.

        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
        SOFTWARE.
    @end-module-license

    @module-configuration:
        {
            "packageName": "harden-property",
            "fileName": "harden-property.js",
            "moduleName": "hardenProperty",
            "authorName": "Richeve S. Bebedor",
            "authorEMail": "richeve.bebedor@gmail.com",
            "repository": "git@github.com:volkovasystems/harden-property.git",
            "isGlobal": "true"
        }
    @end-module-configuration

    @module-documentation:

    @end-module-documentation

    @include:
        {
            "harden-namespace.git@github.com/volkovasystems": "hardenNamespace",
            "dasherize-namespace.git@github.com/volkovasystems": "dasherizeNamespace"
        }
    @end-include
*/
var hardenProperty = function hardenProperty( reference, propertyName, value ){
    /*:
        @meta-configuration:
            {
                "reference:required": "object",
                "propertyName:required": "string",
                "value": "*"
            }
        @end-meta-configuration
    */

    if( typeof value == "undefined" ){
        value = dasherizeNamespace( propertyName );
    }

    propertyName = hardenNamespace( propertyName );

    Object.defineProperty( reference, propertyName,
        {
            "enumerable": false,
            "configurable": false,
            "writable": false,
            "value": value
        } );
};

var hardenNamespace = require( "./harden-namespace/harden-namespace.js" );
var dasherizeNamespace = require( "./dasherize-namespace/dasherize-namespace.js" );

module.exports = hardenProperty;