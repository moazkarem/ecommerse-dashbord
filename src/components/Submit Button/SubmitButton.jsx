import Button from "../../Ui/Button"



// eslint-disable-next-line react/prop-types
const SubmitButton = ({title , add}) => {
  return (
<Button onClick={add}  styles={`mt-4  text-[#696cff] border w-48 px-12 border-1 border-[#5265FF] `}>
    {title}
</Button>
  )
}

export default SubmitButton
