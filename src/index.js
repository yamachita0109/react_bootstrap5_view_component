

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

/**
 * 部品化しない
 */
class Form extends React.Component {
  clickBtn() {
    alert(`${this.text.value}`)
  }

  render() {
    return (
      <div>
        <h2>おうえん</h2>
        <div class='bd-example'>
          <div class='mb-3'>
            <label class='form-label'>しったげきれい</label>
            <textarea class='form-control' rows='3' ref={text => { this.text = text }}></textarea>
          </div>
          <div class='mb-3'>
            <button type='button' class='btn btn-primary mb-3' onClick={() => this.clickBtn()}>おうえんする</button>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<Form />, document.getElementById('form1'))

////////////////////////////////////////////////// 

/**
 * ゴリゴリ部品化する
 */
class OuenForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myState1 : null
    }
  }

  render() {
    return (
      <div>
        <H2 name='おうえん' />
        <div class='bd-example'>
          <Shittagekirei />
          <OuenBtn />
        </div>
      </div>
    )
  }
}

class Shittagekirei extends React.Component {
  render() {
    return (
      <div class='mb-3'>
        <Label name='しったげきれい' />
        <TextArea rows='3' />
     </div>
    )
  }
}

class OuenBtn extends React.Component {
  hoge() {
    alert('hoge')
  }
  render() {
    return (
      <div class='mb-3'>
        <Btn
          name='おうえんする'
          clickFunction={this.hoge} />
      </div>
    )
  }
}

class H2 extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <h2>{this.props.name}</h2>
    )    
  }
} 

class Label extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <label class='form-label'>{this.props.name}</label>
    )    
  }
}

class TextArea extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const rows = this.props.rows ? this.props.rows : 3
    return (
      <textarea class='form-control' rows={rows} ref={hoge => { this.hoge = hoge }}></textarea>
    )    
  }
}

class Btn  extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const classN = (this.props.type ? this.props.type : 'btn-primary') + ' btn mb-3'
    return (
      <button type='button' className={classN} onClick={() => this.props.clickFunction()}>{this.props.name}</button>
    )    
  }
}

ReactDOM.render(<OuenForm />, document.getElementById('form2'))

////////////////////////////////////////////////// 
