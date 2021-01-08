import React from "react";
import Contact from "./Contact";

export default function User({ user }) {
  const { picture, name, age, ...contactDetails } = user;

  return (
    <div>
      <img src={picture} alt="name" />
      <p>Name : {name}</p>
      <p>Age : {age}</p>

      <Contact contactDetails={contactDetails} />
    </div>
  );
}
