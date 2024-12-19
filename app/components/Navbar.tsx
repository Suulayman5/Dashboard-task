
import { Box, IconButton, Tooltip } from '@mui/material';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import AddIcon from '@mui/icons-material/Add';
import RefreshIcon from '@mui/icons-material/Refresh';
import GroupsIcon from '@mui/icons-material/Groups';
import DeleteIcon from '@mui/icons-material/Delete';
import BarChartIcon from '@mui/icons-material/BarChart';
import FilterListIcon from '@mui/icons-material/FilterList';
import ViewColumnIcon from '@mui/icons-material/ViewColumn';

const NavBar = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="flex-end"
      gap={2}
      padding={1}
      bgcolor="background.paper"
      borderBottom="1px solid"
      borderColor="divider"
    >
      <Tooltip title="Show Chart">
        <IconButton color="primary">
          <ShowChartIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Focused View">
        <IconButton color="primary">
          <ViewQuiltIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="New">
        <IconButton color="primary">
          <AddIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Refresh">
        <IconButton color="primary">
          <RefreshIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Collaborate">
        <IconButton color="primary">
          <GroupsIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete">
        <IconButton color="primary">
          <DeleteIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Smart Data">
        <IconButton color="primary">
          <BarChartIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Edit Filters">
        <IconButton color="primary">
          <FilterListIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Edit Columns">
        <IconButton color="primary">
          <ViewColumnIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
};
export default Navbar
