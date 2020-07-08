import React, { useEffect, useState } from 'react';
import MUIDataTable from "mui-datatables";
import Swal from 'sweetalert2';
import moment from 'moment';


const ListClients = () => {

     const dateNow = moment().format('L');
     const [data, setData] = useState(localStorage.getItem('datos') !== null ? JSON.parse(localStorage.getItem('datos')) : []);

     useEffect(() => {
          if (data !== []) {
               setData(JSON.parse(localStorage.getItem('datos')))
          } else {
               Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'No tienes usuario creados',
                    showConfirmButton: false,
                    timer: 1200
               })
          }
     }, [])

     const columns = [
          { label: "FECHA", name: "date" },
          { label: "REGIONAL", name: "region" },
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
               console.log(rowMeta)
               console.log(rowData)
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

export default ListClients;