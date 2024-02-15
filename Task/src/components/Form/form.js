import React, { useState } from "react";


export default function Profile() {
  const [userForm, setUserForm] = useState({
    FirstName: null,
    password: null,
    Email: null,
  });


  /*****************-- Handel Error ---***************** */

  const [userFormError, setUserFormErro] = useState({
    FirstName: null,
    password: null,
    Email: null,
  });

    /*****************-- Handel Success ---***************** */

  const [userFormSucss, setUserFormSucss] = useState({
    FirstName: null,
    password: null,
    Email: null,
  });



  const handelChangeForm = (e) => {
    console.log(e.target.value, e.target.name);
    switch (e.target.name) {


      /*****************-- FirstName---***************** */

      case "FirstName":
        setUserForm({
          ...userForm,
          FirstName: e.target.value,          
        });
        setUserFormErro({
          ...userForm,
          FirstName:e.target.value.length === 0 ? "This failed is Required":e.target.value.length < 3 ?'This minemum charcter':null,
        });
        setUserFormSucss({
          ...userForm,
          FirstName:e.target.value.length === 10 ? "Done":e.target.value.length >= 3 ?'paseed Done':null,
        });
        break;

/*****************-- password---***************** */

      case "password":
        setUserForm({
          ...userForm,
          password: e.target.value,
        });
        setUserFormErro({
          ...userForm,
          password:e.target.value.length === 0 ?'This faild is Required': e.target.value.length <4?'this is minmum character':null,
        });
        setUserFormSucss({
          ...userForm,
          password:e.target.value.length === 10 ? "Done":e.target.value.length >= 4 ?'paseed Done':null,
        })
        break;

/*****************-- Email---***************** */

      case "Email":
        setUserForm({
          ...userForm,
          Email: e.target.value,
        });
        setUserFormErro({
          ...userForm,
          Email:e.target.value.length === 0 ?'This failed is Required': e.target.value.length < 8?'this minum email':null
        });
        setUserFormSucss({
          ...userForm,
          Email:e.target.value.length >= 8?'Email is done':null
        })
        break;
      default:
        break;
    }
  };

  const saveData = () => {
    console.log("Save Done");
    console.log(userForm);
  };



  /*****************-- Form---***************** */

  return (

    <div className="w-50 mx-auto my-5">


      <input
        className={`form-control mb-3`}
        // className={`form-control mb-3 ${userFormError.FirstName?'border-danger':''}`}
        name="FirstName"
        type="text"
        placeholder="FirstName"
        
        value={userForm.FirstName}
        onChange={handelChangeForm}
        
      ></input>
      <small className="text-danger">{userFormError.FirstName}</small>
      <small className="text-success">{userFormSucss.FirstName}</small>




      <input
        className={`form-control mb-3`}
        // className={`form-control mb-3 ${userFormError.Email?'border-danger':''}`}
        name="Email"
        type="email"
        placeholder="Email"
        value={userForm.Email}
        onChange={handelChangeForm}
      ></input>
            <small  className="text-danger">{userFormError.Email}</small>
            <small className="text-success">{userFormSucss.Email}</small>



      <input
        className={`form-control mb-3`}
        // className={`form-control mb-3 ${userFormError.password?'border-danger':''}`}
        name="password"
        type="password"
        placeholder="password"
        value={userForm.password}
        onChange={handelChangeForm}
      ></input>
            <small  className="text-danger">{userFormError.password}</small>
            <small className="text-success">{userFormSucss.password}</small>

      <button className="btn btn-outline-primary mb-3 w-100" onClick={saveData}>
        save
      </button>


    </div>
  );
}
