import React from 'react';

import Grid from '../lib/Grid.js';
import FlexRow from '../lib/FlexRow.js';
import FlexColumn from '../lib/FlexColumn.js';
import FlexCell from '../lib/FlexCell.js';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'FlexColumn',
  component: FlexColumn,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    as: {
      table: { disable: true },
    },
  },
};

export const AlignmentExample = (args) => (
  <Grid columns={3} rows={[ 'min-content', 1 ]} colSpacing={10} style={{ height: '90vh' }}>
    <strong>Collapsed Cells</strong>
    <strong>Filling Cells</strong>
    <strong>Mixed Cells</strong>
    <FlexColumn {...args} style={{ border: '1px solid #ccc' }}>
      <FlexCell style={{ minWidth: '30px', minHeight: '30px', backgroundColor: 'red' }} />
      <FlexCell style={{ minWidth: '30px', minHeight: '30px', backgroundColor: 'orange' }} />
      <FlexCell style={{ minWidth: '30px', minHeight: '30px', backgroundColor: 'yellow' }} />
      <FlexCell style={{ minWidth: '30px', minHeight: '30px', backgroundColor: 'green' }} />
      <FlexCell style={{ minWidth: '30px', minHeight: '30px', backgroundColor: 'blue' }} />
      <FlexCell style={{ minWidth: '30px', minHeight: '30px', backgroundColor: 'indigo' }} />
      <FlexCell style={{ minWidth: '30px', minHeight: '30px', backgroundColor: 'violet' }} />
    </FlexColumn>
    <FlexColumn {...args} style={{ border: '1px solid #ccc' }}>
      <FlexCell fill style={{ minWidth: '30px', minHeight: '30px', backgroundColor: 'red' }} />
      <FlexCell fill style={{ minWidth: '30px', minHeight: '30px', backgroundColor: 'orange' }} />
      <FlexCell fill style={{ minWidth: '30px', minHeight: '30px', backgroundColor: 'yellow' }} />
      <FlexCell fill style={{ minWidth: '30px', minHeight: '30px', backgroundColor: 'green' }} />
      <FlexCell fill style={{ minWidth: '30px', minHeight: '30px', backgroundColor: 'blue' }} />
      <FlexCell fill style={{ minWidth: '30px', minHeight: '30px', backgroundColor: 'indigo' }} />
      <FlexCell fill style={{ minWidth: '30px', minHeight: '30px', backgroundColor: 'violet' }} />
    </FlexColumn>
    <FlexColumn {...args} style={{ border: '1px solid #ccc' }}>
      <FlexCell fill style={{ minWidth: '30px', minHeight: '30px', backgroundColor: 'red' }} />
      <FlexCell      style={{ minWidth: '30px', minHeight: '30px', backgroundColor: 'orange' }} />
      <FlexCell fill style={{ minWidth: '30px', minHeight: '30px', backgroundColor: 'yellow' }} />
      <FlexCell      style={{ minWidth: '30px', minHeight: '30px', backgroundColor: 'green' }} />
      <FlexCell fill style={{ minWidth: '30px', minHeight: '30px', backgroundColor: 'blue' }} />
      <FlexCell      style={{ minWidth: '30px', minHeight: '30px', backgroundColor: 'indigo' }} />
      <FlexCell fill style={{ minWidth: '30px', minHeight: '30px', backgroundColor: 'violet' }} />
    </FlexColumn>
  </Grid>
);

export const OverflowExample = (args) => (
  <div style={{  }}>
    <FlexColumn {...args} style={{ border: '2px solid black', position: 'absolute', left: 0, top: 0, right: 0, height: 300 }}>
      <FlexCell basis="60px" style={{ minWidth: '30px', minHeight: '60px', backgroundColor: 'red' }} />
      <FlexCell basis="60px" style={{ minWidth: '30px', minHeight: '60px', backgroundColor: 'orange' }} />
      <FlexCell basis="60px" style={{ minWidth: '30px', minHeight: '60px', backgroundColor: 'yellow' }} />
      <FlexCell basis="60px" style={{ minWidth: '30px', minHeight: '60px', backgroundColor: 'green' }} />
      <FlexCell basis="60px" style={{ minWidth: '30px', minHeight: '60px', backgroundColor: 'blue' }} />
      <FlexCell basis="60px" style={{ minWidth: '30px', minHeight: '60px', backgroundColor: 'indigo' }} />
      <FlexCell basis="60px" style={{ minWidth: '30px', minHeight: '60px', backgroundColor: 'violet' }} />
    </FlexColumn>
  </div>
);

