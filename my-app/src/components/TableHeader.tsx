import React from 'react';
import Table from './Table';

const TableHeader:React.FC = () => {
    return(
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Trabajo</th>  
                <th>Action</th>  
                <th>Borrar</th>            
            </tr>
        </thead>
    )

};

export default TableHeader;
