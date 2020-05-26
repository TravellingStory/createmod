var codes = require('./template');
exports.jsonModels  =  function(name){
    let jsonModels = {
        //前端样例代码        
        client:{
            moduleContent: "'use strict';\r\n\r\n" + "ApplicationConfiguration.registerModule('"+name+"');",
            routeContent:
            "//页面路由"
            + "\r\nangular.module('"+name+"').config(['$stateProvider', '$urlRouterProvider',\r\n"
            + " function ($stateProvider, $urlRouterProvider) {" + '\r\n'
            + "     $stateProvider. " + '\r\n'
            + "         state('index.MO1', {" + '\r\n'
            + "             url: '/Custom/MO1/Edit'," + '\r\n'
            + "             templateUrl: 'modules/Custom/"+name+"/client/views/MO1.client.view.html'," + '\r\n'
            + "             controller: 'MO1Controller'," + "\r\n"
            + "             access: { requiredAuthentication: true }" + "\r\n"
            + "         })" + '\r\n'
            + "         .state('index.MO1Id', {" + '\r\n'
            + "             url: '/Custom/MO1/Edit/:id'," + '\r\n'
            + "             templateUrl: 'modules/Custom/"+name+"/client/views/MO1.client.view.html'," + '\r\n'
            + "             controller: 'MO1Controller'," + "\r\n"
            + "             access: { requiredAuthentication: true }" + "\r\n"
            + "         })" + '\r\n'
            + "         .state('index.MO1List', {" + '\r\n'
            + "             url: '/Custom/MO1List/List'," + '\r\n'
            + "             templateUrl: 'modules/Custom/"+name+"/client/views/MO1List.client.view.html'," + '\r\n'
            + "             controller: 'MO1ListController'," + "\r\n"
            + "             access: { requiredAuthentication: true }" + "\r\n"
            + "         })" + '\r\n'
            + " }])",
            editController: codes.templateCode(name).editController,
            listController: codes.templateCode(name).listController,
            serviceContent: codes.templateCode(name).serviceContent,
            enumContent: "'use strict';"
            + "\r\n\r\n//枚举"
            + "\r\nangular.module('"+name+"')"
            + "\r\n    .service('MO1Enum', ["
            + "\r\n        function() {"
            + "\r\n            return {"
            + "\r\n                // 订单状态"
            + "\r\n                Status: {"
            + "\r\n                    UnConfirm: { Value: 0, Text: '待确认' },"
            + "\r\n                    Confirmed: { Value: 1, Text: '确认' }"
            + "\r\n                },"
            + "\r\n                DistType: {"
            + "\r\n                    UnDistribute: { Value: 0, Text: '未配送' },"
            + "\r\n                    Distribute: { Value: 1, Text: '已配送' }"
            + "\r\n                }"
            + "\r\n            }"
            + "\r\n        }"
            + "\r\n    ]);",
            viewsContent: codes.templateCode().editCode,
            listViewsContent: codes.templateCode().listCode
        },
        //server服务端样例代码
        server:{
            configContent: 
            "const entityCollection = require('../../../../Base/server/controllers/EntityCollection');"
            + "\r\n\r\nmodule.exports = function(app) {"
            + "\r\n    var entity = entityCollection.getEntity('MOPick');"
            + "\r\n    entity.addEventListener('SetDefaultValue', function() {"
            + "\r\n        var self = this;"
            + "\r\n        self.DemandDate = new Date();"
            + "\r\n        return true;"
            + "\r\n    });"
            + "\r\n};",
            enumContent:
            "//枚举"
            + "\r\nexports.Status = {"
            + "\r\n    UnConfirm: { Value: 0, Text: '待确认' },"
            + "\r\n    Confirmed: { Value: 1, Text: '确认' }"
            + "\r\n};"
            + "\r\n"
            + "\r\nexports.DistType = {"
            + "\r\n    UnDistribute: { Value: 0, Text: '未配送' },"
            + "\r\n    Distribute: { Value: 1, Text: '已配送' }"
            + "\r\n};",
            controllerContent: codes.templateCode().serverController,
            model1Content: codes.templateCode().modelCode1,
            model2Content: codes.templateCode().modelCode2,
            routeContent: 
            "'use strict;'"
            + "\r\n"
            + "\r\n//暴露api给前端调用"
            + "\r\nvar MO1Controller = require('../controller/MO1.server.controller')"
            + "\r\n"
            + "\r\nmodule.exports = function(app) {"
            + "\r\n    app.route('/api/MO1/httpDistributeMOPick').post(MO1Controller.httpDistributeMOPick);"
            + "\r\n}"
        }
    };
    return  jsonModels;
}