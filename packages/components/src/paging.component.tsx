import React, { useState, useEffect } from 'react';
import { DataStore, Roxie } from '@roxie/core';

interface PagingProps {
  store: DataStore<any>,
}

export function Paging(props: PagingProps) {
  const [currentPage, setCurrentPage] = useState(0),
        [totalPage, setTotalPage] = useState(0),
        [totalCount, setTotalCount] = useState(0),
        [start, setStart] = useState(0),
        [limit, setLimit] = useState(0);

  useEffect(() => {
    const subscription = props.store.subscribe(value => {
      const { currentPage = 0, config } = props.store,
            { pageSize = 1 } = config,
            { rawData, totalProperty } = config.proxy.reader,
            totalCount = rawData[totalProperty] || 0,
            startIndex = (currentPage - 1) * pageSize + 1;

      setCurrentPage(currentPage);
      setTotalPage((totalCount / pageSize).floor() + (totalCount % pageSize > 0 ? 1 : 0));
      setTotalCount(totalCount);
      setStart(startIndex);
      setLimit(pageSize);
    });
    return () => subscription.unsubscribe();
  }, [])

  return <section className="d-flex justify-content-between">
    <div className="py-1">
      {!currentPage ? 'No topics to display' : `Displaying topics ${start} - ${start + limit - 1} of ${totalCount}`}
    </div>
    <ul className="pagination mb-0">
      <li className={Roxie.classNames('page-item', {disabled:!currentPage || currentPage === 1})} onClick={() => props.store.loadPage(1)}>
        <span className="page-link"><i className="fa fa-step-backward" /></span>
      </li>
      <li className={Roxie.classNames('page-item', {disabled:!currentPage || currentPage === 1})} onClick={() => props.store.loadPage(currentPage - 1)}>
        <span className="page-link"><i className="fa fa-play fa-rotate-180" /></span>
      </li>
      <li className={Roxie.classNames('page-item', {disabled:!currentPage})}>
        <span className="page-text">Page</span>
      </li>
      <li className={Roxie.classNames('page-item', {disabled:!currentPage})}>
        <input type="text" className="form-control text-center" value={currentPage} readOnly />
      </li>
      <li className={Roxie.classNames('page-item', {disabled:!currentPage})}>
        <span className="page-text">of {totalPage}</span>
      </li>
      <li className={Roxie.classNames('page-item', {disabled:!currentPage || currentPage === totalPage})} onClick={() => props.store.loadPage(currentPage + 1)}>
        <span className="page-link"><i className="fa fa-play" /></span>
      </li>
      <li className={Roxie.classNames('page-item', {disabled:!currentPage || currentPage === totalPage})} onClick={() => props.store.loadPage(totalPage)}>
        <span className="page-link"><i className="fa fa-step-forward" /></span>
      </li>
    </ul>
  </section>
}