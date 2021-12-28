// import React, { useState } from "react";

// const WitnessForm = () => {
//   const [inputList, setInputList] = useState([{ firstName: "", lastName: "" }]);

//   // handle input change
//   const handleInputChange = (e, index) => {
//     const { name, value } = e.target;
//     const list = [...inputList];
//     list[index][name] = value;
//     setInputList(list);
//   };

//   // handle click event of the Remove button
//   const handleRemoveClick = (index) => {
//     const list = [...inputList];
//     list.splice(index, 1);
//     setInputList(list);
//   };

//   // handle click event of the Add button
//   const handleAddClick = () => {
//     setInputList([...inputList, { firstName: "", lastName: "" }]);
//   };

//   return (
//     <div className="App">
//       <h3>
//         <a href="https://cluemediator.com">Clue Mediator</a>
//       </h3>
//       {inputList.map((x, i) => {
//         return (
//           <Grid container spacing={3}>
//             <Grid item xs={12} sm={4} md={4}>
//               <TextField
//                 required
//                 id="Name"
//                 name="Name"
//                 label="নাম"
//                 fullWidth
//                 size="small"
//                 autoComplete="given-name"
//                 variant="outlined"
//               />
//             </Grid>
//             <Grid item xs={12} sm={4} md={4}>
//               <TextField
//                 required
//                 id="nid"
//                 name="nid"
//                 label="জাতীয় আইডি নম্বর"
//                 fullWidth
//                 size="small"
//                 autoComplete="family-name"
//                 variant="outlined"
//               />
//             </Grid>
//             <Grid item xs={12} sm={4} md={4}>
//               <TextField
//                 required
//                 id="dob"
//                 name="dob"
//                 label="জন্ম তারিখ"
//                 fullWidth
//                 size="small"
//                 autoComplete="given-name"
//                 variant="outlined"
//               />
//             </Grid>
//           </Grid>
//         );
//       })}
//       <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div>
//     </div>
//   );
// };

// export default WitnessForm;
