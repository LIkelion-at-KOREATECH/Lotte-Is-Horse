from channels.auth import AuthMiddlewareStack # AuthMiddlewareStack
from channels.routing import ProtocolTypeRouter, URLRouter # add URLRouter
import appChat.routing # appChat.routing

application = ProtocolTypeRouter({
    # (http->django views is added by default)
    'websocket': AuthMiddlewareStack(
        URLRouter(
            appChat.routing.websocket_urlpatterns
        )
    )
})