import Button from "../../Ui/Button"



// eslint-disable-next-line react/prop-types
const AddButton = ({title , add}) => {
  return (
<Button onClick={add} style={'mb-6 text-[#dbdbebde] border px-12  border-1 border-[#ff0000cc] rounded-[8px] py-[6px]'}>
    {title}
</Button>
  )
}

export default AddButton
