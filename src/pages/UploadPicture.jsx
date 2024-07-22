// src/pages/UploadPicture.jsx
import { FileUpload } from 'primereact/fileupload';
import { InputText } from 'primereact/inputtext';
import React, { useState } from 'react';

const UploadPicture = () => {
  const [idInfo, setIdInfo] = useState([]);
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    surname: '',
    idNo: '',
    passportNo: '',
    birthdate: '',
  });

  const handleSubmit = () => {
    // API call simulation
  };

  return (
    <div className="p-4">
      <h2>Upload Picture</h2>
      <p>Please upload your picture below along with your details.</p>
      <div className="my-4">
        <h3>Search with ID Info</h3>
        <Chips
          value={idInfo}
          onChange={(e) => setIdInfo(e.value)}
          max={11}
          separator=","
          placeholder="Enter 11 digit IDs"
        />
      </div>
      <div className="my-4">
        <h3>Search with Personal Info</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputText
            placeholder="Name"
            value={personalInfo.name}
            onChange={(e) =>
              setPersonalInfo({ ...personalInfo, name: e.target.value })
            }
          />
          <InputText
            placeholder="Surname"
            value={personalInfo.surname}
            onChange={(e) =>
              setPersonalInfo({ ...personalInfo, surname: e.target.value })
            }
          />
          <InputText
            placeholder="ID No"
            value={personalInfo.idNo}
            onChange={(e) =>
              setPersonalInfo({ ...personalInfo, idNo: e.target.value })
            }
          />
          <InputText
            placeholder="Passport No"
            value={personalInfo.passportNo}
            onChange={(e) =>
              setPersonalInfo({
                ...personalInfo,
                passportNo: e.target.value,
              })
            }
          />
          <InputText
            placeholder="Birthdate"
            value={personalInfo.birthdate}
            onChange={(e) =>
              setPersonalInfo({
                ...personalInfo,
                birthdate: e.target.value,
              })
            }
          />
        </div>
        <FileUpload
          name="demo[]"
          url="/api/upload"
          multiple
          accept="image/*"
          maxFileSize={1000000}
          onUpload={handleSubmit}
        />
      </div>
    </div>
  );
};

export default UploadPicture;
