const SNES = () => {
    return (
        <div class="container">
      <div class="bumper bumper--left"></div>
      <div class="bumper bumper--right"></div>
      <div class="controller">
        <div class="left-pad">
          <div class="dpad">
            <div class="dpad__button button--vertical">
              <div class="dpad__arrow arrow--top"></div>
              <div class="dpad__arrow arrow--bottom"></div>
            </div>
            <div class="dpad__button button--horizontal">
              <div class="dpad__center">
                <div class="dpad__circle"></div>
              </div>
              <div class="dpad__arrow arrow--left"></div>
              <div class="dpad__arrow arrow--right"></div>
            </div>
          </div>
        </div>
        <div class="middle-pad">
          <div class="logo">
            <h1 class="logo__header">GAME TRACKER</h1>
            <h2 class="logo__byline">FOR COLLECTORS</h2>
          </div>
          <div class="start-select">
            <div class="start-select__button button--start">
              <div class="start-select__interior"></div>
            </div>
            <div class="start-select__button button--select">
              <div class="start-select__interior"></div>
            </div>
          </div>
        </div>
        <div class="right-pad">
          <div class="right-controls">
            <div class="right-controls__circle"></div>
            <div class="button-group button-group--top">
              <div class="button-group__button button--x"></div>
              <div class="button-group__button button--y"></div>
            </div>
            <div class="button-group button-group--bottom">
              <div class="button-group__button button--a"></div>
              <div class="button-group__button button--b"></div>
            </div>
          </div>
        </div>
      </div>
    </div>    
    );
  };

  export default SNES
            
            
            
            
            
            
            
            
            
            