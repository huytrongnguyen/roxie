import React, { useState, useEffect } from 'react';
import { Roxie, DataStore } from '@roxie/core';

Roxie.query(document).on('click', '.dropdown.dropdown-multi-select .dropdown-menu', e => e.stopPropagation());

type DropdownProps = {
  store: DataStore<any>,
  options: any[],
  displayField?: string,
  valueField?: string,
  multiple?: boolean,
  defaultText?: string,
  separator?: string,
  smartButtonText?: boolean,
  rightAligned?: boolean,
  searchBox?: boolean,
  buttonClass?: string,
  buttonStyle?: any,
  searchBoxClass?: string,
  value?: any[],
  valueChange?: (value: any[]) => void,
  className?: string,
}

export function Dropdown(props: DropdownProps) {
  const {
    displayField = 'name',
    valueField = 'value',
    multiple = false,
    smartButtonText = true,
    searchBox = true,
    searchBoxClass = '',
    value = [],
    valueChange,
    className = '',
  } = props;

  const [searchFilter, setSearchFilter] = useState(''),
        [options, setOptions] = useState([]);

  useEffect(() => {
    const subscription = props.store.subscribe(value => setOptions(value || []));
    return () => subscription.unsubscribe();
  }, [])

  function displayText() {
    if (!smartButtonText || !value.length) {
      return '';
    }

    return value.map(item => item[displayField]).join(',');
  }

  function isSelected(opt: any) {
    return value.findIndex(item => item[valueField] === opt[valueField]) > -1;
  }

  function select(opt: any) {
    let newValue = value;
    if (!multiple) {
      newValue = [opt];
    } else if (isSelected(opt)) {
      newValue = value.remove(item => item[valueField] === opt[valueField]);
      newValue = value;
    } else {
      newValue = options.filter(item => isSelected(item) || item[valueField] === opt[valueField]);
    }
    valueChange && valueChange([...newValue]);
  }

  return <div className={Roxie.classNames('dropdown input-group', { 'dropdown-multi-select': multiple }, className)}>
    <input type="text" className="form-control" value={displayText()} readOnly />
    <div className="input-group-append">
      <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" />
      <div className="dropdown-menu p-0">
        {searchBox && <div className="p-1 border-bottom">
          <input type="text" className={Roxie.classNames('form-control', searchBoxClass)} name="searchFilter" placeholder="Search..."
              value={searchFilter} onChange={event => setSearchFilter(event.target.value)} />
        </div>}
        <div className="dropdown-item-list">
          {options.map(opt => {
            if (searchFilter && !opt[displayField].toLowerCase().startsWith(searchFilter.toLowerCase())) return null;
            return <span className={Roxie.classNames('dropdown-item', { active: isSelected(opt) })} key={opt[valueField]} onClick={() => select(opt)}>
              {opt[displayField]}
            </span>
          })}
        </div>
      </div>
    </div>
  </div>
}
