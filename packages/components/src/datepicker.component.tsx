import React, { useState, useEffect } from 'react';
import { Roxie } from '@roxie/core';

type DatePickerPortalProps = {
  value?: Date,
  onChange?: (value: Date) => void,
  className?: string,
}

export function DatePickerPortal(props: DatePickerPortalProps) {
  const [value, setValue] = useState(null as Date),
        [date, setDate] = useState(null as Date),
        [month, setMonth] = useState(''),
        [year, setYear] = useState(null as number),
        [calendar, setCalendar] = useState([] as number[][]);

  useEffect(() => {
    const value = props.value || new Date();
    setValue(new Date(value.getFullYear(), value.getMonth(), value.getDate()));
  }, [props.value])

  useEffect(() => {
    if (!value) return;
    setDate(new Date(value.getFullYear(), value.getMonth(), 1));
  }, [value]);

  useEffect(() => {
    if (!date) return;
    setMonth(date.toLocaleString('default', { month: 'long' }));
    setYear(date.getFullYear());
    const firstDayOfMonth = date.getDay(),
          daysInWeek = Roxie.Date.DAYS_IN_WEEK,
          daysInMonth = Roxie.Date.getDaysInMonth(date),
          weeksInMonth = Roxie.Date.getWeeksInMonth(date),
          lastDayOfMonth = (new Date(date.getFullYear(), date.getMonth(), daysInMonth)).getDay(),
          daysInPreviousMonth = Roxie.Date.getDaysInMonth(Roxie.Date.subMonths(date, 1)),
          calendar = [] as number[][];
    for (let i = 0, counter = 0; i < weeksInMonth; ++i) {
      calendar[i] = [];
      for (let j = 0; j < daysInWeek; ++j) {
        if (i === 0) {
          if (j < firstDayOfMonth) {
            calendar[i][j] = firstDayOfMonth - j - 1 - daysInPreviousMonth;
          } else {
            calendar[i][j] = ++counter;
          }
        } else if (i === weeksInMonth - 1) {
          if (j > lastDayOfMonth) {
            calendar[i][j] = lastDayOfMonth - j;
          } else {
            calendar[i][j] = ++counter;
          }
        } else {
          calendar[i][j] = ++counter;
        }
      }
    }
    setCalendar(calendar);
  }, [date])

  function select(selectedDate: Date) {
    setValue(selectedDate);
    props.onChange && props.onChange(selectedDate);
  }

  return <div className={Roxie.classNames('roxie-datepicker-portal card', props.className)}>
    <div className="card-header p-0">
      <div className="d-flex justify-content-between">
        <div className="roxie-datepicker-cell cursor-pointer text-center" onClick={() => setDate(Roxie.Date.subMonths(date, 1))}>
          <i className="fa fa-caret-left align-middle" />
        </div>
        <div className="roxie-datepicker-title font-weight-bold">
          <span className="align-middle">{month} {year}</span>
        </div>
        <div className="roxie-datepicker-cell cursor-pointer text-center" onClick={() => setDate(Roxie.Date.addMonths(date, 1))}>
          <i className="fa fa-caret-right align-middle" />
        </div>
      </div>
      <div className="d-flex flex-row">
        <div className="roxie-datepicker-cell text-center"><span className="align-middle">Su</span></div>
        <div className="roxie-datepicker-cell text-center"><span className="align-middle">Mo</span></div>
        <div className="roxie-datepicker-cell text-center"><span className="align-middle">Tu</span></div>
        <div className="roxie-datepicker-cell text-center"><span className="align-middle">We</span></div>
        <div className="roxie-datepicker-cell text-center"><span className="align-middle">Th</span></div>
        <div className="roxie-datepicker-cell text-center"><span className="align-middle">Fr</span></div>
        <div className="roxie-datepicker-cell text-center"><span className="align-middle">Sa</span></div>
      </div>
    </div>
    <div className="card-body p-0">
      {calendar.map((week, weekIndex) => <div key={weekIndex} className="d-flex flex-row">
        {week.map((day, dayIndex) => {
          let selectedDate = new Date(year, date.getMonth(), Math.abs(day));
          if (day < 0) {
            if (Math.abs(day) < Roxie.Date.DAYS_IN_WEEK) {
              selectedDate = Roxie.Date.addMonths(selectedDate, 1);
            } else {
              selectedDate = Roxie.Date.subMonths(selectedDate, 1);
            }
          }

          const className = Roxie.classNames(
                  'roxie-datepicker-cell cursor-pointer text-center',
                  {
                    'text-muted': day < 0,
                    'active font-weight-bold': Roxie.Date.compareAsc(value, selectedDate) === 0,
                  },
                );
          return <div key={dayIndex} className={className} onClick={() => select(selectedDate)}>
            <span className="align-middle">{Math.abs(day)}</span>
          </div>
        })}
      </div>)}
    </div>
  </div>
}

type DatePickerProps = {
  value?: Date,
  onChange?: (value: Date) => void,
  dateFormat?: string,
}

export function DatePicker(props: DatePickerProps) {
  const [dateFormat] = useState(props.dateFormat || 'yyyy-MM-dd'),
        [dateStr, setDateStr] = useState(''),
        [value, setValue] = useState(null as Date);

  useEffect(() => {
    let value = props.value || new Date();
    value = new Date(value.getFullYear(), value.getMonth(), value.getDate());
    setValue(value);
    setDateStr(Roxie.Date.format(value, dateFormat));
  }, [props.value])

  function update() {
    const date = Roxie.Date.parse(dateStr, dateFormat, value);
    setValue(date);
    props.onChange && props.onChange(date);
  }

  function select(selectedDate: Date) {
    setValue(selectedDate);
    setDateStr(Roxie.Date.format(selectedDate, dateFormat));
    props.onChange && props.onChange(selectedDate);
  }

  return <div className="roxie-datepicker dropdown">
    <input type="text" className="form-control text-center dropdown-toggle" data-toggle="dropdown" value={dateStr} onChange={e => setDateStr(e.target.value)} onBlur={update} />
    <div className="dropdown-menu border-0 p-0">
      <form><DatePickerPortal value={value} onChange={select} /></form>
    </div>
  </div>
}