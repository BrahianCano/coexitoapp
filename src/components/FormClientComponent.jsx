import React, { useState, useEffect } from 'react';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';
import moment from 'moment';


const FormClientComponent = () => {

     const { register, handleSubmit, errors } = useForm();
     const dateNow = moment().format('L');
     const stateInitial = {
          clientContact: "",
          nit: "",
          email: "",
          contact: "",
          phone: "",
          valueSales: "",
          observation: "",
          region: "MEDELLÍN",
          ejecutive: "JUDY CANO",
          date: dateNow
     }
     const [client, setClient] = useState(stateInitial);
     const [data, setData] = useState(localStorage.getItem('datos') !== null ? JSON.parse(localStorage.getItem('datos')) : []);


     const onSubmit = (dataForm, e) => {
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
          setClient(stateInitial);
          e.target.reset();
     }

     useEffect(() => {
          localStorage.setItem('datos', JSON.stringify(data));
     }, [data])


     return (
          <div className="container">
               <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row m-3">
                         <div className="col">
                              <input type="text" className="form-control" placeholder="CLIENTE"
                                   name="clientContact"
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
                                   ref={register({ required: true })}
                                   onChange={(event) => {
                                        setClient({
                                             ...client,
                                             nit: event.target.value
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
                              <div class="input-group-prepend">
                                   <span class="input-group-text">+57</span>
                              </div>
                              <input type="number" className="form-control" placeholder="CELULAR"
                                   name="phone"
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
                              <div class="input-group-prepend">
                                   <span class="input-group-text">$</span>
                              </div>
                              <input type="number" className="form-control" placeholder="VALOR VENTA"
                                   name="valueSales"
                                   ref={register({ required: true })}
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
                              <input className="btn btn-primary btn-lg btn-block" type="submit" value="Guardar cliente" />
                         </div>
                    </div>
               </form>
          </div>
     );
}

export default FormClientComponent;