import React from "react";
import styles from "./RowsListComponent.scss";

class RowsListComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { rows } = this.props;
    const isRowsEmpty = rows.length === 0;

    return (
      <div className={styles.rows}>
        <div className={styles.rowsWrapper}>
          <div className={styles.rowsLabelWrapper}>
            <p className={styles.rowsLabel}>Rows</p>
            {rows.length === 10 ? (
              <p className={styles.rowsLimitError}>
                The limit of 10 rows has been reached!
              </p>
            ) : null}
          </div>
          <div className={styles.rowsListWrapper}>
            {isRowsEmpty ? null : (
              <ul className={styles.rowsList}>
                {rows.map(({ id, row }) => {
                  return (
                    <li className={styles.row} key={id}>
                      <p className={styles.rowText}>{row}</p>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default RowsListComponent;
