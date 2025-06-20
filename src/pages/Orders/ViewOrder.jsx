/* eslint-disable react/prop-types */
import Button from "../../Ui/Button";
import Modal from "../../Ui/Modal";
import { formatedDate } from "../../helpers/functions";
const ViewOrder = ({ vieweddOrder, closeModalView, isOpenView }) => {
  //============= SUBMIT FUNCTION =======
  return (
    <div>
      <Modal
        title={` Order Details `}
        isOpen={isOpenView}
        closeModal={closeModalView}
      >
        <div className="flex justify-between items-center mb-5">
          <span className="text-[#fff] text-[16px]"> User </span>
          <span className="text-[#dbdbedbe] text-[16px]">
            {" "}
            {vieweddOrder?.user?.name}{" "}
          </span>
        </div>
        <div className="flex justify-between items-center mb-5">
          <span className="text-[#fff] text-[16px]"> Order date </span>
          <span className="text-[#dbdbedbe] text-[16px]">
            {" "}
            {formatedDate(vieweddOrder?.createdAt)}{" "}
          </span>
        </div>
        <div className="flex justify-between items-center mb-5">
          <span className="text-[#fff] text-[16px]"> Number of products </span>
          <span className="text-[#dbdbedbe] text-[16px]"> {vieweddOrder?.cartItems?.length} Product </span>
        </div>
        <div className="flex justify-between items-center mb-5">
          <span className="text-[#fff] text-[16px]"> Payment Method </span>
          <span className="text-[#dbdbedbe] text-[16px]"> {vieweddOrder?.paymentMethodType} </span>
        </div>
        <div className="flex justify-between items-center mb-5">
          <span className="text-[#fff] text-[16px]"> Payment Statue </span>
          <span className="text-[#dbdbedbe] text-[16px]"> {vieweddOrder?.isPaid ? "Done" :"Pending"} </span>
        </div>
        <div className="flex justify-between items-center mb-5">
          <span className="text-[#fff] text-[16px]"> Delivery Statue </span>
          <span className="text-[#dbdbedbe] text-[16px]"> {vieweddOrder?.isDelivered ? "Done" :"Pending"} </span>
        </div>

        <div className="flex justify-between items-center mb-5">
          <span className="text-[#fff] text-[16px]"> Total Price </span>
          <span className="text-[#dbdbedbe] text-[16px]"> {vieweddOrder?.totalOrderPrice} </span>
        </div>
        <div className="flex justify-end w-full">
          <Button
            type="button"
            onClick={() => closeModalView()}
            style={`border-[#798594] text-[#dbdbebde]  mt-4   border w-48 px-12 border-1  py-[6px] rounded-[8px]`}
          >
            Close
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default ViewOrder;
