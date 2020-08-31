import React from 'react'
import ReactDom from 'react-dom'
import './App.css'
import 'antd-mobile/dist/antd-mobile.css'
import {List, Popover,Icon} from 'antd-mobile'


const Form = (props) => {
   const Item = Popover.Item

   return (<List> {props.children}
         </List> )
}

export default Form