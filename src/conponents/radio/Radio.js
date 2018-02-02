import React, {Component} from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames';

require('./radio.css')
export default class Radio extends Component{
    constructor(props){
        super(props)
        this.state={
            checked:this.props.checked

        }
    }
    componentWillReceiveProps(props){

    }
    onChange(e){
        const checked = e.target.checked
        if(checked){
            this.props.onChange(this.props.value)
        }
        this.setState({
            checked:true
        })

    }
    getChecked(props){

    }
    render(){
        const { disabled, value, children,checked } = this.props;
console.log(checked)
        return (
            <label className="radio-wrap">
                <span className={classNames({
                    'radio-input':true,
                  'is-checked': checked,
                  'is-disabled': disabled,
                //   'is-focus': focus  
                })}>
                    <span className="radio-inner"></span>

                    <input type="radio"
                    onChange={this.onChange.bind(this)}
                    checked={checked}
                    className="radio-origin"
                    />    
                </span>   
                <span className="radio-label"> 
                {children}
                </span>
            </label>
        )
    }
}
