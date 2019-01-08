import React from "react";

class FilterLink extends React.Component {
  constructor(props) {
    super(props);

    this.handleFilterLinkChange = this.handleFilterLinkChange.bind(this);
  }

  handleFilterLinkChange(e) {
    this.props.onFilterLinkChange(e);
  }

  render() {
    const filterText = this.props.filterText;
    return (
      <div>
        Show:
        <a
          href="#"
          onClick={() => this.handleFilterLinkChange("All")}
          className={filterText === "All" ? "active" : "in-active"}
        >
          {" "}
          All
        </a>
        {""},{"  "}
        <a
          href="#"
          onClick={() => this.handleFilterLinkChange("Active")}
          className={filterText === "Active" ? "active" : "in-active"}
        >
          Active
        </a>
        {""},{"  "}
        <a
          href="#"
          onClick={() => this.handleFilterLinkChange("Completed")}
          className={filterText === "Completed" ? "active" : "in-active"}
        >
          {" "}
          Completed
        </a>
      </div>
    );
  }
}

export default FilterLink;
