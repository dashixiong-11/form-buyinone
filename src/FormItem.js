import React, {useEffect, useState} from 'react'
import ReactDom from 'react-dom'
import './App.css'
import 'antd-mobile/dist/antd-mobile.css'
import {InputItem} from 'antd-mobile'
import validator from "./validator"


const FormItem = (props) => {
   const [value, setValue] = useState(undefined)
   const [error, setError] = useState(false)
   const [errorContent, setErrorContent] = useState('')

   useEffect(() => {
      if (value !== undefined) {
         let err = validator(value,
               // {
               //    required: true,
               //    maxLength: 10,
               //    minLength: 6,
               //    pattern: /^[A-Za-z0-9]+$/
               // }
               props.rule
               , props.title)
         err ? setError(true) : setError(false)
         setErrorContent(err)
      }
   }, [value])

   const change = e => {
      setValue(e)
      props.output(e)
   }
   return (
         <>
            <div>
               <div>
                  <div style={{padding: '15px 15px 5px'}} className="title">{props.title}</div>
                  <div style={{display: 'flex'}}>
                     {props.beforeNode && props.beforeNode}
                     <div style={{flexGrow: 1}}>
                        <InputItem clear type={props.type} maxLength={props.rule && props.rule.maxLength || 20}
                                   placeholder={props.placeholder} error={error}
                                   onChange={change}
                                   value={value}/>
                     </div>
                     {props.afterNode && props.afterNode}
                  </div>
               </div>
               <div style={{padding: '4px 1em', color: 'red', background: '#fff'}}>
                  {error ? <span>{errorContent}</span> : <span>&nbsp;</span>}
               </div>
            </div>
         </>
   )

}
FormItem.defaultProps = {
   type: 'text',
   beforeNode: null,
   afterNode: null
}

export default FormItem
