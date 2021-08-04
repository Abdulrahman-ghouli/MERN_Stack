import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from '@reach/router';
import Show from '../components/Show';
 const Detail = (props) => {
    
    return (
        <div>
              <Show id = {props.id} />

        </div>
    )
}
export default Detail