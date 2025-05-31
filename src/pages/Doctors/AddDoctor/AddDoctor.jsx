import Modal from "../../../Ui/Modal";
import Input from "../../../Ui/Input";
import Label from "../../../Ui/Label";
import Button from "../../../Ui/Button";

const AddDoctor = ({ isOpen, closeModal, title }) => {
  const user_render = [1, 1, 1, 1].map((_, idx) => (
    <div key={idx} className="flex gap-2 flex-col">
      <Label htmlFor={"name"}>name:</Label>
      <Input type="text" />
    </div>
  ));

  return (
    <div>
      <Modal title={title} isOpen={isOpen} closeModal={closeModal}>
        <form>
          {user_render}
          <div className="flex justify-center items-center space-x-3">
            <Button
          
              styles={`mt-4  text-[#696cff] border w-48 px-12 border-1 border-[#5265FF] `}
            >
             Add
            </Button>
            <Button
              styles={`border-[#798594] text-[#dbdbebde]  mt-4   border w-48 px-12 border-1  `}
           
            >
              Cancel
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default AddDoctor;
