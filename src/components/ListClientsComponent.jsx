import React, { useState } from 'react';
import { useHistory, withRouter } from 'react-router-dom';

import MUIDataTable from "mui-datatables";
import moment from 'moment';


const ListClients = () => {

     const history = useHistory();
     const dateNow = moment().format('L');
     const [data] = useState(localStorage.getItem('datos') !== null ? JSON.parse(localStorage.getItem('datos')) : []);

     const columns = [
          {
               label: "ID", name: "_id", options: {
                    display: 'false'
               }
          },
          { label: "FECHA", name: "date" },
          { label: "REGIONAL", name: "region" },
          { label: "CLIENTE", name: "clientContact" },
          { label: "NIT", name: "nit" },
          { label: "VALORES VENTA", name: "valueSales" },
          { label: "CONTACTO", name: "contact" },
          { label: "CELULAR", name: "phone" },
          { label: "OBSERVACIONES", name: "observation" },
          { label: "EJECUTIVO", name: "ejecutive" },
     ];
     const options = {
          filterType: 'checkbox',
          responsive: "standard",
          downloadOptions: {
               filename: 'recaudo_y_ventas_' + dateNow + '.csv',
               separator: ';'
          },
          onRowClick: function (rowData, rowMeta) {
               const id = rowData[0]
               history.push('dashboard/' + id)
          }
     };

     return (
          <div className="m-5">
               <MUIDataTable
                    title={"Lista de clientes"}
                    data={data}
                    columns={columns}
                    options={options}
               />
          </div>
     );
}

export default withRouter(ListClients);