import MUIDataTable from "mui-datatables";
import { Box, TableCell, Tooltip } from "@mui/material";

// const columns = ["Name", "Company", "City", "State"];

const handleCustomTableHead = ({
  columnMeta,
  handleToggleColumn,
  sortOrder,
  columnName,
  columnLabel_1,
  columnLabel_2 = "",
  customCss = {},
  isLabelAlignRight = false,
  isParentLabelAlignRight = false,
}) => {
  return (
    <TableCell
      sx={{
        position: "sticky",
        top: "0px",
        zIndex: 102,
        cursor: columnMeta?.sort ? "pointer" : "text",
        ...customCss,
      }}
      onClick={
        columnMeta?.sort
          ? () => handleToggleColumn(columnMeta?.index)
          : undefined
      }
      key={columnMeta?.index}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent={isParentLabelAlignRight ? "flex-end" : "flex-start"}
        gap={"5px"}
      >
        <Box
          display="flex"
          alignItems={isLabelAlignRight ? "flex-end" : "flex-start"}
          flexDirection="column"
          justifyContent="flex-start"
        >
          <Tooltip title={columnMeta?.sort ? "Sort" : ""}>
            <Box className="clr3 fw700 ffInter">{columnLabel_1}</Box>
            {columnLabel_2 && (
              <Box className="clr3 fw700 ffInter">{columnLabel_2}</Box>
            )}
          </Tooltip>
        </Box>
      </Box>
    </TableCell>
  );
};

const columns = [
  {
    name: "name",
    label: "Name",
    default: true,
    options: {
      filter: true,
      sort: true,
      width: 550,
      sticky: true,
      leftTotal: 40,
      FontSize: "22px",
      custcustomHeadRender: () => <div>Custom header</div>,
      setCellProps: () => ({
        style: {
          whiteSpace: "nowrap",
          position: "sticky",
          left: 40,
          minWidth: "380px",
          background: "white",
          zIndex: 100,
        },
      }),
      setCellHeaderProps: () => ({
        style: {
          whiteSpace: "nowrap",
          position: "sticky",
          left: 40,
          minWidth: "380px",
          //   background: 'white',
          zIndex: 101,
        },
      }),
    },
  },
  {
    name: "company",
    label: "Company",
    default: true,
    options: {
      filter: true,
      sort: false,
      width: 550,
      sticky: true,
      leftTotal: 440,
      FontSize: "22px",
    },
  },
  {
    name: "city",
    label: "City",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "state",
    label: "State",
    options: {
      filter: false,
      sort: false,
    },
  },
  {
    name: "name",
    label: "Name",
    options: {
      filter: true,
      sort: true,
    },
  },
  {
    name: "company",
    label: "Company",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "city",
    label: "City",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "state",
    label: "State",
    options: {
      filter: false,
      sort: false,
    },
  },
  {
    name: "city",
    label: "City",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "state",
    label: "State",
    options: {
      filter: false,
      sort: false,
    },
  },
  {
    name: "city",
    label: "City",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "state",
    label: "State",
    options: {
      filter: false,
      sort: false,
    },
  },
  {
    name: "city",
    label: "City",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "state",
    label: "State",
    options: {
      filter: false,
      sort: false,
    },
  },
  {
    name: "city",
    label: "City",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "state",
    label: "State",
    options: {
      filter: false,
      sort: false,
    },
  },
  {
    name: "state",
    label: "State",
    options: {
      filter: false,
      sort: false,
    },
  },
  {
    name: "city",
    label: "City",
    options: {
      filter: true,
      sort: false,
    },
  },
  {
    name: "state",
    label: "State",
    options: {
      filter: false,
      sort: false,
    },
  },
];

const data = [
  [
    "Joe James",
    "Test Corp",
    "Yonkers",
    "NY",
    "Joe James",
    "Test Corp",
    "Yonkers",
    "NY",
    "Yonkers",
    "NY",
    "NY",
    "Yonkers",
    "NY",
    "NY",
    "Yonkers",
    "NY",
    "NY",
    "Yonkers",
    "NY",
    "Yonkers",
    "NY",
    "Yonkers",
  ],
  [
    "John Walsh",
    "Test Corp",
    "Hartford",
    "CT",
    "John Walsh",
    "Test Corp",
    "Hartford",
    "CT",
    "Yonkers",
    "NY",
    "NY",
    "Yonkers",
    "NY",
    "NY",
    "Yonkers",
    "NY",
    "NY",
    "Yonkers",
    "NY",
    "Yonkers",
    "NY",
    "Yonkers",
  ],
  [
    "Bob Herm",
    "Test Corp",
    "Tampa",
    "FL",
    "Bob Herm",
    "Test Corp",
    "Tampa",
    "FL",
    "Yonkers",
    "NY",
    "NY",
    "Yonkers",
    "NY",
    "NY",
    "Yonkers",
    "NY",
    "NY",
    "Yonkers",
    "NY",
    "Yonkers",
    "NY",
    "Yonkers",
  ],
  [
    "James Houston",
    "Test Corp",
    "Dallas",
    "TX",
    "James Houston",
    "Test Corp",
    "Dallas",
    "TX",
    "Yonkers",
    "NY",
    "NY",
    "Yonkers",
    "NY",
    "NY",
    "Yonkers",
    "NY",
    "NY",
    "Yonkers",
    "NY",
    "Yonkers",
    "NY",
    "Yonkers",
  ],
];

const options = {
  filterType: "checkbox",
  search: false,
  download: false,
  print: false,
  responsive: "standard",
  fixedHeader: true,
  fixedSelectColumn: false,
  viewColumns: false,
  filter: false,
  selectToolbarPlacement: "none", // on selection of an item, text is not displayed on table
  draggableColumns: {
    enabled: true,
  },
  //   filter: true,
  //   filterType: "dropdown",
  //   responsive: "standard",
  //   fixedHeader: true,
  //   fixedSelectColumn: false,
};

const MuiTable = () => {
  return (
    <>
      <div>Mui Table</div>
      <MUIDataTable
        actions={[
          {
            icon: "save",
          },
        ]}
        title={"Employee List"}
        data={data}
        columns={columns}
        options={options}
      />
    </>
  );
};

export default MuiTable;
