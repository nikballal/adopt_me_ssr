import { Component } from "react";
import { useParams } from "react-router-dom";
import Carousel from "./Carousel";
import ErrorBoundary from "./ErrorBoundary";
import Modal from "./Modal";
import ThemeContext from "./ThemeContext";

class Details extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = { loading: true };
  // }

  state = { loading: true, showModal: false };

  async componentDidMount() {
    const res = await fetch(
      `http://pets-v2.dev-apis.com/pets?id=${this.props.params.id}`
    );
    const json = await res.json();

    this.setState(Object.assign({ loading: false }, json.pets[0])); //can use ...json.pets[0] instead of Object.assign
  }

  toggleModal = () => this.setState({ showModal: !this.state.showModal }); //https://reactjs.org/docs/react-component.html#setstate    //toggles the showModal to 'true'

  render() {
    if (this.state.loading) {
      return <h2>loading ...</h2>;
    }

    // throw new Error("lmao you crashed");

    const { animal, breed, city, state, description, name, images, showModal } =
      this.state;

    return (
      <div onClick={(e) => console.log(e)} className="details">
        <Carousel images={images} />
        <div>
          <h1>{name}</h1>
          <h2>
            {animal} - {breed} - {city}, {state}
          </h2>
          {/* reading out context in class component without using Wrapper- 2nd method*/}
          <ThemeContext.Consumer>
            {([theme]) => (
              <button
                onClick={this.toggleModal}
                style={{ backgroundColor: theme }}
              >
                Adopt {name}
              </button>
            )}
          </ThemeContext.Consumer>
          {/* <button style={{ backgroundColor: this.props.theme }}>
            Adopt {name}
          </button> */}
          <p>{description}</p>
          {showModal ? (
            <Modal>
              <div>
                <h1>Would you like to adopt name {name}?</h1>
                <div className="buttons">
                  <a href="https://bit.ly/pet-adopt">Yes</a>
                  <button onClick={this.toggleModal}>No</button>
                </div>
              </div>
            </Modal>
          ) : null}
        </div>
      </div>
    );
  }
}

//to access the API route, we need the 'id' params from the route which is from react-router, so we use 'useParams' to get the 'id', since we cant use 'hooks' in class components

const WrappedDetails = () => {
  const params = useParams();
  // const [theme] = useContext(ThemeContext), pass 'theme' props in details
  return (
    <ErrorBoundary>
      <Details params={params} />
    </ErrorBoundary>
  );
};

export default WrappedDetails;
