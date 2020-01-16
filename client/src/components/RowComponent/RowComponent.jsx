import React from "react";
import styles from "./RowComponent.scss";

class RowComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  // XSS protection
  protectStringXSS = value => {
    return value
      .replace(/\&/g, "&amp;")
      .replace(/\</g, "&lt;")
      .replace(/\>/g, "&gt;")
      .replace(/\"/g, "&quot;")
      .replace(/\'/g, "&#x27")
      .replace(/\//g, "&#x2F");
  };

  onSubmitAddRow = e => {
    e.preventDefault();
    const text = e.target.elements.textRow.value;

    if (this.props.rows.length != 10) {
      this.props.onClickAddRow(this.protectStringXSS(text));
    }
  };

  render() {
    return (
      <div className={styles.rowWrapper}>
        <div className={styles.row}>
          <form
            className={styles.rowForm}
            onSubmit={this.onSubmitAddRow}
            noValidate
          >
            <div className={styles.inputWrapper}>
              <input
                className={styles.formInput}
                name="textRow"
                placeholder="Type some text"
                type="text"
                autoComplete="off"
              />
            </div>
            <button className={styles.formButton} type="submit">
              Add row
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default RowComponent;
