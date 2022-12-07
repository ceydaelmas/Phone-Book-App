import React, { useState } from "react";

function List({ contacts }) {
  const [filterText, setFilterText] = useState("");
  //inputa veri yazıldığında benim bunu statime yazmam lazım filter.
  const filtered = contacts.filter((item)=>{
    //her defasında filter bir item verioyr.
    //ismini de numarasını da yazsa göstermesi gerek.
    //Object.keyss(item) full name ve phone number Getirir. Some ise herhangi biri uyuyorsa.
    return Object.keys(item).some((key)=> item[key].toString().toLowerCase()
        .includes(filterText.toLocaleLowerCase())
  );//item.full name ya da phone num gibi. herhangi biri içinde filter text geçiyorsa o zaman objeyi getir

  });
  console.log("filtered :" ,filtered);
  return (
    <div>
      <input
        placeholder="filter contact"
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
      />
      {/* onchange input değiştiğinde çalışır. */}
      <ul className="list">
        {filtered.map((contact, i) => (
          <li key={i}> 
          <span>{contact.fullName}</span> 
          <span>{contact.phoneNumber}</span></li>
        ))}
      </ul>
      <p>Total Contacts ({filtered.length})</p>
    </div>
  );
}

export default List;
