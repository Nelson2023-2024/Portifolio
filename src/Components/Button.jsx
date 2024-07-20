

function Button({text, btnStyles, icon, iconStyles}) {
  return (
    <button style={btnStyles} className="btn">
        {text} 
        <span style={iconStyles}>{icon}</span>
    </button>
  )
} 

export default Button