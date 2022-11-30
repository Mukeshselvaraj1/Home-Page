import React from 'react'

 const Grid = () => {
  return (
    <body>
        <div className="row  my-3">
        <div className="col-md-6 bg-danger">
          <div className="col-md-12 bg-success">
            Use the .col class on a specified number of elements and Bootstrap
            will recognize how many elements there are (and create equal-width
            columns). In the example below, we use three col elements, which
            gets a width of 33.33% each.
          </div>
          <div className=" row col bg-secondary text-white bg-opacity-25">
            <div className="col-md-6 col-sm-6 bg-dark text-info">
              {" "}
              Use the .col class on a specified number of elements and Bootstrap
              will recognize how many elements there are (and create equal-width
              columns). In the example below, we use three col elements, which
              gets a width of 33.33% each.
            </div>
            <div className="col-md-6 col-sm-6 - bg-success">mukesh</div>
          </div>
        </div>
        <div className="col-md-6 bg-info">
          Use the .col class on a specified number of elements and Bootstrap
          will recognize how many elements there are (and create equal-width
          columns). In the example below, we use three col elements, which gets
          a width of 33.33% each.
        </div>
      </div>
      <container2 className="card card-body">
        <row className="row">
          {/* 1st column */}
          <div className="col-md-5" style={{ backgroundColor: "red" }}>
            {/* 1st column < 1st row */}
            <div
              className="row "
              style={{ backgroundColor: "green", height: "33.3%" }}
            >
              .
            </div>
            {/* 1st column < 2nd row */}
            <div
              className="row"
              style={{ backgroundColor: "yellow", height: "33.3%" }}
            >
              .
            </div>
            {/* 1st column <3 rd row */}
            <div
              className="row"
              style={{ backgroundColor: "pink", height: "33.3%" }}
            >
              .
            </div>
          </div>
          {/* 2nd column */}
          <div
            className="col-md-4"
            style={{ backgroundColor: "orange " }}
          ></div>
          {/* 3rd column */}
          <div className="col-md-3">
            <div className="row" style={{ backgroundColor: "black" }}>
              .
            </div>
            <div className="row" style={{ backgroundColor: "brown" }}>
              %20%20 %20%20%20%20 %20%20 %20%20%20%20% 20%20%20%20 %20 %20%20%20
              %20%20 %20%20 %20%20%20%20 %20%20%20%20
            </div>
            <div className="row" style={{ backgroundColor: "darkblue" }}>
              .
            </div>
          </div>
        </row>
      </container2>
    </body>
  )
}
export default Grid;