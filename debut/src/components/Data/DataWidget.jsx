/* eslint-disable react/prop-types */
import * as React from 'react';
import { Card, CardContent } from '@mui/material';
import Grid from '@mui/material/Grid';
import './DataWidget.css';

function DataWidget({
  title,
  number,
  growth,
}) {
  return (
    <div data-testid="dataWidgetComponent">
      <Card
        sx={{
          height: '178px',
          width: '279px',
        }}
      >
        <CardContent>
          <Grid
            container
            direction="column"
            justifyContent="center"
            spacing={3}
          >
            <Grid item>
              <p className="data-title" data-testid="widget-title">
                {title}
              </p>
            </Grid>
            <Grid item>
              <p className="data-number" data-testid="widget-num">
                {number}
              </p>
            </Grid>
            <Grid item>
              <Grid
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
              >
                <p className="data-growth">
                  {growth}
                </p>
                <p className="data-growth-text">
                  &nbsp;&nbsp;vs. last week
                </p>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
}

export default DataWidget;
