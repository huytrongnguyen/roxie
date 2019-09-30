import React, { ReactNode } from 'react';

import { Roxie } from '@roxie/core';

export function Dialog(props: { id?: string, className?: string, title?: string, children: ReactNode }) {
  const { id = 'dialog', className = '', title = 'Dialog', children } = props;

  return <section id={id} className={Roxie.classNames('modal fade', className)} tabIndex={-1} role="dialog">
    <div className="modal-dialog modal-dialog-centered" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">{title}</h5>
          <button type="button" className="close" data-dismiss="modal">
            <span>&times;</span>
          </button>
        </div>
        <div className="modal-body">
          {children}
        </div>
      </div>
    </div>
  </section>
}
