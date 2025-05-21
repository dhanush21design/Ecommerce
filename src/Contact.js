import React from 'react'
import commerce from './images/download.jpg'


const Contact = () => {
  return (
    <>
      <section className="validation">
        <div className="container mt-5">
          <h3>GET IN TOUCH </h3>
          <form class="row g-3 needs-validation mt-5" novalidate>
            <div class="col-md-6">
              <label for="validationCustom01" class="form-label">
                First name
              </label>
              <input
                type="text"
                class="form-control"
                id="validationCustom01"
                value="Mark"
                required
              />
              <div class="valid-feedback">Looks good!</div>
            </div>
            <div class="col-md-4">
              <label for="validationCustom02" class="form-label">
                Last name
              </label>
              <input
                type="text"
                class="form-control"
                id="validationCustom02"
                value="Otto"
                required
              />
              <div class="valid-feedback">Looks good!</div>
            </div>
            <div class="col-md-12">
              <label for="validationCustomUsername" class="form-label">
                Username
              </label>
              <div class="input-group has-validation">
                <span class="input-group-text" id="inputGroupPrepend">
                  @
                </span>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustomUsername"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <div class="invalid-feedback">Please choose a username.</div>
              </div>
            </div>
            <div class="col-md-8">
              <label for="validationCustom03" class="form-label">
                City
              </label>
              <input
                type="text"
                class="form-control"
                id="validationCustom03"
                required
              />
              <div class="invalid-feedback">Please provide a valid city.</div>
            </div>
            <div class="col-md-3">
              <label for="validationCustom04" class="form-label">
                State
              </label>
              <select class="form-select" id="validationCustom04" required>
                <option selected disabled value="">
                  Choose...
                </option>
                <option value="1">Tamilnadu</option>
                <option value="2">Kerala</option>
                <option value="3">Pondicherry</option>
              </select>
              <div class="invalid-feedback">Please select a valid state.</div>
            </div>
            <div class="col-md-3">
              <label for="validationCustom05" class="form-label">
                Zip
              </label>
              <input
                type="text"
                class="form-control"
                id="validationCustom05"
                required
              />
              <div class="invalid-feedback">Please provide a valid zip.</div>
            </div>
            <div class="col-12">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="invalidCheck"
                  required
                />
                <label class="form-check-label" for="invalidCheck">
                  Agree to terms and conditions
                </label>
                <div class="invalid-feedback">
                  You must agree before submitting.
                </div>
              </div>
            </div>
            <div class="col-12">
              <button class="btn btn-primary" type="submit">
                Submit form
              </button>
            </div>
          </form>
        </div>
      </section>

      <section className="box">
        <div className="container" style={{ marginTop: "100px" }}>
          <div className="row">
            <div className="col-lg-8">
              {/* <div className="row"> */}
                <div class= "p-4 border mb-3">
                  <span
                    class="d-block h6 text-uppercase fs-2"
                    style={{ color: "#7971EA" }}
                  >
                    New York
                  </span>
                  <p class="mb-0 fs-5" style={{ fontFamily: "bold" }}>
                    203 Fake St. Mountain View, San Francisco, California, USA
                  </p>
                </div>
                <div class="p-4 border mb-3">
                  <span
                    class="d-block h6 text-uppercase fs-2"
                    style={{ color: "#7971EA" }}
                  >
                    London
                  </span>
                  <p class="mb-0 fs-5" style={{ fontFamily: "bold" }}>
                    203 Fake St. Mountain View, San Francisco, California, USA
                  </p>
                </div>
                <div class=" p-4 border mb-3">
                  <span
                    class="d-block h6 text-uppercase fs-2"
                    style={{ color: "#7971EA" }}
                  >
                    Canada  
                  </span>
                  <p class="mb-0 fs-5" style={{ fontFamily: "bold" }}>
                    203 Fake St. Mountain View, San Francisco, California, USA
                  </p>
                </div>
              {/* </div> */}
            </div>
            <div className="col-lg-4" style={{marginTop:"100px"}}>
                <div>
            <img src={commerce} className="float-end" style={{width:"275px"}}></img>
          </div>
            </div>
          </div>
          
        </div>
      </section>
      <br></br>
      <br></br>

      <hr></hr>
      
    </>
  );
}

export default Contact