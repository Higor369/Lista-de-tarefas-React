import React from 'react'
import todoForm from './todoForm'
import IconButton from '../template/iconButton'
export default props => {


    const renderRows = () => {
        const list = props.list || []

        return(
            list.map(x =>(
            <tr key={x._id}>
                <td className={x.done ? 'markedAsDone' : ''}>
                   {x.description}
                </td>
                
                <td>
                <IconButton style='success' icon='check' hide={x.done}
                    onClick={() => props.markAsDone(x)}></IconButton>
                <IconButton style='warning' icon='undo' hide={!x.done} 
                    onClick={() => props.markAsPending(x)}></IconButton>
                <IconButton style='danger' icon='trash-o'
                    onClick={() => props.handleRemove(x)}></IconButton>
            </td>
            </tr>
            )
            )
       
        )
    }

    return(
    <div>
        <table className='tabçe'>
            <thead>
                <tr>
                    <th>Descrição</th>
                    <th className='tableActions'>Ações</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
        
    </div>
    )
}