import {
  DeleteAPICALL,
  GetAPICALL,
  PostAPICALL,
} from "../../Config/Functions/getFun";
import {
  GET_PACKAGE_ERROR,
  GET_PACKAGE_LOADING,
  GET_PACKAGE_SUCCESS,
} from "../actiontypes/package.types";

import { toast } from "react-toastify";

export const packageADDAPI = (payload) => (dispatch) => {
  PostAPICALL(`managepackage`, payload)
    .then((r) => {
      toast.success("Package Added Successfully.", {
        position: "top-left",
        theme: "colored",
        autoClose: 3000,
      });
      dispatch(packageAPI());
    })
    .catch((err) => {
      console.log(err);
      toast.error("Package Not Added.", {
        position: "top-left",
        theme: "colored",
        autoClose: 3000,
      });
    });
};

export const packageAPI = () => (dispatch) => {
  dispatch({ type: GET_PACKAGE_LOADING });
  GetAPICALL(`managepackage`)
    .then((r) => {
      dispatch({ type: GET_PACKAGE_SUCCESS, payload: r });
    })
    .catch(() => {
      dispatch({ type: GET_PACKAGE_ERROR });
    });
};

//   export const userEditAPI = (id, payload) => (dispatch) => {
//     PatchAPICALL(`user/edituser/${id}`, payload)
//       .then((r) => {
//         dispatch(GetUserApi(id));
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

export const DeltePackageApi = (id) => (dispatch) => {
  DeleteAPICALL(`managepackage/${id}`)
    .then((r) => {
      toast.success("Package Deleted Successfully.", {
        position: "top-left",
        theme: "colored",
        autoClose: 3000,
      });
      dispatch(packageAPI());
    })
    .catch((err) => {
      console.log(err);
      toast.error("Package Not Deleted.", {
        position: "top-left",
        theme: "colored",
        autoClose: 3000,
      });
    });
};

export const DeltePackageTableApi = (packageId, tableid) => (dispatch) => {
  DeleteAPICALL(`managepackage/tables/${packageId}/${tableid}`)
    .then((r) => {
      toast.success("Table Deleted Successfully.", {
        position: "top-left",
        theme: "colored",
        autoClose: 3000,
      });
      dispatch(packageAPI());
    })
    .catch((err) => {
      console.log(err);
      toast.error("Table Not Deleted.", {
        position: "top-left",
        theme: "colored",
        autoClose: 3000,
      });
    });
};

export const packagTableeAddAPI = (id, payload) => (dispatch) => {
  PostAPICALL(`managepackage/tables/${id}`, payload)
    .then((r) => {
      if (r === "Please provide values for all fields") {
        toast.error("Please Provide Values For All Fields.", {
          position: "top-left",
          theme: "colored",
          autoClose: 3000,
        });
      } else {
        toast.success("Package Table Added Successfully.", {
          position: "top-left",
          theme: "colored",
          autoClose: 3000,
        });
      }

      dispatch(packageAPI());
    })
    .catch((err) => {
      console.log(err);
      toast.error("Package Table Not Added.", {
        position: "top-left",
        theme: "colored",
        autoClose: 3000,
      });
    });
};
