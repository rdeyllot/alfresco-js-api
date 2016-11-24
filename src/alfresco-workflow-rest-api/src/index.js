(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['../../alfrescoApiClient', './model/CandidatePaging', './model/CandidatePagingList', './model/Deployment', './model/DeploymentEntry', './model/DeploymentPaging', './model/DeploymentPagingList', './model/Error', './model/ErrorError', './model/Pagination', './model/Process', './model/ProcessBody', './model/ProcessDefinition', './model/ProcessDefinitionEntry', './model/ProcessDefinitionPaging', './model/ProcessDefinitionPagingList', './model/ProcessDefinitionStartFormPaging', './model/ProcessDefinitionStartFormPagingList', './model/ProcessEntry', './model/ProcessItem', './model/ProcessItemBody', './model/ProcessItemEntry', './model/ProcessItemsPaging', './model/ProcessItemsPagingList', './model/ProcessPaging', './model/ProcessPagingList', './model/Task', './model/TaskBody', './model/TaskEntry', './model/TaskFormsPaging', './model/TaskFormsPagingList', './model/TaskPaging', './model/TaskPagingList', './model/Variable', './model/Variable1', './model/VariableBody', './model/VariableEntry', './model/VariablePaging', './model/VariablePagingList', './api/DeploymentsApi', './api/ProcessDefinitionsApi', './api/ProcessesApi', './api/TasksApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../../alfrescoApiClient'), require('./model/CandidatePaging'), require('./model/CandidatePagingList'), require('./model/Deployment'), require('./model/DeploymentEntry'), require('./model/DeploymentPaging'), require('./model/DeploymentPagingList'), require('./model/Error'), require('./model/ErrorError'), require('./model/Pagination'), require('./model/Process'), require('./model/ProcessBody'), require('./model/ProcessDefinition'), require('./model/ProcessDefinitionEntry'), require('./model/ProcessDefinitionPaging'), require('./model/ProcessDefinitionPagingList'), require('./model/ProcessDefinitionStartFormPaging'), require('./model/ProcessDefinitionStartFormPagingList'), require('./model/ProcessEntry'), require('./model/ProcessItem'), require('./model/ProcessItemBody'), require('./model/ProcessItemEntry'), require('./model/ProcessItemsPaging'), require('./model/ProcessItemsPagingList'), require('./model/ProcessPaging'), require('./model/ProcessPagingList'), require('./model/Task'), require('./model/TaskBody'), require('./model/TaskEntry'), require('./model/TaskFormsPaging'), require('./model/TaskFormsPagingList'), require('./model/TaskPaging'), require('./model/TaskPagingList'), require('./model/Variable'), require('./model/Variable1'), require('./model/VariableBody'), require('./model/VariableEntry'), require('./model/VariablePaging'), require('./model/VariablePagingList'), require('./api/DeploymentsApi'), require('./api/ProcessDefinitionsApi'), require('./api/ProcessesApi'), require('./api/TasksApi'));
  }
}(function(ApiClient, CandidatePaging, CandidatePagingList, Deployment, DeploymentEntry, DeploymentPaging, DeploymentPagingList, Error, ErrorError, Pagination, Process, ProcessBody, ProcessDefinition, ProcessDefinitionEntry, ProcessDefinitionPaging, ProcessDefinitionPagingList, ProcessDefinitionStartFormPaging, ProcessDefinitionStartFormPagingList, ProcessEntry, ProcessItem, ProcessItemBody, ProcessItemEntry, ProcessItemsPaging, ProcessItemsPagingList, ProcessPaging, ProcessPagingList, Task, TaskBody, TaskEntry, TaskFormsPaging, TaskFormsPagingList, TaskPaging, TaskPagingList, Variable, Variable1, VariableBody, VariableEntry, VariablePaging, VariablePagingList, DeploymentsApi, ProcessDefinitionsApi, ProcessesApi, TasksApi) {
  'use strict';

  /**
   * Provides access to the workflow features of Activiti Community embedded in Alfresco.\n\nThis API uses the term **entity** to refer to an object in an Alfresco repository.\nAn **entity** is of a specific **type**, and has a unique **id**.\n\n* The **id** of an entity of type **node** is the **NodeRef** with the &#x60;workspace://SpacesStore&#x60; prefix removed.\n* The **id** of an entity of type **Deployment** is the Deployment&#39;s short name.\n* The **id** for an entity of type **person** is the person&#39;s username.\n.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var AlfrescoWorkflowRestApi = require('./index'); // See note below*.
   * var xxxSvc = new AlfrescoWorkflowRestApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new AlfrescoWorkflowRestApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['./index'], function(){...}) and put the application logic within the
   * callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new AlfrescoWorkflowRestApi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new AlfrescoWorkflowRestApi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 0.1.0
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The CandidatePaging model constructor.
     * @property {module:model/CandidatePaging}
     */
    CandidatePaging: CandidatePaging,
    /**
     * The CandidatePagingList model constructor.
     * @property {module:model/CandidatePagingList}
     */
    CandidatePagingList: CandidatePagingList,
    /**
     * The Deployment model constructor.
     * @property {module:model/Deployment}
     */
    Deployment: Deployment,
    /**
     * The DeploymentEntry model constructor.
     * @property {module:model/DeploymentEntry}
     */
    DeploymentEntry: DeploymentEntry,
    /**
     * The DeploymentPaging model constructor.
     * @property {module:model/DeploymentPaging}
     */
    DeploymentPaging: DeploymentPaging,
    /**
     * The DeploymentPagingList model constructor.
     * @property {module:model/DeploymentPagingList}
     */
    DeploymentPagingList: DeploymentPagingList,
    /**
     * The Error model constructor.
     * @property {module:model/Error}
     */
    Error: Error,
    /**
     * The ErrorError model constructor.
     * @property {module:model/ErrorError}
     */
    ErrorError: ErrorError,
    /**
     * The Pagination model constructor.
     * @property {module:model/Pagination}
     */
    Pagination: Pagination,
    /**
     * The Process model constructor.
     * @property {module:model/Process}
     */
    Process: Process,
    /**
     * The ProcessBody model constructor.
     * @property {module:model/ProcessBody}
     */
    ProcessBody: ProcessBody,
    /**
     * The ProcessDefinition model constructor.
     * @property {module:model/ProcessDefinition}
     */
    ProcessDefinition: ProcessDefinition,
    /**
     * The ProcessDefinitionEntry model constructor.
     * @property {module:model/ProcessDefinitionEntry}
     */
    ProcessDefinitionEntry: ProcessDefinitionEntry,
    /**
     * The ProcessDefinitionPaging model constructor.
     * @property {module:model/ProcessDefinitionPaging}
     */
    ProcessDefinitionPaging: ProcessDefinitionPaging,
    /**
     * The ProcessDefinitionPagingList model constructor.
     * @property {module:model/ProcessDefinitionPagingList}
     */
    ProcessDefinitionPagingList: ProcessDefinitionPagingList,
    /**
     * The ProcessDefinitionStartFormPaging model constructor.
     * @property {module:model/ProcessDefinitionStartFormPaging}
     */
    ProcessDefinitionStartFormPaging: ProcessDefinitionStartFormPaging,
    /**
     * The ProcessDefinitionStartFormPagingList model constructor.
     * @property {module:model/ProcessDefinitionStartFormPagingList}
     */
    ProcessDefinitionStartFormPagingList: ProcessDefinitionStartFormPagingList,
    /**
     * The ProcessEntry model constructor.
     * @property {module:model/ProcessEntry}
     */
    ProcessEntry: ProcessEntry,
    /**
     * The ProcessItem model constructor.
     * @property {module:model/ProcessItem}
     */
    ProcessItem: ProcessItem,
    /**
     * The ProcessItemBody model constructor.
     * @property {module:model/ProcessItemBody}
     */
    ProcessItemBody: ProcessItemBody,
    /**
     * The ProcessItemEntry model constructor.
     * @property {module:model/ProcessItemEntry}
     */
    ProcessItemEntry: ProcessItemEntry,
    /**
     * The ProcessItemsPaging model constructor.
     * @property {module:model/ProcessItemsPaging}
     */
    ProcessItemsPaging: ProcessItemsPaging,
    /**
     * The ProcessItemsPagingList model constructor.
     * @property {module:model/ProcessItemsPagingList}
     */
    ProcessItemsPagingList: ProcessItemsPagingList,
    /**
     * The ProcessPaging model constructor.
     * @property {module:model/ProcessPaging}
     */
    ProcessPaging: ProcessPaging,
    /**
     * The ProcessPagingList model constructor.
     * @property {module: model/ProcessPagingList}
     */
    ProcessPagingList: ProcessPagingList,
    /**
     * The Task model constructor.
     * @property {module:model/Task}
     */
    Task: Task,
    /**
     * The TaskBody model constructor.
     * @property {module:model/TaskBody}
     */
    TaskBody: TaskBody,
    /**
     * The TaskEntry model constructor.
     * @property {module:model/TaskEntry}
     */
    TaskEntry: TaskEntry,
    /**
     * The TaskFormsPaging model constructor.
     * @property {module:model/TaskFormsPaging}
     */
    TaskFormsPaging: TaskFormsPaging,
    /**
     * The TaskFormsPagingList model constructor.
     * @property {module:model/TaskFormsPagingList}
     */
    TaskFormsPagingList: TaskFormsPagingList,
    /**
     * The TaskPaging model constructor.
     * @property {module:model/TaskPaging}
     */
    TaskPaging: TaskPaging,
    /**
     * The TaskPagingList model constructor.
     * @property {module:model/TaskPagingList}
     */
    TaskPagingList: TaskPagingList,
    /**
     * The Variable model constructor.
     * @property {module:model/Variable}
     */
    Variable: Variable,
    /**
     * The Variable1 model constructor.
     * @property {module:model/Variable1}
     */
    Variable1: Variable1,
    /**
     * The VariableBody model constructor.
     * @property {module:model/VariableBody}
     */
    VariableBody: VariableBody,
    /**
     * The VariableEntry model constructor.
     * @property {module:model/VariableEntry}
     */
    VariableEntry: VariableEntry,
    /**
     * The VariablePaging model constructor.
     * @property {module:model/VariablePaging}
     */
    VariablePaging: VariablePaging,
    /**
     * The VariablePagingList model constructor.
     * @property {module:model/VariablePagingList}
     */
    VariablePagingList: VariablePagingList,
    /**
     * The DeploymentsApi service constructor.
     * @property {module:api/DeploymentsApi}
     */
    DeploymentsApi: DeploymentsApi,
    /**
     * The ProcessDefinitionsApi service constructor.
     * @property {module:api/ProcessDefinitionsApi}
     */
    ProcessDefinitionsApi: ProcessDefinitionsApi,
    /**
     * The ProcessesApi service constructor.
     * @property {module:api/ProcessesApi}
     */
    ProcessesApi: ProcessesApi,
    /**
     * The TasksApi service constructor.
     * @property {module:api/TasksApi}
     */
    TasksApi: TasksApi
  };

  return exports;
}));
