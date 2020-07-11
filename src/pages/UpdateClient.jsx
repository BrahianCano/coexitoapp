import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import FormUpdateComponent from '../components/FormUpdateClient'


const UpdateClientComponent = () => {

     const params = useParams();
     const id_params = params.id;

     const data = useState(localStorage.getItem('datos') !== null ? JSON.parse(localStorage.getItem('datos')) : [])
     const [dataFiltered, setDataFiltered] = useState()

     const filterClient = data[0].filter(client => (
          client._id === id_params
     ))

     useEffect(() => {
          setDataFiltered(filterClient[0])
     }, [])

     return (
          <div>
               <div className="jumbotron">
                    <h1 className="display-4">Actualizar datos</h1>
                    <p className="lead">Este cliente sera actualizado únicamente en la memoria del navegador de este dispositivo.</p>
                    <Link className="btn btn-dark" to="/dashboard" role="button"> <i class="fas fa-file-csv"></i> Gestionar mis clientes</Link>
               </div>
               <h4 className="text-center m-5">COMPLETA TODOS LOS DATOS DEL FORMULARIO</h4>
               <FormUpdateComponent dataUpdate={filterClient[0]} />
          </div>
     );
}

export default UpdateClientComponent;