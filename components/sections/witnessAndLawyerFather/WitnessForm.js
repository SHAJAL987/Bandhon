import React, { useState } from "react";
import { Grid, Typography, Button } from "@mui/material";
import TextField from "@mui/material/TextField";
import Address from "../user/address";
import { margin } from "@mui/system";
const WitnessForm = () => {
  const [inputList, setInputList] = useState([
    { name: "", nid: "", dob: "", address: "" },
  ]);

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { name: "", nid: "", dob: "", address: "" }]);
  };
  //   import React, { useState } from "react";

  //   function App() {
  //     const [inputList, setInputList] = useState([{ firstName: "", lastName: "" }]);

  //     return (
  //       <div className="App">
  //         <h3><a href="https://cluemediator.com">Clue Mediator</a></h3>
  //         {inputList.map((x, i) => {
  //           return (
  //             <div className="box">
  //               <input
  //                 name="firstName"
  //                 value={x.firstName}
  //               />
  //               <input
  //                 className="ml10"
  //                 name="lastName"
  //                 value={x.lastName}
  //               />
  //               <div className="btn-box">
  //                 {inputList.length !== 1 && <button className="mr10">Remove</button>}
  //                 {inputList.length - 1 === i && <button>Add</button>}
  //               </div>
  //             </div>
  //           );
  //         })}
  //         <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>
  //       </div>
  //     );
  //   }

  //   export default App;

  return (
    <div>
      {inputList.map((x, i) => {
        return (
          <>
            <div style={{ margin: "2% 2%" }}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={3} md={3}>
                  <TextField
                    required
                    id="Name"
                    name="Name"
                    label="নাম"
                    fullWidth
                    size="small"
                    autoComplete="given-name"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={3} md={3}>
                  <TextField
                    required
                    id="nid"
                    name="nid"
                    label="জাতীয় আইডি নম্বর"
                    fullWidth
                    size="small"
                    autoComplete="family-name"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={3} md={3}>
                  <TextField
                    required
                    id="dob"
                    name="dob"
                    label="জন্ম তারিখ"
                    fullWidth
                    size="small"
                    autoComplete="given-name"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={3} md={3}>
                  <TextField
                    required
                    id="dob"
                    name="dob"
                    label="ঠিকানা"
                    fullWidth
                    size="small"
                    autoComplete="given-name"
                    variant="outlined"
                  />
                </Grid>

                {/* <Address title={"বর্তমান ঠিকানা"}></Address> */}
              </Grid>
              <div
                style={{
                  display: "flex",
                  justifyContent: "start",
                  marginTop: "1%",
                }}
              >
                {inputList.length !== 1 && (
                  <Button
                    style={{ marginRight: "1%" }}
                    variant="contained"
                    onClick={() => handleRemoveClick(i)}
                  >
                    Remove
                  </Button>
                )}
                {inputList.length - 1 === i && (
                  <Button variant="contained" onClick={handleAddClick}>
                    Add
                  </Button>
                )}
              </div>
            </div>
          </>

          // <div className="App">
          //   <h3>
          //     <a href="https://cluemediator.com">Clue Mediator</a>
          //   </h3>
          //   {inputList.map((x, i) => {
          //     return (
          //       <div className="box">
          //         <input name="firstName" value={x.firstName} />
          //         <input className="ml10" name="lastName" value={x.lastName} />
          //         <div className="btn-box">
          //           {inputList.length !== 1 && (
          //             <button className="mr10">Remove</button>
          //           )}
          //           {inputList.length - 1 === i && <button>Add</button>}
          //         </div>
          //       </div>
          //     );
          //   })}
          //   <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>
          // </div>
        );
      })}
      {/* <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div> */}
    </div>
  );
};

export default WitnessForm;
