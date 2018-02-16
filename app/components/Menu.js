var React = require('react');

export class Menu extends React.Component {

  handleHomeClick() {
    window.open('.', '_self');
  }

  handleProfileClick() {
    $('#menuPopup').modal('toggle');
  }

  handleSettingsClick() {
    $('#menuPopup').modal('toggle');
  }

  handleSitesClick() {
    window.open('http://www.ycombinator.com/', '_blank');
  }

  render() {
    return (
      <div className="row" style={{ padding: '20px' }} >
        <div className="col">
          <h1>Menu</h1>
          <br />
          <h3 className="menu-subtitle" onClick={this.handleHomeClick}>Home</h3>
          <h3 className="menu-subtitle" onClick={this.handleProfileClick}>Profile</h3>
          <h3 className="menu-subtitle" onClick={this.handleSettingsClick}>Settings</h3>
          <h3 className="menu-subtitle" onClick={this.handleSitesClick}>Sites</h3>
        </div>
      </div>
    );
  }

}