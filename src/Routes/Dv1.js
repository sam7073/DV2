import React from 'react';
import Chart from 'react-google-charts';

export function Dv1(props) {
  return (
    <div>
      <Chart
        width={'500px'}
        height={'300px'}
        chartType="GeoChart"
        data={[
          ['City', 'Population', 'Area'],
          ['Rome', 2761477, 1285.31],
          ['Milan', 1324110, 181.76],
          ['Naples', 959574, 117.27],
        ]}
        options={{
          region: 'IT',
          displayMode: 'markers',
          colorAxis: { colors: ['green', 'blue'] },
        }}
        // Note: you will need to get a mapsApiKey for your project.
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        mapsApiKey="AIzaSyBRwJtOFOOM8EM7K975aeVdSTQPkUwggPw"
        rootProps={{ 'data-testid': '2' }}
      />
    </div>
  );
}

export default Dv1;
