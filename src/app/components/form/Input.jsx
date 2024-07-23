export const Input = ({ type, name, id, onChange, value }) => {
  return (
    <input
      type={type}
      id={id}
      style={{ padding: '.5rem' }}
      onChange={onChange}
      value={value}
      name={name}
    />
  )
}
