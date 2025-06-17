/* eslint-disable react/prop-types */
import Modal from "../../Ui/Modal";
import Button from "../../Ui/Button";
import { useDelCategory } from "./../../hooks/useCategories";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
const DelDoctor = ({ isOpen, closeModal, deletedCat }) => {
  //============= SUBMIT FUNCTION =======
  const { handleSubmit } = useForm({});
  const queryClient = useQueryClient();
  const { isPending, mutate } = useDelCategory();
  const onSubmit = () => {
    mutate(deletedCat._id, {
      onSuccess: () => {
        toast.success("Category deleted successfully");
        closeModal();
        queryClient.invalidateQueries(["categories"]);
      },
      onError: (err) => {
        console.log(err, "err del");
        toast.error("An error occurred, category was not deleted");
      },
    });
  };
  return (
    <div>
      <Modal
        title={` Delete ${deletedCat.name} ? `}
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
                Delete
              </Button>
              <Button
                type="button"
                onClick={() => closeModal()}
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
