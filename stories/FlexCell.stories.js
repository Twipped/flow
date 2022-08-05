import React from 'react';

import Grid from '../lib/Grid.js';
import FlexCell from '../lib/FlexCell.js';
import FlexRow from '../lib/FlexRow.js';
import FlexColumn from '../lib/FlexColumn.js';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'FlexCell',
  component: FlexCell,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    grow: {
      control: { type: 'number' },
    },
    shrink: {
      control: { type: 'boolean' },
    },
    as: {
      table: { disable: true },
    },
  },
};

export const InRow = (args) => (
  <>
    <FlexRow justify="stretch">
      <FlexCell style={{ height: '30px', minWidth: '30px', opacity: 0.1, backgroundColor: 'red' }}    grow />
      <FlexCell style={{ height: '30px', minWidth: '30px', opacity: 0.1, backgroundColor: 'orange' }} grow />
      <FlexCell style={{ height: '30px', minWidth: '30px', opacity: 0.1, backgroundColor: 'yellow' }} grow />
      <FlexCell style={{ height: '30px', minWidth: '30px', opacity: 1,   backgroundColor: 'green' }}  {...args} />
      <FlexCell style={{ height: '30px', minWidth: '30px', opacity: 0.1, backgroundColor: 'blue' }}   grow />
      <FlexCell style={{ height: '30px', minWidth: '30px', opacity: 0.1, backgroundColor: 'indigo' }} grow />
      <FlexCell style={{ height: '30px', minWidth: '30px', opacity: 0.1, backgroundColor: 'violet' }} grow />
    </FlexRow>
    <br />
    <FlexRow justify="left">
      <FlexCell style={{ height: '30px', minWidth: '30px', opacity: 0.1, backgroundColor: 'red' }}    />
      <FlexCell style={{ height: '30px', minWidth: '30px', opacity: 0.1, backgroundColor: 'orange' }} />
      <FlexCell style={{ height: '30px', minWidth: '30px', opacity: 0.1, backgroundColor: 'yellow' }} />
      <FlexCell style={{ height: '30px', minWidth: '30px', opacity: 1,   backgroundColor: 'green' }}  {...args} />
      <FlexCell style={{ height: '30px', minWidth: '30px', opacity: 0.1, backgroundColor: 'blue' }}   />
      <FlexCell style={{ height: '30px', minWidth: '30px', opacity: 0.1, backgroundColor: 'indigo' }} />
      <FlexCell style={{ height: '30px', minWidth: '30px', opacity: 0.1, backgroundColor: 'violet' }} />
    </FlexRow>
    <br />
    <FlexRow justify="right">
      <FlexCell style={{ height: '30px', minWidth: '30px', opacity: 0.1, backgroundColor: 'red' }}    />
      <FlexCell style={{ height: '30px', minWidth: '30px', opacity: 0.1, backgroundColor: 'orange' }} />
      <FlexCell style={{ height: '30px', minWidth: '30px', opacity: 0.1, backgroundColor: 'yellow' }} />
      <FlexCell style={{ height: '30px', minWidth: '30px', opacity: 1,   backgroundColor: 'green' }}  {...args} />
      <FlexCell style={{ height: '30px', minWidth: '30px', opacity: 0.1, backgroundColor: 'blue' }}   />
      <FlexCell style={{ height: '30px', minWidth: '30px', opacity: 0.1, backgroundColor: 'indigo' }} />
      <FlexCell style={{ height: '30px', minWidth: '30px', opacity: 0.1, backgroundColor: 'violet' }} />
    </FlexRow>
  </>
);

export const InColumn = (args) => (
  <>
    <Grid columns={3} colSpacing={10} style={{ height: '90vh' }}>
      <FlexColumn align="stretch" fill>
        <FlexCell style={{ height: '30px', minWidth: '30px', opacity: 0.1, backgroundColor: 'red' }}    grow />
        <FlexCell style={{ height: '30px', minWidth: '30px', opacity: 0.1, backgroundColor: 'orange' }} grow />
        <FlexCell style={{ height: '30px', minWidth: '30px', opacity: 0.1, backgroundColor: 'yellow' }} grow />
        <FlexCell style={{ height: '30px', minWidth: '30px', opacity: 1,   backgroundColor: 'green' }}  {...args} />
        <FlexCell style={{ height: '30px', minWidth: '30px', opacity: 0.1, backgroundColor: 'blue' }}   grow />
        <FlexCell style={{ height: '30px', minWidth: '30px', opacity: 0.1, backgroundColor: 'indigo' }} grow />
        <FlexCell style={{ height: '30px', minWidth: '30px', opacity: 0.1, backgroundColor: 'violet' }} grow />
      </FlexColumn>
      <FlexColumn align="top" fill>
        <FlexCell style={{ height: '30px', minWidth: '30px', opacity: 0.1, backgroundColor: 'red' }}    />
        <FlexCell style={{ height: '30px', minWidth: '30px', opacity: 0.1, backgroundColor: 'orange' }} />
        <FlexCell style={{ height: '30px', minWidth: '30px', opacity: 0.1, backgroundColor: 'yellow' }} />
        <FlexCell style={{ height: '30px', minWidth: '30px', opacity: 1,   backgroundColor: 'green' }}  {...args} />
        <FlexCell style={{ height: '30px', minWidth: '30px', opacity: 0.1, backgroundColor: 'blue' }}   />
        <FlexCell style={{ height: '30px', minWidth: '30px', opacity: 0.1, backgroundColor: 'indigo' }} />
        <FlexCell style={{ height: '30px', minWidth: '30px', opacity: 0.1, backgroundColor: 'violet' }} />
      </FlexColumn>
      <FlexColumn align="bottom" fill>
        <FlexCell style={{ height: '30px', minWidth: '30px', opacity: 0.1, backgroundColor: 'red' }}    />
        <FlexCell style={{ height: '30px', minWidth: '30px', opacity: 0.1, backgroundColor: 'orange' }} />
        <FlexCell style={{ height: '30px', minWidth: '30px', opacity: 0.1, backgroundColor: 'yellow' }} />
        <FlexCell style={{ height: '30px', minWidth: '30px', opacity: 1,   backgroundColor: 'green' }}  {...args} />
        <FlexCell style={{ height: '30px', minWidth: '30px', opacity: 0.1, backgroundColor: 'blue' }}   />
        <FlexCell style={{ height: '30px', minWidth: '30px', opacity: 0.1, backgroundColor: 'indigo' }} />
        <FlexCell style={{ height: '30px', minWidth: '30px', opacity: 0.1, backgroundColor: 'violet' }} />
      </FlexColumn>
    </Grid>
  </>
);

