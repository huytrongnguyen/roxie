import React, { useState } from 'react';
import { Roxie } from '@roxie/core';

interface FileFieldProps {
  placeholder?: string,
  accept?: string,
  multiple?: boolean,
  buttonOnly?: boolean,
  onChange?: (files: FileList) => void,
}

export function FileField(props: FileFieldProps) {
  const [fileFieldId] = useState(Roxie.guid('filefield-')),
        [value, setValue] = useState('');

  function onChange(files: FileList) {
    setValue(files.length > 1 ? `${files.length} files` : files.item(0).name);
    props.onChange && props.onChange(files);
  }

  return <>
    {props.buttonOnly && <button type="button" className="btn btn-default" onClick={() => Roxie.query(`#${fileFieldId}`).trigger('click')}>Browse...</button>}
    {!props.buttonOnly && <div className="input-group">
      <input type="text" className="form-control" placeholder={props.placeholder} value={value} readOnly />
      <div className="input-group-append">
        <button type="button" className="btn btn-default" onClick={() => Roxie.query(`#${fileFieldId}`).trigger('click')}>Browse...</button>
      </div>
    </div>}
    <input type="file" className="d-none" id={fileFieldId} accept={props.accept} multiple={props.multiple}
            onChange={event => onChange(event.target.files)} />
  </>
}