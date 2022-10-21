#Integrer et faire fonctionner l'application web
<ol>
    <li>Suivre d'abord les etapes pour intégrer la base de données et la api  https://github.com/MohamedBdeir/medheadDatabase  https://github.com/EmileBK/medhead_api</li>
    <li>Cloner ce repertoire: <code>git clone https://github.com/MohamedBdeir/medhead_angular.git</code> </li>
    <li>Récupérer l'image docker d'un serveur web de votre choix, pour notre cas nous avons utilsé nginx. 
    https://hub.docker.com/_/nginx 
    <code>docker pull nginx </code></li>
    <li>Naviguer au répertoire cloné et créer conteneur à partir de l'image du serveur qui va contenir un volume partagé pour le code 
    <code> docker run -d -p8081:80 --name angular --network NOM_DE_VOTRE_RESEAU -v %cd%:/usr/share/nginx/html nginx</code>
    </li>
    <li>Dans votre navigateur accéder à l'adresse <code>http://127.0.0.1:80801</code> </li>
    <li>Les identifiants du compte Demo: Admin ,  987654321</li>
    
</ol>
