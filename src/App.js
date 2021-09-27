import React from 'react';

import './App.css';
import Button from './components/Button';

function App() {
  return (
    <div className="global-container">
      <div className="sidebar">
        <a href="google.com" className="logo"><span>Dev</span>challenges.io</a>
        <nav>
          <ul>
            <li><button>Colors</button></li>
            <li><button>Typography</button></li>
            <li><button>Spaces</button></li>
            <li><button className="actual">Buttons</button></li>
            <li><button>Inputs</button></li>
            <li><button>Grid</button></li>
          </ul>
        </nav>
      </div>
      <div className="content">
        <section className="buttons">
          <h1>Buttons</h1>
          <div className="buttons-wrapper">
            <div className="row">
              <div>
                <p className="button-code">&lt;Button &#47;&gt;</p>
                <Button />
              </div>
              <div>
                <p className="button-code hover">&amp;&#58;hover, &amp;&#58;focus</p>
                <Button hovered />
              </div>
            </div>
            <div className="row">
              <div>
                <p className="button-code">&lt;Button variant="outline" &#47;&gt;</p>
                <Button variant="outline" />
              </div>
              <div>
                <p className="button-code hover">&amp;&#58;hover, &amp;&#58;focus</p>
                <Button variant="outline" hovered />
              </div>
            </div>
            <div className="row">
              <div>
                <p className="button-code">&lt;Button variant="text" &#47;&gt;</p>
                <Button variant="text" />
              </div>
              <div>
                <p className="button-code hover">&amp;&#58;hover, &amp;&#58;focus</p>
                <Button variant="text" hovered />
              </div>
            </div>
            <div className="row">
              <div>
                <p className="button-code">&lt;Button disableShadow &#47;&gt;</p>
                <Button disableShadow />
              </div>
            </div>
            <div className="row">
              <div>
                <p className="button-code">&lt;Button disabled &#47;&gt;</p>
                <Button disabled />
              </div>
              <div>
                <p className="button-code">&lt;Button variant="text" disabled &#47;&gt;</p>
                <Button variant="text" disabled />
              </div>
            </div>
            <div className="row-3">
              <div>
                <p className="button-code">&lt;Button startIcon="local_grocery_store" &#47;&gt;</p>
                <Button startIcon="local_grocery_store" />
              </div>
              <div>
                <p className="button-code">&lt;Button endIcon="local_grocery_store" &#47;&gt;</p>
                <Button endIcon="local_grocery_store" />
              </div>
            </div>
            <div className="row">
              <div>
                <p className="button-code">&lt;Button size="sm" &#47;&gt;</p>
                <Button size="sm" />
              </div>
              <div>
                <p className="button-code">&lt;Button size="md" &#47;&gt;</p>
                <Button size="md" />
              </div>
              <div>
                <p className="button-code">&lt;Button size="lg" &#47;&gt;</p>
                <Button size="lg" />
              </div>
            </div>
            <div className="row">
              <div>
                <p className="button-code">&lt;Button color="default" &#47;&gt;</p>
                <Button color="default" />
              </div>
              <div>
                <p className="button-code">&lt;Button color="primary" &#47;&gt;</p>
                <Button color="primary" />
              </div>
              <div>
                <p className="button-code">&lt;Button color="secondary" &#47;&gt;</p>
                <Button color="secondary" />
              </div>
              <div>
                <p className="button-code">&lt;Button color="danger" &#47;&gt;</p>
                <Button color="danger" />
              </div>
            </div>
            <div className="row">
              <div>
                <p className="button-code hover">&amp;&#58;hover, &amp;&#58;focus</p>
                <Button color="default" hovered/>
              </div>
              <div>
                <p className="button-code hover">&amp;&#58;hover, &amp;&#58;focus</p>
                <Button color="primary" hovered />
              </div>
              <div>
                <p className="button-code hover">&amp;&#58;hover, &amp;&#58;focus</p>
                <Button color="secondary" hovered />
              </div>
              <div>
                <p className="button-code hover">&amp;&#58;hover, &amp;&#58;focus</p>
                <Button color="danger" hovered />
              </div>
            </div>
          </div>
        </section>
        <p className="icons-src">Icons: https://material.io/resources/icons/?style=round</p>
        <footer><p>created by <a href="google.com">username</a> - devChallenges.io</p></footer>
      </div>
    </div>
  );
}

export default App;
