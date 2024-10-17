import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import NavigationLinks from '../components/navigation-links'
import Component1 from '../components/component1'
import BlogPostCard1 from '../components/blog-post-card1'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container100">
      <Helmet>
        <title>Ruby Smith | MIXSMITH</title>
        <meta property="og:title" content="Ruby Smith | MIXSMITH" />
      </Helmet>
      <section className="home-hero">
        <header data-role="Header" className="home-header navbar">
          <span className="home-text100">
            <span className="home-text101">
              RUBY
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
            <span className="home-text102">SMITH</span>
          </span>
          <div className="home-nav1">
            <NavigationLinks rootClassName="rootClassName17"></NavigationLinks>
          </div>
          <div data-role="BurgerMenu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon10">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-role="MobileMenu" className="home-mobile-menu">
            <div className="home-nav2">
              <div className="home-container101">
                <div
                  data-role="CloseMobileMenu"
                  className="home-close-mobile-menu"
                >
                  <svg viewBox="0 0 1024 1024" className="home-icon12">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <NavigationLinks rootClassName="rootClassName18"></NavigationLinks>
            </div>
            <div className="home-icon-group"></div>
          </div>
        </header>
      </section>
      <div className="home-mobile-photo">
        <img
          alt="image"
          src="https://freight.cargo.site/w/1000/q/75/i/7b4657985ec23c398deb3e89e5b0824834f44d4c9fe305046822e083954f573d/linhnguyen_ruby_linhnguyen_010.jpg"
          className="home-image100"
        />
      </div>
      <section className="home-discography-og">
        <div className="home-slider1 slider blaze-slider">
          <div className="home-slider-container1 blaze-container">
            <div className="home-slider-track-container1 blaze-track-container">
              <div className="home-slider-track1 blaze-track">
                <div data-role="current-banner" className="home-slide10 banner">
                  <img
                    alt="image"
                    src="https://freight.cargo.site/w/400/q/75/i/8a6a6f5864d1aabf875f2975d36a89e343e21a660857e36c62908c6e889ad3e1/nenah-3.jpg"
                    className="home-image101"
                  />
                </div>
                <div data-role="current-banner" className="home-slide11 banner">
                  <span className="home-text103">
                    <br className="home-text104"></br>
                    <span className="home-text105">
                      &apos;Tower Of God&apos;
                    </span>
                    <br className="home-text106"></br>
                    <span className="home-text107">Soundtrack</span>
                    <br className="home-text108"></br>
                    <span className="home-text109">Kevin Penkin</span>
                    <br className="home-text110"></br>
                    <br className="home-text111"></br>
                    <span className="home-text112">Recording Engineer</span>
                    <br></br>
                    <br></br>
                  </span>
                  <img
                    alt="image"
                    src="https://freight.cargo.site/t/original/i/91bb0f0a661e5d6c02ca83220c02b2b0a454dec89512036d3aa6c613c4d186d6/towerofgod.jpg"
                    className="home-image102"
                  />
                </div>
                <div data-role="current-banner" className="home-slide12 banner">
                  <span className="home-text115">
                    <br className="home-text116"></br>
                    <span className="home-text117">MEMA.</span>
                    <br className="home-text118"></br>
                    <span className="home-text119">&apos;Ligas</span>
                    <span className="home-text120">&apos;</span>
                    <br className="home-text121"></br>
                    <br className="home-text122"></br>
                    <span className="home-text123">Mix Engineer</span>
                    <br></br>
                    <br></br>
                  </span>
                  <img
                    alt="image"
                    src="https://i1.sndcdn.com/artworks-sIuKNXKwzlGixyS5-GpR8jg-t500x500.jpg"
                    className="home-image103"
                  />
                </div>
                <div data-role="current-banner" className="home-slide13 banner">
                  <img
                    alt="image"
                    src="https://freight.cargo.site/w/700/q/75/i/b91383f579fe82e6e3f53df93664fa43bc82a7cfd0a496885d2e650dde41bc24/BIRHTDAY-COVER--scaled.jpeg"
                    className="home-image104"
                  />
                  <span className="home-text126">
                    <br className="home-text127"></br>
                    <span className="home-text128">Vivi Thill</span>
                    <br className="home-text129"></br>
                    <span className="home-text130">
                      &apos;i don&apos;t like my birthday&apos;
                    </span>
                    <br className="home-text131"></br>
                    <br className="home-text132"></br>
                    <span className="home-text133">Mix Engineer</span>
                    <br></br>
                    <br></br>
                  </span>
                </div>
                <div data-role="current-banner" className="home-slide14 banner">
                  <span className="home-text136">
                    <br className="home-text137"></br>
                    <span className="home-text138">Nenah</span>
                    <br className="home-text139"></br>
                    <span className="home-text140">&apos;Sick&apos;</span>
                    <br className="home-text141"></br>
                    <br className="home-text142"></br>
                    <span className="home-text143">Recording Engineer</span>
                    <br></br>
                    <br></br>
                  </span>
                  <img
                    alt="image"
                    src="https://freight.cargo.site/w/400/q/75/i/4779634ee4d87ff48ba5259c177f2edb51384ce0cf96466739d038762594406b/nenah.jpg"
                    className="home-image105"
                  />
                </div>
                <div data-role="current-banner" className="home-slide15 banner">
                  <span className="home-text146">
                    <br className="home-text147"></br>
                    <span className="home-text148">Jade Empress</span>
                    <br className="home-text149"></br>
                    <span className="home-text150">&apos;Golden Hours</span>
                    <span className="home-text151">&apos;</span>
                    <br className="home-text152"></br>
                    <br className="home-text153"></br>
                    <span className="home-text154">Mix Engineer</span>
                    <br></br>
                    <br></br>
                  </span>
                  <img
                    alt="image"
                    src="https://freight.cargo.site/w/400/q/75/i/0e5057fe059eea931492eaae1fa0e3ac0bb79d75d3f8b20a815de2da90472cab/golden-hours.jpeg"
                    className="home-image106"
                  />
                </div>
                <div data-role="current-banner" className="home-slide16 banner">
                  <span className="home-text157">
                    <br className="home-text158"></br>
                    <span className="home-text159">Juliana Davis</span>
                    <br className="home-text160"></br>
                    <span className="home-text161">&apos;Drinking Alone</span>
                    <span className="home-text162">&apos;</span>
                    <br className="home-text163"></br>
                    <br className="home-text164"></br>
                    <span className="home-text165">Mix Engineer</span>
                    <br></br>
                    <br></br>
                  </span>
                  <img
                    alt="image"
                    src="https://freight.cargo.site/w/500/q/75/i/0e2de127bc3d96174464c2abb8d6461e7abd961a823efb729f6429be20f0e825/Juliana-Drinking-Alone.jpeg"
                    className="home-image107"
                  />
                </div>
                <div data-role="current-banner" className="home-slide17 banner">
                  <img
                    alt="image"
                    src="https://freight.cargo.site/w/600/q/75/i/365505ee7c320fca0cd64419a231a723720fb348bacd9a6de151f994ef3386fd/kotakotakota.png"
                    className="home-image108"
                  />
                  <span className="home-text168">
                    <br className="home-text169"></br>
                    <span className="home-text170">Kota Banks</span>
                    <br className="home-text171"></br>
                    <span className="home-text172">
                      &apos;20 Missed Calls&apos;
                    </span>
                    <br className="home-text173"></br>
                    <br className="home-text174"></br>
                    <span className="home-text175">Recording Engineer</span>
                    <br></br>
                    <br></br>
                  </span>
                </div>
                <div data-role="current-banner" className="home-slide18 banner">
                  <span className="home-text178">
                    <br className="home-text179"></br>
                    <span className="home-text180">Benedict Cork</span>
                    <br className="home-text181"></br>
                    <span className="home-text182">
                      &apos;The Midnight Sessions&apos;
                    </span>
                    <br className="home-text183"></br>
                    <span className="home-text184">EP</span>
                    <br className="home-text185"></br>
                    <br className="home-text186"></br>
                    <span className="home-text187">Mix Engineer</span>
                    <br></br>
                    <br></br>
                  </span>
                  <img
                    alt="image"
                    src="https://freight.cargo.site/t/original/i/f53893b9bad4bd6626c2ced53e280551bcb9dea6fe15d520313ee610ef78a547/benedict-cork.jpg"
                    className="home-image109"
                  />
                </div>
                <div data-role="current-banner" className="home-slide19 banner">
                  <span className="home-text190">
                    <br className="home-text191"></br>
                    <span className="home-text192">Vivi Thill</span>
                    <br className="home-text193"></br>
                    <span className="home-text194">
                      &apos;don&apos;t break the heart
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br className="home-text195"></br>
                    <span className="home-text196">of a songwriter&apos;</span>
                    <br className="home-text197"></br>
                    <br className="home-text198"></br>
                    <span className="home-text199">Mix Engineer</span>
                    <br></br>
                    <br></br>
                  </span>
                  <img
                    alt="image"
                    src="https://freight.cargo.site/w/600/q/75/i/c27be1f3d6f7a6dd593ef7e44ca43a5b5d37df89bdcbcbc113c869bb1488bf6a/a1392942460_10.jpeg"
                    className="home-image110"
                  />
                </div>
                <div data-role="current-banner" className="home-slide20 banner">
                  <span className="home-text202">
                    <br className="home-text203"></br>
                    <span className="home-text204">Freddie Dickson</span>
                    <br className="home-text205"></br>
                    <span className="home-text206">
                      &apos;Idiot&apos;s Dream EP
                    </span>
                    <span className="home-text207">&apos;</span>
                    <br className="home-text208"></br>
                    <br className="home-text209"></br>
                    <span className="home-text210">Recording Engineer</span>
                    <br className="home-text211"></br>
                    <span className="home-text212">Mix Engineer</span>
                    <br className="home-text213"></br>
                    <span className="home-text214">Producer</span>
                    <br></br>
                    <br></br>
                  </span>
                  <img
                    alt="image"
                    src="https://freight.cargo.site/w/700/q/75/i/1a88dc27b47e1335e29b83e5df5df0ce11e256781c827a2da02032bebd245154/150937298_1518213858372527_7338739124970066346_o.jpeg"
                    className="home-image111"
                  />
                </div>
                <div data-role="current-banner" className="home-slide21 banner">
                  <span className="home-text217">
                    <br className="home-text218"></br>
                    <span className="home-text219">MEMA.</span>
                    <br className="home-text220"></br>
                    <span className="home-text221">&apos;Leve Escuro</span>
                    <span className="home-text222">&apos;</span>
                    <br className="home-text223"></br>
                    <span className="home-text224">Album</span>
                    <br className="home-text225"></br>
                    <br className="home-text226"></br>
                    <span className="home-text227">Mix Engineer</span>
                    <br></br>
                    <br></br>
                  </span>
                  <img
                    alt="image"
                    src="https://i.scdn.co/image/ab67616d0000b2730fb8066e3c560529a4d14feb"
                    className="home-image112"
                  />
                </div>
                <div data-role="current-banner" className="home-slide22 banner">
                  <img
                    alt="image"
                    src="https://freight.cargo.site/w/700/q/75/i/50fc70094115a398566c5333b3b3e99a3cdcd705c28778bcef0d2e27724a84b9/dancing-on-the-moon-1599217225-5lQzAHfpOq.jpg"
                    className="home-image113"
                  />
                  <span className="home-text230">
                    <br className="home-text231"></br>
                    <span className="home-text232">Unknown Brain ft.</span>
                    <br className="home-text233"></br>
                    <span className="home-text234">Luke Burr</span>
                    <br className="home-text235"></br>
                    <span className="home-text236">
                      &apos;Dancing On The Moon&apos;
                    </span>
                    <br className="home-text237"></br>
                    <br className="home-text238"></br>
                    <span className="home-text239">Recording Engineer</span>
                    <br></br>
                    <br></br>
                  </span>
                </div>
                <div data-role="current-banner" className="home-slide23 banner">
                  <span className="home-text242">
                    <br className="home-text243"></br>
                    <span className="home-text244">MEMA.</span>
                    <br className="home-text245"></br>
                    <span className="home-text246">&apos;Estou Bem&apos;</span>
                    <br className="home-text247"></br>
                    <br className="home-text248"></br>
                    <span className="home-text249">Mix Engineer</span>
                    <br></br>
                    <br></br>
                  </span>
                  <img
                    alt="image"
                    src="https://freight.cargo.site/w/600/q/75/i/7ffbe96d7bcadf082faee49e485b8ff6dbf69738fdc7b196ba26144b11ee15c9/mema-estou.jpeg"
                    className="home-image114"
                  />
                </div>
                <div data-role="current-banner" className="home-slide24 banner">
                  <span className="home-text252">
                    <br className="home-text253"></br>
                    <span className="home-text254">DOEXL</span>
                    <br className="home-text255"></br>
                    <span className="home-text256">&apos;MORPH EP&apos;</span>
                    <br className="home-text257"></br>
                    <br className="home-text258"></br>
                    <span className="home-text259">Mix Engineer</span>
                    <br></br>
                    <br></br>
                  </span>
                  <img
                    alt="image"
                    src="https://freight.cargo.site/w/400/q/75/i/f70e1a868082caf0a8d36d2e26067c628b811ee8e35901f11f5653aa609411d2/a2983916112_10.jpeg"
                    className="home-image115"
                  />
                </div>
                <div data-role="current-banner" className="home-slide25 banner">
                  <img
                    alt="image"
                    src="https://media.pitchfork.com/photos/5e50060794f6ea0009d3f367/1:1/w_600/Look%20At%20Us%20Now%20Dad_Banoffee.jpg"
                    className="home-image116"
                  />
                  <span className="home-text262">
                    <br className="home-text263"></br>
                    <span className="home-text264">Banoffee</span>
                    <br className="home-text265"></br>
                    <span className="home-text266">
                      &apos;One Night Stand&apos;
                    </span>
                    <br className="home-text267"></br>
                    <br className="home-text268"></br>
                    <span className="home-text269">Recording Engineer</span>
                    <br></br>
                    <br></br>
                  </span>
                </div>
                <div data-role="current-banner" className="home-slide26 banner">
                  <span className="home-text272">
                    <br className="home-text273"></br>
                    <span className="home-text274">Jubilee ft. IQ</span>
                    <br className="home-text275"></br>
                    <span className="home-text276">
                      &apos;Fulla Curve&apos;
                    </span>
                    <br className="home-text277"></br>
                    <br className="home-text278"></br>
                    <span className="home-text279">Recording Engineer</span>
                    <br></br>
                    <br></br>
                  </span>
                  <img
                    alt="image"
                    src="https://freight.cargo.site/w/600/q/75/i/01d4d8ebb25c394ba53de81eef6ff759c150f1c801ebf8df5f677f7d1be4ae6a/fullacurve.jpg"
                    className="home-image117"
                  />
                </div>
                <div data-role="current-banner" className="home-slide27 banner">
                  <span className="home-text282">
                    <br className="home-text283"></br>
                    <span className="home-text284">ie saga</span>
                    <br className="home-text285"></br>
                    <span className="home-text286">&apos;Lived Too Much</span>
                    <span className="home-text287">&apos;</span>
                    <br className="home-text288"></br>
                    <br className="home-text289"></br>
                    <span className="home-text290">Mix Engineer</span>
                    <br></br>
                    <br></br>
                  </span>
                  <img
                    alt="image"
                    src="https://freight.cargo.site/w/400/q/75/i/ab4f94d3e64dbb0729c198dbd15dbeb7ec5c31c1e866c34e5d2b89c9102fb00b/channels4_profile.jpeg"
                    className="home-image118"
                  />
                </div>
                <div data-role="current-banner" className="home-slide28 banner">
                  <img
                    alt="image"
                    src="https://freight.cargo.site/w/700/q/75/i/6f37f44aa29fbd1a7b468669f0df830a3707302244c587c365abfddf80436a66/192969776_324854565870652_5770942409640115315_n.jpeg"
                    className="home-image119"
                  />
                  <span className="home-text293">
                    <br className="home-text294"></br>
                    <span className="home-text295">Sandunes</span>
                    <br className="home-text296"></br>
                    <span className="home-text297">
                      &apos;A Little While&apos;
                    </span>
                    <br className="home-text298"></br>
                    <br className="home-text299"></br>
                    <span className="home-text300">Recording Engineer</span>
                    <br></br>
                    <br></br>
                  </span>
                </div>
              </div>
            </div>
            <div className="home-controls1">
              <button
                data-role="previous-banner-button"
                className="home-previous1 blaze-prev button"
              >
                <svg viewBox="0 0 1024 1024" className="home-icon14">
                  <path d="M498 166l-346 346 346 346-76 76-422-422 422-422z"></path>
                </svg>
              </button>
              <button
                data-role="next-banner-button"
                className="home-next1 blaze-next button"
              >
                <svg viewBox="0 0 1024 1024" className="home-icon16">
                  <path d="M250 176l92-90 426 426-426 426-92-90 338-336z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="home-container103">
            <Script
              html={`<script>
const el = document.querySelector('.blaze-slider')

new BlazeSlider(el, {
  all: {
    slidesToShow: 3,
    slideGap: '20px',
    loop: true,
    enableAutoplay: true,
    autoplayInterval: 800,
    transitionDuration: 0,
  },
})
</script>`}
            ></Script>
          </div>
        </div>
      </section>
      <section className="home-discography-mobile">
        <div className="home-container104">
          <div className="home-container105">
            <img
              alt="image"
              src="https://i1.sndcdn.com/artworks-nx3sgWQ77e5X-0-t500x500.jpg"
              className="home-image120 covert-art"
            />
            <div className="text-padding">
              <span className="home-text303 text-margin AArtistName">
                <span className="AArtistName">Florian</span>
                <br></br>
              </span>
              <span className="home-text306 text-margin ASongTitle">
                &quot;L.O.B.A&quot;
              </span>
              <span className="home-text307 text-margin">
                <span className="ARole">Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container107">
            <img
              alt="image"
              src="https://globalmoneyworld.com/wp-content/uploads/2024/03/Sophie-Sutton-Nurse-1170x1170.jpg"
              className="home-image121 covert-art"
            />
            <div className="text-padding">
              <span className="home-text310 text-margin AArtistName">
                Sophie Sutton
              </span>
              <span className="home-text311 text-margin">
                &quot;Nurse&quot;
              </span>
              <span className="home-text312 text-margin">
                <span className="ARole">Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container109">
            <img
              alt="image"
              src="https://m.media-amazon.com/images/I/61V6DweOBxL._UF1000,1000_QL80_.jpg"
              className="home-image122 covert-art"
            />
            <div className="home-container110 text-padding">
              <span className="home-text315 text-margin AArtistName">
                Joy Denalane
              </span>
              <span className="home-text316 text-margin">
                &quot;Willpower&quot;
              </span>
              <span className="home-text317 text-margin">
                <span className="ARole">Vocal Recording Engineer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container111">
            <img
              alt="image"
              src="https://i.scdn.co/image/ab67616d0000b2730fb8066e3c560529a4d14feb"
              className="home-image123 covert-art"
            />
            <div className="text-padding">
              <span className="home-text320 text-margin AArtistName">
                MEMA.
              </span>
              <span className="home-text321 text-margin">
                &quot;Leve Escura&quot;
              </span>
              <span className="home-text322 text-margin">
                <span className="ARole">Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container113">
            <img
              alt="image"
              src="https://freight.cargo.site/w/700/q/75/i/6f37f44aa29fbd1a7b468669f0df830a3707302244c587c365abfddf80436a66/192969776_324854565870652_5770942409640115315_n.jpeg"
              className="home-image124 covert-art"
            />
            <div className="text-padding">
              <span className="home-text325 text-margin AArtistName">
                Sandunes
              </span>
              <span className="home-text326 text-margin">
                &quot;A Little While&quot;
              </span>
              <span className="home-text327 text-margin">
                <span className="ARole">Vocal Recording Engineer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container115">
            <img
              alt="image"
              src="https://images.squarespace-cdn.com/content/v1/5d7018647df27100010e1f66/c8713beb-ebfd-49a0-a6fe-bef3ee4b28ec/Nicki+Minaj.png"
              className="home-image125 covert-art"
            />
            <div className="home-container116 text-padding">
              <span className="home-text330 text-margin AArtistName">
                Nikki Minaj
              </span>
              <span className="home-text331 text-margin">
                &quot;Are You Gone Already&quot;, &apos;Let Me Calm Down (ft. J
                Cole)&quot;, &quot;Pink Birthday&quot;, &quot;Blessings (ft
                Tasha Cobbs Leonard)&quot;
              </span>
              <span className="home-text332 text-margin">
                <span className="ARole">Assistant Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container117">
            <img
              alt="image"
              src="https://s3.amazonaws.com/media.thecrimson.com/photos/2023/11/20/191149_1367121.png"
              className="home-image126 covert-art"
            />
            <div className="home-container118 text-padding">
              <span className="home-text335 text-margin AArtistName">
                Sabrina Carpenter
              </span>
              <span className="home-text336 text-margin">
                &quot;fruitcake&quot;
              </span>
              <span className="home-text337 text-margin">
                <span className="ARole">Assistant Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container119">
            <img
              alt="image"
              src="https://freight.cargo.site/w/600/q/75/i/c27be1f3d6f7a6dd593ef7e44ca43a5b5d37df89bdcbcbc113c869bb1488bf6a/a1392942460_10.jpeg"
              className="home-image127 covert-art"
            />
            <div className="home-container120 text-padding">
              <span className="home-text340 text-margin AArtistName">
                Vivi Thill
              </span>
              <span className="home-text341 text-margin">
                &quot;don&apos;t break the heart of a songwriter&quot;
              </span>
              <span className="home-text342 text-margin">
                <span className="ARole">Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container121">
            <img
              alt="image"
              src="https://best-fit.transforms.svdcdn.com/production/albums/FLETCHER-In-Search-Of-The-Antidote-cover.jpg?w=768&amp;q=95&amp;auto=format&amp;fit=crop&amp;dm=1709979373&amp;s=f66637f31b36d75dc97b437bb2e22589"
              className="home-image128 covert-art"
            />
            <div className="home-container122 text-padding">
              <span className="home-text345 text-margin AArtistName">
                FLETCHER
              </span>
              <span className="home-text346 text-margin">
                &quot;In Search of the Antidote&quot;
              </span>
              <span className="home-text347 text-margin">
                <span className="ARole">Assistant Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container123">
            <img
              alt="image"
              src="https://freight.cargo.site/w/600/q/75/i/7ffbe96d7bcadf082faee49e485b8ff6dbf69738fdc7b196ba26144b11ee15c9/mema-estou.jpeg"
              className="home-image129 covert-art"
            />
            <div className="home-container124 text-padding">
              <span className="home-text350 text-margin AArtistName">
                MEMA.
              </span>
              <span className="home-text351 text-margin">
                &quot;Estou Bem&quot;
              </span>
              <span className="home-text352 text-margin">
                <span className="ARole">Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container125">
            <img
              alt="image"
              src="https://media.plus.rtl.de/music-deezer/cover/71ca8c4c88fdb45381c4291bd4233ff6/512x512-000000-80-0-0.jpg?tr=f-auto,w-512"
              className="home-image130 covert-art"
            />
            <div className="text-padding">
              <span className="home-text355 text-margin AArtistName">
                Benson Boone
              </span>
              <span className="home-text356 text-margin">
                &quot;Friend&quot;
              </span>
              <span className="home-text357 text-margin">
                <span className="ARole">Assistant Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container127">
            <img
              alt="image"
              src="https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/30/12/63/3012632f-1b2c-5d25-752e-f53e5ce653f2/24UMGIM36786.rgb.jpg/600x600bf-60.jpg"
              className="home-image131 covert-art"
            />
            <div className="text-padding">
              <span className="home-text360 text-margin">Joy Oladokun</span>
              <span className="home-text361 text-margin">
                &quot;Questions, Chaos &amp; Faith&quot;
              </span>
              <span className="home-text362 text-margin">
                <span className="ARole">Assistant Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container129">
            <img
              alt="image"
              src="https://freight.cargo.site/w/600/q/75/i/365505ee7c320fca0cd64419a231a723720fb348bacd9a6de151f994ef3386fd/kotakotakota.png"
              className="home-image132 covert-art"
            />
            <div className="text-padding">
              <span className="home-text365 text-margin AArtistName">
                Kota Banks
              </span>
              <span className="home-text366 text-margin">
                &quot;20 Missed Calls&quot;
              </span>
              <span className="home-text367 text-margin">
                <span className="ARole">Recording Engineer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container131">
            <img
              alt="image"
              src="https://media.pitchfork.com/photos/5e50060794f6ea0009d3f367/1:1/w_600/Look%20At%20Us%20Now%20Dad_Banoffee.jpg"
              className="home-image133 covert-art"
            />
            <div className="text-padding">
              <span className="home-text370 text-margin">
                <span className="AArtistName">Banoffee</span>
                <br></br>
              </span>
              <span className="home-text373 text-margin">
                &quot;One Night Stand&quot;
              </span>
              <span className="home-text374 text-margin">
                <span className="ARole">Recording Engineer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container133">
            <img
              alt="image"
              src="https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/1a/37/58/1a3758de-5489-bd50-1789-b2c45881b25f/196871612357.jpg/1200x1200bf-60.jpg"
              className="home-image134 covert-art"
            />
            <div className="home-container134 text-padding">
              <span className="home-text377 text-margin">
                <span>ETHAN BORTNICK</span>
                <br></br>
              </span>
              <span className="home-text380 text-margin">
                &quot;Luna Park EP&quot;
              </span>
              <span className="home-text381 text-margin">
                <span className="ARole">Assistant Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container135">
            <img
              alt="image"
              src="https://f4.bcbits.com/img/a0023412240_10.jpg"
              className="home-image135 covert-art"
            />
            <div className="text-padding">
              <span className="home-text384 text-margin">
                <span className="AArtistName">Jubilee ft. IQ</span>
                <br></br>
              </span>
              <span className="home-text387 text-margin">
                &quot;Fulla Curve&quot;
              </span>
              <span className="home-text388 text-margin">
                <span className="ARole">Recording Engineer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container137">
            <img
              alt="image"
              src="https://images.genius.com/8599e7b7490efd68cc3d6bf71d6961ce.1000x1000x1.png"
              className="home-image136 covert-art"
            />
            <div className="text-padding">
              <span className="home-text391 text-margin">
                <span className="AArtistName">Emeline</span>
                <br></br>
              </span>
              <span className="home-text394 text-margin">
                &quot;99 Boys&quot;
              </span>
              <span className="home-text395 text-margin">
                <span className="ARole">Assistant Mixer</span>
                <br></br>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container139">
            <img
              alt="image"
              src="https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/88/2e/c3/882ec3e7-1479-ae6f-b617-c29d2a5d83a0/7333475706225.jpg/1200x1200bb.jpg"
              className="home-image137 covert-art"
            />
            <div className="text-padding">
              <span className="home-text399 text-margin">
                <span className="AArtistName">COWZ</span>
                <br></br>
              </span>
              <span className="home-text402 text-margin">
                &quot;Most Fun I&apos;ve Had in Ages&quot;
              </span>
              <span className="home-text403 text-margin">
                <span className="ARole">Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container141">
            <img
              alt="image"
              src="https://freight.cargo.site/w/500/q/75/i/0e2de127bc3d96174464c2abb8d6461e7abd961a823efb729f6429be20f0e825/Juliana-Drinking-Alone.jpeg"
              className="home-image138 covert-art"
            />
            <div className="text-padding">
              <span className="home-text406 text-margin">
                <span className="AArtistName">Juliana Davis</span>
                <br></br>
              </span>
              <span className="home-text409 text-margin">
                &quot;Drinking Alone&quot;
              </span>
              <span className="home-text410 text-margin">
                <span className="ARole">Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container143">
            <img
              alt="image"
              src="https://i0.wp.com/loudwomen.org/wp-content/uploads/2024/01/420524143_339386165657004_6832940895509969388_n.jpg?fit=1053%2C1053&amp;ssl=1"
              className="home-image139 covert-art"
            />
            <div className="text-padding">
              <span className="home-text413 text-margin">
                <span className="AArtistName">COWZ</span>
                <br></br>
              </span>
              <span className="home-text416 text-margin">
                &quot;DOMINATION&quot;
              </span>
              <span className="home-text417 text-margin">
                <span className="ARole">Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container145">
            <img
              alt="image"
              src="https://i.scdn.co/image/ab67616d0000b273a4ee671334d431568e6adfa9"
              className="home-image140 covert-art"
            />
            <div className="text-padding">
              <span className="home-text420 text-margin">
                <span className="AArtistName">JEYMES SAMUEL</span>
                <br></br>
              </span>
              <span className="home-text423 text-margin">
                &quot;THE BOOK OF CLARENCE (The Motion Picture Soundtrack)&quot;
              </span>
              <span className="home-text424 text-margin">
                <span className="ARole">Assistant Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container147">
            <img
              alt="image"
              src="https://i1.sndcdn.com/artworks-sIuKNXKwzlGixyS5-GpR8jg-t500x500.jpg"
              className="home-image141 covert-art"
            />
            <div className="text-padding">
              <span className="home-text427 text-margin">
                <span className="AArtistName">MEMA.</span>
                <br></br>
              </span>
              <span className="home-text430 text-margin">
                &quot;Ligas&quot;
              </span>
              <span className="home-text431 text-margin">
                <span className="ARole">Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container149">
            <img
              alt="image"
              src="https://freight.cargo.site/w/400/q/75/i/f70e1a868082caf0a8d36d2e26067c628b811ee8e35901f11f5653aa609411d2/a2983916112_10.jpeg"
              className="home-image142 covert-art"
            />
            <div className="text-padding">
              <span className="home-text434 text-margin">
                <span className="AArtistName">DOEXL</span>
                <br></br>
              </span>
              <span className="home-text437 text-margin">
                &quot;Morph EP&quot;
              </span>
              <span className="home-text438 text-margin">
                <span className="ARole">Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container151">
            <img
              alt="image"
              src="https://freight.cargo.site/w/700/q/75/i/b91383f579fe82e6e3f53df93664fa43bc82a7cfd0a496885d2e650dde41bc24/BIRHTDAY-COVER--scaled.jpeg"
              className="home-image143 covert-art"
            />
            <div className="text-padding">
              <span className="home-text441 text-margin">
                <span className="AArtistName">Vivi Thill</span>
                <br></br>
              </span>
              <span className="home-text444 text-margin">
                &quot;i don&apos;t like my birthday&quot;
              </span>
              <span className="home-text445 text-margin">
                <span className="ARole">Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container153">
            <img
              alt="image"
              src="https://freight.cargo.site/t/original/i/f53893b9bad4bd6626c2ced53e280551bcb9dea6fe15d520313ee610ef78a547/benedict-cork.jpg"
              className="home-image144 covert-art"
            />
            <div className="text-padding">
              <span className="home-text448 text-margin">
                <span className="AArtistName">Benedict Cork</span>
                <br></br>
              </span>
              <span className="home-text451 text-margin">
                &quot;The Midnight Sessions&quot;
              </span>
              <span className="home-text452 text-margin">
                <span className="ARole">Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container155">
            <img
              alt="image"
              src="https://freight.cargo.site/w/700/q/75/i/50fc70094115a398566c5333b3b3e99a3cdcd705c28778bcef0d2e27724a84b9/dancing-on-the-moon-1599217225-5lQzAHfpOq.jpg"
              className="home-image145 covert-art"
            />
            <div className="home-container156 text-padding">
              <span className="home-text455 text-margin AArtistName">
                Unknown Brain ft. Luke Burr
              </span>
              <span className="home-text456 text-margin">
                &quot;Dancing On The Moon&quot;
              </span>
              <span className="home-text457 text-margin">
                <span className="ARole">Vocal Recording Engineer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container157">
            <img
              alt="image"
              src="https://freight.cargo.site/w/700/q/75/i/1a88dc27b47e1335e29b83e5df5df0ce11e256781c827a2da02032bebd245154/150937298_1518213858372527_7338739124970066346_o.jpeg"
              className="home-image146 covert-art"
            />
            <div className="text-padding">
              <span className="home-text460 text-margin">
                <span className="AArtistName">Freddie Dickson</span>
                <br></br>
              </span>
              <span className="home-text463 text-margin">
                &quot;Idiot&apos;s Dream EP&quot;
              </span>
              <span className="home-text464 text-margin">
                <span className="ARole">Producer / Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container159">
            <img
              alt="image"
              src="https://freight.cargo.site/w/400/q/75/i/0e5057fe059eea931492eaae1fa0e3ac0bb79d75d3f8b20a815de2da90472cab/golden-hours.jpeg"
              className="home-image147 covert-art"
            />
            <div className="text-padding">
              <span className="home-text467 text-margin">
                <span className="AArtistName">Jade Empress</span>
                <br></br>
              </span>
              <span className="home-text470 text-margin">
                &quot;Golden Hours&quot;
              </span>
              <span className="home-text471 text-margin">
                <span className="ARole">Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="home-discography-desktop">
        <div className="home-container161">
          <div className="home-container162">
            <img
              alt="image"
              src="https://i1.sndcdn.com/artworks-nx3sgWQ77e5X-0-t500x500.jpg"
              className="home-image148 covert-art"
            />
            <div className="text-padding">
              <span className="home-text474 text-margin AArtistName">
                <span className="AArtistName">Florian</span>
                <br></br>
              </span>
              <span className="home-text477 text-margin ASongTitle">
                &quot;L.O.B.A&quot;
              </span>
              <span className="home-text478 text-margin">
                <span className="ARole">Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container164">
            <img
              alt="image"
              src="https://globalmoneyworld.com/wp-content/uploads/2024/03/Sophie-Sutton-Nurse-1170x1170.jpg"
              className="home-image149 covert-art"
            />
            <div className="text-padding">
              <span className="home-text481 text-margin AArtistName">
                Sophie Sutton
              </span>
              <span className="home-text482 text-margin">
                &quot;Nurse&quot;
              </span>
              <span className="home-text483 text-margin">
                <span className="ARole">Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container166">
            <img
              alt="image"
              src="https://i.scdn.co/image/ab67616d0000b2738d690de2382ce84f64ca2272"
              className="home-image150 covert-art"
            />
            <div className="text-padding">
              <span className="home-text486 text-margin AArtistName">
                Lana Lubany
              </span>
              <span className="home-text487 text-margin">
                &quot;NAZARETH&quot;
              </span>
              <span className="home-text488 text-margin">
                <span className="ARole">Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container168">
            <img
              alt="image"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbogVSdMldR0kMqxJi4rgvTU-I8wnhjeHtnA&amp;s"
              className="home-image151 covert-art"
            />
            <div className="text-padding">
              <span className="home-text491 AArtistName text-margin">RYL0</span>
              <span className="home-text492 text-margin">
                &quot;Gimme A Break&quot;
              </span>
              <span className="home-text493 text-margin">
                <span className="ARole">Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container170">
            <img
              alt="image"
              src="https://images.squarespace-cdn.com/content/v1/5d7018647df27100010e1f66/c8713beb-ebfd-49a0-a6fe-bef3ee4b28ec/Nicki+Minaj.png"
              className="home-image152 covert-art"
            />
            <div className="home-container171 text-padding">
              <span className="home-text496 AArtistName text-margin">
                Nikki Minaj
              </span>
              <span className="home-text497 text-margin">
                &quot;Are You Gone Already&quot;, &apos;Let Me Calm Down (ft. J
                Cole)&quot;, &quot;Pink Birthday&quot;, &quot;Blessings (ft
                Tasha Cobbs Leonard)&quot;
              </span>
              <span className="home-text498 text-margin">
                <span className="ARole">Assistant Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container172">
            <img
              alt="image"
              src="https://external-preview.redd.it/240524-newjeans-how-sweet-bubble-gum-v0-P0brvD4RUWW-OV2Ag0WeFc45AVflZFx1iGgJr1FxFwE.jpg?auto=webp&amp;s=90b2f2ed1c997fd24d0010e260b8ed85987c5d00"
              className="home-image153 covert-art"
            />
            <div className="home-container173 text-padding">
              <span className="home-text501 text-margin AArtistName">
                NewJeans
              </span>
              <span className="home-text502 text-margin">
                &quot;How Sweet &amp; Bubble Gum&quot;
              </span>
              <span className="home-text503 text-margin">
                <span className="ARole">Assistant Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container174">
            <img
              alt="image"
              src="https://cdns-images.dzcdn.net/images/cover/3d8d343008427bca7f1f7f30281d5bb0/0x1900-000000-80-0-0.jpg"
              className="home-image154 covert-art"
            />
            <div className="home-container175 text-padding">
              <span className="home-text506 text-margin AArtistName">
                Jessie Murph
              </span>
              <span className="home-text507 text-margin">
                &quot;That Ain&apos;t No Man That&apos;s The Devil&quot;
              </span>
              <span className="home-text508 text-margin">
                <span className="ARole">Assistant Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container176">
            <img
              alt="image"
              src="https://i1.sndcdn.com/artworks-8vxxbW8sFS0f-0-t500x500.jpg"
              className="home-image155 covert-art"
            />
            <div className="text-padding">
              <span className="home-text511 text-margin AArtistName">
                Lana Lubany
              </span>
              <span className="home-text512 text-margin">
                &quot;PRAYERS&quot;
              </span>
              <span className="home-text513 text-margin">
                <span className="ARole">Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container178">
            <img
              alt="image"
              src="https://i.scdn.co/image/ab67616d0000b2730fb8066e3c560529a4d14feb"
              className="home-image156 covert-art"
            />
            <div className="text-padding">
              <span className="home-text516 AArtistName text-margin">
                MEMA.
              </span>
              <span className="home-text517 text-margin">
                &quot;Leve Escura&quot;
              </span>
              <span className="home-text518 text-margin">
                <span className="ARole">Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container180">
            <img
              alt="image"
              src="https://m.media-amazon.com/images/I/61V6DweOBxL._UF1000,1000_QL80_.jpg"
              className="home-image157 covert-art"
            />
            <div className="home-container181 text-padding">
              <span className="home-text521 AArtistName text-margin">
                Joy Denalane
              </span>
              <span className="home-text522 text-margin">
                &quot;Willpower&quot;
              </span>
              <span className="home-text523 text-margin">
                <span className="ARole">Vocal Recording Engineer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container182">
            <img
              alt="image"
              src="https://freight.cargo.site/w/700/q/75/i/6f37f44aa29fbd1a7b468669f0df830a3707302244c587c365abfddf80436a66/192969776_324854565870652_5770942409640115315_n.jpeg"
              className="home-image158 covert-art"
            />
            <div className="text-padding">
              <span className="home-text526 AArtistName text-margin">
                Sandunes
              </span>
              <span className="home-text527 text-margin">
                &quot;A Little While&quot;
              </span>
              <span className="home-text528 text-margin">
                <span className="ARole">Vocal Recording Engineer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container184">
            <img
              alt="image"
              src="https://s3.amazonaws.com/media.thecrimson.com/photos/2023/11/20/191149_1367121.png"
              className="home-image159 covert-art"
            />
            <div className="home-container185 text-padding">
              <span className="home-text531 AArtistName text-margin">
                Sabrina Carpenter
              </span>
              <span className="home-text532 text-margin">
                &quot;fruitcake&quot;
              </span>
              <span className="home-text533 text-margin">
                <span className="ARole">Assistant Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container186">
            <img
              alt="image"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkY7R3kob8ExoyOzxryMUk2VVQohAG64clzA&amp;s"
              className="home-image160 covert-art"
            />
            <div className="home-container187 text-padding">
              <span className="home-text536 text-margin AArtistName">
                Joy Oladokun
              </span>
              <span className="home-text537 text-margin">
                &quot;Observations From A Crouded Room&quot;
              </span>
              <span className="home-text538 text-margin">
                <span className="ARole">Assistant Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container188">
            <img
              alt="image"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaFw9hJfcd9P2LWcuG1MweqRXQjZoeaUqnbQ&amp;s"
              className="home-image161 covert-art"
            />
            <div className="home-container189 text-padding">
              <span className="home-text541 text-margin AArtistName">
                Gold Fang
              </span>
              <span className="home-text542 text-margin">&quot;OTW&quot;</span>
              <span className="home-text543 text-margin">
                <span className="ARole"> Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container190">
            <img
              alt="image"
              src="https://freight.cargo.site/w/600/q/75/i/c27be1f3d6f7a6dd593ef7e44ca43a5b5d37df89bdcbcbc113c869bb1488bf6a/a1392942460_10.jpeg"
              className="home-image162 covert-art"
            />
            <div className="home-container191 text-padding">
              <span className="home-text546 AArtistName text-margin">
                Vivi Thill
              </span>
              <span className="home-text547 text-margin">
                &quot;don&apos;t break the heart of a songwriter&quot;
              </span>
              <span className="home-text548 text-margin">
                <span className="ARole">Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container192">
            <img
              alt="image"
              src="https://i1.sndcdn.com/artworks-UQiCpW6VSlWP-0-t500x500.jpg"
              className="home-image163 covert-art"
            />
            <div className="home-container193 text-padding">
              <span className="home-text551 text-margin AArtistName">
                Isaac Dunbar
              </span>
              <span className="home-text552 text-margin">
                &quot;Take It Slow&quot;
              </span>
              <span className="home-text553 text-margin">
                <span className="ARole">Assistant Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container194">
            <img
              alt="image"
              src="https://i.scdn.co/image/ab67616d0000b2735cc25fe48201f6e9ab0e4fe9"
              className="home-image164 covert-art"
            />
            <div className="home-container195 text-padding">
              <span className="home-text556 AArtistName text-margin">
                Stephen Dawes
              </span>
              <span className="home-text557 text-margin">
                &quot;Up At Night&quot;
              </span>
              <span className="home-text558 text-margin">
                <span className="ARole">Assistant Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container196">
            <img
              alt="image"
              src="https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/1a/37/58/1a3758de-5489-bd50-1789-b2c45881b25f/196871612357.jpg/1200x1200bf-60.jpg"
              className="home-image165 covert-art"
            />
            <div className="home-container197 text-padding">
              <span className="home-text561 text-margin">
                <span className="home-text562">Ethan Bortnick</span>
                <br></br>
              </span>
              <span className="home-text564 text-margin">
                &quot;Luna Park EP&quot;
              </span>
              <span className="home-text565 text-margin">
                <span className="ARole">Assistant Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container198">
            <img
              alt="image"
              src="https://best-fit.transforms.svdcdn.com/production/albums/FLETCHER-In-Search-Of-The-Antidote-cover.jpg?w=768&amp;q=95&amp;auto=format&amp;fit=crop&amp;dm=1709979373&amp;s=f66637f31b36d75dc97b437bb2e22589"
              className="home-image166 covert-art"
            />
            <div className="home-container199 text-padding">
              <span className="home-text568 AArtistName text-margin">
                FLETCHER
              </span>
              <span className="home-text569 text-margin">
                &quot;In Search of the Antidote&quot;
              </span>
              <span className="home-text570 text-margin">
                <span className="ARole">Assistant Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container200">
            <img
              alt="image"
              src="https://i1.sndcdn.com/artworks-AjUjeVyG3SSV-0-t500x500.jpg"
              className="home-image167 covert-art"
            />
            <div className="home-container201 text-padding">
              <span className="home-text573 text-margin AArtistName">
                CLINTON KANE
              </span>
              <span className="home-text574 text-margin">
                &quot;I DON&quot;T WANNA LIVE IN A WORLD WITHOUT YOU&quot;
              </span>
              <span className="home-text575 text-margin">
                <span className="ARole">Assistant Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container202">
            <img
              alt="image"
              src="https://i.scdn.co/image/ab67616d0000b2730e42e7b94b4af42e8d17b290"
              className="home-image168 covert-art"
            />
            <div className="home-container203 text-padding">
              <span className="home-text578 text-margin AArtistName">
                CLINTON KANE
              </span>
              <span className="home-text579 text-margin">
                &quot;MAKE ME YOUR MONSTER&quot;
              </span>
              <span className="home-text580 text-margin">
                <span className="ARole">Assistant Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container204">
            <img
              alt="image"
              src="https://i.scdn.co/image/ab67616d0000b273b0e0da5088193efb85d899bd"
              className="home-image169 covert-art"
            />
            <div className="home-container205 text-padding">
              <span className="home-text583 text-margin AArtistName">
                EMMY MELI
              </span>
              <span className="home-text584 text-margin">
                &quot;Hello Stranger&quot;
              </span>
              <span className="home-text585 text-margin">
                <span className="ARole">Assistant Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container206">
            <img
              alt="image"
              src="https://freight.cargo.site/w/600/q/75/i/7ffbe96d7bcadf082faee49e485b8ff6dbf69738fdc7b196ba26144b11ee15c9/mema-estou.jpeg"
              className="home-image170 covert-art"
            />
            <div className="home-container207 text-padding">
              <span className="home-text588 AArtistName text-margin">
                MEMA.
              </span>
              <span className="home-text589 text-margin">
                &quot;Estou Bem&quot;
              </span>
              <span className="home-text590 text-margin">
                <span className="ARole">Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container208">
            <img
              alt="image"
              src="https://images.squarespace-cdn.com/content/v1/59b26999c534a5103807a19c/c3b53a06-5cd2-4ef8-813b-d4a1c1fb8d36/Austel+Dead+Sea+Final+Album+Artwork+.jpg"
              className="home-image171 covert-art"
            />
            <div className="home-container209 text-padding">
              <span className="home-text593 text-margin AArtistName">
                AUSTEL
              </span>
              <span className="home-text594 text-margin">
                &quot;Cut Me Down&quot;
              </span>
              <span className="home-text595 text-margin">
                <span className="ARole">Producer / Mixer / Engineer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container210">
            <img
              alt="image"
              src="https://freight.cargo.site/w/600/q/75/i/365505ee7c320fca0cd64419a231a723720fb348bacd9a6de151f994ef3386fd/kotakotakota.png"
              className="home-image172 covert-art"
            />
            <div className="text-padding">
              <span className="home-text598 AArtistName text-margin">
                Kota Banks
              </span>
              <span className="home-text599 text-margin">
                &quot;20 Missed Calls&quot;
              </span>
              <span className="home-text600 text-margin">
                <span className="ARole">Recording Engineer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container212">
            <img
              alt="image"
              src="https://media.plus.rtl.de/music-deezer/cover/71ca8c4c88fdb45381c4291bd4233ff6/512x512-000000-80-0-0.jpg?tr=f-auto,w-512"
              className="home-image173 covert-art"
            />
            <div className="text-padding">
              <span className="home-text603 text-margin AArtistName">
                Benson Boone
              </span>
              <span className="home-text604 text-margin">
                &quot;Friend&quot;
              </span>
              <span className="home-text605 text-margin">
                <span className="ARole">Assistant Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container214">
            <img
              alt="image"
              src="https://media.pitchfork.com/photos/5e50060794f6ea0009d3f367/1:1/w_600/Look%20At%20Us%20Now%20Dad_Banoffee.jpg"
              className="home-image174 covert-art"
            />
            <div className="text-padding">
              <span className="home-text608 text-margin">
                <span className="AArtistName">Banoffee</span>
                <br></br>
              </span>
              <span className="home-text611 text-margin">
                &quot;One Night Stand&quot;
              </span>
              <span className="home-text612 text-margin">
                <span className="ARole">Recording Engineer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container216">
            <img
              alt="image"
              src="https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/30/12/63/3012632f-1b2c-5d25-752e-f53e5ce653f2/24UMGIM36786.rgb.jpg/600x600bf-60.jpg"
              className="home-image175 covert-art"
            />
            <div className="text-padding">
              <span className="home-text615 text-margin">Joy Oladokun</span>
              <span className="home-text616 text-margin">
                &quot;Questions, Chaos &amp; Faith&quot;
              </span>
              <span className="home-text617 text-margin">
                <span className="ARole">Assistant Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container218">
            <img
              alt="image"
              src="https://cdns-images.dzcdn.net/images/cover/320762a745f31c5c5eaf6d7c343705b7/1900x1900-000000-80-0-0.jpg"
              className="home-image176 covert-art"
            />
            <div className="text-padding">
              <span className="home-text620 text-margin">Sophie Sutton</span>
              <span className="home-text621 text-margin">
                &quot;Burden&quot;
              </span>
              <span className="home-text622 text-margin">
                <span className="ARole">Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container220">
            <img
              alt="image"
              src="https://f4.bcbits.com/img/a0023412240_10.jpg"
              className="home-image177 covert-art"
            />
            <div className="text-padding">
              <span className="home-text625 text-margin">
                <span className="AArtistName">Jubilee ft. IQ</span>
                <br></br>
              </span>
              <span className="home-text628 text-margin">
                &quot;Fulla Curve&quot;
              </span>
              <span className="home-text629 text-margin">
                <span className="ARole">Recording Engineer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container222">
            <img
              alt="image"
              src="https://images.genius.com/8599e7b7490efd68cc3d6bf71d6961ce.1000x1000x1.png"
              className="home-image178 covert-art"
            />
            <div className="text-padding">
              <span className="home-text632 text-margin">
                <span className="AArtistName">Emeline</span>
                <br></br>
              </span>
              <span className="home-text635 text-margin">
                &quot;99 Boys&quot;
              </span>
              <span className="home-text636 text-margin">
                <span className="ARole">Assistant Mixer</span>
                <br></br>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container224">
            <img
              alt="image"
              src="https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/88/2e/c3/882ec3e7-1479-ae6f-b617-c29d2a5d83a0/7333475706225.jpg/1200x1200bb.jpg"
              className="home-image179 covert-art"
            />
            <div className="text-padding">
              <span className="home-text640 text-margin">
                <span className="AArtistName">COWZ</span>
                <br></br>
              </span>
              <span className="home-text643 text-margin">
                &quot;Most Fun I&apos;ve Had in Ages&quot;
              </span>
              <span className="home-text644 text-margin">
                <span className="ARole">Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container226">
            <img
              alt="image"
              src="https://freight.cargo.site/w/500/q/75/i/0e2de127bc3d96174464c2abb8d6461e7abd961a823efb729f6429be20f0e825/Juliana-Drinking-Alone.jpeg"
              className="home-image180 covert-art"
            />
            <div className="text-padding">
              <span className="home-text647 text-margin">
                <span className="AArtistName">Juliana Davis</span>
                <br></br>
              </span>
              <span className="home-text650 text-margin">
                &quot;Drinking Alone&quot;
              </span>
              <span className="home-text651 text-margin">
                <span className="ARole">Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container228">
            <img
              alt="image"
              src="https://i0.wp.com/loudwomen.org/wp-content/uploads/2024/01/420524143_339386165657004_6832940895509969388_n.jpg?fit=1053%2C1053&amp;ssl=1"
              className="home-image181 covert-art"
            />
            <div className="text-padding">
              <span className="home-text654 text-margin">
                <span className="AArtistName">COWZ</span>
                <br></br>
              </span>
              <span className="home-text657 text-margin">
                &quot;DOMINATION&quot;
              </span>
              <span className="home-text658 text-margin">
                <span className="ARole">Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container230">
            <img
              alt="image"
              src="https://i.scdn.co/image/ab67616d0000b273a4ee671334d431568e6adfa9"
              className="home-image182 covert-art"
            />
            <div className="text-padding">
              <span className="home-text661 text-margin">
                <span className="AArtistName">JEYMES SAMUEL</span>
                <br></br>
              </span>
              <span className="home-text664 text-margin">
                &quot;THE BOOK OF CLARENCE (The Motion Picture Soundtrack)&quot;
              </span>
              <span className="home-text665 text-margin">
                <span className="ARole">Assistant Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container232">
            <img
              alt="image"
              src="https://i1.sndcdn.com/artworks-sIuKNXKwzlGixyS5-GpR8jg-t500x500.jpg"
              className="home-image183 covert-art"
            />
            <div className="text-padding">
              <span className="home-text668 text-margin">
                <span className="AArtistName">MEMA.</span>
                <br></br>
              </span>
              <span className="home-text671 text-margin">
                &quot;Ligas&quot;
              </span>
              <span className="home-text672 text-margin">
                <span className="ARole">Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container234">
            <img
              alt="image"
              src="https://freight.cargo.site/w/400/q/75/i/f70e1a868082caf0a8d36d2e26067c628b811ee8e35901f11f5653aa609411d2/a2983916112_10.jpeg"
              className="home-image184 covert-art"
            />
            <div className="text-padding">
              <span className="home-text675 text-margin">
                <span className="AArtistName">DOEXL</span>
                <br></br>
              </span>
              <span className="home-text678 text-margin">
                &quot;Morph EP&quot;
              </span>
              <span className="home-text679 text-margin">
                <span className="ARole">Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container236">
            <img
              alt="image"
              src="https://freight.cargo.site/w/700/q/75/i/b91383f579fe82e6e3f53df93664fa43bc82a7cfd0a496885d2e650dde41bc24/BIRHTDAY-COVER--scaled.jpeg"
              className="home-image185 covert-art"
            />
            <div className="text-padding">
              <span className="home-text682 text-margin">
                <span className="AArtistName">Vivi Thill</span>
                <br></br>
              </span>
              <span className="home-text685 text-margin">
                &quot;i don&apos;t like my birthday&quot;
              </span>
              <span className="home-text686 text-margin">
                <span className="ARole">Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container238">
            <img
              alt="image"
              src="https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/65/30/c0/6530c0ea-7214-83c2-226f-c254b80f173a/659783312178_cover.jpg/486x486bb.png"
              className="home-image186 covert-art"
            />
            <div className="text-padding">
              <span className="home-text689 text-margin">
                <span className="AArtistName">Midheaven</span>
                <br></br>
              </span>
              <span className="home-text692 text-margin">
                &quot;Diet Shasta EP&quot;
              </span>
              <span className="home-text693 text-margin">
                <span className="ARole">Producer / Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container240">
            <img
              alt="image"
              src="https://freight.cargo.site/w/400/q/75/i/4779634ee4d87ff48ba5259c177f2edb51384ce0cf96466739d038762594406b/nenah.jpg"
              className="home-image187 covert-art"
            />
            <div className="text-padding">
              <span className="home-text696 text-margin">
                <span className="AArtistName">NENAH</span>
                <br></br>
              </span>
              <span className="home-text699 text-margin">&quot;Sick&quot;</span>
              <span className="home-text700 text-margin">
                <span className="ARole">Recording Engineer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container242">
            <img
              alt="image"
              src="https://freight.cargo.site/w/600/q/75/i/ccb4ff446613515f1996ce559f4c46dabcf9944adf091288bd4d459b44837e40/nenah-fake-fur.jpeg"
              className="home-image188 covert-art"
            />
            <div className="text-padding">
              <span className="home-text703 text-margin">
                <span className="AArtistName">NENAH</span>
                <br></br>
              </span>
              <span className="home-text706 text-margin">
                &quot;Fake Fur ft. Pianwoo&quot;
              </span>
              <span className="home-text707 text-margin">
                <span className="ARole">Recording Engineer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container244">
            <img
              alt="image"
              src="https://i1.sndcdn.com/artworks-fb5TB7IlpKWOFKOC-ySjmWw-t500x500.jpg"
              className="home-image189 covert-art"
            />
            <div className="home-container245 text-padding">
              <span className="home-text710 text-margin AArtistName">
                Florian
              </span>
              <span className="home-text711 text-margin">
                &quot;fr33ze&quot;
              </span>
              <span className="home-text712 text-margin">
                <span className="ARole">Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container246">
            <img
              alt="image"
              src="https://freight.cargo.site/t/original/i/f53893b9bad4bd6626c2ced53e280551bcb9dea6fe15d520313ee610ef78a547/benedict-cork.jpg"
              className="home-image190 covert-art"
            />
            <div className="text-padding">
              <span className="home-text715 text-margin">
                <span className="AArtistName">Benedict Cork</span>
                <br></br>
              </span>
              <span className="home-text718 text-margin">
                &quot;The Midnight Sessions&quot;
              </span>
              <span className="home-text719 text-margin">
                <span className="ARole">Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container248">
            <img
              alt="image"
              src="https://freight.cargo.site/w/700/q/75/i/50fc70094115a398566c5333b3b3e99a3cdcd705c28778bcef0d2e27724a84b9/dancing-on-the-moon-1599217225-5lQzAHfpOq.jpg"
              className="home-image191 covert-art"
            />
            <div className="home-container249 text-padding">
              <span className="home-text722 text-margin AArtistName">
                Unknown Brain ft. Luke Burr
              </span>
              <span className="home-text723 text-margin">
                &quot;Dancing On The Moon&quot;
              </span>
              <span className="home-text724 text-margin">
                <span className="ARole">Vocal Recording Engineer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container250">
            <img
              alt="image"
              src="https://freight.cargo.site/w/700/q/75/i/1a88dc27b47e1335e29b83e5df5df0ce11e256781c827a2da02032bebd245154/150937298_1518213858372527_7338739124970066346_o.jpeg"
              className="home-image192 covert-art"
            />
            <div className="text-padding">
              <span className="home-text727 text-margin">
                <span className="AArtistName">Freddie Dickson</span>
                <br></br>
              </span>
              <span className="home-text730 text-margin">
                &quot;Idiot&apos;s Dream EP&quot;
              </span>
              <span className="home-text731 text-margin">
                <span className="ARole">Producer / Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-container252">
            <img
              alt="image"
              src="https://freight.cargo.site/w/400/q/75/i/0e5057fe059eea931492eaae1fa0e3ac0bb79d75d3f8b20a815de2da90472cab/golden-hours.jpeg"
              className="home-image193 covert-art"
            />
            <div className="text-padding">
              <span className="home-text734 text-margin">
                <span className="AArtistName">Jade Empress</span>
                <br></br>
              </span>
              <span className="home-text737 text-margin">
                &quot;Golden Hours&quot;
              </span>
              <span className="home-text738 text-margin">
                <span className="ARole">Mixer</span>
                <br></br>
              </span>
            </div>
          </div>
        </div>
      </section>
      <div id="listen" className="home-spotify-player">
        <div className="home-container254">
          <div className="home-container255">
            <div className="home-container256">
              <svg viewBox="0 0 1024 1024" className="home-icon18">
                <path d="M250 176l92-90 426 426-426 426-92-90 338-336z"></path>
              </svg>
            </div>
            <h1 className="home-heading1">
              <span className="home-text741">LISTEN</span>
              <br></br>
            </h1>
          </div>
        </div>
        <div className="home-container257">
          <div className="home-container258">
            <Script
              html={`<iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/3t77EbWwWUgGWbzMkwqsqz?utm_source=generator&theme=0" width="100%" height="400px" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`}
            ></Script>
          </div>
        </div>
        <div className="home-live-sessions">
          <div className="home-container259">
            <div className="home-container260">
              <div className="home-container261">
                <Script
                  html={`<iframe width="420" height="280" src="https://www.youtube-nocookie.com/embed/nusuZ1bneQM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`}
                ></Script>
              </div>
            </div>
            <div className="home-container262">
              <div className="home-container263">
                <Script
                  html={`<iframe width="420" height="280" src="https://www.youtube-nocookie.com/embed/4a-5UhhmJ2M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`}
                ></Script>
              </div>
            </div>
          </div>
          <div className="home-container264">
            <span className="home-text743">
              Live Sessions recorded and mixed by Ruby Smith for Circle Studios
              by Sony Music
            </span>
          </div>
        </div>
      </div>
      <section id="about" className="home-about">
        <div className="home-container265">
          <div className="home-container266">
            <div className="home-container267">
              <div className="home-container268">
                <svg viewBox="0 0 1024 1024" className="home-icon20">
                  <path d="M250 176l92-90 426 426-426 426-92-90 338-336z"></path>
                </svg>
              </div>
              <h1 className="home-heading2">
                <span className="home-text744">ABOUT</span>
                <br></br>
              </h1>
            </div>
            <p className="home-caption">
              <span className="home-text746">Los Angeles</span>
              <span className="home-text747">
                {' '}
                based mixer working with stereo and immersive formats.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text748">
                Mentored by GRAMMY award winning mixer
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text749">Rob Kinelski</span>
              <span className="home-text750">
                , Smith is a rising talent set apart by her perspective being
                immersed in music scenes across the globe. From Brisbane, to
                London, to Berlin, to Los Angeles.
              </span>
              <br className="home-text751"></br>
              <br className="home-text752"></br>
              <span className="home-text753">
                Growing up in Australia, Smith cured small-town-boredom getting
                her first DAW at age 12, setting in motion a lifelong obsession
                with sound.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text754">
                Smith cut her teeth engineering in London and Berlin&apos;s
                lively studio scenes working out of 
              </span>
              <span className="home-text755">
                Sony Music&apos;s Circle Studios
              </span>
              <span className="home-text756">
                ,
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text757">Red Bull Music Studios</span>
              <span className="home-text758">
                ,
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text759">Strongroom Studios</span>
              <span className="home-text760">
                {' '}
                and
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text761">Noatune Studios</span>
              <span className="home-text762">
                . Working with a range of artists;
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text763">Joy Denalane</span>
              <span className="home-text764">
                ,
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span className="home-text765">
                Jubilee, Banoffee, Headie One
              </span>
              <span className="home-text766">, </span>
              <span className="home-text767">Kota Banks</span>
              <span className="home-text768"> </span>
              <span className="home-text769">+ more.</span>
              <br className="home-text770"></br>
              <br className="home-text771"></br>
              <span className="home-text772">
                Passionate about educating and empowering the next generation of
                music makers, Smith has lectured students at BIMM Berlin
                teaching Recording Techniques, Mixing, and Psychology of Music.
                As well as leading masterclasses for SAE mentoring rising
                producers.
              </span>
              <br></br>
            </p>
            <div className="home-container269">
              <a
                href="http://www.instagram.com/rubysmith.wav"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link1"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon22"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/ruby-smith-54b8221a4/"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link2"
              >
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon24 GreenHead1"
                >
                  <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="home-container270">
            <div className="home-container271">
              <span className="home-text774">
                <br className="home-text775"></br>
                <br className="home-text776"></br>
                <br className="home-text777"></br>
                <br className="home-text778"></br>
                <br className="home-text779"></br>
                <br className="home-text780"></br>
                <br className="home-text781"></br>
                <br className="home-text782"></br>
                <br className="home-text783"></br>
                <br className="home-text784"></br>
                <br className="home-text785"></br>
                <br className="home-text786"></br>
                <br className="home-text787"></br>
                <br className="home-text788"></br>
                <br className="home-text789"></br>
                <br className="home-text790"></br>
                <br className="home-text791"></br>
                <br className="home-text792"></br>
                <br className="home-text793"></br>
                <br className="home-text794"></br>
                <br className="home-text795"></br>
                <br className="home-text796"></br>
                <br className="home-text797"></br>
                <br className="home-text798"></br>
                <br className="home-text799"></br>
                <br className="home-text800"></br>
                <br className="home-text801"></br>
                <br className="home-text802"></br>
                <span className="home-text803">Photographed by</span>
                <span className="home-text804"> Linh Nguyen</span>
                <br></br>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="home-discography">
        <div className="home-slider2 slider blaze-slider">
          <div className="home-slider-container2 blaze-container">
            <div className="home-slider-track-container2 blaze-track-container">
              <div className="home-slider-track2 blaze-track">
                <div data-role="current-banner" className="home-slide29 banner">
                  <span className="home-text806">
                    <br className="home-text807"></br>
                    <span className="home-text808">Vivi Thill</span>
                    <br className="home-text809"></br>
                    <span className="home-text810">
                      &apos;don&apos;t break the heart
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br className="home-text811"></br>
                    <span className="home-text812">of a songwriter&apos;</span>
                    <br className="home-text813"></br>
                    <br className="home-text814"></br>
                    <span className="home-text815">Mix Engineer</span>
                    <br></br>
                    <br></br>
                  </span>
                  <img
                    alt="image"
                    src="https://freight.cargo.site/w/600/q/75/i/c27be1f3d6f7a6dd593ef7e44ca43a5b5d37df89bdcbcbc113c869bb1488bf6a/a1392942460_10.jpeg"
                    className="home-image194"
                  />
                </div>
                <div data-role="current-banner" className="home-slide30 banner">
                  <img
                    alt="image"
                    src="https://freight.cargo.site/w/600/q/75/i/365505ee7c320fca0cd64419a231a723720fb348bacd9a6de151f994ef3386fd/kotakotakota.png"
                    className="home-image195"
                  />
                  <span className="home-text818">
                    <br className="home-text819"></br>
                    <span className="home-text820">Kota Banks</span>
                    <br className="home-text821"></br>
                    <span className="home-text822">
                      &apos;20 Missed Calls&apos;
                    </span>
                    <br className="home-text823"></br>
                    <br className="home-text824"></br>
                    <span className="home-text825">Recording Engineer</span>
                    <br></br>
                    <br></br>
                  </span>
                </div>
                <div data-role="current-banner" className="home-slide31 banner">
                  <span className="home-text828">
                    <br className="home-text829"></br>
                    <span className="home-text830">MEMA.</span>
                    <br className="home-text831"></br>
                    <span className="home-text832">&apos;Estou Bem&apos;</span>
                    <br className="home-text833"></br>
                    <br className="home-text834"></br>
                    <span className="home-text835">Mix Engineer</span>
                    <br></br>
                    <br></br>
                  </span>
                  <img
                    alt="image"
                    src="https://freight.cargo.site/w/600/q/75/i/7ffbe96d7bcadf082faee49e485b8ff6dbf69738fdc7b196ba26144b11ee15c9/mema-estou.jpeg"
                    className="home-image196"
                  />
                </div>
                <div data-role="current-banner" className="home-slide32 banner">
                  <span className="home-text838"></span>
                  <img
                    alt="image"
                    src="https://freight.cargo.site/w/600/q/75/i/01d4d8ebb25c394ba53de81eef6ff759c150f1c801ebf8df5f677f7d1be4ae6a/fullacurve.jpg"
                    className="home-image197"
                  />
                </div>
                <div data-role="current-banner" className="home-slide33 banner">
                  <img
                    alt="image"
                    src="https://freight.cargo.site/w/700/q/75/i/6f37f44aa29fbd1a7b468669f0df830a3707302244c587c365abfddf80436a66/192969776_324854565870652_5770942409640115315_n.jpeg"
                    className="home-image198"
                  />
                  <span className="home-text839">
                    <br className="home-text840"></br>
                    <span className="home-text841">Sandunes</span>
                    <br className="home-text842"></br>
                    <span className="home-text843">
                      &apos;A Little While&apos;
                    </span>
                    <br className="home-text844"></br>
                    <br className="home-text845"></br>
                    <span className="home-text846">Recording Engineer</span>
                    <br></br>
                    <br></br>
                  </span>
                </div>
              </div>
            </div>
            <div className="home-controls2">
              <button
                data-role="previous-banner-button"
                className="home-previous2 blaze-prev button"
              >
                <svg viewBox="0 0 1024 1024" className="home-icon26">
                  <path d="M498 166l-346 346 346 346-76 76-422-422 422-422z"></path>
                </svg>
              </button>
              <button
                data-role="next-banner-button"
                className="home-next2 blaze-next button"
              >
                <svg viewBox="0 0 1024 1024" className="home-icon28">
                  <path d="M250 176l92-90 426 426-426 426-92-90 338-336z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div>
          <div className="home-container273">
            <Script
              html={`<script>
const el = document.querySelector('.blaze-slider')

new BlazeSlider(el, {
  all: {
    slidesToShow: 3,
    slideGap: '20px',
    loop: true,
    enableAutoplay: true,
    autoplayinterval: 500,
    transitionDuration: 0,
  },
})
</script>`}
            ></Script>
          </div>
        </div>
      </section>
      <div className="home-what-i-do-web">
        <div className="home-container274">
          <div id="whatido" className="home-container275">
            <div className="home-container276">
              <div className="home-container277">
                <svg viewBox="0 0 1024 1024" className="home-icon30">
                  <path d="M250 176l92-90 426 426-426 426-92-90 338-336z"></path>
                </svg>
              </div>
              <h1 className="home-heading3">
                <span className="home-text849">WHAT I DO</span>
                <br className="home-text850"></br>
              </h1>
            </div>
          </div>
          <div className="home-container278">
            <div className="home-container279">
              <span className="home-text851">
                <span className="home-text852">MIXING </span>
                <br></br>
                <span className="home-text854">
                   Stereo &amp; Dolby Atmos Mixing 
                </span>
                <br className="home-text855"></br>
                <span className="home-text856">
                   Vocal Tuning with Melodyne 
                </span>
                <br className="home-text857"></br>
                <span className="home-text858"> Vocalign  </span>
                <br className="home-text859"></br>
                <span className="home-text860"> Drum Editing </span>
                <br className="home-text861"></br>
                <span className="home-text862"> Podcast</span>
                <br className="home-text863"></br>
                <br className="home-text864"></br>
                <span className="home-text865">SOFTWARE I USE</span>
                <br className="home-text866"></br>
                <span className="home-text867"> Pro Tools HD</span>
                <br className="home-text868"></br>
                <span className="home-text869"> Logic Pro X</span>
                <br className="home-text870"></br>
                <span className="home-text871"> </span>
                <span className="home-text872">UAD Console</span>
                <br className="home-text873"></br>
                <span className="home-text874"> Izotope RX</span>
                <br className="home-text875"></br>
                <span className="home-text876"> Fab Filter Pro</span>
                <br className="home-text877"></br>
                <span className="home-text878">
                   Soundtoys
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br className="home-text879"></br>
                <span className="home-text880"> + more</span>
                <br className="home-text881"></br>
                <br className="home-text882"></br>
                <span className="home-text883">HARDWARE I USE</span>
                <br className="home-text884"></br>
                <span className="home-text885"> SSL4000G Series</span>
                <br className="home-text886"></br>
                <span className="home-text887"> SSL AWS 948</span>
                <br className="home-text888"></br>
                <span className="home-text889">
                   Outboard preamps, compressors &amp; EQs
                </span>
                <br className="home-text890"></br>
                <span className="home-text891">
                   Dante Level 1 Certification
                </span>
                <br className="home-text892"></br>
                <span className="home-text893">
                   Universal Audio Apollo Systems
                </span>
                <br className="home-text894"></br>
                <span className="home-text895">
                   Wireless In Ear Monitoring Systems
                </span>
                <br className="home-text896"></br>
                <span className="home-text897">
                   Wireless Microphone Systems
                </span>
                <br className="home-text898"></br>
                <span className="home-text899"> Ferrofish Converters</span>
                <br className="home-text900"></br>
                <span className="home-text901">
                   Antelope Orion Converters
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br className="home-text902"></br>
                <span className="home-text903"> + more</span>
                <br className="home-text904"></br>
              </span>
            </div>
            <span className="home-text905">
              <span className="home-text906">RECORDING </span>
              <br className="home-text907"></br>
              <span className="home-text908"> Vocal Tracking </span>
              <br className="home-text909"></br>
              <span className="home-text910"> Full band tracking </span>
              <br className="home-text911"></br>
              <span className="home-text912"> Live Sessions </span>
              <br className="home-text913"></br>
              <span className="home-text914"> Podcast &amp; Voiceover </span>
              <br className="home-text915"></br>
              <span className="home-text916"> Broadcast for livestream</span>
              <br className="home-text917"></br>
              <br className="home-text918"></br>
              <br className="home-text919"></br>
              <span className="home-text920">STUDIOS IVE WORKED FOR</span>
              <br className="home-text921"></br>
              <span className="home-text922">
                 Rob Kinelski - Assistant Mixer
              </span>
              <br className="home-text923"></br>
              <span className="home-text924">
                 Circle Studios by Sony Music
              </span>
              <br className="home-text925"></br>
              <span className="home-text926">
                 Red Bull Studios London &amp; Berlin
              </span>
              <br className="home-text927"></br>
              <span className="home-text928"> Strongroom Studios London</span>
              <br className="home-text929"></br>
              <span className="home-text930"> Noatune Studios London</span>
              <br className="home-text931"></br>
              <br className="home-text932"></br>
              <span className="home-text933">AWARDS</span>
              <br className="home-text934"></br>
              <span className="home-text935">
                 Awarded Scholarship for Mix With   The Masters, from We Are
                Moving   The Needle
              </span>
              <br className="home-text936"></br>
              <span className="home-text937">
                 Overall Winner of Shure x Red   Bull’s Soundscapes Competition
              </span>
              <br className="home-text938"></br>
              <span className="home-text939">
                 Madison Square Garden’s Up and   Coming Award
              </span>
              <br className="home-text940"></br>
              <br className="home-text941"></br>
              <span className="home-text942">MASTERCLASSES</span>
              <br className="home-text943"></br>
              <span className="home-text944"> P</span>
              <span className="home-text945">
                op Beuro x SAE Electronic   Barcamp
              </span>
              <br className="home-text946"></br>
            </span>
          </div>
        </div>
      </div>
      <div className="home-what-i-do-mobile">
        <div className="home-container280">
          <div className="home-container281">
            <div className="home-container282">
              <svg viewBox="0 0 1024 1024" className="home-icon32">
                <path d="M250 176l92-90 426 426-426 426-92-90 338-336z"></path>
              </svg>
            </div>
            <h1 className="home-heading4">
              <span className="home-text947">WHAT I DO</span>
              <br className="home-text948"></br>
            </h1>
          </div>
        </div>
        <div className="home-container283">
          <Component1></Component1>
        </div>
      </div>
      <div className="home-blog1">
        <h1 id="blog" className="home-heading5">
          <span className="home-text949">
                   
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <span className="home-text950">&gt;</span>
          <span className="home-text951">BLOG</span>
          <br></br>
        </h1>
      </div>
      <div className="home-blog2">
        <div className="home-container284">
          <BlogPostCard1
            label="ENGINEERING"
            title="Why I bounce and label stems the same way every time"
            author="Ruby"
            imageSrc="https://freight.cargo.site/w/700/q/75/i/cc96e14a645ddc6f1519f992742420d722b796593c13d23667012519958c551f/P1150624.jpg"
            profileSrc="https://freight.cargo.site/w/1000/q/75/i/7b4657985ec23c398deb3e89e5b0824834f44d4c9fe305046822e083954f573d/linhnguyen_ruby_linhnguyen_010.jpg"
            rootClassName="rootClassName3"
          ></BlogPostCard1>
        </div>
        <div className="home-container285">
          <BlogPostCard1
            title="The Engineer's Swiss Army Knife: My Go-To Tools for Any Recording Situation"
            author="Ruby"
            imageSrc="https://freight.cargo.site/w/1500/q/75/i/e566bfd5e3749ff2e622b56c64d7efc96e849888ced3969a6dfd4cc226d47e7a/7__Moog_Sound_Studio_Screwdriver.jpg"
            profileSrc="https://freight.cargo.site/w/1000/q/75/i/7b4657985ec23c398deb3e89e5b0824834f44d4c9fe305046822e083954f573d/linhnguyen_ruby_linhnguyen_010.jpg"
            rootClassName="rootClassName2"
          ></BlogPostCard1>
        </div>
        <div className="home-container286">
          <BlogPostCard1
            label="ENGINEERING"
            title="How I put the vocalists experience first in vocal recording sessions"
            author="Ruby"
            imageSrc="https://freight.cargo.site/w/600/q/94/i/017413563fde9f6ef826aa92132d22e23255927b3ca47e6cc8cceb4dd4c474b3/telefunken-u47-microphone.jpg"
            description="What do you listen for when you listen to music? For engineers and musicians alike, it's easy to catch yourself just listeni"
            profileSrc="https://freight.cargo.site/w/1000/q/75/i/7b4657985ec23c398deb3e89e5b0824834f44d4c9fe305046822e083954f573d/linhnguyen_ruby_linhnguyen_010.jpg"
            rootClassName="rootClassName1"
          ></BlogPostCard1>
        </div>
      </div>
      <section id="contact" className="home-contact">
        <div className="home-content1">
          <img
            alt="image"
            src="https://freight.cargo.site/w/400/q/75/i/7c0670ae8d6010db1918d143eb7bc3ff6c656a62b8908f3c6b0d706797758e07/New-Project-1.png"
            className="home-image199"
          />
          <div className="home-container287">
            <span className="home-text953">
              <br></br>
              <span>Stay in touch</span>
              <br></br>
            </span>
            <span className="home-text957">
              <span className="home-text958">For all enquiries:</span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <br></br>
              <span>ruby@rubysmith.xyz</span>
            </span>
            <svg viewBox="0 0 1024 1024" className="home-icon34">
              <path d="M250 176l92-90 426 426-426 426-92-90 338-336z"></path>
            </svg>
            <a
              href="http://www.instagram.com/rubysmith.wav"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link3"
            >
              <svg viewBox="0 0 877.7142857142857 1024" className="home-icon36">
                <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/ruby-smith-54b8221a4/"
              target="_blank"
              rel="noreferrer noopener"
              className="home-link4"
            >
              <svg
                viewBox="0 0 877.7142857142857 1024"
                className="home-icon38 GreenHead1"
              >
                <path d="M135.429 808h132v-396.571h-132v396.571zM276 289.143c-0.571-38.857-28.571-68.571-73.714-68.571s-74.857 29.714-74.857 68.571c0 37.714 28.571 68.571 73.143 68.571h0.571c46.286 0 74.857-30.857 74.857-68.571zM610.286 808h132v-227.429c0-121.714-65.143-178.286-152-178.286-70.857 0-102.286 39.429-119.429 66.857h1.143v-57.714h-132s1.714 37.143 0 396.571v0h132v-221.714c0-11.429 0.571-23.429 4-32 9.714-23.429 31.429-48 68-48 47.429 0 66.286 36 66.286 89.714v212zM877.714 237.714v548.571c0 90.857-73.714 164.571-164.571 164.571h-548.571c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571c90.857 0 164.571 73.714 164.571 164.571z"></path>
              </svg>
            </a>
            <span className="home-text962">
              <span className="home-text963">  RUBY SMITH</span>
              <br></br>
              <span>AUDIO ENGINEER</span>
              <br></br>
            </span>
          </div>
        </div>
      </section>
      <div className="home-footer">
        <div className="home-content2">
          <div className="home-bottom">
            <span className="home-text967">
              <span>© 2024 MIXSMITH LLC</span>
              <br></br>
            </span>
            <button data-role="scroll-top" className="home-button button">
              <img alt="image" src="/arrow.svg" className="home-image200" />
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="home-container289">
          <Script
            html={`<script>
document.addEventListener("DOMContentLoaded", function() {
  // get the element with the "scroll-top" data-role
  const scrollTopBtn = document.querySelector('[data-role="scroll-top"]');

  // when the element is clicked
  scrollTopBtn.addEventListener("click", function() {
    // smoothly scroll to the top of the page
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
</script>
`}
          ></Script>
        </div>
      </div>
    </div>
  )
}

export default Home
