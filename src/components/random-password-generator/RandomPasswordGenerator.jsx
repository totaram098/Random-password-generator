import React, { useState } from "react";
import "./style.css";

const RandomPasswordGenerator = () => {
  var arrayOfCharacters = [];
  const [inputValues, setValues] = useState({});
  var [generatedPassword, setGeneratedPassword] = useState("");
  var [setPassword, setPasswordChars] = useState("");

  const characters = {
    upperCase: "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,",
    lowerCase: "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,",
    number: "1,2,3,4,5,6,7,8,9,",
    symbol: "!,@,#,$,%,^,&,*,{,},[,],(,),/",
  };
  const changeField = (e) => {
    const fieldName = e.target.name;
    const value =
      fieldName === "passwordRange" ? e.target.value : e.target.checked;
    value
      ? setValues({ ...inputValues, [fieldName]: value })
      : setValues({ ...inputValues, [fieldName]: false });
  };

  function formHandle(e) {
    e.preventDefault();
    var i = 0;

    const objectArray = Object.entries(inputValues);

    objectArray.forEach(([key, element]) => {
      element === true
        ? setPasswordChars((setPassword = setPassword.concat(characters[key])))
        : setPasswordChars("");
      element === true ? (i += 1) : (i = i);
      console.log(key);
    });

    console.log(setPassword);
    arrayOfCharacters = setPassword.split(",");
    setPasswordChars("");
    for (var count = 0; count < inputValues.passwordRange; count++) {
      setGeneratedPassword(
        (generatedPassword = generatedPassword.concat(get_random()))
      );
    }
    function get_random() {
      return arrayOfCharacters[
        Math.floor(Math.random() * arrayOfCharacters.length)
      ];
    }
  }

  return (
    <div className="contaier">
      <div className="formDiv">
        <h3>Random Password Generator</h3>
        <div className="passwordShow"> {generatedPassword}</div>
        <form action="" onSubmit={formHandle}>
          <div className="rangeDiv">
            <label htmlFor="passwordRange">
              {`Password Length   ${
                inputValues.passwordRange ? inputValues.passwordRange : 10
              }   `}
            </label>
            <input
              onChange={changeField}
              type="range"
              min={1}
              max={10}
              name="passwordRange"
              id="passwordRange"
            />
          </div>

          <div className="elementContainer">
            <div className="element">
              <label htmlFor="">Include Uppercase</label>
              <input onChange={changeField} type="checkbox" name="upperCase" />
            </div>

            <div className="element">
              <label htmlFor="">Include Lowercase</label>
              <input onChange={changeField} type="checkbox" name="lowerCase" />
            </div>

            <div className="element">
              <label htmlFor="">Include Numbers </label>
              <input onChange={changeField} type="checkbox" name="number" />
            </div>

            <div className="element">
              <label htmlFor="">Include Symbols </label>
              <input onChange={changeField} type="checkbox" name="symbol" />
            </div>
          </div>
          <div className="element">
            <input
              className="generateButton"
              type="submit"
              name="generate"
              id=""
              value={"GENERATE PASSWORD"}
              onClick={() => {
                setGeneratedPassword("");
              }}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default RandomPasswordGenerator;
