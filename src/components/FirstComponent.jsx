function FirstComponent() {

  const items = [
    {
      id: 1,
      name: 'Mauricio'
    },
    {
      id: 2,
      name: 'Costa'
    },
    {
      id: 3,
      name: 'Ramos'
    },
  ]

return (
    <div className="ola">
      {  items.map((item) => (
        <p key={item.id}>
          {item.id} - {item.name}
        </p>
      ))}
    </div>
  )
}



export default FirstComponent;