//Provide context that will handle the addition of bots into the army
import { createContext, useReducer } from "react";

export const context = createContext();

//Add a context that will automatically add robots to the army when passed down to your bot army

export const Context = (props) => {
    const reducer = (state, action) => {
      switch (action.type) {
        //Initiate adding first robot to army when the bot is selected
        case "ADD":
          const tempstate = state.filter((bots) => action.payload.id === bots.id);
          if (tempstate.length > 0) {
            return state;
          } else {
            return [...state, action.payload];
          }
        //Initiate recruiting of more robots to army when the bot is selected
        case "INCREASE":
          const tempstate1 = state.map((bots) => {
            if (bots.id === action.payload.id) {
              return { ...bots, quantity: bots.quantity + 1 };
            } else {
              return bots;
            }
          });
          return tempstate1;
        //Initiate recruitinf of more robots to army when the bot is selected
          case "REMOVE":
          const tempstate2 = state.filter(
            (bots) => bots.id !== action.payload.id
          );
          return tempstate2;
          default:
          return state;
      }
    };
    const [state, dispatch] = useReducer(reducer, []);
    const info = { state, dispatch };
    return (
      <Botcontext.Provider value={info}>{props.children}</Botcontext.Provider>
    );

}
