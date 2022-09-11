export class JWTHanlding
{

    
    saveJwt(rememberMe: boolean, token: string)
    {
        if(rememberMe)
        {
            localStorage.setItem('token', token);
        }
        
    }
}