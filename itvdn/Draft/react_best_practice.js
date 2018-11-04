import React from "react";
import ReactDOM from "react-dom";

const movie = {
  title: "Life as it is",
  vote_average: 9.9,
  image:
    "https://tooniq8.files.wordpress.com/2011/03/life-as-we-know-it-movie-poster.jpg",
  overview: "The movie is about people"
};

function Image(props) {
  return <img width="100%" src={props.src} alt={props.alt} />;
}

class MovieItem extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false
    };
  }

  toggleOverview = () => {
    this.setState({
      show: !this.state.show
    });
  };

  render() {
    const {
      data: { title, vote_average, image, overview }
    } = this.props;
    return (
      <div style={{ width: "300px" }}>
        <Image src={image} alt={title} />
        <p>{title}</p>
        <p>{vote_average}</p>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button type="button" onClick={this.toggleOverview}>
            {this.state.show ? "hide" : "show"}
          </button>
          <button type="button">Like</button>
        </div>
        {this.state.show ? <p>{overview}</p> : null}
      </div>
    );
  }
}

function App() {
  return (
    <div>
      <MovieItem data={movie} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
