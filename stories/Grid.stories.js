import React from 'react';

import GridCell from '../lib/GridCell.js';
import Grid from '../lib/Grid.js';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Grid',
  component: Grid,
};

export const Basic = (args) => (
  <Grid {...args}>
    <GridCell style={{ height: '30px', minWidth: '30px', backgroundColor: 'red' }} />
    <GridCell style={{ height: '30px', minWidth: '30px', backgroundColor: 'orange' }} />
    <GridCell style={{ height: '30px', minWidth: '30px', backgroundColor: 'yellow' }} />
    <GridCell style={{ height: '30px', minWidth: '30px', backgroundColor: 'green' }} />
    <GridCell style={{ height: '30px', minWidth: '30px', backgroundColor: 'blue' }} />
    <GridCell style={{ height: '30px', minWidth: '30px', backgroundColor: 'indigo' }} />
    <GridCell style={{ height: '30px', minWidth: '30px', backgroundColor: 'violet' }} />
  </Grid>
);
Basic.argTypes = {
  as: {
    table: { disable: true },
  },
  columns: { control: 'number' },
  rows: { control: 'number' },
  colSpacing: { control: 'number' },
  rowSpacing: { control: 'number' },
  spacing: { control: 'number' },
};

export const List = (args) => (
  <Grid {...args}>
    <GridCell style={{ height: '30px', minWidth: '30px', backgroundColor: 'red' }} />
    <GridCell style={{ height: '30px', minWidth: '30px', backgroundColor: 'orange' }} />
    <GridCell style={{ height: '30px', minWidth: '30px', backgroundColor: 'yellow' }} />
    <GridCell style={{ height: '30px', minWidth: '30px', backgroundColor: 'green' }} />
    <GridCell style={{ height: '30px', minWidth: '30px', backgroundColor: 'blue' }} />
    <GridCell style={{ height: '30px', minWidth: '30px', backgroundColor: 'indigo' }} />
    <GridCell style={{ height: '30px', minWidth: '30px', backgroundColor: 'violet' }} />
  </Grid>
);
List.argTypes = {
  as: {
    table: { disable: true },
  },
  columns: { control: 'object' },
  rows: { control: 'object' },
  colSpacing: { control: 'number' },
  rowSpacing: { control: 'number' },
  spacing: { control: 'number' },
};
