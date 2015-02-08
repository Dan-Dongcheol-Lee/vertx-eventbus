vertx-eventbus
=========

vertx-eventbus polymer web component.

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


### nested ```<register-handler>``` element

Use the list of elements to register eventbus handlers with address respectively and each handler needs to be declared in javascript as above. They are therefore called in ```<vertx-eventbus>``` as registered handlers.

### attributes

**url**: vertx event bus url to access.

**pingIntervalSeconds**: interval seconds to check periodically the server.

**reconnectIntervalSeconds**: interval seconds to try to re-connect to the server after the connection is somehow closed.

**on-open**: Binded function will be called when the connection to the server is open.

**on-close**: Binded function will be called when the connection to the server is somehow close.

**on-error**: Bined function will be called when unexpected error occurs due to wrong configuration.



