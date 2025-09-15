1. Création du projet de base
2. Ajout de notre compte dans docker
3. Création du notre serveur de base de données
    docker run --name 5D4 -p 27017:27017 -d mongo



mongodb://[username:password@]host1[:port1]
.env
ENV=development
PORT=3000
DATABASE=mongodb://localhost/5d4
JWT_TOKEN_SECRET=A1yqDTyFAc5l3d5vIo
JWT_REFRESH_SECRET=KeOPlrOvr5ZYcG1CDj
JWT_TOKEN_LIFE=30m
JWT_REFRESH_LIFE=1d

    https://www.vinaysahni.com/best-practices-for-a-pragmatic-restful-api#restful
    https://restful-api-design.readthedocs.io/en/latest/methods.html

    https://www.javainuse.com/jwtgenerator


https://curity.medium.com/best-practices-for-storing-access-tokens-in-the-browser-6b3d515d9814

https://auth0.com/blog/refresh-tokens-what-are-they-and-when-to-use-them/
https://www.descope.com/blog/post/refresh-token-rotation
https://medium.com/@shwetakoffficiall/access-token-and-refresh-token-in-authentication-and-auth-in-simple-way-d5ac44a9750f
https://dev.to/zenstok/how-to-implement-refresh-tokens-with-token-rotation-in-nestjs-1deg
https://blog.logrocket.com/jwt-authentication-best-practices/#:~:text=To%20reiterate%2C%20whatever%20you%20do,JWTs%20inside%20an%20HttpOnly%20cookie.