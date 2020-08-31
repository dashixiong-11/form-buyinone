const isEmpty = (value) => {
   return value === '' || value === null || value === undefined
}
const validator = (formData, rules, title) => {
   let error = []
   Object.keys(rules).map(key => {
      if (key == 'required' && isEmpty(formData)) {
         error.push(`${title}为必填项`)
      }
      if (key == 'minLength' && !isEmpty(formData) && formData.length < rules.minLength) {
         error.push(`${title}太短`)
      }
      if (key == 'maxLength' && !isEmpty(formData) && formData.length > rules.maxLength) {
         error.push(`${title}太长`)
      }
      if (key == 'pattern' && !isEmpty(formData) && !(rules.pattern.test(formData))) {
         error.push(`${title}格式不正确`)
      }
   })


   return error.join(',')

}

export default validator