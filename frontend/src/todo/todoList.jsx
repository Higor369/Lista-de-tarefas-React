import React from 'react'
import todoForm from './todoForm'
import { connect } from 'react-redux'
import IconButton from '../template/iconButton'
import { markAsDone, markAsPending, remove} from './todoAction'
import { bindActionCreators} from  'redux'

const todoList = props => {


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
                    onClick={() => props.Remove(x)}></IconButton>
            </td>
            </tr>
            )
            )

        )
    }

    return(
    <div>
        <table className='table'>
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

const mapStateToProps = state => {
    return({
        list: state.todo.list
    })
}

const mapDispatchToProps = dispatch =>(bindActionCreators({
    markAsDone, remove, markAsPending},dispatch
    ))

// const mapDispatchToProps = dispatch =>(bindActionCreators({ // as actions que eu vou disparar para o storage
//     changeDescription, search, add, clear},dispatch
// ))

export default connect(mapStateToProps, mapDispatchToProps)(todoList)

