import React, { Fragment } from 'react';

export function ApplicationArchitecture() {
  return <Fragment>
    <div className="pt-3">
      <div className="container-fluid">
        <h2>Introduction to Application Architecture</h2>
        <h3>What is MVC?</h3>
        <p>
          In an MVC architecture, most classes are either Models, Views or Controllers.
          The user interacts with Views, which display data held in Models.
          Those interactions are monitored by a Controller, which then responds to the interactions by updating the View and Model, as necessary.
        </p>
        <p>
          The View and the Model are generally unaware of each other because the Controller has the sole responsibility of directing updates.
          Generally speaking, Controllers will contain most of the application logic within an MVC application.
          Views ideally have little (if any) business logic.
          Models are primarily an interface to data and contain business logic to manage changes to said data.
        </p>
        <p>
          The goal of MVC is to clearly define the responsibilities for each class in the application.
          Because every class has clearly defined responsibilities, they implicitly become decoupled from the larger environment.
          This makes the app easier to test and maintain, and its code more reusable.
        </p>
        <h3>What is MVVM?</h3>
        <p>
          The key difference between MVC and MVVM is that MVVM features an abstraction of a View called the ViewModel.
          The ViewModel coordinates the changes between a Model’s data and the View's presentation of that data using a technique called "data binding".
        </p>
        <p>
          The result is that the Model and framework perform as much work as possible, minimizing or eliminating application logic that directly manipulates the View.
        </p>
        <h3>MVC and MVVM</h3>
        <p>
          To understand how these choices fit into your application, we should start by further defining what the various abbreviations represent.
        </p>
        <dl>
          <dt>(M) Model</dt>
          <dd>
            This is the data for your application.
            A set of classes (called "Models") defines the fields for their data (e.g. a User model with user-name and password fields).
            Models know how to persist themselves through the data package and can be linked to other models via associations.<br />
            Models are normally used in conjunction with Stores to provide data for grids and other components.
            Models are also an ideal location for any data logic that you may need, such as validation, conversion, etc.
          </dd>
          <dt>(V) View</dt>
          <dd>
            A View is any type of component that is visually represented. For instance, grids, trees and panels are all considered Views.
          </dd>
          <dt>(C) Controller</dt>
          <dd>
            Controllers are used as a place to maintain the view's logic that makes your app work.
            This could entail rendering views, routing, instantiating Models, and any other sort of app logic.
          </dd>
          <dt>(VM) ViewModel</dt>
          <dd>
            The ViewModel is a class that manages data specific to the View.
            It allows interested components to bind to it and be updated whenever this data changes.
          </dd>
        </dl>
      </div>
    </div>
  </Fragment>
}