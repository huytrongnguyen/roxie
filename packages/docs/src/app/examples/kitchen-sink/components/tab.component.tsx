import React from 'react';
import { Link } from 'react-router-dom';
import Highlight from 'react-highlight.js';
import { Container, TabPanel, Tab } from '@roxie/components';

export function TabExample() {
  return <Container layout="vbox" className="fullscreen">
    <ol className="breadcrumb">
      <li className="breadcrumb-item"><Link to="/examples/kitchen-sink">Kitchen Sink</Link></li>
      <li className="breadcrumb-item"><Link to="/examples/kitchen-sink/components">Components</Link></li>
      <li className="breadcrumb-item">Tabs</li>
    </ol>
    <Container layout="fit" className="fullscreen">
      <div className="auto-scroll-y p-3">
        <div className="card mb-3">
          <div className="card-header">Basic Tabs</div>
          <div className="card-body">
            <TabPanel>
              <Tab title="Home">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Tab>
              <Tab title="About">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed risus neque, mollis id auctor eget, aliquet vel augue.
                Sed egestas fermentum tempus. Praesent hendrerit eros et enim laoreet suscipit.
                Nam diam ante, ullamcorper id congue non, accumsan non augue.
                Aliquam non libero augue, vitae molestie orci.
                Nulla ac enim nec velit rhoncus venenatis.
                Aenean orci quam, eleifend ut aliquam iaculis, pellentesque ut arcu.
                Suspendisse lobortis commodo magna, vitae sodales orci luctus vestibulum.
                Cras eget ipsum sapien, vel dapibus metus.
                Etiam sed augue sit amet massa commodo commodo.
                Nam pellentesque dapibus ipsum.
                Proin eget malesuada magna.
                Curabitur elit diam, pellentesque id fermentum eget, congue ultricies nibh.
                Nunc tincidunt sem at diam porta tincidunt.
                Suspendisse fringilla felis in lectus blandit vulputate.
                Suspendisse mollis ipsum nec ante congue ut porttitor nunc bibendum.
                Maecenas mollis sem non justo iaculis vitae consequat augue pulvinar.
                Sed aliquet malesuada lobortis.
                Maecenas malesuada eros sed erat ultricies eleifend.
                Nulla facilisi.
                Pellentesque pharetra molestie mollis.
                Aenean venenatis tempus urna, quis convallis quam cursus eget.
              </Tab>
            </TabPanel>
          </div>
          <div className="card-footer">
            <Highlight language="jsx">{`
import React, { Fragment } from 'react';
import { TabPanel, Tab } from '@roxie/components';

function TabPanelExample() {
  return <TabPanel>
    <Tab title="Home">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </Tab>
    <Tab title="About">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Sed risus neque, mollis id auctor eget, aliquet vel augue.
      Sed egestas fermentum tempus. Praesent hendrerit eros et enim laoreet suscipit.
      Nam diam ante, ullamcorper id congue non, accumsan non augue.
      Aliquam non libero augue, vitae molestie orci.
      Nulla ac enim nec velit rhoncus venenatis.
      Aenean orci quam, eleifend ut aliquam iaculis, pellentesque ut arcu.
      Suspendisse lobortis commodo magna, vitae sodales orci luctus vestibulum.
      Cras eget ipsum sapien, vel dapibus metus.
      Etiam sed augue sit amet massa commodo commodo.
      Nam pellentesque dapibus ipsum.
      Proin eget malesuada magna.
      Curabitur elit diam, pellentesque id fermentum eget, congue ultricies nibh.
      Nunc tincidunt sem at diam porta tincidunt.
      Suspendisse fringilla felis in lectus blandit vulputate.
      Suspendisse mollis ipsum nec ante congue ut porttitor nunc bibendum.
      Maecenas mollis sem non justo iaculis vitae consequat augue pulvinar.
      Sed aliquet malesuada lobortis.
      Maecenas malesuada eros sed erat ultricies eleifend.
      Nulla facilisi.
      Pellentesque pharetra molestie mollis.
      Aenean venenatis tempus urna, quis convallis quam cursus eget.
    </Tab>
  </TabPanel>
}
            `}</Highlight>
          </div>
        </div>
      </div>
    </Container>
  </Container>
}