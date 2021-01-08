import React from "react";

export default function Contact({ contactDetails }) {
  const { address, email, phone } = contactDetails;

  return (
    <div>
      <p>Address: {address} </p>
      <p>Email: {email}</p>
      <p>Phone number: {phone}</p>
    </div>
  );
}
