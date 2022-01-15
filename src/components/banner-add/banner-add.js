import React from 'react'
import './banner-add.css'
import BnPeople from '../../assets/img/bg-people.png'
import BnPeople2x from '../../assets/img/bg-people.@2x.png'

export default function BannerAdd() {
    return (
        <aside class="banner banner-bottom" role="doc-tip" aria-label="Submit a name">
            <img
                srcset={`${BnPeople} 750w, ${BnPeople2x} 1440w`}
                sizes="(min-width: 750px) 1440px, 100vw"
                class="banner__background" src="assets/img/bg-people.png"
                alt=""
                role="none" />
            <div class="banner__left">
                <h2 class="banner__heading">Is there anyone else you would want us to add?</h2>
            </div>
            <div class="banner__right">
                <button class="banner__cta">
                    Submit a name
                </button>
            </div>
        </aside>
    )
}
