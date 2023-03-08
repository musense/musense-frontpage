import React from "react";
import './../../css/mainContent.css'
import MiscButtonContentList from "./miscButtonContentList";

export default function MainContent({ content }) {

    return (
        <div className="main-content-wrapper">
            <div className="content-left-side">
                <h1 className="content-title">{content.title}</h1>
                <div className="content-misc">
                    <div className="content-tags">{
                        content.tag.split(',').map((tag, index) => {
                            return <span key={index}>#&nbsp;{tag}&nbsp;&nbsp;&nbsp;</span>
                        })}
                    </div>
                    <div className="content-create-date">
                        {/* {`${new Date(content.createDate).toLocaleDateString()} ${new Date(content.createDate).toLocaleTimeString()}`} */}
                        {`${new Date(content.createDate).toLocaleDateString('en-ZA')}`}
                    </div>
                </div>
                <div
                    className="content-main-content"
                    dangerouslySetInnerHTML={{ __html: content.content }}
                />
                <MiscButtonContentList />
            </div>
            <div className="content-right-side"></div>
        </div>

    );
}
