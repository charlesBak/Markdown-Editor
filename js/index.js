'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// marked output

var ReactMarkdown = function (_React$Component) {
  _inherits(ReactMarkdown, _React$Component);

  function ReactMarkdown(props) {
    _classCallCheck(this, ReactMarkdown);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props));

    _this.state = { text: '' };
    return _this;
  }

  ReactMarkdown.prototype.render = function render() {
    return React.createElement('div', { dangerouslySetInnerHTML: {
        __html: marked(this.props.text)
      } });
  };

  return ReactMarkdown;
}(React.Component);

function getDefaultText() {
  return ['# markdown-editor', '', 'You are free to use this if you feel the Need', '', '**some text**', '', '## Learn how to output unordered list', '', '* unordered list:', '  * first item', '  * second item', '  * third item'].join('\n');
}

var initialSource = getDefaultText();

// user editor 

var Editor = function (_React$Component2) {
  _inherits(Editor, _React$Component2);

  function Editor() {
    _classCallCheck(this, Editor);

    return _possibleConstructorReturn(this, _React$Component2.apply(this, arguments));
  }

  Editor.prototype.handleChange = function handleChange(e) {
    var val = e.target.value;
    this.props.onChange(val);
  };

  Editor.prototype.render = function render() {
    return React.createElement('textarea', { onChange: this.handleChange.bind(this), defaultValue: initialSource });
  };

  return Editor;
}(React.Component);

var MarkdownEditor = function (_React$Component3) {
  _inherits(MarkdownEditor, _React$Component3);

  function MarkdownEditor(props) {
    _classCallCheck(this, MarkdownEditor);

    var _this3 = _possibleConstructorReturn(this, _React$Component3.call(this, props));

    _this3.state = { text: initialSource };
    return _this3;
  }

  MarkdownEditor.prototype.onChange = function onChange(text) {
    this.setState({ text: text });
  };

  MarkdownEditor.prototype.render = function render() {
    return React.createElement(
      'div',
      { className: 'wrapper-div' },
      React.createElement(
        'div',
        { className: 'children-div' },
        React.createElement(
          'span',
          null,
          'Editor'
        ),
        React.createElement(Editor, { onChange: this.onChange.bind(this) })
      ),
      React.createElement(
        'div',
        { className: 'children-div' },
        React.createElement(
          'span',
          null,
          'Markdown'
        ),
        React.createElement(ReactMarkdown, { text: this.state.text })
      )
    );
  };

  return MarkdownEditor;
}(React.Component);

Editor.propTypes = {
  onChange: React.PropTypes.func.isRequired
};

ReactMarkdown.propTypes = {
  text: React.PropTypes.string
};
ReactMarkdown.defaultProps = {
  text: ''
};
React.render(React.createElement(MarkdownEditor, null), document.getElementById('app'));