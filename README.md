vertx-eventbus
=========

vertx-eventbus polymer web component.

Just tried to create a web component for vertx eventbus java script and realised that it is great to have the web component instead of javascript codes.
In addition, it supports retry feature when the connection is close so that it will automatically retry to connect to the server by given reconnectIntervalSeconds.

However, this still needs to be more robust.



### How to use ```<vertx-eventbus>```?

```html
<vertx-eventbus id="eventBus"
                url="http://localhost:8090"
                pingIntervalSeconds="20"
                reconnectIntervalSeconds="10"
                on-open="{{onOpen}}"
                on-close="{{onClose}}"
                on-error="{{onError}}">
    <register-handler address="address1" handler="{{handler1}}"></register-handler>
    <register-handler address="address2" handler="{{handler2}}"></register-handler>
</vertx-eventbus>
```
```javascript
  handler1: function(data) {
      console.log('register handler1 to address1');
  },

  handler2: function(data) {
      console.log('register handler2 to address2');
  },
  
  onOpen: function() {
    console.log('Connection is open.');
  },

  onClose: function() {
    console.log('Connection is close');
  },

  onError: function() {
    console.log('Unexpected error occurred.');
  },
  ...
```

### attributes of ```<vertx-eventbus>```

**url**: vertx event bus url to access.

**pingIntervalSeconds**: interval seconds to check periodically the server.

**reconnectIntervalSeconds**: interval seconds to try to re-connect to the server after the connection is somehow closed.

**on-open**: Binded function will be called when the connection to the server is open.

**on-close**: Binded function will be called when the connection to the server is somehow close.

**on-error**: Bined function will be called when unexpected error occurs due to wrong configuration.


### nested ```<register-handler>```

Use the list of these elements to register eventbus handlers with addresses and each handler needs to be respectively declared in javascript as above. They are therefore called in ```<vertx-eventbus>``` when registering the handlers to event bus.

### attributes of ```<register-handler>```

**address**: String of address to listen to.

**handler**: Function of a message handler for the specific address and it will get invoked when the message comes into the address.

