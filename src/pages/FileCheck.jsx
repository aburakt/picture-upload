// src/pages/FileCheck.jsx
import axios from 'axios';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Skeleton } from 'primereact/skeleton';
import React, { useEffect, useState } from 'react';

const FileCheck = () => {
  const [files, setFiles] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('/api/files')
      .then((response) => {
        setFiles(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });

    const timer = setTimeout(() => {
      if (loading) {
        setLoading(false);
        setFiles([]);
      }
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const downloadBodyTemplate = (rowData) => {
    return <Button icon="pi pi-download" onClick={() => window.location.href = rowData.downloadLink} />;
  };

  return (
    <div className="p-4">
      <h2>File Check</h2>
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Skeleton width="100%" height="2rem" />
          <Skeleton width="100%" height="2rem" />
        </div>
      ) : (
        <DataTable value={files} emptyMessage="No data available">
          <Column field="name" header="File Name" />
          <Column field="size" header="Size" />
          <Column body={downloadBodyTemplate} header="Download" />
        </DataTable>
      )}
    </div>
  );
};

export default FileCheck;
