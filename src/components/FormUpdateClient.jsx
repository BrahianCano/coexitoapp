import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import moment from 'moment';
import uniqid from 'uniqid';


const FormUpdateComponent = (props) => {

     const { register, handleSubmit, errors } = useForm();
     const dateNow = moment().format('L');

     const [client, setClient] = useState(props.dataUpdate);
     const [data] = useState(localStorage.getItem('datos') !== null ? JSON.parse(localStorage.getItem('datos')) : []);

     const onSubmit = () => {
          data[indexClient] = client;
          localStorage.setItem('datos', JSON.stringify(data));
          Swal.fire({
               position: 'top-end',
               icon: 'success',
               title: 'Datos actualizados con exito con exito.',
               showConfirmButton: false,
               timer: 1200
          })
     }

     const indexClient = data.findIndex(function (elem) {
          return elem._id === client._id
     });

     useEffect(() => {
          setClient({
               ...client,
               date: dateNow
          })
     }, [])

     return (
          <div className="container">
               <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row m-3">
                         <div className="col">
                              <input type="text" className="form-control" placeholder="CLIENTE"
                                   name="clientContact"
                                   value={client.clientContact}
                                   ref={register({ required: true })}
                                   onChange={(event) => {
                                        setClient({
                                             ...client,
                                             clientContact: event.target.value
                                        })
                                   }}
                              />
                              {errors.clientContact && <span className="badge badge-danger">Este campo es obligatorio</span>}
                         </div>
                         <div className="col">
                              <input type="number" className="form-control" placeholder="NIT"
                                   name="nit"
                                   value={client.nit}
                                   ref={register({ required: true })}
                                   onChange={(event) => {
                                        const id = uniqid();
                                        setClient({
                                             ...client,
                                             nit: event.target.value,
                                             _id: id
                                        })
                                   }}
                              />
                              {errors.nit && <span className="badge badge-danger">Este campo es obligatorio</span>}
                         </div>
                    </div>
                    <div className="row m-3">
                         <div className="col">
                              <input type="email" className="form-control" placeholder="CORREO"
                                   name="email"
                                   value={client.email}
                                   ref={register({ required: true })}
                                   onChange={(event) => {
                                        setClient({
                                             ...client,
                                             email: event.target.value
                                        })
                                   }}
                              />
                              {errors.email && <span className="badge badge-danger">Este campo es obligatorio</span>}
                         </div>
                         <div className="col">
                              <input type="text" className="form-control" placeholder="NOMBRE CONTACTO"
                                   name="contact"
                                   value={client.contact}
                                   ref={register({ required: true })}
                                   onChange={(event) => {
                                        setClient({
                                             ...client,
                                             contact: event.target.value
                                        })
                                   }}
                              />
                              {errors.contact && <span className="badge badge-danger">Este campo es obligatorio</span>}
                         </div>
                    </div>
                    <div className="row m-3">
                         <div className="col input-group">
                              <div className="input-group-prepend">
                                   <span className="input-group-text">+57</span>
                              </div>
                              <input type="number" className="form-control" placeholder="CELULAR"
                                   name="phone"
                                   value={client.phone}
                                   ref={register({ required: true })}
                                   onChange={(event) => {
                                        setClient({
                                             ...client,
                                             phone: event.target.value
                                        })
                                   }}
                              />
                              {errors.phone && <span className="badge badge-danger">Este campo es obligatorio</span>}
                         </div>
                         <div className="col input-group">
                              <div className="input-group-prepend">
                                   <span className="input-group-text">$</span>
                              </div>
                              <input type="number" className="form-control" placeholder="VALOR VENTA"
                                   name="valueSales"
                                   value={client.valueSales}
                                   ref={register({ required: false })}
                                   onChange={(event) => {
                                        setClient({
                                             ...client,
                                             valueSales: event.target.value
                                        })
                                   }}
                              />
                              {errors.valueSales && <span className="badge badge-danger">Este campo es obligatorio</span>}
                         </div>
                    </div>
                    <div className="row m-3">
                         <div className="col">
                              <textarea className="form-control" placeholder="OBSERVACIONES"
                                   name="observation"
                                   value={client.observation}
                                   ref={register({ required: true })}
                                   onChange={(event) => {
                                        setClient({
                                             ...client,
                                             observation: event.target.value
                                        })
                                   }}
                              />
                              {errors.observation && <span className="badge badge-danger">Este campo es obligatorio</span>}
                         </div>
                         <div className="col">
                              <input className="btn btn-primary btn-lg btn-block" type="submit" value="Actualizar datos" />
                         </div>
                    </div>
               </form>
          </div>
     );
}

export default FormUpdateComponent;