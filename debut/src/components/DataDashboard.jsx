import * as React from 'react';
import {
  Box, Button, Card, Menu,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import Chart from 'react-apexcharts';
import './DataDashboard.css';
import DataWidget from './Data/DataWidget';

function DataDashboard() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const chartData = {
    options: {
      chart: {
        id: 'basic-line-visits',
      },
      xaxis: {
        categories: ['6/1', '6/2', '6/3', '6/4', '6/5', '6/6', '6/7'],
        title: {
          text: 'Date',
        },
      },
      yaxis: {
        title: {
          text: 'Number of Visits',
        },
      },
      stroke: {
        curve: 'smooth',
      },
      colors: ['#5200FF'],
    },
    series: [
      {
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70],
      },
    ],
  };
  return (
    <div data-testid="dashboardPage">
      <div className="data-selection">
        <p className="text-view-data-for">
          view data for
        </p>
        <div className="data-selection-button">
          <Button
            id="basic-button"
            style={{
              borderWidth: 1,
              backgroundColor: '#5200FF',
              fontSize: '24px',
              fontFamily: 'Roboto',
              width: '180px',
              height: '40px',
              color: '#FFFFFF',
              textTransform: 'none',
            }}
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
          >
            My Profile
          </Button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
            PaperProps={{
              style: {
                width: '180px',
              },
            }}
          >
            <MenuItem onClick={handleClose}>My Profile</MenuItem>
            <MenuItem onClick={handleClose}>Project-1</MenuItem>
            <MenuItem onClick={handleClose}>Project-2</MenuItem>
          </Menu>
        </div>
      </div>
      <div className="data-widget">
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item>
            <DataWidget title="Total Views" number="189" growth="+19.7%" />
          </Grid>
          <Grid item>
            <DataWidget title="Search Appearances" number="56" growth="-0.5%" />
          </Grid>
        </Grid>
      </div>
      <div className="data-graph">
        <Card>
          <Box
            sx={{
              p: 3,
              pb: 1,
            }}
            dir="ltr"
          >
            <Chart
              type="line"
              series={chartData.series}
              options={chartData.options}
              height={364}
            />
          </Box>
        </Card>
      </div>
    </div>
  );
}

export default DataDashboard;
