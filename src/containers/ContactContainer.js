import React from 'react'

class ContactContainer extends React.Component{
    state = {
        name: null,
        email: null,
        subject: null,
        message: null
    }


    render(){
        return(
            <div>
                <form>
                    <input type = "text" placeholder = "name" name = "name" value = {this.state.name} onChange /><br/>
                    <input type = "text" placeholder = "email" name = "email" value = {this.state.email} onChange /><br/>
                    <input type = "text" placeholder = "subject" name = "subject" value = {this.state.subject} onChange /><br/>
                    <textarea type = "text" placeholder = "message" name = "message" value = {this.state.message} onChange /><br/>
                    <input type="submit"/>

                </form>
            </div>
        )
    }
}

export default ContactContainer