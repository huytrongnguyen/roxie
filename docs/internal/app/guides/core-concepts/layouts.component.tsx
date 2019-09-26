import React, { Fragment } from 'react';
import Highlight from 'react-highlight.js';
import { Container } from '@roxie/components';

export function LayoutConcept() {
  return <Fragment>
    <div className="pt-3">
      <div className="container-fluid">
        <div className="card card-body mb-3">
          <h2>Layouts and Containers</h2>
          <p>
            The layout system is one of the most powerful parts of Roxie.
            It handles the sizing and positioning of every component in your application.
            This guide covers the basics of how to get started with layouts.
          </p>
          <h3>Containers</h3>
          <p>
            A container is a special type of component that can contain other components.
            A typical Roxie application is made up of several layers of nested Components.
            Let's take a look at how being a container allows a component to contain other components:
          </p>
          <div className="card">
            <div className="card-body">
              <div className="card" style={{width:400,height:300}}>
                <div className="card-header">Container Panel</div>
                <Container className="card-body p-0">
                  <div className="card" style={{width:'75%',height:100}}>
                    <div className="card-header">Child Panel 1</div>
                    <div className="card-body" />
                  </div>
                  <div className="card" style={{width:'75%',height:100}}>
                    <div className="card-header">Child Panel 2</div>
                    <div className="card-body" />
                  </div>
                </Container>
              </div>
            </div>
            <div className="card-footer">
              <Highlight language="js">{`
import React from 'react';
import { Container } from '@roxie/components';
              `}</Highlight>
              <Highlight language="html">{`
<div className="card" style={{width:400,height:300}}>
  <div className="card-header">Container Panel</div>
  <Container className="card-body p-0">
    <div className="card" style={{width:'75%',height:100}}>
      <div className="card-header">Child Panel 1</div>
      <div className="card-body" />
    </div>
    <div className="card" style={{width:'75%',height:100}}>
      <div className="card-header">Child Panel 2</div>
      <div className="card-body" />
    </div>
  </Container>
</div>
              `}</Highlight>
            </div>
          </div>
          <h3>Layouts</h3>
          <p>
            Every container has a layout that manages the sizing and positioning of its child components.
            In this section we're going to discuss how to configure a container to use a specific type of layout, and how the layout system keeps everything in sync.
          </p>
          <h4>Using Layouts</h4>
          <p>
            In the above example we did not specify a layout for the Container Panel.
            Let's assume, for example, we want our two child components to be positioned side by side, and to each take up exactly 50% of the width of the container
            - we can use a Column Layout simply by providing a layout config on the container:
          </p>
          <div className="card mb-3">
            <div className="card-body">
              <div className="card" style={{width:400,height:200}}>
                <div className="card-header">Container Panel</div>
                <Container layout="column" className="card-body p-0">
                  <div className="card" style={{height:100}}>
                    <div className="card-header">Child Panel 1</div>
                    <div className="card-body" />
                  </div>
                  <div className="card" style={{height:100}}>
                    <div className="card-header">Child Panel 2</div>
                    <div className="card-body" />
                  </div>
                </Container>
              </div>
            </div>
            <div className="card-footer">
              <Highlight language="js">{`
import React from 'react';
import { Panel } from '@roxie/components';
              `}</Highlight>
              <Highlight language="html">{`
<div className="card" style={{width:400,height:200}}>
  <div className="card-header">Container Panel</div>
  <Container layout="column" className="card-body p-0">
    <div className="card" style={{height:100}}>
      <div className="card-header">Child Panel 1</div>
      <div className="card-body" />
    </div>
    <div className="card" style={{height:100}}>
      <div className="card-header">Child Panel 2</div>
      <div className="card-body" />
    </div>
  </Container>
</div>
              `}</Highlight>
            </div>
          </div>
          <h4>Flexible Layouts</h4>
            <p>Roxie provides the following layouts that automatically adjust the size of child elements based on the available space:</p>
            <ul>
              <li><code>fit</code> - Sizes a single child element so that it fills 100% of the height and width of the parent.</li>
              <li><code>hbox</code> - A subclass of box layout with horizontal alignment.</li>
              <li><code>vbox</code> - A subclass of box layout with vertical alignment.</li>
            </ul>
        </div>
      </div>
    </div>
  </Fragment>
}