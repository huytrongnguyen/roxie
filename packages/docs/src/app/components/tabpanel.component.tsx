import React, { Fragment } from 'react';
import Highlight from 'react-highlight.js';
import { TabPanel, Tab } from '@roxie/components';

export function TabPanelComponent() {
  return <Fragment>
    <div className="pt-3">
      <div className="container-fluid">
        <h2>TabPanel</h2>
        <p>
          Tab Panels are a great way to allow the user to switch between several pages that are all full screen.
          Each Component in the Tab Panel gets its own Tab, which shows the Component when tapped on.
        </p>
        <div className="card mb-3">
          <div className="card-body">
            <TabPanel>
              <Tab title="Tab 1">
                This is content for Tab 1!
              </Tab>
              <Tab title="Tab 2">
                This is content for Tab 2!
              </Tab>
              <Tab title="Tab 3">
                This is content for Tab 3!
              </Tab>
            </TabPanel>
          </div>
          <div className="card-footer">
            <Highlight language="tsx">{`
import React, { Fragment } from 'react';
import { TabPanel, Tab } from '@roxie/components';

function TabPanelExample() {
  return <TabPanel>
    <Tab title="Tab 1">
      This is content for Tab 1!
    </Tab>
    <Tab title="Tab 2">
      This is content for Tab 2!
    </Tab>
    <Tab title="Tab 3">
      This is content for Tab 3!
    </Tab>
  </TabPanel>
}
            `}</Highlight>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
}