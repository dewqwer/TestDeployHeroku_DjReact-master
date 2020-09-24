import React from "react";
import axios from "axios";
import Articles from "../components/Article";
import CustomForm from "../components/Form";


class ArticleList extends React.Component {
  state = {
    loadingData: true,

    articles: []
  };

  fetchArticles = () => {
    this._isMounted = true;
    if (this.state.loadingData)
      axios
        .get("https://test-deployheroku.herokuapp.com/api/")
        .then((res) => {
          this.setState({
            loadingData: false,

            articles: res.data
          })
        })
        .catch((e) => {
          console.log('error', e)
        })


  }

  componentDidMount() {
    this.fetchArticles();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.token) {
      this.fetchArticles();
    }
  }

  render() {
    return (
      <div>
        <Articles data={this.state.articles} /> <br />
        <h2> Create an article </h2>
        <CustomForm requestType="post" articleID={null} btnText="Create" />
      </div>
    );

  }
}

export default ArticleList;
