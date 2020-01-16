import React from "react";
import RowComponent from "components/RowComponent/RowComponent";
import RowsListComponent from "../RowsListComponent/RowsListComponent";
import styles from "./App.scss";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { rows: [] };
  }

  async componentDidMount() {
    // fetch the table data from the server
    const getTableResponse = await fetch("http://localhost:8000/table");
    const getTableJson = await getTableResponse.json();

    this.setState({ rows: getTableJson.table || [] });
  }

  onClickAddRow = async value => {
    // add new row
    await fetch("http://localhost:8000/table/row", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        text: value
      })
    });

    const getTableResponse = await fetch("http://localhost:8000/table");
    const getTableJson = await getTableResponse.json();

    this.setState({ rows: getTableJson.table });
  };

  render() {
    const {
      state: { rows },
      onClickAddRow
    } = this;

    return (
      <div className={styles.app}>
        <RowComponent rows={rows} onClickAddRow={onClickAddRow} />
        <RowsListComponent rows={rows} />
      </div>
    );
  }
}

export default App;
