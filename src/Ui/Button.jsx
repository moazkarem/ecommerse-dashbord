


// eslint-disable-next-line react/prop-types
const Button = ({children , styles , ...rest}) => {
  return (
  <button  className={`${styles}   outline-none  px-4 py-1 rounded-md`} {...rest}>
    
    {children}
  </button>
  )
}

export default Button
