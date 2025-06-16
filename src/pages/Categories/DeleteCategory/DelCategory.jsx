/* eslint-disable react/prop-types */
import Modal from "../../../Ui/Modal";
import Button from "../../../Ui/Button";
import { useDelCategory } from "./../../../hooks/useCategories";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
const DelDoctor = ({ isOpen, closeModal, deletedCat }) => {
  const { handleSubmit } = useForm({});
  const { isPending, mutate } = useDelCategory();
  const onSubmit = (data) => {
    mutate(deletedCat._id, {
      onSuccess: () => {
        toast.success("Category deleted successfully");
        closeModal();
        queryClient.invalidateQueries(["categories"]);
      },
      onError: () => {
        toast.error("An error occurred, category was not deleted");
      },
    });
  };
  return (
    <div>
      <Modal
        title={`Are You Sure You Want To Delete ${deletedCat.name} `}
        isOpen={isOpen}
        closeModal={closeModal}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-center items-center space-x-3">
            <div className="flex justify-center items-center space-x-3">
              <Button
              loading={isPending}
                style={`mt-4  text-[#696cff] border w-48 px-12 border-1 border-[#5265FF] py-[6px] flex justify-center items-center rounded-[8px]`}
              >
                Yes , Delete
              </Button>
              <Button
              onClick= {()=>closeModal()}
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
