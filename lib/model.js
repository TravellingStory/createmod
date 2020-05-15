
exports.jsonModels  =  function(name){
    let jsonModels = {        
        client:{
            moduleContent: "'use strict';\r\n\r\n" + "ApplicationConfiguration.registerModule('"+name+"');",
            routeContent:
            "angular.module('"+name+"').config(['$stateProvider', '$urlRouterProvider',"
            + " function ($stateProvider, $urlRouterProvider) {" + '\r\n'
            + "     $stateProvider. " + '\r\n'
            + "         state('"+name+"', {" + '\r\n'
            + "             url: '/"+name+"'," + '\r\n'
            + "             templateUrl: '/"+name+"/client/views/"+name+".client.view.html'," + '\r\n'
            + "             controller: '"+name+"Controller'," + "\r\n"
            + "             access: { requiredAuthentication: true }" + "\r\n"
            + "         })" + '\r\n'
            + " }])",
            controllerContent:
            "'use strict';\r\n\r\n" +
            "angular.module('"+name+"')\r\n" +
            "    .controller('"+name+"Controller', ['$scope',\r\n" +
            "        function($scope) {\r\n\r\n" +
            "        }\r\n" +
            "    ])",
            serviceContent:
            "'use strict';\r\n\r\n" +
            "angular.module('"+name+"')\r\n" +
            "    .service('"+name+"Service', ['$http',\r\n" +
            "        function($http) {\r\n\r\n" +
            "        }\r\n" +
            "    ])",
            viewsContent:'<div>\r\n\r\n</div>'
        },
        server:{
            configContent: "\r\nmodule.exports = function(app) {\r\n\r\n};",
            controllerContent: "\r\nexports.something = function(param){\r\n\r\n}",
            modelContent:
            "'use strict';\r\n\r\n" +
            "var Schema = require('mongoose').Schema,\r\n" +
            "    Model = require('../../../Base/server/controllers/Model');\r\n\r\n" +
            "//字段\r\n" +             
            "var modelField = {\r\n" +
            "    attr1: {\r\n" +
            "        type: Schema.ObjectId,\r\n" +
            "        Name: '',\r\n" +
            "        ref: '',\r\n" +
            "        IsEmpty: false\r\n" +
            "    },\r\n" +            
            "    attr2: {\r\n" +
            "        type: Schema.ObjectId,\r\n" +
            "        ref: '',\r\n" +
            "        Name: '',\r\n" +
            "        IsEmpty: false\r\n" +
            "    },\r\n" +
            "};\r\n\r\n" +
            "var newModel = new Model(modelField);\r\n" +
            "//索引\r\n" + 
            "//newModel.addIndex({ attr2: 1 });\r\n" +
            "//创建\r\n" + 
            "newModel.create('"+name+"', 'tabcname');\r\n",
            routeContent: 
            "'use strict';\r\n\r\n" +
            "var "+name+"Controller = require('../controller/"+name+".server.controller')\r\n\r\n" +
            "module.exports = function(app) {\r\n" +
            "    app.route('/api/').post("+name+"Controller.something);\r\n}"
        }
    };
    return  jsonModels;
}