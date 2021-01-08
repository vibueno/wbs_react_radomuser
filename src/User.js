import React from "react";
import Contact from "./Contact";

export default function User({ user }) {
  const { picture, name, age, address, email, phone } = user;
  const contactDetails = { address, email, phone };

  return (
    <div>
      <img src={picture} alt="name" />
      <p>Name : {name}</p>
      <p>Age : {age}</p>

      <Contact contactDetails={contactDetails} />
    </div>
  );
}
