import { useState } from "react"


const SecundComponet = () => {

  const [novaIdade, setNovaIdade] = useState(30)

  const changeAge = () => {
    setNovaIdade (31)
  }

  return (
    <div className="hooks">
      <p>Idade atual: {novaIdade} </p>
      <button onClick={changeAge} > Mudar idade </button>
    
    </div>
  )
}

export default SecundComponet;