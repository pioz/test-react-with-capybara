class NewPostForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return(
      <form action="/posts" accept-charset="UTF-8" method="post">
        <input name="utf8" type="hidden" value="✓"/>
        <input type="hidden" name="authenticity_token" value={this.props.authenticityToken}/>
        
        <div class="field">
          <label for="post_title">Title</label>
          <input type="text" name="post[title]" id="post_title" onChange={(e) => this.setState({title: e.target.value})} />
        </div>

        <div class="field">
          <label for="post_body">Body</label>
          <textarea name="post[body]" id="post_body" onChange={(e) => this.setState({body: e.target.value})}></textarea>
        </div>

        { this.state.title &&
          <div class="actions">
            <input type="submit" name="commit" value="Create Post" data-disable-with="Create Post"/>
          </div>
        }
      </form>
    )
  }

}