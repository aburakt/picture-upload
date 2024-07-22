// src/pages/DownloadPicture.jsx
import { Button } from 'primereact/button';
import { Chips } from 'primereact/chips';
import { InputText } from 'primereact/inputtext';
import { Toast } from 'primereact/toast';
import React, { useState } from 'react';

const DownloadPicture = () => {
  const [idInfo, setIdInfo] = useState([]);
  const [personalInfo, setPersonalInfo] = useState({
    name: '',
    surname: '',
    idNo: '',
    passportNo: '',
    birthdate: '',
  });

  const [loading, setLoading] = useState(false);
  const toast = useRef(null);

  const handleIdInfoSubmit = () => {
    setLoading(true);
    // API call simulation
    setTimeout(() => {
      setLoading(false);
      toast.current.show({
        severity: 'success',
        summary: 'Success',
        detail: 'Data fetched successfully',
      });
    }, 2000);
  };

  const handlePersonalInfoSubmit = () => {
    // API call simulation
  };

  return (
    <div className="p-4">
      <Toast ref={toast} />
      <h2>Download Picture</h2>
      <div className="my-4">
        <h3>Search with ID Info</h3>
        <Chips
          value={idInfo}
          onChange={(e) => setIdInfo(e.value)}
          max={11}
          separator=","
          placeholder="Enter 11 digit IDs"
        />
        <Button
          label="Send"
          icon="pi pi-check"
          loading={loading}
          onClick={handleIdInfoSubmit}
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
              setPersonalInfo({ ...personalInfo, passportNo: e.target.value })
            }
          />
          <InputText
            placeholder="Birthdate"
            value={personalInfo.birthdate}
            onChange={(e) =>
              setPersonalInfo({ ...personalInfo, birthdate: e.target.value })
            }
          />
        </div>
        <Button
          label="Send"
          icon="pi pi-check"
          onClick={handlePersonalInfoSubmit}
        />
      </div>
    </div>
  );
};

export default DownloadPicture;
