import React, { useState } from 'react';
import Data from '../data.json';

const Essentials = () => {
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <div class="container">
    <h3> Helpline Numbers </h3>
    <input type="text" placeholder="Search state..." onChange={(e) => {setSearchTerm(e.target.value);}} />
    <br/>
    <table class="table table-bordered">
    <tr>
      <th> State </th>
      <th> Helpline Number </th>
    </tr>
      {Data.filter((val) => {
        if (searchTerm==""){
          return val
        } else if (val.loc.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val
        }
      }).map(post => {
        return (
          <tr>
          <td style={{width:"50%"}}> {post.loc} </td>
          <td style={{width:"50%"}}> {post.number} </td>
          </tr>
          
          )
      })}
      </table>
    </div>);
}

export default Essentials;
