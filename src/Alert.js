
const Alert = ({err}) => {
  return (
    <div>
      <small style={{'color': 'red'}}>{err}</small>
    </div>
  )
}

export default Alert;