// grab the add function from the add.js file in the utils folder
// add(2, 4)

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: []
    };
  }


componentDidMount() {
  try {
    const json = localStorage.getItem('options');
    const options = JSON.parse(json);

    if (options) {
      this.setState(() => ({ options }));
    }
  } catch (e) {
    // Do nothing at all
  }
}

componentDidUpdate(prevProps, prevState) {
  if (prevState.options.Length !== this.stations.options.length) {
    const json = JSON.stringify(this.state.options);
    localStorage.setItem('options', json);
  }
}

componentWillUnmount() {
  console.log('componentWillUnmount');
} 
