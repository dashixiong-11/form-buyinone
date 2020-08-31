import  {createStoreon} from 'storeon'

let note = store => {
   store.on('@init', () => (
         {
            notes: [
               {id: 1, text: '第1条信息'},
               {id: 2, text: '第2条信息'},
               {id: 3, text: '第3条信息'},
            ]
         }
   ));
    store.on('add',({notes},note)=>{
       return {notes:[...notes,note ]}
    })
}
const store = createStoreon([note])
export default store