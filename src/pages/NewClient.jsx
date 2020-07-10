import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

import FormClientComponent from '../components/FormClientComponent'

const NewClient = () => {

     const [data, setData] = useState(localStorage.getItem('datos') !== null ? JSON.parse(localStorage.getItem('datos')) : []);

     const onSubmitNewCLient = (client) => {
          setData([...data,
               client]
          )
          Swal.fire({
               position: 'top-end',
               icon: 'success',
               title: 'Cliente agregado con exito.',
               showConfirmButton: false,
               timer: 1200
          })
     }

     useEffect(() => {
          localStorage.setItem('datos', JSON.stringify(data));
     }, [data])


     return (
          <div>
               <div className="jumbotron">
                    <h1 className="display-4">Agrega un nuevo cliente</h1>
                    <p className="lead">Este cliente sera almacenado de manera local, es decir que solo se mostrara en este computador</p>
                    <Link className="btn btn-secondary" to="/dashboard" role="button">Gestionar mis clientes</Link>
               </div>
               <h4 className="text-center m-5">COMPLETA TODOS LOS DATOS DEL FORMULARIO</h4>
               <FormClientComponent onSubmitNewCLient={onSubmitNewCLient} />
          </div>
     );
}

export default NewClient;
