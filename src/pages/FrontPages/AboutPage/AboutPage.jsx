import { Fragment, useEffect, useState } from "react";
import Button from "../../../Ui/Button.jsx";
import Input from "../../../Ui/Input.jsx";
import Label from "../../../Ui/Label.jsx";
import Editor from "../../../Ui/Editor.jsx";
import imgplaceholder from "../../../../public/images/placeholder.jpeg";
import { aboutData } from "./data.js";
import { Controller, useForm } from "react-hook-form";
import Errormsg from "../../../components/Error/ErrorMsg.jsx";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { useGetAbout, useUpdateAbout } from "../../../hooks/useAbout.js";

const EditBlog = () => {
  const { data } = useGetAbout();
  // console.log(data?.[0]?.documentId , 'about adad');
  const id = data?.[0]?.documentId;
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm({});
  useEffect(() => {
    reset({
      missionImg: null,
      missionDesc: data?.[0]?.missionDesc,
      vissionImg: null,
      vissiomDesc: data?.[0]?.vissiomDesc,
      bannerImg: null,
      bannerTitle: data?.[0]?.bannerTitle,
    });

    if (
      data?.[0]?.missionImg?.url &&
      data?.[0]?.vissionImg?.url &&
      data?.[0]?.bannerImg?.url
    ) {
      setPreviewMission(`http://localhost:1337${data?.[0]?.missionImg?.url}`);
      setPreviewVission(`http://localhost:1337${data?.[0]?.vissionImg?.url}`);
      setPreviewBanner(`http://localhost:1337${data?.[0]?.bannerImg?.url}`);
    }
  }, [data, reset]);

  const queryClient = useQueryClient();
  const [previewMission, setPreviewMission] = useState("");
  const [previewVission, setPreviewVission] = useState("");
  const [previewBanner, setPreviewBanner] = useState("");
  const [fileMission, setFileMission] = useState(null);
  const [fileVission, setFileVission] = useState(null);
  const [fileBanner, setFileBanner] = useState(null);
  const { mutate, isPending } = useUpdateAbout();

  // Handle image selection and preview
  const handleChangeImage = async (e, name) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const formData = new FormData();
      formData.append("files", file);
      formData.append("fileInfo", JSON.stringify({ name: file?.name }));

      try {
        const res = await axios.post(
          `http://localhost:1337/api/upload`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );

        const fileUrl = URL.createObjectURL(file);
        const fileId = res?.data?.[0]?.id;

        toast.success("Image Uploaded Successfully");

        switch (name) {
          case "missionImg":
            setPreviewMission(fileUrl);
            setFileMission(fileId);
            break;
          case "vissionImg":
            setPreviewVission(fileUrl);
            setFileVission(fileId);
            break;
          case "bannerImg":
            setPreviewBanner(fileUrl);
            setFileBanner(fileId);
            break;
          default:
            break;
        }
      } catch (err) {
        toast.error("Error In Upload Image");
      }
    }
  };
  const onSubmit = async (data) => {
    const finalData = {
      missionDesc: data?.missionDesc,
      vissiomDesc: data?.vissiomDesc,
      bannerTitle: data?.bannerTitle,
      missionImg: fileMission,
      vissionImg: fileVission,
      bannerImg: fileBanner,
    };
    // console.log(id , 'subb ');
    mutate(
      { finalData, id },
      {
        onSuccess: () => {
          queryClient.invalidateQueries("about");
          toast.success("About Page  Updated Successfully");
          // navigate("/pages/about");
        },
        onError: (error) => {
          console.error("Update error:", error.response?.data || error.message);
          toast.error("Error In Update About Page ");
        },
      }
    );
  };

  const renderFields = aboutData?.map(
    ({ type, name, label, isEditor, col }, idx) => (
      <Fragment key={idx}>
        {type === "file" ? (
          <div className={`flex gap-4 flex-col col-span-${col}`}>
            <Label htmlFor={label}>{label} : </Label>
            <div className="w-80 h-36 rounded-[10px] overflow-hidden bg-[#1E2021] cursor-pointer relative mb-5">
              <Controller
                name={name}
                control={control}
                render={({ field }) => (
                  <>
                    <Input
                      id={label}
                      className="absolute inset-0 opacity-0 cursor-pointer"
                      type="file"
                      accept="image/*"
                      onChange={(e) => {
                        handleChangeImage(e, name);
                        field.onChange(e.target.files[0]); // Update form state
                      }}
                    />
                    <img
                      className="w-full p-3 h-full object-contain"
                      src={
                        name === "missionImg"
                          ? previewMission
                          : name === "vissionImg"
                          ? previewVission
                          : name === "bannerImg"
                          ? previewBanner
                          : imgplaceholder
                      }
                      alt="Preview"
                    />
                    <Errormsg msg={errors[name]?.message} />
                  </>
                )}
              />
            </div>
          </div>
        ) : isEditor ? (
          <div className={`flex gap-4 flex-col col-span-${col}`}>
            <Label htmlFor={label}>{label} : </Label>
            <Controller
              control={control}
              name={name}
              render={({ field }) => <Editor {...field} />}
            />
            <Errormsg msg={errors[name]?.message} />
          </div>
        ) : (
          <div className={`flex gap-4 flex-col col-span-${col || 6}`}>
            <Label htmlFor={label}>{label} : </Label>
            <Input type={type} id={label} name={name} {...register(name)} />
            <Errormsg msg={errors[name]?.message} />
          </div>
        )}
      </Fragment>
    )
  );

  return (
    <div className="mt-6 px-10">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-12 gap-5 py-24"
      >
        {renderFields}
        <div className="col-span-12">
          <Button
            type="submit"
            loading={isPending}
            style={`mt-4 text-[#fff] border-[#ff0000cc] border w-48 px-12 border-1 py-[6px] flex justify-center items-center rounded-[8px]`}
          >
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EditBlog;
