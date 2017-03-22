import React from 'react';
import Grid from '../template/grid';
import IconButtom from '../template/iconButton';

export default props => (
    <div>
        <Grid cols='12 9 10'>
            <input id='description' className='form-control'
                placeholder='Adicione uma tarefa'
                onChange={props.handleChange}
                value={props.description}></input>
        </Grid>

        <Grid cols='12 3 2'>
            <IconButtom style='primary' icon='plus'
                onClick={props.handleAdd}></IconButtom>
        </Grid>
    </div>

);
