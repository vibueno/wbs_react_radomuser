import React from "react";

export default function Contact({ contactDetails }) {
  return (
    <div>
      <p>Address: {contactDetails.address} </p>
      <p>Email: {contactDetails.email}</p>
      <p>Phone number: {contactDetails.phone}</p>
    </div>
  );
}
