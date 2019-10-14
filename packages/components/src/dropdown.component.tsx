import React, { useState } from 'react';
import { Roxie } from '@roxie/core';

Roxie.query(document).on('click', '.dropdown-multi-select .dropdown-menu', e => e.stopPropagation());

type DropdownProps = {
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
  const [searchFilter, setSearchFilter] = useState('');

  const {
    options,
    displayField = 'name',
    valueField = 'value',
    multiple = false,
    defaultText = 'Select',
    separator = ': ',
    smartButtonText = true,
    rightAligned = false,
    searchBox = true,
    buttonClass = '',
    buttonStyle = {},
    searchBoxClass = '',
    value = [],
    valueChange,
    className = '',
  } = props;

  function displayText() {
    if (!smartButtonText || !value.length) {
      return defaultText;
    }

    const names = value.map(item => item[displayField]).join(',');
    return `${defaultText}${separator}${names}`;
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
    } else {
      newValue = options.filter(item => isSelected(item) || item[valueField] === opt[valueField]);
    }
    valueChange && valueChange(newValue);
  }

  return <div className={`dropdown ${multiple ? 'dropdown-multi-select' : ''} ${className}`}>
    <button className={Roxie.classNames('btn btn-default dropdown-toggle border', buttonClass)} style={buttonStyle} type="button" data-toggle="dropdown">
      {displayText()}
    </button>
    <div className={`dropdown-menu p-0 ${rightAligned ? 'dropdown-menu-right' : ''}`}>
      {searchBox && <div className="p-1 border-bottom">
        <input type="text" className={Roxie.classNames('form-control', searchBoxClass)} name="searchFilter" placeholder="Search..."
            value={searchFilter} onChange={event => setSearchFilter(event.target.value)} />
      </div>}
      <div className="dropdown-item-list">
        {options.map(opt => <span className={`dropdown-item ${isSelected(opt) ? 'active': ''}`} key={opt[valueField]} onClick={() => select(opt)}>
          {opt[displayField]}
        </span>)}
      </div>
    </div>
  </div>
}
