import  React from 'react';
import './Button.css';
import {Link} from 'react-router-dom';

function Button2(){
    return(
        <Link to='Sign-in'>
            <button className='btns'>Sign In</button>
        </Link>
    )
}
export default Button2;
