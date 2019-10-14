import React, { useState, useEffect, PropsWithChildren, Children } from 'react';
import { Roxie } from '@roxie/core';

interface TabProps extends PropsWithChildren<any> {
  title: string,
}

export function Tab(props: TabProps) {
  return null;
}

interface TabPanelProps extends PropsWithChildren<any> {
  className?: string,
}

export function TabPanel(props: TabPanelProps) {
  const [tabs, setTabs] = useState([] as TabProps[]),
        [activeTab, setActiveTab] = useState({} as TabProps);

  useEffect(() => {
    const tabs = Children.toArray(props.children).map(child => child.props);
    setTabs(tabs);
    setActiveTab(tabs[0]);
  }, [])

  return <section className={Roxie.classNames('card', props.className)}>
    <div className="card-header">
      <ul className="nav nav-tabs card-header-tabs">
        {tabs.map((tab, index) => <li key={index} className="nav-item" onClick={() => setActiveTab(tab)}>
          <span className={Roxie.classNames('nav-link', { active: tab.title === activeTab.title })}>
            {tab.title}
          </span>
        </li>)}
      </ul>
    </div>
    <div className="card-body">{activeTab.children}</div>
  </section>
}