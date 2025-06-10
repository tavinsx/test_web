import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', background: '#1976d2', padding: 16, marginBottom: 24, maxWidth: '100%'  }}>
      <Link to="/post" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold', fontSize: 18 }}>
        Posts
      </Link>
    </nav>  
  );
}

export default Navbar;
