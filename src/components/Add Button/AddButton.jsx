import Button from "../../Ui/Button"



// eslint-disable-next-line react/prop-types
const AddButton = ({title , add}) => {
  return (
<Button onClick={add} style={'mb-6 text-[#696cff] border px-12  border-1 border-[#5265FF] rounded-[8px] py-[6px]'}>
    {title}
</Button>
  )
}

export default AddButton
