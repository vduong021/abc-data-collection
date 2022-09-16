import React, {Component, useEffect, useState } from 'react';


const Log = (props) => {
  const {form, setForm} = useState(props.data)

  const deleteInstance = (e) => {
    console.log('this is e', e)
    // useEffect(() => {
      fetch(`/index/${e.target.id}`, {
        method: 'DELETE',
        headers: {
          "Content-Type": "Application/JSON"
        }
      }).then(result => {return setForm({})})
      .then(data => {
        console.log('this data is deleted', data);
      })
      window.location.reload()
    }
  //) , []}

  return(
  <div className="log" >
    <div id="shopName"><span>Initials:</span>  {props.data.clientInitials} </div>
    <div id="shopRating"><span>Date:</span> {props.data.date}</div>
    <div id="is_closed"><span>Behavior:</span> {props.data.behavior}</div>
    <div id="shopLocation"><span>Antecedent:</span> {props.data.antecedent}</div>
    <div id="shopLocation"><span>Consequence:</span> {props.data.consequence}</div>
    <div id="shopPhone"><span>Setting Events:</span> {props.data.settingEvents} </div>
    <button className="delete" id = {props.data._id} onClick = {(e) => deleteInstance(e)}><svg xmlns="http://www.w3.org/2000/svg"  height="13" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
  <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
</svg> &nbsp;&nbsp;Delete</button>
  </div>
);
}
export default Log;




// fetch(url)
//   .then((response) => response.json())
//   .then((data) => {
//     console.log("this is data", data);
//     return setShopArray(data);
//   })
//   .catch((err) => console.log(err));