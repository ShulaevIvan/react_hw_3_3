import React from "react";

const MessageHistory = (props) => {
    return (
        <React.Fragment>
            <ul>
                {props.list.map((msg) => {
                    if (msg.type === 'message') {
                        return (
                            <li key={msg.id}>
                                <div className="message-data">
                                    <span className="message-data-name"><i className="fa fa-circle online"></i> {msg.from.name}</span>
                                    <span className="message-data-time">{msg.time}</span>
                                </div>
                                <div className="message other-message float-right">{msg.text}</div>
                            </li>
                            );
                    }
                    else if (msg.type === 'typing') {
                        return (
                            <li key={msg.id}>
                                <div className="message-data">
                                    <span className="message-data-name"><i className="fa fa-circle online"></i>{msg.from.name}</span>
                                </div>
                                <div>...</div>
                            </li>
                        );
                    }
                    
                    return (
                        <li key={msg.id}>
                            <div className="message-data">
                                <span className="message-data-name"><i className="fa fa-circle online"></i>{msg.from.name}</span>
                                <span className="message-data-time">{msg.time}</span>
                            </div>
                            <div className="message my-message">{msg.text}</div>
                        </li>
                    );
                })}
            </ul>
        </React.Fragment>
    )
}

export default MessageHistory;