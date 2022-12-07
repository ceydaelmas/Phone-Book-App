import React, { useEffect, useState } from "react";
import List from "./List";
import Form from "./Form";
import "./styles.css";
function Contacts() {
  //Reactda - ifadesi kullanılmaz o yüzden bacgroundColor olur. bg-color değil.
  const [contacts, setContacts] = useState([
    {
      fullName: "Ceyda",
      phoneNumber: " 13123",
    },
    {
      fullName: "ayşe",
      phoneNumber: "4646",
    },
    {
      fullName: "nazlı",
      phoneNumber: "98798",
    },
  ]); //liste de göndermek içn burda oluşturduk.
  useEffect(() => {
    console.log(contacts); //atama yapıldıkan sonra arrayin son halini görmek istoyuem.
    //contacs değiştiği anda bunu loglayacak.
  }, [contacts]);
  return (
    <div id="container">
      <h2 style={{color:'blue' , backgroundColor:'whitesmoke'}}>Contacts</h2>
      {/* burada stil verirken obje olarak vermek gerekiyor. normal htmldeki gibi değil. bu inline css */}
      <List contacts={contacts} />
      <Form addContacts={setContacts} contacts={contacts} />
      {/* eski verileri kormuak için contacs gönderdik */}
    </div>
  );
}

export default Contacts;
