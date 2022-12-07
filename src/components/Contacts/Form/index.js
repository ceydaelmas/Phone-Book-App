import React, { useEffect, useState } from "react";
const initialFormValues = {fullName:"",phoneNumber:""};
function Form({addContacts, contacts}) {
  const [form, setForm] = useState(initialFormValues);

  useEffect(()=>{
    //contactsın içi değiştiinde inputu temizle şeklinde de yapabilirim.
    setForm(initialFormValues);//submitten sonra içini temizler.ama 10 input olsa zor. içinde tanımlamak yerine üstte const tanımla
  },[contacts]);
  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    //eğer input validsayonu geçersizse durdur
    if(form.fullName ==="" || form.phoneNumber ===""){
        return false;//formu gönderme.
    }
    addContacts([...contacts,form]);
  };
  return (
    <form onSubmit={onSubmit}>
        {/* formun varsayılan davranışı var sayfa yenileniyor bunu engellemek için e.preventdefault */}
      <div>
        <input
          name="fullName"
          placeholder="Full Name"
          value ={form.fullName}
          onChange={onChangeInput}
        />
      </div>
      <div>
        <input
          name="phoneNumber"
          placeholder="Phone Number"
          value = {form.phoneNumber}
          onChange={onChangeInput}
        />
      </div>
      <div className="btn">
        <button>Add</button>
      </div>
    </form>
  );
}

export default Form;
