import React, { useState } from "react";
import Picker from "emoji-picker-react";

import reloadImg from "../assets/reload.png";
import smileImg from "../assets/smile.png";

const Noqat = () => {
  const [text, setText] = useState("");
  const [mainText, setMainText] = useState("");
  const [btnstr, setBtnstr] = useState(true);

  const [showPicker, setShowPicker] = useState(false);

  const toReplace = [
    ["اسرائيل", "اــــرائىل"],
    ["إسرائيل", "إــــرائٮل"],
    ["ج", "ح"],
    ["خ", "ح"],
    ["غ", "ع"],
    ["ف", "ڡ"],
    ["ق", "ڡ"],
    ["ث", "ٮ"],
    ["ن", "ں"],
    ["ب", "ٮ"],
    ["ت", "ٮ"],
    ["ي", "ى"],
    ["ض", "ص"],
    ["ش", "س"],
    ["ذ", "د"],
    ["ظ", "ط"],
    ["ز", "ر"],
    ["ة", "ه"],
    ["ك ", "ک "],
  ];
  const writingHandle = (e) => {
    let txt = e.target.value;
    setMainText(txt);
    // /a/gi
    toReplace.forEach((reg) => {
      txt = txt.replaceAll(reg[0], reg[1]);
    });
    setText(txt);
  };

  // const copyTxt = () => {
  //   text.select();
  //   text.setSelectionRange(0, 99999);
  //   document.execCommand("copy");
  // };
  const copyTxt = () => {
    if (text && text.length > 0) {
      let el = document.createElement("textarea");
      el.value = text;
      el.setAttribute("readonly", "");
      el.style = { position: "absolute", left: "-9999px" };
      document.body.appendChild(el);
      // Select text inside element
      el.select();
      el.setSelectionRange(0, 99999);
      // Copy text to clipboard
      document.execCommand("copy");
      // Remove temporary element
      document.body.removeChild(el);
      setBtnstr(false);
      setTimeout(() => setBtnstr(true), 500);
    }
  };

  const clearForm = () => {
    setText("");
    setMainText("");
  };
  const closePicker = (e) => {
    e.stopPropagation();
    setShowPicker(false);
  };
  const onEmojiClick = (e, emojiObject) => {
    e.stopPropagation();
    setMainText(mainText + emojiObject.emoji);
    setText(text + emojiObject.emoji);
  };

  return (
    <main>
      <div className="container">
        <div className="noqat">
          {/* result  */}
          <div className="noqat-form">
            <form
              className="noqat-form_form"
              onSubmit={(e) => e.preventDefault()}
            >
              {/* <input
                type="text"
                placeholder="اضف مهمة جديدة ..."
                // onChange={newTitleHandler}
                // value={newTitle}
              /> */}
              <textarea
                name="result"
                id=""
                cols="30"
                rows="10"
                disabled
                value={text}
                placeholder="الكلام بدون نقاط سيظهر هنا"
              ></textarea>
            </form>
            <div className="noqat-form_submit">
              <button
                className={btnstr ? "btn " : "btn active"}
                onClick={copyTxt}
                // disabled={newTitle.trim() ? false : true}
              >
                {/* نسخ */}
                {btnstr ? "نسخ" : "تــــم"}
              </button>
            </div>
          </div>
          {/* textinput  */}
          <div className="noqat-list">
            <form onSubmit={(e) => e.preventDefault()}>
              <textarea
                name="txtInput"
                id="txtInput"
                placeholder="اكتب ماتريد هنا"
                onChange={writingHandle}
                value={mainText}
              ></textarea>
              <div className="clear-form" onClick={clearForm}>
                <img src={reloadImg} alt="clear text" />
              </div>
              <div
                className="emoji-icon"
                onClick={() => {
                  setShowPicker(true);
                }}
              >
                <img src={smileImg} alt="clear text" />
              </div>
            </form>
          </div>
        </div>
      </div>
      {showPicker && (
        <div className="emoji-picker" onClick={closePicker}>
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <Picker onEmojiClick={onEmojiClick} />
          </div>
        </div>
      )}
    </main>
  );
};

export default Noqat;
