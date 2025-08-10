import React from "react";
import { useState } from "react";

const Form = ({formdata,handleSetFormData, handleSubmit, editIndex }) => {
  // console.log(handleSetRes);

  return (
    <>
      <h1 className="text-2xl font-bold mb-5">Table Form Example</h1>
      <form className="border rounded p-4" onSubmit={handleSubmit}>
        <input
          className="w-full border rounded p-2 mb-4"
          type="text"
          placeholder="Enter Name"
          onChange={(e) => {
            const value = e.target.value;
            handleSetFormData("name", value);
          }}
          required
          value={formdata.name}
        />
        <input
          className="w-full border rounded p-2 mb-4"
          type="email"
          placeholder="Enter Email"
          onChange={(e) => {
            handleSetFormData("email", e.target.value);
          }}
          required
          value={formdata.email}
        />
        <button
          className="bg-yellow-800 text-white px-4 py-2 rounded cursor-pointer"
          type="submit"
        >
          {editIndex !== null ? "Update" : "Add"}
        </button>
      </form>
    </>
  );
};

export default Form;
