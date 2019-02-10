var Contacts = React.createClass({
  propTypes: {
    items: React.PropTypes.array.isRequired,
  },

  render: function() {
    var contacts = this.props.items.map(function(contact) {
      return (
        <div className = {Contact}>
          {item: contact, key: contact.id}
        </div>
      );
    });

    return (
      <ul className = "contactList"> {contacts}</ul>
    );
  }
});