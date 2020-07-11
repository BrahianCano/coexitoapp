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
               position: 'center',
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
                    <p className="lead">Este cliente sera almacenado únicamente en la memoria del navegador de este dispositivo.</p>
                    <Link className="btn btn-dark" to="/dashboard" role="button"> <i class="fas fa-file-csv"></i> Gestionar mis clientes</Link>
               </div>
               <h4 className="text-center m-5">COMPLETA LOS DATOS DEL FORMULARIO</h4>
               <FormClientComponent onSubmitNewCLient={onSubmitNewCLient} />
          </div>
     );
}

export default NewClient;
