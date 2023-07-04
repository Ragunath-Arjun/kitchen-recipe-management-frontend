import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Search() {
  const [datas, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const handleChange = (e) => {
    setSearchInput(e.target.value);
  };

  useEffect(() => {
    getdata();
  }, [datas]);

  let getdata = async () => {
    try {
      const recipes = await axios.get(
        "https://kitchen-recipe-management-backend.onrender.com/recipes"
      );
      setData(recipes.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <>
      <div className="container" id="search">
        <div className="row">
          <div class="input-group">
            <div className="col-lg-12">
              <div class="form-outline">
                <input
                  type="search"
                  id="form1"
                  class="form-control search_bar text-center"
                  placeholder="Search your recipe"
                  value={searchInput}
                  onChange={handleChange}
                />
                <label class="form-label" for="form1"></label>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          {datas
            .filter((val) => {
              return val.recipe_name
                .toLowerCase()
                .includes(searchInput.toLowerCase());
            })
            .map((ele) => {
              return (
                <div className="col-lg-4 mt-4">
                  <div class="card card-style" style={{ width: "18rem" }}>
                    <div className="d-flex justify-content-center">
                      <img
                        src={ele.recipe_image}
                        class="card-img-top image-width"
                        alt="Chicken Briyani"
                        loading="lazy"
                      />
                    </div>
                    <div class="card-body ">
                      <div className="d-flex justify-content-between">
                        <h5 class="card-title">{ele.recipe_name}</h5>
                        <h5>Cooking time - {ele.cooking_time}</h5>
                      </div>
                      <p class="card-text">{ele.description}</p>
                      <div className="d-flex justify-content-center">
                        <Link
                          to={ele.link}
                          class="btn btn-primary watch-button"
                          target="_blank"
                        >
                          <i class="fa fa-play" aria-hidden="true"></i>
                          Watch Video
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Search;
