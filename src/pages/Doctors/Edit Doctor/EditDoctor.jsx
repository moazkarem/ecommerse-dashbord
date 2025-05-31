

import Modal from "../../../Ui/Modal";
import Input from "../../../Ui/Input";
import Label from "../../../Ui/Label";
import Button from "../../../Ui/Button";
const EditDoctor = ({ isOpenEdit, closeModalEdit, title,  }) => {
  return (
    <div>
      <Modal title={title} isOpen={isOpenEdit} closeModal={closeModalEdit}>
        <form>
          {[1,1,1,1].map((_, idx) => (
            <div key={idx} className="flex gap-2 flex-col">
              <Label htmlFor={"name"}>Name:</Label>
              <Input
                type="text"
                id="name"
                // name={name}
                
              />
            </div>
          ))}
          <div className="flex justify-center items-center space-x-3">
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
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default EditDoctor;
