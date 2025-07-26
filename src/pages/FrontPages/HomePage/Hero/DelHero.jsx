/* eslint-disable react/prop-types */
import Modal from "../../../../Ui/Modal";
import Button from "../../../../Ui/Button";
import { useDelHero } from "../../../../hooks/useHomePage";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
const DelHero = ({ isOpen, closeModal, deletedSlider }) => {
  //============= SUBMIT FUNCTION =======
  const { handleSubmit } = useForm({});
  const queryClient = useQueryClient();
  const { isPending, mutate } = useDelHero();
  const onSubmit = () => {
    mutate(deletedSlider?.documentId, {
      onSuccess: () => {
        toast.success("Slider deleted successfully");
        closeModal();
        queryClient.invalidateQueries(["products"]);
      },
      onError: (err) => {
        console.log(err, "err del");
        toast.error("An error occurred, slider was not deleted");
      },
    });
  };
  return (
    <div>
      <Modal
        title={` Delete ${deletedSlider?.title} ? `}
        isOpen={isOpen}
        closeModal={closeModal}
      >
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-center items-center space-x-3">
            <div className="flex justify-center items-center space-x-3">
              <Button
                loading={isPending}
                style={`mt-4   text-[#fff] border-[#ff0000cc]  border w-48 px-12 border-1  py-[6px] flex justify-center items-center rounded-[8px]`}
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

export default DelHero;
