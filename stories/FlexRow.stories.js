import React from 'react';

import FlexRow from '../lib/FlexRow.js';
import FlexCell from '../lib/FlexCell.js';
import Grid from '../lib/Grid.js';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'FlexRow',
  component: FlexRow,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    as: {
      table: { disable: true },
    },
  },
};

export const AlignmentExample = (args) => (
  <Grid rowSpacing={10}>
    <FlexRow {...args} style={{ height: 100, border: '1px solid #ccc' }}>
      <FlexCell style={{ height: '30px', minWidth: '30px', backgroundColor: 'red' }} />
      <FlexCell style={{ height: '30px', minWidth: '30px', backgroundColor: 'orange' }} />
      <FlexCell style={{ height: '30px', minWidth: '30px', backgroundColor: 'yellow' }} />
      <FlexCell style={{ height: '30px', minWidth: '30px', backgroundColor: 'green' }} />
      <FlexCell style={{ height: '30px', minWidth: '30px', backgroundColor: 'blue' }} />
      <FlexCell style={{ height: '30px', minWidth: '30px', backgroundColor: 'indigo' }} />
      <FlexCell style={{ height: '30px', minWidth: '30px', backgroundColor: 'violet' }} />
    </FlexRow>
    <FlexRow {...args} style={{ height: 100, border: '1px solid #ccc' }}>
      <FlexCell grow style={{ height: '30px', minWidth: '30px', backgroundColor: 'red' }}    />
      <FlexCell grow style={{ height: '30px', minWidth: '30px', backgroundColor: 'orange' }} />
      <FlexCell grow style={{ height: '30px', minWidth: '30px', backgroundColor: 'yellow' }} />
      <FlexCell grow style={{ height: '30px', minWidth: '30px', backgroundColor: 'green' }} />
      <FlexCell grow style={{ height: '30px', minWidth: '30px', backgroundColor: 'blue' }}   />
      <FlexCell grow style={{ height: '30px', minWidth: '30px', backgroundColor: 'indigo' }} />
      <FlexCell grow style={{ height: '30px', minWidth: '30px', backgroundColor: 'violet' }} />
    </FlexRow>
    <FlexRow {...args} style={{ height: 100, border: '1px solid #ccc' }}>
      <FlexCell grow style={{ height: '30px', minWidth: '30px', backgroundColor: 'red' }}    />
      <FlexCell      style={{ height: '30px', minWidth: '30px', backgroundColor: 'orange' }} />
      <FlexCell grow style={{ height: '30px', minWidth: '30px', backgroundColor: 'yellow' }} />
      <FlexCell      style={{ height: '30px', minWidth: '30px', backgroundColor: 'green' }} />
      <FlexCell grow style={{ height: '30px', minWidth: '30px', backgroundColor: 'blue' }}   />
      <FlexCell      style={{ height: '30px', minWidth: '30px', backgroundColor: 'indigo' }} />
      <FlexCell grow style={{ height: '30px', minWidth: '30px', backgroundColor: 'violet' }} />
    </FlexRow>
  </Grid>
);

export const OverflowExample = (args) => (
  <div style={{  }}>
    <FlexRow {...args} style={{ border: '2px solid black', position: 'absolute', left: 0, top: 0, bottom: 0, width: 300 }}>
      <FlexCell basis="60px" style={{ minHeight: '50%', minWidth: '60px', backgroundColor: 'red' }} />
      <FlexCell basis="60px" style={{ minHeight: '50%', minWidth: '60px', backgroundColor: 'orange' }} />
      <FlexCell basis="60px" style={{ minHeight: '50%', minWidth: '60px', backgroundColor: 'yellow' }} />
      <FlexCell basis="60px" style={{ minHeight: '50%', minWidth: '60px', backgroundColor: 'green' }} />
      <FlexCell basis="60px" style={{ minHeight: '50%', minWidth: '60px', backgroundColor: 'blue' }} />
      <FlexCell basis="60px" style={{ minHeight: '50%', minWidth: '60px', backgroundColor: 'indigo' }} />
      <FlexCell basis="60px" style={{ minHeight: '50%', minWidth: '60px', backgroundColor: 'violet' }} />
    </FlexRow>
  </div>
);

