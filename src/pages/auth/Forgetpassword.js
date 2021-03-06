import React from "react";
import "../../assets/css/forgetpassword.css";

class Forgetpassword extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      loading: false,
    };
  }

  componentDidMount() {
    console.log("Forgetpassword");

    this.setState({
      loading: true,
    });
  }

  render() {
    return (
        <div>
            <div className="forget-password">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8 col-lg-4">

                            <h2>Forget Password</h2>

                            <form className="pt-5">
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" class="form-control" placeholder="Email" formControlName="email"/>
                                </div>

                                <div className="forget-btn">
                                    <a className="press d-block mt-4">Send</a>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
             </div>
        </div>
    );
  }
}
export default Forgetpassword;
