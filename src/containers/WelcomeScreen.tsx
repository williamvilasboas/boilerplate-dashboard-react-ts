import React from "react";
import { useDispatch } from "react-redux";

import Button from "@material-ui/core/Button";

import * as AuthActions from "../store/auth/actions";

export const WelcomeScreen: React.FC<any> = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Code here!</h1>
      <Button onClick={() => dispatch(AuthActions.signOut())}> Logout</Button>
    </div>
  );
};

export default WelcomeScreen;
