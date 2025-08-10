import './App.css'
import Table from './components/Table'
import Form from './components/Form'
import React, { useState } from 'react'

function App() {
  const initialformdata = { name: "", email: "" };
  const [formdata, setFormData] = useState(initialformdata);
  const [editIndex, setEditIndex] = useState(null);

  const handleSetFormData = (key, value) => {
    setFormData({ ...formdata, [key]: value });
  };

  const [tableData, setTableData] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      const updatedData = [...tableData];
      updatedData[editIndex] = formdata;
      setTableData(updatedData);
      setEditIndex(null);
    } else {
      setTableData([...tableData, formdata]);
      setFormData(initialformdata);
    }
  };
  const handleEdit = (idx) => {
    const clickedItem = tableData[idx];
    setFormData(clickedItem);
    setEditIndex(idx);
  };
  const handleDelete = (idx) => {
    tableData.splice(idx, 1);
    setTableData([...tableData]);
  };
  return (
    <div className="app-bg min-h-screen flex flex-col items-center justify-center">
      <header className="mb-8">
        <h1 className="text-4xl font-extrabold text-yellow-900 drop-shadow-lg tracking-wide font-montserrat text-center">
           React Table Form 
        </h1>
        <p className="text-lg text-yellow-700 mt-2 font-montserrat">Add, edit, and manage your entries!</p>
      </header>
      <div className="card-container bg-white rounded-xl shadow-2xl p-8 w-full max-w-2xl">
        <Form
          formdata={formdata}
          handleSetFormData={handleSetFormData}
          handleSubmit={handleSubmit}
          editIndex={editIndex}
        />
        <Table
          data={tableData}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
}

export default App
