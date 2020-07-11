import React from 'react'
import logo from '../images/logo64.png'
import logobancolombia from '../images/logo_bancolombia.png'
import logo_nequi from '../images/logo_nequi.png'

const DonacionComponent = () => {
     return (
          <div className="jumbotron text-center">
               <h2>Apoya esta aplicacion web</h2>
               <img src={logo} alt="logo" />
               <p className="lead mb-5">¿Te ha servido coexitoApp?<br />
               Puedes donar al desarrollador detrás de esta pagina, para dar continuación a nuevas actualizaciones, donde tu también puedes participar.
          </p>

               <h4 className="mb-3">Medios</h4>

               <div className="container d-flex justify-content-center">
                    <div className="mr-5">
                         <img src={logobancolombia} style={{ width: "150px" }} />
                         <p>Nro. 279-000753-92 <br /> Ahorros</p>
                    </div>
                    <div className="">
                         <img src={logo_nequi} style={{ width: "90px" }} />
                         <p>Nro. 312-250-7466</p>
                    </div>
               </div>

               <form class="container mt-5">
                    <h5 className="mb-3">Envía una petición de lo que te gustaría agregar a esta pagina!</h5>
                    <div class="input-group mb-3">
                         <div class="input-group-prepend">
                              <span class="input-group-text" id="addon-wrapping">:)</span>
                         </div>
                         <input type="text" class="form-control" placeholder="Nombre" aria-label="Nombre" aria-describedby="addon-wrapping" />
                    </div>
                    <div class="input-group mb-3">
                         <input type="email" class="form-control" placeholder="Email" aria-label="Email" aria-describedby="basic-addon2" />
                         <div class="input-group-append">
                              <span class="input-group-text" id="basic-addon2">@gmail.com</span>
                         </div>
                    </div>
                    <div class="input-group mb-3">
                         <div class="input-group-prepend">
                              <span class="input-group-text">Petición</span>
                         </div>
                         <textarea class="form-control" placeholder="Me gustaria que agregaran a la pagina manejo de clientes desde cualquier lugar..." aria-label="With textarea"></textarea>
                    </div>
                    <input class="btn btn-outline-success" type="submit" value="Enviar peticion" />
               </form>


          </div>
     );
}

export default DonacionComponent;