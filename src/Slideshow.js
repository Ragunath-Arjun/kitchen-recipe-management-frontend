import React from "react";

function Slideshow() {
  return (
    <>
      <div id="topbar">
        <div
          id="carouselExampleIndicators"
          class="carousel slide"
          data-ride="carousel"
        >
          <ol class="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              class="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="https://cdn.xtracut.com/villageticket/2018/12/03040722/M8B1859.jpg"
                class="d-block w-100 slideshow img-fluid"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://img.freepik.com/premium-photo/french-fries-abstract-nature-background-diverse-keto-dishes-fast-food-unhealthy-food-concept-top-view_253362-15709.jpg?w=826"
                class="d-block w-100 slideshow img-fluid "
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="https://cdn.pixabay.com/photo/2017/12/09/08/18/pizza-3007395_960_720.jpg"
                class="d-block w-100 slideshow img-fluid"
                alt="..."
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-target="#carouselExampleIndicators"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-target="#carouselExampleIndicators"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Slideshow;
