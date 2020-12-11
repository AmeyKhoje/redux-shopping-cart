import React, { useEffect, useState } from 'react';
import './Toast.css';

const Toast = (props) => {
    const [ showToast, setShowToast ] = useState(false)

    useEffect(() => {
        if (props.show) {
            setShowToast(true)
        }
        else if(props.hide) {
            setShowToast(false)
        }
    }, [props])
    setTimeout(() => {
        setShowToast(false)
    }, 1000)

    let showToastCheck = showToast ? 'toast-show' : 'toast-hide';

    return (
        <div className={ ` react-toast ${showToastCheck} ${props.show && 'toast-show'} ${props.hide && 'toast-hide'} ` }>
          <div className="react-toast_cont">
            <p>{props.Text}</p>
          </div>
        </div>
    )
}

export default Toast;
