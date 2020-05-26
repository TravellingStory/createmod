var fs = require('fs');
var contentObjIns = require('./model');
var contentObj = {};
exports.checkDirectory = function(name){
    fs.stat(name, (error, stats)=>{
        if(error){
            // console.log(error);
            // throw error;
            return false;
        }
        return stats.isDirectory();
    });
};
exports.checkFile = function(name){
    fs.stat(name, (error, stats)=>{
        if(error){
            // console.log(error);
            // throw error;
            return false;
        }
        return stats.isFile();
    });
};
exports.mkFile = function(name, content){
    if(!this.checkFile(name)){
        fs.writeFile(name, content, 'utf8', (error)=>{
            if(error) console.log(error);
        });
    }else{
        console.log('name conflict!');
    }
};
exports.mkClientDir = function(name){
    let commonPath = './' + name + '/client';
    fs.mkdir(commonPath, (error)=>{
        if(error) throw error;        
        fs.mkdir(commonPath + '/config/', (error)=>{
            if(error) throw error;            
            this.mkFile(commonPath + '/config/'+ name + '.client.route.js', contentObj.client.routeContent);
        });
        fs.mkdir(commonPath + '/controller/', (error)=>{
            if(error) throw error;
            this.mkFile(commonPath + '/controller/MO1.client.controller.js', contentObj.client.editController);
            this.mkFile(commonPath + '/controller/MO1List.client.controller.js', contentObj.client.listController);
        });
        fs.mkdir(commonPath + '/service/', (error)=>{
            if(error) throw error;
            this.mkFile(commonPath + '/service/MO1.client.service.js', contentObj.client.serviceContent);
            this.mkFile(commonPath + '/service/enum.client.service.js', contentObj.client.enumContent);
        });
        fs.mkdir(commonPath + '/views/', (error)=>{
            if(error) throw error;
            this.mkFile(commonPath + '/views/MO1.client.view.html', contentObj.client.viewsContent);
            this.mkFile(commonPath + '/views/MO1List.client.view.html', contentObj.client.listViewsContent);
        });
        this.mkFile(commonPath+'/'+name+'.client.module.js',contentObj.client.moduleContent);
    });
};
exports.mkServerDir = function(name){
    let commonPath = './' + name + '/server';
    fs.mkdir(commonPath, (error)=>{
        if(error) throw error;
        fs.mkdir(commonPath + '/config/', (error)=>{
            if(error) throw error;
            this.mkFile(commonPath + '/config/'+ name + '.server.config.js', contentObj.server.configContent);
        });
        fs.mkdir(commonPath + '/controller/', (error)=>{
            if(error) throw error;
            this.mkFile(commonPath + '/controller/MO1.server.controller.js', contentObj.server.controllerContent);
            this.mkFile(commonPath + '/controller/Enum.server.controller.js', contentObj.server.enumContent);
        });
        fs.mkdir(commonPath + '/models/', (error)=>{
            if(error) throw error;
            this.mkFile(commonPath + '/models/MO1.server.model.js', contentObj.server.model1Content);
            this.mkFile(commonPath + '/models/MOPick.server.model.js', contentObj.server.model2Content);
        });
        fs.mkdir(commonPath + '/routes/', (error)=>{
            if(error) throw error;
            this.mkFile(commonPath + '/routes/'+ name + '.server.route.js', contentObj.server.routeContent);
        });
    });
};
exports.createModule = function(name){
    contentObj =  contentObjIns.jsonModels(name);
    if(!this.checkDirectory(name)){
        fs.mkdir(name, (error)=>{
            if(error){
                throw error;
            }
            this.mkClientDir(name);
            this.mkServerDir(name);
        });
    }else{
        console.log('name conflict!');
    }
};