import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

export default function Options({ post }) {
  const [option, setOption] = React.useState("");
  const { user } = React.useContext(AuthContext);
 

 
  const handleChange = async (event) => {
    console.log('anuj kaushik',user._id);
    try {
      await axios.delete("/posts/"+post._id, {
        data:{
        userId:user._id,
        }
      });
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  if (option === "Edit") {
  }

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small">Options</InputLabel>
      <Select
        labelId="demo-select-small"
        id="demo-select-small"
        value={option}
        label="Options"
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>

        <MenuItem value={20}>Delete</MenuItem>
      </Select>
    </FormControl>
  );
}
