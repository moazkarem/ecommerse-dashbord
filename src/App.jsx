import { RouterProvider } from "react-router-dom";
import router from "./router";
import { Toaster } from 'react-hot-toast';
const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            background: "#000",
            color: "#fff",
            width: "300px",
            height: "60px",
            fontSize: "16px",
            borderRadius: "10px",
            padding: "15px",
          },
          duration: 1500,
        }}
      />
    </div>
  );
};
export default App;
