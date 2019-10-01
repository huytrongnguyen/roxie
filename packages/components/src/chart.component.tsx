import React, { useState, useEffect } from 'react';
import { generate, ChartConfiguration, ChartAPI } from 'c3';
import { Roxie } from '@roxie/core';

export function Chart(props: { config: ChartConfiguration, data: any, dataOriented?: string }) {
  const { config, data, dataOriented = 'columns' } = props,
        chartId = Roxie.guid('chart-'),
        [chartApi, setChartApi] = useState(null as ChartAPI);

  useEffect(() => {
    config.bindto = `#${chartId}`;
    config.data[dataOriented] = data;
    setChartApi(generate(config));
  }, []);

  useEffect(() => {
    chartApi && chartApi.load({
      [dataOriented]: data,
    })
  }, [data])

  return <section id={chartId} />
}