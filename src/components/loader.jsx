import React from 'react';

function Loader({ text = "Carregando..." }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: 40 }}>
      <div style={{
        border: '4px solid #f3f3f3',
        borderTop: '4px solid #1976d2',
        borderRadius: '50%',
        width: 40,
        height: 40,
        animation: 'spin 1s linear infinite'
      }} />
      <style>
        {`@keyframes spin { 0% { transform: rotate(0deg);} 100% { transform: rotate(360deg);} }`}
      </style>
      <span style={{ marginLeft: 16, fontSize: 18 }}>{text}</span>
    </div>
  );
}

export default Loader;

