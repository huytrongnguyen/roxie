import React, { Fragment } from 'react';
import Highlight from 'react-highlight.js';

export function DateApi() {
  return <Fragment>
    <div className="pt-3">
      <div className="container-fluid">
        <h2>Date</h2>
        <h3>Summary</h3>
        <p>Creates <code>Date</code> instances which let you work with dates and times.</p>
        <p>
          If you supply no arguments, the constructor creates a <code>Date</code> object for today's date and time according to local time.
          If you supply some arguments but not others, the missing arguments are set to 0.
          If you supply any arguments, you must supply at least the year, month, and day.
          You can omit the hours, minutes, seconds, and milliseconds.
        </p>
        <p>
          The date is measured in milliseconds since midnight 01 January, 1970 UTC.
          A day holds 86,400,000 milliseconds.
          The <code>Date</code> object range is -100,000,000 days to 100,000,000 days relative to 01 January, 1970 UTC.
        </p>
        <p>The <code>Date</code> object provides uniform behavior across platforms.</p>
        <p>
          The <code>Date</code> object supports a number of UTC (universal) methods, as well as local time methods.
          UTC, also known as Greenwich Mean Time (GMT), refers to the time as set by the World Time Standard.
          The local time is the time known to the computer where JavaScript is executed.
        </p>
        <p>Invoking <code>Date</code> in a non-constructor context (i.e., without the new operator) will return a string representing the current time.</p>
        <p>
          Note that <code>Date</code> objects can only be instantiated by calling <code>Date</code> or using it as a constructor;
          unlike other JavaScript object types, <code>Date</code> objects have no literal syntax.
        </p>
        <h3>Several ways to assign dates</h3>
        <p>The following example shows several ways to assign dates:</p>
        <div className="card card-footer mb-3">
          <Highlight language="ts">{`
const today = new Date();
let birthday = new Date('December 19, 1989 03:24:00');
birthday = new Date(1989,11,19);
birthday = new Date(1989,11,17,3,24,0);
        `}</Highlight>
        </div>
        <h3>Methods</h3>
        <div className="card mb-3">
          <div className="card-header"><pre className="d-inline"><code>format(pattern: string)</code></pre> - format the date</div>
          <div className="card-body">{(new Date()).format("yyyy-MM-dd'T'HH:mm:ss")}</div>
          <div className="card-footer">
            <Highlight language="ts">{`(new Date()).format("yyyy-MM-dd'T'HH:mm:ss")`}</Highlight>
          </div>
        </div>
        <div className="card mb-3">
          <div className="card-header"><pre className="d-inline"><code>getUnixTime()</code></pre> - get the seconds timestamp of the given date</div>
          <div className="card-body">{(new Date()).getUnixTime()}</div>
          <div className="card-footer">
            <Highlight language="ts">{`(new Date()).getUnixTime()`}</Highlight>
          </div>
        </div>
        <div className="card mb-3">
          <div className="card-header"><pre className="d-inline"><code>add(amount: number, key: string)</code></pre> - add the specified number of time to the given date</div>
          <div className="card-body">{(new Date()).add(30, 'm').format("yyyy-MM-dd'T'HH:mm:ss")}</div>
          <div className="card-footer">
            <Highlight language="ts">{`(new Date()).add(30, 'm')`}</Highlight>
          </div>
        </div>
        <div className="card mb-3">
          <div className="card-header"><pre className="d-inline"><code>substract(amount: number, key: string)</code></pre> - substract the specified number of time to the given date</div>
          <div className="card-body">{(new Date()).substract(30, 'm').format("yyyy-MM-dd'T'HH:mm:ss")}</div>
          <div className="card-footer">
            <Highlight language="ts">{`(new Date()).substract(30, 'm')`}</Highlight>
          </div>
        </div>
        <div className="card mb-3">
          <div className="card-header"><pre className="d-inline"><code>diff(dateToCompare: Date, key: string)</code></pre> - get the number of a unit of time between the given dates</div>
          <div className="card-body">{(new Date()).diff((new Date().substract(10, 'd')), 'd')}</div>
          <div className="card-footer">
            <Highlight language="ts">{`(new Date()).diff((new Date().substract(10, 'd')), 'd')`}</Highlight>
          </div>
        </div>
        <div className="card mb-3">
          <div className="card-header"><pre className="d-inline"><code>startOf(key: string)</code></pre> - return the start of a unit of time to the given date</div>
          <div className="card-body">{(new Date()).startOf('d').format("yyyy-MM-dd'T'HH:mm:ss")}</div>
          <div className="card-footer">
            <Highlight language="ts">{`(new Date()).startOf('d')`}</Highlight>
          </div>
        </div>
        <div className="card mb-3">
          <div className="card-header"><pre className="d-inline"><code>endOf(key: string)</code></pre> - return the end of a unit of time to the given date</div>
          <div className="card-body">{(new Date()).endOf('d').format("yyyy-MM-dd'T'HH:mm:ss")}</div>
          <div className="card-footer">
            <Highlight language="ts">{`(new Date()).endOf('d')`}</Highlight>
          </div>
        </div>
      </div>
    </div>
  </Fragment>
}