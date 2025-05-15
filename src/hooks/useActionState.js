import { useActionState, useState } from "react";

async function formHandler(prevState, formData) {
  console.log("prevState", prevState);
  console.log("formData", formData);
  const fname = formData.get("fname");
  const lname = formData.get("lname");
  console.log(fname, lname);
  await new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
  return { fname, lname };
}
const initialState = { fname: "Dhiraj", lname: "Majhi" };

const UseActionStateHook = () => {
  const [formState, setFormState] = useState(initialState);
  const [state, formAction, isPending] = useActionState(formHandler, formState, '/form-submitted');

  return (
    <>
      <div>Use action state hook form</div>

      <form action={formAction}>
        <input
          type="text"
          placeholder="Enter first name"
          name="fname"
          value={formState.fname}
          onChange={(e) =>
            setFormState({ ...formState, fname: e.target.value })
          }
        />
        <br /> <br />
        <input
          type="text"
          placeholder="Enter last name"
          name="lname"
          value={formState.lname}
          onChange={(e) =>
            setFormState({ ...formState, lname: e.target.value })
          }
        />
        <br /> <br />
        <button>Submit</button>
        {isPending && <div>Is loading ..!!!</div>}
      </form>
    </>
  );
};

// async function increment(previousState, formData) {
//   console.log(previousState);
//   return previousState + 1;
// }

// function UseActionStateHook() {
//   let initialState = 0;
//   const [state, formAction] = useActionState(increment, initialState);

//   return (
//     <form action={formAction}>
//       <p>Counter: {state}</p>
//       <button type="submit">Increment</button>
//     </form>
//   );
// }

export default UseActionStateHook;


// https://medium.com/@ignatovich.dm/enhancing-form-handling-in-react-19-a-look-at-action-useformstate-and-useformstatus-a5ee68d6bf93