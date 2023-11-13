import { useState } from "react"
import { useCookies } from 'react-cookie'
import { DateInput } from '@mantine/dates';

const Modal = ({mode, setShowModal, getData, task, assignedTo}) => {
    const editMode = mode === "edit" ? true : false
    const [cookies, setCookie, removeCookie] = useCookies(null)
    const [date, setDate] = useState(null);

    const [data, setData] = useState({
      assigned: editMode ? task.assigned : assignedTo,
      title: editMode ? task.title : null,
    })

    const postData = async (e) => {
      e.preventDefault()
      try {
        const response = await fetch(`https://projekt-backend.onrender.com/todos`, {
          method: "POST",
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        })

        if(response.status === 200){
          setShowModal(false)
          getData()
        }

      }catch(err){
        console.error(err)
      }
    }

    const editData = async (e) => {
      e.preventDefault()
      try{
        const response = await fetch(`https://projekt-backend.onrender.com/todos/${task.id}`,{
          method: 'PUT',
          headers: { 'Content-Type': 'application/json'},
          body: JSON.stringify(data)
      })
      if(response.status === 200){
          setShowModal(false)
          getData()
      }
      }catch(err){
        console.error(err)
      }
    }

    const handleChange = (e) => {
      const {name, value} = e.target

      setData(data => ({
        ...data,
        [name] : value
      }))
    }

    return (
      <>
        <div className="overlay">
          <div className="modal">
            <div className="form-title-container">
              <h3>{mode} zadanie</h3>
              <button onClick = {() => setShowModal(false)}>X</button>
            </div>

            <form>
              <input
                required
                maxLength={30}
                placeholder="Nazwa zadania"
                name="title"
                value={data.title}
                onChange={handleChange}
              />
              <DateInput
                onChange={setDate}
                label="Wybierz datę"
                placeholder="Data"
                maw={150}
                mx="marginRight"
              />
              <br/>
              <input className={mode} type="submit" onClick={editMode ? editData : postData}/>
            </form>
          </div>
        </div>
      </>
    )
  }
  
  export default Modal
  
