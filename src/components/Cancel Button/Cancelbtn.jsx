import Button from "../../Ui/Button"



// eslint-disable-next-line react/prop-types
const Cancelbtn = ({title , add}) => {
  return (
<Button  styles={`border-[#798594] text-[#dbdbebde]  mt-4   border w-48 px-12 border-1  `} onClick={add}>
    {title}
</Button>
  )
}

export default Cancelbtn
