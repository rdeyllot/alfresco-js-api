/*global describe, it, beforeEach */

var AlfrescoApi = require('../main');
var expect = require('chai').expect;
var AuthBpmMock = require('../test/mockObjects/mockAlfrescoApi').ActivitiMock.Auth;
var TasksMock = require('../test/mockObjects/mockAlfrescoApi').ActivitiMock.Tasks;

describe('Activiti Task Api', function () {
    beforeEach(function (done) {
        this.hostBpm = 'http://127.0.0.1:9999';

        this.authResponseBpmMock = new AuthBpmMock(this.hostBpm);
        this.tasksMock = new TasksMock(this.hostBpm);

        this.authResponseBpmMock.get200Response();

        this.alfrescoJsApi = new AlfrescoApi({
            hostBpm: this.hostBpm,
            provider: 'BPM'
        });

        this.alfrescoJsApi.login('admin', 'admin').then(() => {
            done();
        });
    });

    it('get Task list', function (done) {
        this.tasksMock.get200Response();

        var requestNode = new this.alfrescoJsApi.activiti.TaskQueryRequestRepresentation();

        this.alfrescoJsApi.activiti.taskApi.listTasks(requestNode).then((data)=> {
            expect(data.data[0].processDefinitionName).equal('Process Test Api');
            expect(data.data[1].processDefinitionName).equal('Process Test Api');
            expect(data.size).equal(2);
            done();
        });
    });

    it('get Task', function (done) {
        this.tasksMock.get200ResponseGetTask(10);

        this.alfrescoJsApi.activiti.taskApi.getTask(10).then((data)=> {
            expect(data.name).equal('Upload Document');
            done();
        });
    });

    it('bad filter Tasks', function (done) {
        this.tasksMock.get400TaskFilter();

        var requestNode = new this.alfrescoJsApi.activiti.TaskFilterRequestRepresentation();

        this.alfrescoJsApi.activiti.taskApi.filterTasks(requestNode).then((data)=> {
        }, ()=> {
            done();
        });
    });

    it('filter Tasks', function (done) {
        this.tasksMock.get200TaskFilter();

        var requestNode = new this.alfrescoJsApi.activiti.TaskFilterRequestRepresentation();
        requestNode.appDefinitionId = 1;

        this.alfrescoJsApi.activiti.taskApi.filterTasks(requestNode).then((data)=> {
            expect(data.size).equal(2);
            expect(data.data[0].id).equal('7506');
            done();
        });
    });

    it('complete Task not found', function (done) {
        var taskId = 200;
        this.tasksMock.get404CompleteTask(taskId);

        this.alfrescoJsApi.activiti.taskApi.completeTask(taskId).then((data)=> {
        }, ()=> {
            done();
        });

    });

    it('complete Task ', function (done) {
        var taskId = 5006;

        this.tasksMock.put200GenericResponse('/activiti-app/api/enterprise/tasks/5006/action/complete');

        this.alfrescoJsApi.activiti.taskApi.completeTask(taskId).then((data)=> {
            done();
        });
    });

    it.skip('Complete a Task Form', function (done) {
        var taskId = 2518;

        this.tasksMock.rec();

        var completeTaskFormRepresentation = new this.alfrescoJsApi.activiti.CompleteFormRepresentation();
        this.alfrescoJsApi.activiti.taskApi.completeTaskForm(taskId, completeTaskFormRepresentation).then((data)=> {
            done();
        });
        this.tasksMock.play();
    });

    it('Create a Task', function (done) {

        var taskName = 'test-name';

        this.tasksMock.get200CreateTask(taskName);

        var taskRepresentation = new this.alfrescoJsApi.activiti.TaskRepresentation(); // TaskRepresentation | taskRepresentation

        taskRepresentation.name = taskName;

        this.alfrescoJsApi.activiti.taskApi.createNewTask(taskRepresentation).then((data)=> {
            done();
        });
    });

    it.skip('Save task form', function (done) {

        var taskId = 5006;

        var saveTaskFormRepresentation = new this.alfrescoJsApi.activiti.SaveFormRepresentation();

        this.alfrescoJsApi.activiti.taskApi.saveTaskForm(taskId, saveTaskFormRepresentation).then((data)=> {
            done();
        });
    });

    it('Get task form', function (done) {
        this.tasksMock.get200getTaskForm();

        var taskId = 2518;

        this.alfrescoJsApi.activiti.taskApi.getTaskForm(taskId).then((data)=> {
            expect(data.name).equal('Metadata');
            expect(data.fields[0].name).equal('Label');
            expect(data.fields[0].fieldType).equal('ContainerRepresentation');
            done();
        });
    });

    it('Get getRestFieldValuesColumn ', function (done) {
        this.tasksMock.get200getTaskForm();

        var taskId = 2518;

        this.alfrescoJsApi.activiti.taskApi.getTaskForm(taskId).then((data)=> {
            expect(data.name).equal('Metadata');
            expect(data.fields[0].name).equal('Label');
            expect(data.fields[0].fieldType).equal('ContainerRepresentation');
            done();
        });
    });

    it('get form field values that are populated through a REST backend', function (done) {
        this.tasksMock.get200getRestFieldValuesColumn();

        var taskId = '1'; // String | taskId
        var field = 'label'; // String | field
        var column = 'user'; // String | column

        this.alfrescoJsApi.activiti.taskApi.getRestFieldValuesColumn(taskId, field, column).then((data)=> {
            done();
        },(error)=> {
            console.log(error);
        });
    });

    it('get form field values that are populated through a REST backend Specific case to retrieve information on a specific column', function (done) {
        this.tasksMock.get200getRestFieldValues();

        var taskId = '2'; // String | taskId
        var field = 'label'; // String | field

        this.alfrescoJsApi.activiti.taskApi.getRestFieldValues(taskId, field).then((data)=> {
            done();
        },(error)=> {
            console.log(error);
        });
    });
});
