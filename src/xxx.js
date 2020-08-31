import React, {useState} from 'react'
import Form from "./Form"
import FormItem from "./FormItem"
import {Icon, Picker, List, Popover} from "antd-mobile"


function Xxx() {

   let m = false
   const [x, setX] = useState('4')
   const [visible, setVisible] = useState(false)
   const Item = Popover.Item
   const userOutPut = (value) => {
      console.log(value)
   }
   const passwordOutPut = (value) => {
      console.log(value)
   }
   const phoneOutPut = (value) => {
      console.log(value)
   }
   const emailOutPut = (value) => {
      console.log(value)
   }
   const codeOutPut = (value) => {
      console.log(value)
   }

   const pickerChange = () => {

   }
   const select = (e) => {
      setVisible(false)
      m = false
   }


   const emailRegex = /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/

   return <>
      <Form>
         <FormItem output={userOutPut} rule={{required: true, minLength: 2, maxLength: 8}} type='text' label='用户名'
                   title='用户名'
                   placeholder='请输入用户名'/>
         <FormItem output={passwordOutPut} type='password' title='密码' placeholder='请输入密码'/>
         <FormItem output={emailOutPut} rule={{required: true, pattern: emailRegex}} title='邮箱' placeholder='请输入邮箱'/>
         <FormItem output={codeOutPut} rule={{required: true, maxLength: 4}} type='number' title='验证码'
                   placeholder='请输入4位数验证码'
                   afterNode={<span style={{lineHeight: '44px', paddingRight: '15px'}}>获取验证码</span>}
         />
         <FormItem output={phoneOutPut} rule={{required: true, maxLength: 11}}
                   beforeNode={<div style={{display: 'flex', alignItems: 'center', paddingLeft: '15px'}}>
                      <Popover mask
                               onSelect={select}
                               placement='bottomLeft'
                               visible={m}
                               overlay={[
                                  (<Item key="4" value="scan">4</Item>),
                                  (<Item key="5" value="special">5</Item>),
                                  (<Item key="6" value="button ct"> 6 </Item>),
                               ]}
                      >
                         <div>
                            {x}
                         </div>
                      </Popover>
                      <Icon type='down'/>
                   </div>}
                   title='手机号' placeholder='请输入手机号'/>
      </Form>
      <Picker onChange={pickerChange} value='1'
              data={[{label: '1', value: '1'}]}>
         <List.Item> </List.Item>
      </Picker>
   </>
}

export default Xxx
