"use client"

const { useEffect } from 'react' ;

function Bootstrapclient() {
    useEffect(() => {
      require('bootstrap/dist/js/bootstrap.bundle.min.js');
    }, []);

    return null;
}

export default Bootstrapclient; 