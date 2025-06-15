/* eslint-disable react/prop-types */
import Modal from "../../../Ui/Modal";
import Button from "../../../Ui/Button";

const DelDoctor = ({ isOpen, closeModal }) => {
  return (
    <div>
      <Modal
        title={`Are You Sure You Want To Delete Dr `}
        isOpen={isOpen}
        closeModal={closeModal}
      >
        <form>
          <div className="flex justify-center items-center space-x-3">
            <div className="flex justify-center items-center space-x-3">
              <Button
                style={`mt-4  text-[#696cff] border w-48 px-12 border-1 border-[#5265FF] py-[6px] rounded-[8px]`}
              >
                Yes , Delete
              </Button>
              <Button
                style={`border-[#798594] text-[#dbdbebde]  mt-4   border w-48 px-12 border-1  py-[6px] rounded-[8px]`}
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

export default DelDoctor;
