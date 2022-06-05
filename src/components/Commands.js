import React from 'react'

export default function Commands() {
    return (
        <div id="command">
            <div className='container'>
            <div class="alert alert-primary" role="alert">
                Note - Each of the command needs to start With "Alexa" !
            </div>
            </div>
            <div class="container pt-2">
                <div class="row align-items-stretch">
                    <div class="c-dashboardInfo col-lg-3 col-md-6">
                        <div class="wrap">
                            <h4 class="heading heading5 hind-font medium-font-weight c-dashboardInfo__title"> Create Document</h4>
                            <span><i class="fa-solid fa-circle-info"></i> ( Creates a new empty doc ) </span>
                        </div>
                    </div>
                    <div class="c-dashboardInfo col-lg-3 col-md-6">
                        <div class="wrap">
                            <h4 class="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Save Document</h4>
                            <span><i class="fa-solid fa-circle-info"></i> ( Save Changes ) </span>
                        
                        </div>
                    </div>
                    <div class="c-dashboardInfo col-lg-3 col-md-6">
                        <div class="wrap">
                            <h4 class="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Download Document</h4>
                            <span><i class="fa-solid fa-circle-info"></i> ( Download in word File ) </span>
                        
                        </div>
                    </div>
                    <div class="c-dashboardInfo col-lg-3 col-md-6">
                        <div class="wrap">
                            <h4 class="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Share Document with "persons email id"</h4>
                            <span><i class="fa-solid fa-circle-info"></i> ( Share via email ) </span>
                        
                        </div>
                    </div>
                    <div class="c-dashboardInfo col-lg-3 col-md-6">
                        <div class="wrap">
                            <h4 class="heading heading5 hind-font medium-font-weight c-dashboardInfo__title"> Open Document "document id" </h4>
                            <span><i class="fa-solid fa-circle-info"></i> ( Open document by saying document id ) </span>
                         
                        </div>
                    </div>
                    <div class="c-dashboardInfo col-lg-3 col-md-6">
                        <div class="wrap">
                            <h4 class="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Enter Title "title name"</h4>
                            <span><i class="fa-solid fa-circle-info"></i> ( Enter title of doc ) </span>
                        
                        </div>
                    </div>
                    <div class="c-dashboardInfo col-lg-3 col-md-6">
                        <div class="wrap">
                            <h4 class="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Replace word "word1" with "word2"</h4>
                            <span><i class="fa-solid fa-circle-info"></i> ( Replaces word in doc) </span>
                        
                        </div>
                    </div>
                    <div class="c-dashboardInfo col-lg-3 col-md-6">
                        <div class="wrap">
                            <h4 class="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Delete word "word"</h4>
                            <span><i class="fa-solid fa-circle-info"></i> ( Deletes a particular word from doc ) </span>
                        
                        </div>
                    </div>
                    <div class="c-dashboardInfo col-lg-3 col-md-6">
                        <div class="wrap">
                            <h4 class="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Go to home</h4>
                            <span><i class="fa-solid fa-circle-info"></i> (Navigate to home Page ) </span>
                       
                        </div>
                    </div>
                    <div class="c-dashboardInfo col-lg-3 col-md-6">
                        <div class="wrap">
                            <h4 class="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Type "statement"</h4>
                            <span><i class="fa-solid fa-circle-info"></i> (Types document body ) </span>
                        
                        </div>
                    </div>
                    <div class="c-dashboardInfo col-lg-3 col-md-6">
                        <div class="wrap">
                            <h4 class="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Clear document</h4>
                            <span><i class="fa-solid fa-circle-info"></i> ( Clears Complete document content ) </span>
                        
                        </div>
                    </div>
                    <div class="c-dashboardInfo col-lg-3 col-md-6">
                        <div class="wrap">
                            <h4 class="heading heading5 hind-font medium-font-weight c-dashboardInfo__title">Clear last statement</h4>
                            <span><i class="fa-solid fa-circle-info"></i> ( Clears only the recent statement ) </span>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
