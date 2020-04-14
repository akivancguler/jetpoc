/**
 * @license
 * Copyright (c) 2014, 2020, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 * @ignore
 */
/*
 * Your customer ViewModel code goes here
 */
define(
  ['accUtils',
   'knockout',
   'jquery',
   'ojs/ojarraydataprovider',
   'ojs/ojlabel',
   'ojs/ojchart',
   'ojs/ojlistview',
   'ojs/ojavatar',
   'ojs/ojselectsingle',
   'ojs/ojbootstrap', 'ojs/ojknockout', 'ojs/ojtable','ojs/ojmessages',
   'ojs/ojdatagrid', 'ojs/ojcollectiondatagriddatasource'
  ],

  
  

  function (accUtils, ko, $, ArrayDataProvider) {

    function DashboardViewModel() {
      var self = this;  //generated code

      self.url = 'http://localhost:3000/employees';

      self.collection = new oj.Collection(null, {
          model: new oj.Model.extend({
              idAttribute: 'id',
              urlRoot: self.url}),
          url: self.url
      });
      
      self.dataSource = new oj.CollectionDataGridDataSource(
         self.collection, {
            rowHeader: 'id',
            columns: ['FIRST_NAME', 'LAST_NAME', 'HIRE_DATE', 'SALARY','EMAIL']
         });



      this.messages = [
        /*{
          severity: 'error',
          summary: 'Error message summary',
          detail: 'Error message detail'
        },
        {
          severity: 'warning',
          summary: 'Warning message summary',
          detail: 'Warning message detail'
        },
        {
          severity: 'confirmation',
          summary: 'Confirmation message summary',
          detail: 'Confirmation message detail'
        },*/
        {
          severity: 'info',
          summary: 'Info message summary',
          detail: 'Info message detail'
        }];

      this.messagesDataprovider = new ArrayDataProvider(this.messages);
    


      var deptArray = [{ DepartmentId: 3, DepartmentName: 'ADFPM 1001 neverending', LocationId: 200, ManagerId: 300 },
      { DepartmentId: 5, DepartmentName: 'BB', LocationId: 200, ManagerId: 300 },
      { DepartmentId: 10, DepartmentName: 'Administration', LocationId: 200, ManagerId: 300 },
      { DepartmentId: 20, DepartmentName: 'Marketing', LocationId: 200, ManagerId: 300 },
      { DepartmentId: 30, DepartmentName: 'Purchasing', LocationId: 200, ManagerId: 300 },
      { DepartmentId: 40, DepartmentName: 'Human Resources1', LocationId: 200, ManagerId: 300 },
      { DepartmentId: 50, DepartmentName: 'Administration2', LocationId: 200, ManagerId: 300 },
      { DepartmentId: 60, DepartmentName: 'Marketing3', LocationId: 200, ManagerId: 300 },
      { DepartmentId: 70, DepartmentName: 'Purchasing4', LocationId: 200, ManagerId: 300 },
      { DepartmentId: 80, DepartmentName: 'Human Resources5', LocationId: 200, ManagerId: 300 },
      { DepartmentId: 90, DepartmentName: 'Human Resources11', LocationId: 200, ManagerId: 300 },
      { DepartmentId: 100, DepartmentName: 'Administration12', LocationId: 200, ManagerId: 300 },
      { DepartmentId: 110, DepartmentName: 'Marketing13', LocationId: 200, ManagerId: 300 },
      { DepartmentId: 120, DepartmentName: 'Purchasing14', LocationId: 200, ManagerId: 300 },
      { DepartmentId: 130, DepartmentName: 'Human Resources15', LocationId: 200, ManagerId: 300 },
      { DepartmentId: 1001, DepartmentName: 'ADFPM 1001 neverending', LocationId: 200, ManagerId: 300 },
      { DepartmentId: 1009, DepartmentName: 'BB', LocationId: 200, ManagerId: 300 },
      { DepartmentId: 1011, DepartmentName: 'Administration', LocationId: 200, ManagerId: 300 },
      { DepartmentId: 2011, DepartmentName: 'Marketing', LocationId: 200, ManagerId: 300 },
      { DepartmentId: 3011, DepartmentName: 'Purchasing', LocationId: 200, ManagerId: 300 },
      { DepartmentId: 4011, DepartmentName: 'Human Resources1', LocationId: 200, ManagerId: 300 },
      { DepartmentId: 5011, DepartmentName: 'Administration2', LocationId: 200, ManagerId: 300 },
      { DepartmentId: 6011, DepartmentName: 'Marketing3', LocationId: 200, ManagerId: 300 },
      { DepartmentId: 7011, DepartmentName: 'Purchasing4', LocationId: 200, ManagerId: 300 },
      { DepartmentId: 8011, DepartmentName: 'Human Resources5', LocationId: 200, ManagerId: 300 },
      { DepartmentId: 9011, DepartmentName: 'Human Resources11', LocationId: 200, ManagerId: 300 },
      { DepartmentId: 10011, DepartmentName: 'Administration12', LocationId: 200, ManagerId: 300 },
      { DepartmentId: 11011, DepartmentName: 'Marketing13', LocationId: 200, ManagerId: 300 },
      { DepartmentId: 12011, DepartmentName: 'Purchasing14', LocationId: 200, ManagerId: 300 },
      { DepartmentId: 13011, DepartmentName: 'Human Resources15', LocationId: 200, ManagerId: 300 },
      { DepartmentId: 14011, DepartmentName: 'ADFPM 1001 neverending', LocationId: 200, ManagerId: 300 },
      { DepartmentId: 15011, DepartmentName: 'BB', LocationId: 200, ManagerId: 300 },
      { DepartmentId: 21022, DepartmentName: 'Administration', LocationId: 200, ManagerId: 300 },
      { DepartmentId: 22022, DepartmentName: 'Marketing', LocationId: 200, ManagerId: 300 },
      { DepartmentId: 23022, DepartmentName: 'Purchasing', LocationId: 200, ManagerId: 300 },
      { DepartmentId: 24022, DepartmentName: 'Human Resources1', LocationId: 200, ManagerId: 300 },
      { DepartmentId: 25022, DepartmentName: 'Administration2', LocationId: 200, ManagerId: 300 },
      { DepartmentId: 26022, DepartmentName: 'Marketing3', LocationId: 200, ManagerId: 300 },
      { DepartmentId: 27022, DepartmentName: 'Purchasing4', LocationId: 200, ManagerId: 300 },
      { DepartmentId: 28022, DepartmentName: 'Human Resources5', LocationId: 200, ManagerId: 300 },
      { DepartmentId: 29022, DepartmentName: 'Human Resources11', LocationId: 200, ManagerId: 300 },
      { DepartmentId: 310022, DepartmentName: 'Administration12', LocationId: 200, ManagerId: 300 },
      { DepartmentId: 311022, DepartmentName: 'Marketing13', LocationId: 200, ManagerId: 300 },
      { DepartmentId: 312022, DepartmentName: 'Purchasing14', LocationId: 200, ManagerId: 300 },
      { DepartmentId: 313022, DepartmentName: 'Human Resources15', LocationId: 200, ManagerId: 300 }];
  this.dataprovider = new ArrayDataProvider(deptArray, { keyAttributes: 'DepartmentId', implicitSort: [{ attribute: 'DepartmentId', direction: 'ascending' }] });

  



// chart type values array and ArrayDataProvider observable
var types = [
  { value: 'pie', label: 'Pie' },
  { value: 'bar', label: 'Bar' }
];

self.chartTypes = new ArrayDataProvider(types, { keyAttributes: 'value' });
// chart selection observable and default value
self.val = ko.observable("pie");
 // chart data array and  ArrayDataProvider observable
 var chartData = [
  { "id": 0, "series": "Baseball", "group": "Group A", "value": 42 },
  { "id": 1, "series": "Baseball", "group": "Group B", "value": 34 },
  { "id": 2, "series": "Bicycling", "group": "Group A", "value": 55 },
  { "id": 3, "series": "Bicycling", "group": "Group B", "value": 30 },
  { "id": 4, "series": "Skiing", "group": "Group A", "value": 36 },
  { "id": 5, "series": "Skiing", "group": "Group B", "value": 50 },
  { "id": 6, "series": "Soccer", "group": "Group A", "value": 22 },
  { "id": 7, "series": "Soccer", "group": "Group B", "value": 46 }
];
self.chartDataProvider = new ArrayDataProvider(chartData, { keyAttributes: 'id' });  

      /**
       * Declare observables and read data from JSON file
       */ 
      // Master list and detail list observables
      self.activityDataProvider = ko.observable();   //gets data for Activities list
      self.itemsDataProvider = ko.observable();      //gets data for Items list

      self.itemData = ko.observable('');             //holds data for the Item details

      self.pieSeriesValue = ko.observableArray([]);  //holds data for pie chart

      // Activity selection observables
      self.activitySelected = ko.observable(false);
      self.selectedActivity = ko.observable();
      self.firstSelectedActivity = ko.observable();
      
      // Item selection observables
      self.itemSelected = ko.observable(false);
      self.selectedItem = ko.observable();
      self.firstSelectedItem = ko.observable();

      var url = "js/store_data.json";  //defines link to local data file

      // Get Activity objects from file using jQuery method and a method to return a Promise
      $.getJSON(url).then(function (data) {
          // Create variable for Activities list and populate using key attribute fetch
          var activitiesArray = data;
          self.activityDataProvider(new ArrayDataProvider(activitiesArray, { keyAttributes: 'id' }));
        }
      );
    
      /**
       * Handle selection from Activities list
       */
      self.selectedActivityChanged = function (event) {
        // Check whether click is an Activity selection or a deselection
        if (event.detail.value.length != 0) {
            // If selection, populate and display list
            // Create variable for items list using firstSelectedXxx API from List View
            var itemsArray = self.firstSelectedActivity().data.items;
            // Populate items list using DataProvider fetch on key attribute
            self.itemsDataProvider(new ArrayDataProvider(itemsArray, { keyAttributes: 'id' }))
            // Set List View properties
            self.activitySelected(true);
            self.itemSelected(false);
            // Clear item selection
            self.selectedItem([]);
            self.itemData();
        } else {
          // If deselection, hide list
           self.activitySelected(false);
           self.itemSelected(false);
        }
      };

      /**
       * Handle selection from Activity Items list
       */
      self.selectedItemChanged = function (event) {
        // Check whether click is an Activity Item selection or deselection
        if (event.detail.value.length != 0) {
            // If selection, populate and display Item details
            // Populate items list observable using firstSelectedXxx API
            self.itemData(self.firstSelectedItem().data);
            // Create variable and get attributes of the items list to set pie chart values
            var pieSeries = [
              { name: "Quantity in Stock", items: [self.itemData().quantity_instock] },
              { name: "Quantity Shipped", items: [self.itemData().quantity_shipped] }
            ];
            // Update the pie chart with the data
            self.pieSeriesValue(pieSeries);
            self.itemSelected(true);
        } else {
          // If deselection, hide list
           self.itemSelected(false);
        }
      };


      // The following 3 functions are not addressed in this tutorial.
	  
      // Below are a set of the ViewModel methods invoked by the oj-module component.
      // Please reference the oj-module jsDoc for additional information.

      /**
       * This section is standard navdrawer starter template code
       */ 
      // Below are a set of the ViewModel methods invoked by the oj-module component.
      // Please reference the oj-module jsDoc for additional information.

      /**
       * Optional ViewModel method invoked after the View is inserted into the
       * document DOM.  The application can put logic that requires the DOM being
       * attached here. 
       * This method might be called multiple times - after the View is created 
       * and inserted into the DOM and after the View is reconnected 
       * after being disconnected.
       */
      self.connected = function () {
        accUtils.announce('Dashboard page loaded.', 'assertive');
        document.title = "Dashboard";
        // Implement further logic if needed
      };

      /**
       * Optional ViewModel method invoked after the View is disconnected from the DOM.
       */
      self.disconnected = function () {
        // Implement if needed
      };

      /**
       * Optional ViewModel method invoked after transition to the new View is complete.
       * That includes any possible animation between the old and the new View.
       */
      self.transitionCompleted = function () {
        // Implement if needed
      };
    }


      /*
       * Returns a constructor for the ViewModel so that the ViewModel is constructed
       * each time the view is displayed.  Return an instance of the ViewModel if
       * only one instance of the ViewModel is needed.
       */
      return new DashboardViewModel();
  }
);