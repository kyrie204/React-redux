import React, { useState, useEffect } from "react";

export const initState = {
    title: "自定义hooks存取状态Demo",
    layout: "test",
};

export function reducer(state, action) {
    switch (action.type) {
        case "increment":
            //   return {
            //       ...state,
            //       layout: action.layout
            //   };
            initState.layout = action.layout;
            return {
                ...initState,
            };
        case "addTag":
            Object.assign(initState, action.layout);
            return {
                ...initState,
            };
        case "decrement":
            return {
                ...state,
            };
        default:
            throw new Error();
    }
}
