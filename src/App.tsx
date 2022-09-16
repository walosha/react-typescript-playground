import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import ListItemText from "@mui/material/ListItemText";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  { name: "Tunde", languages: "Yoruba, Igbo, Hausa" },
  { name: "Bayo", languages: "Yoruba, Igbo, Hausa" },
  { name: "Stella", languages: "Yoruba, Igbo, Hausa" },
  { name: "Charity", languages: "Yoruba, Igbo, Hausa" },
];

export default function MultipleSelectCheckmarks() {
  const [personName, setPersonName] = React.useState<string[]>([]);

  const isAllSelected = names.length > 0 && personName.length === names.length;

  const handleChange = (event: any) => {
    const value = event.target.value;
    if (value[value.length - 1] === "all") {
      setPersonName(
        personName.length === names.length ? [] : names.map((e) => e.name)
      );
      return;
    }
    setPersonName(value);
  };
  return (
    <FormControl sx={{ m: 1, width: 300 }}>
      <InputLabel id="demo-multiple-checkbox-label">Tag</InputLabel>
      <Select
        labelId="demo-multiple-checkbox-label"
        id="demo-multiple-checkbox"
        multiple
        value={personName}
        onChange={handleChange}
        input={<OutlinedInput label="Tag" />}
        renderValue={(selected) => selected.join(", ")}
        MenuProps={MenuProps}
      >
        <MenuItem value="all">
          <Checkbox checked={isAllSelected} />
          <Box>
            <ListItemText primary={"Select All"} />
          </Box>
        </MenuItem>
        {names.map((item) => (
          <MenuItem key={item.name} value={item.name}>
            <Checkbox checked={personName.indexOf(item.name) > -1} />
            <Box>
              <ListItemText
                style={{ margin: "0px !important" }}
                primary={item.name}
              />
              <span style={{ fontSize: "10px", margin: "0px" }}>
                {item.languages}
              </span>
            </Box>
          </MenuItem>
        ))}
        <Stack mt={3} spacing={2} direction="row" justifyContent="end">
          <Button
            onClick={(e) => {
              console.log(e);
            }}
            variant="outlined"
          >
            Cancel
          </Button>
          <Button onClick={() => {}} variant="contained">
            Select
          </Button>
        </Stack>
      </Select>
    </FormControl>
  );
}
