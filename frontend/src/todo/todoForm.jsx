import React, {Component} from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { changeDescription, search, add, clear } from './todoAction'

class TodoForm extends Component{
    constructor(props){
        super(props)
    }

    render(){
        const {add, search, description, clear} = this.props
        return(
            <div role='form' className='todoForm'>
                <Grid cols='12 9 10'>
                        <input id='description' className='form-control'
                            placeholder='Adicione uma tarefa'
                            onChange={e =>this.props.changeDescription(e)} 
                            value={this.props.description}></input>
                    </Grid>
                    <Grid cols='12 3 2'>
                        <IconButton style='primary' icon='plus'
                            onClick={() => add(description)} ></IconButton>
                        <IconButton style='info' icon='search'
                            onClick={() =>search()}></IconButton>
                        <IconButton style='default' icon='close'
                            onClick={() => clear}></IconButton>
                    </Grid>
            </div>
            )
        }

        componentWillMount(){ //metodo de ciclo de vida
            this.props.search()
        }
}



const mapStateToPropos = state =>({description: state.todo.description}) //o que eu vou usar do storage

const mapDispatchToProps = dispatch =>(bindActionCreators({ // as actions que eu vou disparar para o storage
    changeDescription, search, add, clear},dispatch
))


export default connect(mapStateToPropos, mapDispatchToProps)(TodoForm)
// onKeyUp={keyHandler}