import React, { Fragment } from 'react';

export function ContainerComponent() {
  return <Fragment>
    <div className="pt-3">
      <div className="container-fluid">
        <div className="card card-body mb-3">
          <h2>Container</h2>
          <p>
            A Container has all of the abilities of <code>div</code> component, but lets you nest other Components inside it.
            Applications are made up of lots of components, usually nested inside one another.
            Containers allow you to render and arrange child Components inside them.
          </p>
          <p>
            Most apps have a single top-level Container called a Viewport, which takes up the entire screen.
            Inside of this are child components, for example in a mail app the Viewport Container's two children might be a message List and an email preview pane.
          </p>
          <p>
            Layouts determine how the child Components should be laid out on the screen.
            In our mail app example we'd use an HBox layout so that we can pin the email list to the left hand edge of the screen and allow the preview pane to occupy the rest.
            There are several layouts, each of which help you achieve your desired application structure.
          </p>
        </div>
      </div>
    </div>
  </Fragment>
}