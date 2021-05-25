import React from 'react';
import {TableProps, User} from './Table'
/* import {TableBody} from './' */
/*import Table from './Table';*/

interface TableBodyProps extends TableProps{
	handler: (e:string) => void;
}

export const TableBody:React.FC<TableBodyProps> = ({users, handler, removeUser}) =>{
	return(
			<tbody>
				{users.map((user, index )=> (
					<tr key={user.name}>
						<td>{user.name}</td>
						<td>{user.job}</td>
						<td><button onClick={()=>handler(user.name)}>Press Me!</button></td>
						<td><button onClick={()=>removeUser(index)}>Delete!</button></td>
					</tr>
				))}
			</tbody>
	)
}

/* const TableBody:React.FC = () => {
    return(
        <tbody>
            <tr>
                <th>Jenni</th>
                <th>Diseñadora</th>                
            </tr>
            <tr>
                <th>Gabi</th>
                <th>Informático</th>                
            </tr>
            <tr>
                <th>Andrea</th>
                <th>Profe</th>                
            </tr>
        </tbody>
    )

}; */

export default TableBody;
